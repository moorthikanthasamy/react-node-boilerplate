import React from "react";
import Layout from "antd/lib/layout";
const { Sider } = Layout;
import MenuComponent from "../menu/menu.component";
import FooterComponent from "../footer/footer.component";
import HeaderComponent from "../header/header.component";
import ContentComponent from "../content/content.component";

class Dashboard extends React.Component {
  render() {
    return (
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">
          <MenuComponent>
            <div className="logo" />
          </MenuComponent>
        </Sider>
        <Layout>
          <HeaderComponent />
          <ContentComponent />
          <FooterComponent />
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
