import React from "react";

import MENU from "#constants/menu";
import { MenuStyled } from "./Sidebar.styled";

interface SidebarProps {
  menu?: typeof MENU;
}

const Sidebar: React.FC<SidebarProps> = ({ menu = MENU }) => {
  return (
    <div
      className="d-flex bg-secondary text-light flex-column"
      style={{ minWidth: "280px" }}
    >
      {menu.map((data, index) => {
        return (
          <div key={index}>
            <MenuStyled
              isActive={false}
              className="d-flex align-items-center mx-3 my-1 p-3"
            >
              {data.icon}
              <span className="ms-2">{data.label}</span>
            </MenuStyled>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
