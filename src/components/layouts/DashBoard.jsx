import React, { useState } from "react";
import { Layout, Col, Typography } from "antd";
import "./DashBoard.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pageRoutes from "../../config/Router";

import HeaderTest from "../Header";
import SideBarTest from "../SideBar";
const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { Title } = Typography;

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      {/* header */}
      <Router>
        
        <Header
          style={{
            margin: "8vh 0 0 0",
            height: "auto",
            background: "#fff",
            padding: 0,
          }}
        >
          <HeaderTest />
        </Header>

        <Title level={4} style={{ margin: "10px 40px 16px" }}>
          Trang Chủ
        </Title>

        <Layout style={{ margin: "0 40px" }}>
          {/* content */}
          <Col span={14} style={{ marginRight: "16px" }}>
            <Content>
              <Routes>
                {pageRoutes.map((route, index) => {
                  const Page = route.element;
                  return (
                    <Route key={index} element={<Page />} path={route.path} />
                  );
                })}
              </Routes>
            </Content>
          </Col>
          {/* side bar */}

          <Col span={10}>
            <Sider className="sider">
              <SideBarTest />
            </Sider>
          </Col>

        </Layout>

      </Router>
    </Layout>
  );
};

export default Dashboard;
