import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Dropdown, Typography } from "antd";
import type { MenuProps } from "antd";
import {
  DashboardOutlined,
  CalendarOutlined,
  UserOutlined,
  TeamOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../store/slices/authSlice";
import { RootState } from "../store";
import styles from "./styles.module.scss";

const { Sider, Content } = Layout;
const { Text } = Typography;

export default function Root() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/login");
  };

  const dropdownItems: MenuProps["items"] = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
      onClick: () => navigate(currentUser?.role === 'clinic' ? `/profileClinic/${currentUser?.id}` : `/profileDoctor/${currentUser?.id}`),
    },
    {
      key: "divider",
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  const menuItems = [
    ...(currentUser?.role === "clinic" ? [{
      key: "/",
      icon: <DashboardOutlined />,
      label: <Link to="/">Dashboard</Link>,
    }] : []),
    {
      key: "/appointment",
      icon: <CalendarOutlined />,
      label: <Link to="/appointment">Appointment</Link>,
    },
    {
      key: "/doctors",
      icon: <UserOutlined />,
      label: <Link to="/doctors">Doctor</Link>,
    },
    {
      key: "/patients",
      icon: <TeamOutlined />,
      label: <Link to="/patients">Patient</Link>,
    },
    {
      key: "/reports",
      icon: <FileTextOutlined />,
      label: <Link to="/reports">Report</Link>,
    },
    {
      key: "/settings",
      icon: <SettingOutlined />,
      label: <Link to="/settings">Setting</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={240} theme="light" className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <span>+</span>
            </div>
            <Text strong style={{ color: "#1a56db", fontSize: "20px" }}>
              Happycare
            </Text>
          </div>

          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            items={menuItems}
            className={styles.sideMenu}
          />

          <div className={styles.userProfile}>
            <div className={styles.userInfo}>
              <Text strong>{currentUser?.role === 'doctor' ? `${currentUser?.firstName} ${currentUser?.lastName}` : currentUser?.name}</Text>
              <br />
              <Text type="secondary" style={{ fontSize: "12px" }}>
                {currentUser?.role}
              </Text>
            </div>
            <Dropdown menu={{ items: dropdownItems }} placement="topRight">
              <DownOutlined style={{ fontSize: "10px", color: "#6b7280" }} />
            </Dropdown>
          </div>
        </div>
      </Sider>

      <Content className={styles.main_content}>
        <Outlet />
      </Content>
    </Layout>
  );
}
