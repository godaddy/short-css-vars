const styles = `
:root {
  --custom-var-one: blue;
  --custom-var-two: green;
}

.my-class {
  color: var(--custom-var-one, var(--custom-var-one-fallback, blue));
  background-color: var(--custom-var-two, var(--custom-var-two-fallback, green));
}
`;
