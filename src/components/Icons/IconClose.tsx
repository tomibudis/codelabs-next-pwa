import React from "react";

interface IconCloseProps {
  size?: number;
}

const IconClose: React.FC<IconCloseProps> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.97 6.657a1 1 0 0 1 0 1.414l-4.242 4.241 4.243 4.244a1 1 0 0 1 .077 1.327l-.077.088a1 1 0 0 1-1.415 0l-4.243-4.244-4.242 4.244a1 1 0 0 1-1.327.077l-.087-.077a1 1 0 0 1 0-1.415l4.242-4.243-4.242-4.242a1 1 0 0 1-.078-1.327l.078-.087a1 1 0 0 1 1.414 0l4.242 4.242 4.243-4.242a1 1 0 0 1 1.327-.078z"
      fill="#2E2E2E"
      fillRule="evenodd"
    />
  </svg>
);

export default IconClose;
