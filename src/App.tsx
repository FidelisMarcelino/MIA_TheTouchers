import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import { ConfigProvider } from "antd";
import { TouchersTheme } from "./theme";
import Detail from "./pages/detail";
import Community from "./pages/community";
import Vendor from "./pages/vendor";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/community/" element={<Community />} />
        <Route path="/vendor" element={<Vendor />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  return (
      <ConfigProvider theme={TouchersTheme}>
        <AppRoutes />
      </ConfigProvider>
  );
};

export default App
