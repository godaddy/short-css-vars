const styled = {};

css = styled.button = f => f;

const globals = css`
:root {
  --16e1ro7: blue;
  --xnsut2: green;
  --1tn4ykf: red;
  --1d71tge: purple;
}
`;
const Button = styled.button`
  background: var(--16e1ro7, var(--xnsut2, transparent));
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
      background: color: var(--1tn4ykf, var(--1d71tge, palevioletred));
      color: white;
    `};
`;
