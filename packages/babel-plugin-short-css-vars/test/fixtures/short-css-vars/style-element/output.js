let sheet = document.createElement('style');
sheet.innerHTML = `
:root {
  --16e1ro7: ${'blue'};
  --xnsut2: green;
  --1tn4ykf: red;
  --1d71tge: purple;
}
`;
sheet.innerHTML += "span { color:var(--1tn4ykf, var(--1d71tge, green)) }";
sheet.innerHTML += `
p { 
  color: var(--1tn4ykf, var(--1d71tge, green));
  background-color: 
}`;
let div = document.createElement('div');
div.style.cssText = "color: var(--16e1ro7); border: 1px solid var(--16e1ro7);";
div.setAttribute("style", "color:var(--1tn4ykf); border: 1px solid var(--1tn4ykf);");
div.style.color = "var(--16e1ro7)";
document.body.appendChild(sheet);
document.body.appendChild(div);
