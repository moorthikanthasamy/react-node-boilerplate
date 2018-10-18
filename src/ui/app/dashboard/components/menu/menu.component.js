import React from "react";
import Menu from "antd/lib/menu";

const MenuComponent = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
      <Menu.Item key="1">
        {/* <Icon type="user" /> */}
        <span className="nav-text">AES Enc/Dec</span>
      </Menu.Item>
      <Menu.Item key="2">
        {/* <Icon type="video-camera" /> */}
        <span className="nav-text">MD5</span>
      </Menu.Item>
      <Menu.Item key="3">
        {/* <Icon type="upload" /> */}
        <span className="nav-text">Redis</span>
      </Menu.Item>
    </Menu>
  );
};
export default MenuComponent;
