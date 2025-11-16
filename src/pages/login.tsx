import { Button, Card, Col, Form, Input, Row, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { API } from "../service/api";
import type { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

const { Title, Text, Link } = Typography;

type LoginValues = {
  email: string;
  password: string;
};

type ServerErrorResponse = {
  msg: string;
  status: number;
};

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const loginMutation = useMutation({
    mutationFn: (fields: LoginValues) => {
      return API.post("/auth/login", fields);
    },
    onError: (error: any) => {
      const serverError = (error as AxiosError).response?.data;
      const errorMessage = (serverError as ServerErrorResponse).msg;
      form.setFields([
        {
          name: "email",
          errors: [errorMessage], 
        },
        {
          name: "password",
          errors: [errorMessage], 
        },
      ]);
    },
    onSuccess: (data) => {
      const { token } = data.data;
      Cookies.set("token", token, {path:"/"});
      navigate("/");
    }
  });

  const onSubmit = (value: any) => {
    loginMutation.mutate({
      email: value.email,
      password: value.password,
    });
  };

  return (
    <Row style={{ minHeight: "100vh" }}>
      {/* LEFT SIDE: LOGIN FORM */}
      <Col
        xs={24}
        md={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f6fa",
          flexDirection: "column",
          padding: 48,
        }}
      >
        <Card
          style={{
            width: 500,
            borderRadius: 16,
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            padding: "24px 32px",
          }}
        >
          <Space direction="vertical" style={{ width: "100%" }} size="large">
            <Title level={3} style={{ marginBottom: 0 }}>
              Welcome back 👋
            </Title>
            <Text type="secondary">Please log in to your account</Text>

            <Form layout="vertical" form={form} onFinish={onSubmit}>
              {/* EMAIL */}
              <Form.Item label="Email" name="email">
                <Input
                  placeholder="you@example.com"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #d9d9d9",
                    borderRadius: 0,
                    boxShadow: "none",
                    paddingLeft: 0,
                    paddingRight: 0,
                  }}
                />
              </Form.Item>

              {/* PASSWORD */}
              <Form.Item label="Password" name="password">
                <Input.Password
                  placeholder="Enter your password"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #d9d9d9",
                    borderRadius: 0,
                    boxShadow: "none",
                    paddingLeft: 0,
                    paddingRight: 0,
                  }}
                />
              </Form.Item>

              {/* FORGOT PASSWORD */}
              <div
                style={{
                  textAlign: "right",
                  marginTop: -10,
                  marginBottom: 16,
                }}
              >
                <Link onClick={() => navigate("/register")} style={{ fontSize: 13 }}>
                  Forgot password?
                </Link>
              </div>

              {/* LOGIN BUTTON */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    borderRadius: 24,
                    height: 40,
                    background: "#812c21",
                  }}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Card>
      </Col>

      {/* RIGHT SIDE: ILLUSTRATION */}
      <Col
        xs={0}
        md={12}
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #812c21 0%, #ab504b 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="./login.png"
          alt="Login illustration"
          style={{ width: "100%", maxWidth: 650, opacity: 0.9 }}
        />
      </Col>
    </Row>
  );
};

export default Login;
