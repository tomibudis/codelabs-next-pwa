import React from "react";

import { IconHome } from "#components/Icons";

interface MenuCollection {
  label: string;
  link: string;
  icon: React.ReactNode | null;
  badge: number | null;
}

const MENU: MenuCollection[] = [
  {
    label: "Beranda",
    link: "/homepage",
    icon: React.createElement(IconHome),
    badge: null,
  },
  {
    label: "Input Data Potensi",
    link: "/input-potential-data",
    icon: null,
    badge: null,
  },
];

export default MENU;
