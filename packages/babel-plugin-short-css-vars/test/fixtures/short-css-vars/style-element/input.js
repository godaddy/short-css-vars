let sheet = document.createElement('style');

sheet.innerHTML = `
:root {
  --custom-var-one: ${'blue'};
  --custom-var-one-fallback: green;
  --custom-var-two: red;
  --custom-var-two-fallback: purple;
}
`;
sheet.innerHTML += "span { color:var(--custom-var-two, var(--custom-var-two-fallback, green)) }";
sheet.innerHTML += `
p { 
  color: var(--custom-var-two, var(--custom-var-two-fallback, green));
  background-color: 
}`;

let div = document.createElement('div');
div.style.cssText = "color: var(--custom-var-one); border: 1px solid var(--custom-var-one);";
div.setAttribute("style", "color:var(--custom-var-two); border: 1px solid var(--custom-var-two);");
div.style.color = "var(--custom-var-one)";

document.body.appendChild(sheet);
document.body.appendChild(div);
