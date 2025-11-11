import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import { ConfigProvider } from "antd";
import { TouchersTheme } from "./theme";
import Detail from "./pages/detail";
import Login from "./pages/login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./pages/register";

const queryClient = new QueryClient();
const AppRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
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
