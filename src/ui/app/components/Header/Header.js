import React from "react";
import { connect } from "react-redux";


import Input from "antd/lib/input";
import Button from "antd/lib/button";

class Header extends React.Component {
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
      this.props.dispatchHash(response);
      this.setState({ hashValue: response });
      this.setState({ loading: false });
    });
  };

  render() {
    return (
      <React.Fragment>      
        <div>{this.props.user.username}</div>
        <Input placeholder="Basic usage" onChange={this.setValue} />
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.enterLoading}
        >
          Get hash
        </Button>
        <div>{this.state.hashValue}</div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.reducer
  };
};

const mapStateToDispatch = dispatch => {
  return {
    dispatchHash: hash =>
      dispatch({
        type: "ADD",
        payload: hash
      })
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Header);
