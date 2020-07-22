const simpleRef = "color: var(--custom-var-one);";
const nestedRef = "color: var(--custom-var-one, var(--custom-var-one-fallback, blue));";
const multipleRef = "color: var(--custom-var-one);background-color: var(--custom-var-two);";
const multipleNestedRef = "color: var(--custom-var-one, var(--custom-var-one-fallback, blue));background-color: var(--custom-var-two, var(--custom-var-two-fallback, green));";
const multilineRef = "color: var(--custom-var-one);\nbackground-color: var(--custom-var-two);";
const multilineNestedRef = "color: var(--custom-var-one, var(--custom-var-one-fallback, blue));\nbackground-color: var(--custom-var-two, var(--custom-var-two-fallback, green));";
const templateRef = `
  color: var(--custom-var-one);
  background-color: var(--custom-var-two);
`;
const templateNestedRef = `
  color: var(--custom-var-one, var(--custom-var-one-fallback, blue));
  background-color: var(--custom-var-two, var(--custom-var-two-fallback, green));
`;
const templateFormattedRef = `
  color:            var(--custom-var-one);
  background-color: var(--custom-var-two);
  border-color:     var(--custom-var-one, var(--custom-var-one-fallback, blue));
`;
const simpleDef = "--custom-var-one: blue;";
const multipleDef = "--custom-var-one: blue; --custom-var-two: green;";
const multilineDef = "--custom-var-one: blue;\n--custom-var-two: green;";
const templateDef = `
  --custom-var-one: blue;
  --custom-var-two: green;
`;
const templateFormattedDef = `
  --custom-var-one:           blue;
  --custom-var-two:           green;
  --custom-var-one-fallback:  yellow;
  --custom-var-one            : blue;
  --custom-var-two            : green;
  --custom-var-one-fallback   : yellow;
`;
const simpleMixed = "--custom-var-one: blue;color: var(--custom-var-one);";
const nestedMixed = "--custom-var-one: blue;color: var(--custom-var-one, var(--custom-var-one-fallback, blue));";
const multipleMixed = "--custom-var-one: blue;color: var(--custom-var-one);background-color: var(--custom-var-two);";
const multipleNestedMixed = "--custom-var-one: blue;--custom-var-two: green;color: var(--custom-var-one, var(--custom-var-one-fallback, blue));background-color: var(--custom-var-two, var(--custom-var-two-fallback, green));";
const multilineMixed = "--custom-var-one: blue;\ncolor: var(--custom-var-one);\n--custom-var-two: green;\nbackground-color: var(--custom-var-two);";
const multilineNestedMixed = "--custom-var-one: blue;\ncolor: var(--custom-var-one, var(--custom-var-one-fallback, blue));\n--custom-var-two: green;\nbackground-color: var(--custom-var-two, var(--custom-var-two-fallback, green));";
const templateMixed = `
  --custom-var-one: blue;
  --custom-var-two: green;
  color: var(--custom-var-one);
  background-color: var(--custom-var-two);
`;
const templateNestedMixed = `
  --custom-var-one: blue;
  --custom-var-two: green;
  color: var(--custom-var-one, var(--custom-var-one-fallback, blue));
  background-color: var(--custom-var-two, var(--custom-var-two-fallback, green));
`;
const templateFormattedMixed = `
  --custom-var-one:     blue;
  --custom-var-two:     green;
  --custom-var-one      : blue;
  --custom-var-two      : green;
  color:                var(--custom-var-one);
  background-color:     var(--custom-var-two);
  border-color:         var(--custom-var-one, var(--custom-var-one-fallback, blue));
`;
