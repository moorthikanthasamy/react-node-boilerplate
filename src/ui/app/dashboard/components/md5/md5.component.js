import React from "react";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import "../../../../assets/css/style.css";
import { Row, Col } from "antd";
class Md5Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      iconLoading: false,
      dataToHash: null,
      hashValue: ""
    };
  }
  setValue = e => {
    this.setState({ dataToHash: e.target.value });
  };
  enterLoading = () => {
    this.setState({ loading: true });
    const hashValue = fetch("http://localhost:3000/md5hash", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: this.state.dataToHash
      })
    }).then(res => res.json());
    hashValue.then(value => {
      const response = value.hash ? value.hash : value.error;
      this.setState({ hashValue: response });
      this.setState({ loading: false });
    });
  };
  render() {
    return (
      <Row gutter={8}>
        <Col span={6}>
          <Input placeholder="Enter value to hash" onChange={this.setValue} />
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            loading={this.state.loading}
            onClick={this.enterLoading}
          >
            Get hash
          </Button>
        </Col>
        <Col span={3}>{this.state.hashValue}</Col>
        <Col span={9} />
      </Row>
    );
  }
}
export default Md5Component;
