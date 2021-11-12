export default function ScrollSection(props) {
  const count = props.count;
  const sections = [];
  for (let i = 1; i <= count; i++) sections.push(i);
  return (
    <div className="scrollSection hidden">
      <ul>
        {sections.map((s, i) => {
          return (
            <li key={i}>
              <div className="cBorder">
                <div className="circle"></div>
              </div>
              <div className="number">{s}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
