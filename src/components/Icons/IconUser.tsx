import React from "react";

interface IconUserProps {
  size?: number;
}

const IconUser: React.FC<IconUserProps> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 14c3.45 0 6.11 1.52 7.862 4.492a1 1 0 0 1-.748 1.502L19 20H5a1 1 0 0 1-.862-1.508C5.89 15.521 8.55 14 12 14zm0 2c-1.948 0-3.524.579-4.773 1.76l-.24.24h10.025l-.034-.037c-1.147-1.182-2.585-1.822-4.352-1.942l-.335-.017L12 16zm0-13a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
      fill="#34495E"
      fillRule="evenodd"
    />
  </svg>
);

export default IconUser;
