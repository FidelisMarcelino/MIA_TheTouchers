import { Route, Routes } from "react-router-dom";
import Home from "./home";
import { Content } from "antd/es/layout/layout";

export default function AppLayout() {
  return (
    <>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Content>
    </>
  );
};
