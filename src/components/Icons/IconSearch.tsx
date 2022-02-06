import React from "react";

interface IconSearchProps {
  size?: number;
}

const IconSearch: React.FC<IconSearchProps> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 4a7 7 0 0 1 5.473 11.365l4.297 4.297a.784.784 0 0 1-1.108 1.108l-4.297-4.297A7 7 0 1 1 11 4zm0 1.647a5.353 5.353 0 1 0 0 10.706 5.353 5.353 0 0 0 0-10.706z"
      fill="#34495E"
      fillRule="evenodd"
    />
  </svg>
);

export default IconSearch;
