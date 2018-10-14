import React from "react";
import "../../../assets/css/style.css";
import "antd/dist/antd.css";
import { Icon, Input, Button } from "antd";

class Header extends React.Component {
  state = {
    loading: false,
    iconLoading: false
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
        data: "moorthi"
      })
    }).then(res => res.json());
    hashValue.then(value => {
      console.log(value);
      this.setState({ loading: false });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.enterLoading}
        >
          Get hash
        </Button>
      </React.Fragment>
    );
  }
}
export default Header;
