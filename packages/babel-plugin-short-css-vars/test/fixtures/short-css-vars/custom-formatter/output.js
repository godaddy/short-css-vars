const styles = `
:root {
  --eno-rav-motsuc: blue;
  --owt-rav-motsuc: green;
}

.my-class {
  color: var(--eno-rav-motsuc, var(--kcabllaf-eno-rav-motsuc, blue));
  background-color: var(--owt-rav-motsuc, var(--kcabllaf-owt-rav-motsuc, green));
}
`;
