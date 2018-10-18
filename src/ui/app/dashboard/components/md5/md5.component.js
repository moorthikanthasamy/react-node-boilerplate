import React from "react";
import Input from "antd/lib/input";
import Icon from "antd/lib/icon";
import "../../../../assets/css/style.css";
import { Row, Col } from "antd";
class Md5Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: "" });
  };

  onChangeUserName = e => {
    this.setState({ userName: e.target.value });
  };

  render() {
    const { userName } = this.state;
    const suffix = userName ? (
      <Icon type="close-circle" onClick={this.emitEmpty} />
    ) : null;
    return (
      <div>
        <Row>
          <Col span={6}>
            <Input
              placeholder="Enter your username"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              suffix={suffix}
              value={userName}
              onChange={this.onChangeUserName}
              ref={node => (this.userNameInput = node)}
            />
          </Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </div>
    );
  }
}
export default Md5Component;
