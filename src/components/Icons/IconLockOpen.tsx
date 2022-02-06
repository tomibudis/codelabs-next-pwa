import React from "react";

interface IconLockOpenProps {
  size?: number;
}

const IconLockOpen: React.FC<IconLockOpenProps> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4c1.15 0 2.223.49 2.976 1.328a1 1 0 1 1-1.488 1.336 2 2 0 0 0-3.483 1.187L10 8v1h6a3 3 0 0 1 2.995 2.824L19 12v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3V8a4 4 0 0 1 4-4zm4 7H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-4 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      fill="#34495E"
      fillRule="evenodd"
    />
  </svg>
);

export default IconLockOpen;
