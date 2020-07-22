const styles = `
:root {
  --16e1ro7: blue;
  --custom-var-two: green;
}

.my-class {
  color: var(--16e1ro7, var(--xnsut2, blue));
  background-color: var(--custom-var-two, var(--custom-var-two-fallback, green));
}
`;
