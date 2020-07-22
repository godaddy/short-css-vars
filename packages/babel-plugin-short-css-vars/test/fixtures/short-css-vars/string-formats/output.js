const simpleRef = "color: var(--16e1ro7);";
const nestedRef = "color: var(--16e1ro7, var(--xnsut2, blue));";
const multipleRef = "color: var(--16e1ro7);background-color: var(--1tn4ykf);";
const multipleNestedRef = "color: var(--16e1ro7, var(--xnsut2, blue));background-color: var(--1tn4ykf, var(--1d71tge, green));";
const multilineRef = "color: var(--16e1ro7);\nbackground-color: var(--1tn4ykf);";
const multilineNestedRef = "color: var(--16e1ro7, var(--xnsut2, blue));\nbackground-color: var(--1tn4ykf, var(--1d71tge, green));";
const templateRef = `
  color: var(--16e1ro7);
  background-color: var(--1tn4ykf);
`;
const templateNestedRef = `
  color: var(--16e1ro7, var(--xnsut2, blue));
  background-color: var(--1tn4ykf, var(--1d71tge, green));
`;
const templateFormattedRef = `
  color:            var(--16e1ro7);
  background-color: var(--1tn4ykf);
  border-color:     var(--16e1ro7, var(--xnsut2, blue));
`;
const simpleDef = "--16e1ro7: blue;";
const multipleDef = "--16e1ro7: blue; --1tn4ykf: green;";
const multilineDef = "--16e1ro7: blue;\n--1tn4ykf: green;";
const templateDef = `
  --16e1ro7: blue;
  --1tn4ykf: green;
`;
const templateFormattedDef = `
  --16e1ro7:           blue;
  --1tn4ykf:           green;
  --xnsut2:  yellow;
  --16e1ro7            : blue;
  --1tn4ykf            : green;
  --xnsut2   : yellow;
`;
const simpleMixed = "--16e1ro7: blue;color: var(--16e1ro7);";
const nestedMixed = "--16e1ro7: blue;color: var(--16e1ro7, var(--xnsut2, blue));";
const multipleMixed = "--16e1ro7: blue;color: var(--16e1ro7);background-color: var(--1tn4ykf);";
const multipleNestedMixed = "--16e1ro7: blue;--1tn4ykf: green;color: var(--16e1ro7, var(--xnsut2, blue));background-color: var(--1tn4ykf, var(--1d71tge, green));";
const multilineMixed = "--16e1ro7: blue;\ncolor: var(--16e1ro7);\n--1tn4ykf: green;\nbackground-color: var(--1tn4ykf);";
const multilineNestedMixed = "--16e1ro7: blue;\ncolor: var(--16e1ro7, var(--xnsut2, blue));\n--1tn4ykf: green;\nbackground-color: var(--1tn4ykf, var(--1d71tge, green));";
const templateMixed = `
  --16e1ro7: blue;
  --1tn4ykf: green;
  color: var(--16e1ro7);
  background-color: var(--1tn4ykf);
`;
const templateNestedMixed = `
  --16e1ro7: blue;
  --1tn4ykf: green;
  color: var(--16e1ro7, var(--xnsut2, blue));
  background-color: var(--1tn4ykf, var(--1d71tge, green));
`;
const templateFormattedMixed = `
  --16e1ro7:     blue;
  --1tn4ykf:     green;
  --16e1ro7      : blue;
  --1tn4ykf      : green;
  color:                var(--16e1ro7);
  background-color:     var(--1tn4ykf);
  border-color:         var(--16e1ro7, var(--xnsut2, blue));
`;
