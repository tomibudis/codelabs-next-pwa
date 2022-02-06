import React from "react";

interface IconLockProps {
  size?: number;
}

const IconLock: React.FC<IconLockProps> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5a4 4 0 0 1 3.995 3.8L16 9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3 4 4 0 0 1 4-4zm4 6H8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-4 2a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1l.007-.117A1 1 0 0 1 12 13zm0-6a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z"
      fill="#34495E"
      fillRule="evenodd"
    />
  </svg>
);

export default IconLock;
