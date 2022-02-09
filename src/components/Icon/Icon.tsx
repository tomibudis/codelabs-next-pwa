import React from "react";
import Image from "next/image";

import { IconProps } from "#types/typings";

const Icon: React.FC<IconProps> = ({ name }) => {
  const directoryPath = "/icons/";
  const src = directoryPath + name + ".svg";

  return <Image src={src} alt={name} width={24} height={24} />;
};

export default Icon;
