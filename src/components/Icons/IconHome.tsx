import React from "react";

import { IconCheckProps } from "#types/typings";

const IconHome: React.FC<IconCheckProps> = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m13.02 4.509.142.092 6 4.286a2 2 0 0 1 .832 1.467l.006.16V19a1 1 0 0 1-1.993.117L18 19v-8.485l-6-4.286-6 4.286V19a1 1 0 0 1-1.993.117L4 19v-8.485a2 2 0 0 1 .71-1.53l.128-.098 6-4.286a2 2 0 0 1 2.182-.092zM12 11a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2z"
        fill="#F7F0F0"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default IconHome;
