import React from "react";
import { connect } from "react-redux";
import { Content } from "antd/lib/layout";
import AesComponent from "../aes/aes.component";
import RedisComponent from "../redis/redis.component";
import Md5Component from "../md5/md5.component";

class ContentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compList: {
        REDIS: <RedisComponent />,
        AES: <AesComponent />,
        MD5: <Md5Component />
      }
    };
  }
  render() {
    const selectedComponent = this.props.selectedcomp;
    const rendercomp = selectedComponent
      ? this.state.compList[selectedComponent]
      : "Select option in the Menu";
    return (
      <Content style={{ margin: "24px 16px 0" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          {rendercomp}

          {/* {this.props.selectedcomp} &&  selectedComponent ? */}
        </div>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedcomp: state.dashboardReducer.component
  };
};

export default connect(mapStateToProps)(ContentComponent);
