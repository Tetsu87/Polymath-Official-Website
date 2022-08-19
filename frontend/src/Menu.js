import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Menu.css";

export default (props) => {
    
    
  return (
    <Menu {...props}>
      <a href="#home" className="menu-item">
        Home
      </a>
      <a href="#team" className="menu-item">
        Team
      </a>
      <a href="#value" className="menu-item">
        Value
      </a>
      <a href="#achievements" className="menu-item">
        Achievements
      </a>
      <a href="#contact" className="menu-item">
        Contacts
      </a>
      <a href="#social" className="menu-item">
        Social
      </a>

    </Menu>
  );
};
