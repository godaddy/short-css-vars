function Component() {
  return <div>
    <div style={{
      color: "var(--16e1ro7)"
    }}>Well hello</div>
    <div style="color:var(--1tn4ykf)">Well hello</div>
  </div>;
}

function ComponentNested() {
  return <div>
    <div style={{
      color: "var(--16e1ro7, var(--xnsut2, blue))"
    }}>Well hello</div>
    <div style="color:var(--1tn4ykf, var(--1d71tge, green))">Well hello</div>
  </div>;
}
