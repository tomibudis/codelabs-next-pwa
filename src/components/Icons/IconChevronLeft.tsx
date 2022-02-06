import React from "react";

interface IconChevronLeft {
  size?: number;
}

const IconChevronLeft: React.FC<IconChevronLeft> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.341 4.247a1 1 0 0 1 1.407 1.417l-.09.089-7.14 6.246 7.14 6.248a1 1 0 0 1 .171 1.312l-.076.1a1 1 0 0 1-1.312.17l-.1-.076-8-7a1 1 0 0 1-.09-1.416l.09-.09 8-7z"
      fill="#2E2E2E"
      fillRule="evenodd"
    />
  </svg>
);

export default IconChevronLeft;
