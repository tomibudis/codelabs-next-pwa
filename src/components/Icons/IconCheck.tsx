import React from "react";

interface IconCheckProps {
  size?: number;
}

const IconCheck: React.FC<IconCheckProps> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m7 12 3.992 3.992L18.985 8"
      stroke="#2E2E2E"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconCheck;
