interface Props {
  percentage: number;
  size?: "SMALL" | "MEDIUM" | "BIG";
}

export function PercentageCircle({ percentage, size = "MEDIUM" }: Props) {
  let radius = 75; // radius of the circle
  let svgSize = "200";
  let thickness = "15";
  let coord = "100";

  switch (size) {
    case "SMALL":
      radius = 50;
      svgSize = "175";
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
        stroke="#e5e5e5" // color of the circle outline
        strokeWidth="15" // thickness of the circle outline
      />
      <circle
        r={radius}
        cx={coord}
        cy={coord}
        fill="transparent"
        stroke="#ff5722" // color of the completion
        strokeWidth="15" // thickness of the completion
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
}
