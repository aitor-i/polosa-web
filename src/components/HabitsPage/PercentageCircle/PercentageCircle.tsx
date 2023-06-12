import { FaBeer } from "react-icons/fa";

import styles from "./PercentageCircle.module.css";

interface Props {
  percentage: number;
  size?: "SMALL" | "MEDIUM" | "BIG";
  shape?: "REGULAR" | "SLIM";
}

export function PercentageCircle({
  percentage,
  size = "MEDIUM",
  shape = "REGULAR",
}: Props) {
  let radius = 75; // radius of the circle
  let svgSize = "200";
  let coord = "100";
  let strokeWidth = "15";
  let fontSize = "24px";
  let innerWith = "15";

  if (shape === "SLIM") innerWith = "10";

  switch (size) {
    case "SMALL":
      radius = 50;
      svgSize = "175";
      strokeWidth = "10";
      coord = "90";
      fontSize = "15px";
      innerWith = "10";

      break;

    case "BIG":
      radius = 150;
      svgSize = "500";
      coord = "250";
      fontSize = "32";
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
        strokeWidth={innerWith} // thickness of the completion
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <foreignObject
        x={0}
        y={0}
        width={svgSize}
        height={svgSize}
        dominantBaseline="central"
        textAnchor="middle"
        style={{
          fontSize: fontSize,
        }}
        className={styles.innerObject}
      >
        <div className={styles.container}>
          <FaBeer className={styles.icon} />
          <p>5/10</p>
        </div>
      </foreignObject>
    </svg>
  );
}
