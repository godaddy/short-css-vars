const styled = {};

css = styled.button = f => f;

const globals = css`
:root {
  --custom-var-one: blue;
  --custom-var-one-fallback: green;
  --custom-var-two: red;
  --custom-var-two-fallback: purple;
}
`;
const Button = styled.button`
  background: var(--custom-var-one, var(--custom-var-one-fallback, transparent));
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
  props.primary &&
  css`
      background: color: var(--custom-var-two, var(--custom-var-two-fallback, palevioletred));
      color: white;
    `};
`;
