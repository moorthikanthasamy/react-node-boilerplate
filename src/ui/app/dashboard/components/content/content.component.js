import React from "react";
import { Content } from "antd/lib/layout";
import AesComponent from "../aes/aes.component";
import RedisComponent from "../redis/redis.component";
import Md5Component from "../md5/md5.component";

class ContentComponent extends React.Component {
  render() {
    return (
      <Content style={{ margin: "24px 16px 0" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          content
          <AesComponent />
          <RedisComponent />
        </div>
        <Md5Component />
      </Content>
    );
  }
}

export default ContentComponent;
