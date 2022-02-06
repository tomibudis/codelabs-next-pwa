import React from "react";

interface IconChevronBottom {
  size?: number;
}

const IconChevronBottom: React.FC<IconChevronBottom> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.247 8.659a1 1 0 0 1 1.417-1.407l.089.09 6.246 7.14 6.248-7.14a1 1 0 0 1 1.312-.171l.1.076a1 1 0 0 1 .17 1.312l-.076.1-7 8a1 1 0 0 1-1.416.09l-.09-.09-7-8z"
      fill="#2E2E2E"
      fillRule="evenodd"
    />
  </svg>
);

export default IconChevronBottom;
