import React from "react";

interface IconEnvelopeProps {
  size?: number;
  color?: string;
}

const IconEnvelope: React.FC<IconEnvelopeProps> = ({
  size = 24,
  color = "#2E2E2E",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm1 3.228-6.419 4.586a1 1 0 0 1-1.055.067l-.107-.067L5 8.229V16a1 1 0 0 0 .883.993L6 17h12a1 1 0 0 0 1-1V8.228zM17.279 7H6.721L12 10.771 17.279 7z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
);

export default IconEnvelope;
