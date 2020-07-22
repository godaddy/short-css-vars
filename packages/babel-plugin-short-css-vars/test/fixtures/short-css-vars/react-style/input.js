function Component() {
  return <div>
    <div style={{
      color: 'var(--custom-var-one)'
    }}>Well hello</div>
    <div style='color:var(--custom-var-two)'>Well hello</div>
  </div>;
}

function ComponentNested() {
  return <div>
    <div style={{
      color: 'var(--custom-var-one, var(--custom-var-one-fallback, blue))'
    }}>Well hello</div>
    <div style='color:var(--custom-var-two, var(--custom-var-two-fallback, green))'>Well hello</div>
  </div>;
}
