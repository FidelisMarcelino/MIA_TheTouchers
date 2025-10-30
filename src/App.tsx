import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import { ConfigProvider } from "antd";
import { TouchersTheme } from "./theme";
import Detail from "./pages/detail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
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
