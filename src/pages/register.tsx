import { Card, Form, Input, Button, Typography, Row, Col } from "antd";
import { GoogleOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { API } from "../service/api";
import type { AxiosError } from "axios";
import Cookies from "js-cookie";

const { Title, Text, Link } = Typography;

type SignupValues = {
  name: string;
  email: string;
  password: string;
};

type ServerErrorResponse = {
  msg: string;
  status: number;
};

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const loginMutation = useMutation({
    mutationFn: (fields: SignupValues) => {
      return API.post("/register", fields);
    },
    onError: (error: any) => {
      const serverError = (error as AxiosError).response?.data;
      const errorMessage = (serverError as ServerErrorResponse).msg;
      form.setFields([
        {
          name: "name",
          errors: [errorMessage],
        },
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
      Cookies.set("token", token, { path: "/" });
      navigate("/");
    },
  });

  const onSubmit = (value: any) => {
    loginMutation.mutate({
      name: value.name,
      email: value.email,
      password: value.password,
    });
  };

  return (
    <Row
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* LEFT PANEL */}
      <Col
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #812c21 0%, #ab504b 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            borderRadius: "50%",
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
            marginBottom: 30,
          }}
        >
          <span>⏚</span>
        </div>
        <Title level={2} style={{ color: "white" }}>
          Join Us Today
        </Title>
        <Text style={{ color: "rgba(255,255,255,0.9)" }}>
          Create your account and unlock powerful features
        </Text>
        <div style={{ marginTop: 40, textAlign: "left" }}>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
          >
            <CheckCircleTwoTone
              twoToneColor="#fff"
              style={{ fontSize: 18, marginRight: 10 }}
            />
            <Text style={{ color: "white" }}>Free to get started</Text>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
          >
            <CheckCircleTwoTone
              twoToneColor="#fff"
              style={{ fontSize: 18, marginRight: 10 }}
            />
            <Text style={{ color: "white" }}>
              Instant access to all features
            </Text>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CheckCircleTwoTone
              twoToneColor="#fff"
              style={{ fontSize: 18, marginRight: 10 }}
            />
            <Text style={{ color: "white" }}>Secure and encrypted data</Text>
          </div>
        </div>
      </Col>

      {/* RIGHT PANEL */}
      <Col
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          padding: "60px 40px",
        }}
      >
        <Card
          style={{
            width: 400,
            border: "none",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <Title level={3} style={{ marginBottom: 0 }}>
              Create your account
            </Title>
          </div>

          <Form layout="vertical" form={form} onFinish={onSubmit}>
            <Form.Item label="Full Name" name="name">
              <Input placeholder="John Doe" size="large" />
            </Form.Item>
            <Form.Item label="Email Address" name="email">
              <Input placeholder="you@example.com" size="large" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password placeholder="••••••••" size="large" />
            </Form.Item>
            <Form.Item label="Confirm Password" name="confirm">
              <Input.Password placeholder="••••••••" size="large" />
            </Form.Item>

            <Button
              type="primary"
              size="large"
              block
              style={{
                background: "linear-gradient(90deg, #ab504b 0%, #812c21 100%)",
                border: "none",
              }}
            >
              Create Account
            </Button>

            <div style={{ textAlign: "center", marginTop: 16 }}>
              <Text type="secondary">
                Already have an account?{" "}
                <Link onClick={() => navigate("/login")}>Sign in</Link>
              </Text>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
