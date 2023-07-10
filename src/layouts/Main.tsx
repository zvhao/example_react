import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import navConfig from "~/routes/navbar";

const { Header, Content, Footer, Sider } = Layout;

const Main: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const locations = useLocation();

  return (
    <Layout>
      <Sider
        style={{ minHeight: "100vh", overflow: "hidden" }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          selectedKeys={[locations.pathname]}
          theme="dark"
          mode="inline"
          items={navConfig}
        />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <Content style={{ margin: "0 16px" }}>
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
