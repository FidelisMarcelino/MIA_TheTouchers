import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import { ConfigProvider } from "antd";
import { TouchersTheme } from "./theme";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
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
