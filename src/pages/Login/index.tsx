import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography, Card, Divider, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuthStore } from "@/store/authStore";
import { doctors } from "../../shared/mocks/doctors.mocks";
import { REGISTER_ROUTE } from "@/shared/constants/auth.constants";
import styles from "./styles.module.scss";

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginSuccess } = useAuthStore();

  const onFinish = () => {
    setLoading(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      // For demo purposes, just use the first doctor from mock data
      const mockUser = doctors[0];
      const mockToken = "mock-jwt-token";

      loginSuccess(mockUser, mockToken);
      message.success("Login successful!");
      navigate("/");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.loginContainer}>
      <Card className={styles.loginCard}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <span>+</span>
          </div>
          <Title level={3} className={styles.logoText}>
            Happycare
          </Title>
        </div>

        <Title level={4}>Login to your account</Title>
        <Text type="secondary">
          Welcome back! Please enter your credentials
        </Text>

        <Form
          name="login"
          className={styles.loginForm}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined className={styles.inputIcon} />}
              placeholder="Email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className={styles.inputIcon} />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
              loading={loading}
              size="large"
            >
              Log in
            </Button>
          </Form.Item>

          <Divider plain>Or</Divider>

          <Button
            className={styles.registerButton}
            size="large"
            onClick={() => navigate(REGISTER_ROUTE)}
          >
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
