const assume = require('assume');
const ShortCssVars = require('./');


describe('ShortCssVars', () => {

  describe('.replaceCss', () => {

    function run(input, options) {
      const p = new ShortCssVars(options);
      return p.replaceCss(input);
    }

    it('replaces variable declarations', () => {
      const input = `:root {
  --custom-var-one: red;
  --custom-var-two_EXTRA_1234: 1.2rem;
}`;
      const expected = `:root {
  --16e1ro7: red;
  --1ytrgxt: 1.2rem;
}`;
      const result = run(input);
      assume(result).equals(expected);
    });

    it('replaces variable declarations (compressed)', () => {
      const input = ':root{--custom-var-one:red;--custom-var-two_EXTRA_1234:1.2rem}';
      const expected = ':root{--16e1ro7:red;--1ytrgxt:1.2rem}';
      const result = run(input);
      assume(result).equals(expected);
    });

    it('replaces variable declarations (selectors)', () => {
      const input = `.my-class {
  --custom-var-one: red;
  --custom-var-two_EXTRA_1234: 1.2rem;
}`;
      const expected = `.my-class {
  --16e1ro7: red;
  --1ytrgxt: 1.2rem;
}`;
      const result = run(input);
      assume(result).equals(expected);
    });

    it('replaces variable references', () => {
      const input = `.my-class {
  color: var(--custom-var-one, red);
  line-height: var(--custom-var-two_EXTRA_1234);
}`;
      const expected = `.my-class {
  color: var(--16e1ro7, red);
  line-height: var(--1ytrgxt);
}`;
      const result = run(input);
      assume(result).equals(expected);
    });

    it('replaces variable references (compressed)', () => {
      const input = '.my-class{color:var(--custom-var-one,red);line-height:var(--custom-var-two_EXTRA_1234)}';
      const expected = '.my-class{color:var(--16e1ro7,red);line-height:var(--1ytrgxt)}';
      const result = run(input);
      assume(result).equals(expected);
    });

    it('replaces fallback variable references', () => {
      const input = '.my-class{ color: var(--custom-var-one, var(--custom-var-two, red))}';
      const expected = '.my-class{ color: var(--16e1ro7, var(--1tn4ykf, red))}';
      const result = run(input);
      assume(result).equals(expected);
    });

    describe('ignore', () => {
      it('ignores variable names via string', () => {
        const input = ':root{--custom-var-one: red; --custom-var-two: 1.2rem}' +
          '.my-class{ color: var(--custom-var-one, var(--custom-var-two))}';
        const expected = ':root{--custom-var-one: red; --1tn4ykf: 1.2rem}' +
          '.my-class{ color: var(--custom-var-one, var(--1tn4ykf))}';
        const result = run(input, { ignore: '^.+-one' });
        assume(result).equals(expected);
      });

      it('ignores variable names via RegExp', () => {
        const input = ':root{--custom-var-one: red; --custom-var-two: 1.2rem}' +
          '.my-class{ color: var(--custom-var-one, var(--custom-var-two))}';
        const expected = ':root{--custom-var-one: red; --1tn4ykf: 1.2rem}' +
          '.my-class{ color: var(--custom-var-one, var(--1tn4ykf))}';
        const result = run(input, { ignore: /^.+-one/ });
        assume(result).equals(expected);
      });

      it('ignores variable names via function', () => {
        const input = ':root{--one: red; --custom-var-two: 1.2rem}' +
          '.my-class{ color: var(--one, var(--custom-var-two))}';
        const expected = ':root{--one: red; --1tn4ykf: 1.2rem}' +
          '.my-class{ color: var(--one, var(--1tn4ykf))}';
        const result = run(input, { ignore: name => name.length <= 4 });
        assume(result).equals(expected);
      });

      it('throws if invalid type', () => {
        const input = ':root{--one: red; --custom-var-two: 1.2rem}' +
          '.my-class{ color: var(--one, var(--custom-var-two))}';
        assume(() => run(input, { ignore: true }))
          .throws('\'ignore\' must be of type function, RegExp, or string. Received boolean');
        assume(() => run(input, { ignore: {} }))
          .throws('\'ignore\' must be of type function, RegExp, or string. Received object');
      });
    });

    describe('formatter', () => {
      it('customize format of css var name', () => {
        const input = ':root{--custom-var-one: red; --custom-var-two: 1.2rem}' +
          '.my-class{ color: var(--custom-var-one, var(--custom-var-two))}';
        const expected = ':root{--eno-rav-motsuc: red; --owt-rav-motsuc: 1.2rem}' +
          '.my-class{ color: var(--eno-rav-motsuc, var(--owt-rav-motsuc))}';
        const result = run(input, { formatter: name => name.split('').reverse().join('') });
        assume(result).equals(expected);
      });
    });

    describe('collisions', () => {
      it('throws if collisions found', () => {
        let input = ':root{--deerstalkers: orange; --anticipant: purple}';
        assume(() => run(input)).throws("Short name '1bxh9yu' for 'anticipant' is already used for 'deerstalkers'");

        input = '.my-class{ color: var(--hematodynamics, var(--chemurgies))}';
        assume(() => run(input)).throws("Short name 'vapagp' for 'hematodynamics' is already used for 'chemurgies'");
      });
    });
  });

  describe('.replaceName', () => {
    it('replaces name of variable', () => {
      const input = '--custom-var-one';
      const expected = '--16e1ro7';
      const instance = new ShortCssVars();
      const result = instance.replaceName(input);
      assume(result).equals(expected);
    });

    it('only replaces names with -- prefix', () => {
      const input = 'custom-var-one';
      const instance = new ShortCssVars();
      const result = instance.replaceName(input);
      assume(result).equals(input);
    });

    describe('collisions', () => {
      it('throws if collisions found', () => {
        const instance = new ShortCssVars();
        instance.replaceName('--deerstalkers');
        assume(() => instance.replaceName('--anticipant'))
          .throws("Short name '1bxh9yu' for 'anticipant' is already used for 'deerstalkers'");
      });
    });
  });

  describe('.getMap', () => {
    it('returns object mapping original to short names', () => {
      const input = '.my-class{ color: var(--custom-var-one, var(--custom-var-two, red))}';
      const instance = new ShortCssVars();
      instance.replaceCss(input);
      assume(instance.getMap()).eqls({
        'custom-var-one': '16e1ro7',
        'custom-var-two': '1tn4ykf'
      });
    });
  });
});
