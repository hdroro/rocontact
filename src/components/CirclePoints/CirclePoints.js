export const CirclePoints = ({ dots, marked }) => {
  const rotate = 360 / dots;
  const points = [];
  const percent = Math.floor((dots * marked) / 100);
  for (let i = 0; i < dots; i++) {
    const className = i < percent ? "points marked" : "points";
    points.push(
      <div
        className={className}
        style={{ "--i": i, "--rot": rotate + "deg" }}
        key={i}
      ></div>
    );
  }
  return points;
};
