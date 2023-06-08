import styles from "./PercentageCircle.module.css";
interface Props {
  percentage: number;
  size?: "SMALL" | "MEDIUM" | "BIG";
}

export function PercentageCircle({ percentage, size = "MEDIUM" }: Props) {
  let radius = 75; // radius of the circle
  let svgSize = "200";
  let thickness = "15";
  let coord = "100";
  let strokeWidth = "15";

  switch (size) {
    case "SMALL":
      radius = 50;
      svgSize = "175";
      strokeWidth = "10";
      coord = "90";

      break;

    case "BIG":
      radius = 150;
      svgSize = "500";
      coord = "250";
      break;

    default:
      break;
  }

  const circumference = 2 * Math.PI * radius; // circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // offset to show completion

  return (
    <svg width={svgSize} height={svgSize}>
      <circle
        r={radius}
        cx={coord}
        cy={coord}
        fill="transparent"
        stroke="#c7c7cc" // color of the circle outline
        strokeWidth={strokeWidth} // thickness of the circle outline
      />
      <circle
        className={styles.progressCircle}
        r={radius}
        cx={coord}
        cy={coord}
        fill="transparent"
        stroke=" #ff9500" // color of the completion
        strokeWidth={strokeWidth} // thickness of the completion
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <foreignObject
        x={coord}
        y={coord}
        width="100"
        height="100"
        dominantBaseline="central"
        textAnchor="middle"
      >
        <p>Aitor</p>
      </foreignObject>
    </svg>
  );
}
