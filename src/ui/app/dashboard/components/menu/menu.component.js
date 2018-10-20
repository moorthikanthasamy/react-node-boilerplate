import React from "react";
import Menu from "antd/lib/menu";
import { showComponent } from "../../store/actionCreators/menu_ac";
import { connect } from "react-redux";
class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.changeMenu = this.changeMenu.bind(this);
  }
  changeMenu(compName) {
    this.props.dispatch(showComponent(compName));
  }

  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1" onClick={() => this.changeMenu("AES")}>
          {/* <Icon type="user" /> */}
          <span className="nav-text">AES Enc/Dec</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => this.changeMenu("MD5")}>
          {/* <Icon type="video-camera" /> */}
          <span className="nav-text">MD5</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => this.changeMenu("REDIS")}>
          {/* <Icon type="upload" /> */}
          <span className="nav-text">Redis</span>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToDispatch = dispatch => {
  return {
    changeComponent: compName => dispatch(showComponent(compName))
  };
};

export default connect(mapStateToDispatch)(MenuComponent);
