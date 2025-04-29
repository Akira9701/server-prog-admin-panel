import { useSelector } from "react-redux";
import { Table, Typography, Avatar, Space, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { RootState } from "../../store";
import { Doctor } from "../../types/user.types";
import styles from "./doctors.module.scss";

const { Title } = Typography;

const Doctors = () => {
  const { doctors } = useSelector((state: RootState) => state.doctors);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: Doctor) => (
        <div className={styles.nameCell}>
          <Avatar
            style={{ background: record.avatar, marginRight: 12 }}
            size="default"
          />
          <span className={styles.name}>{text}</span>
        </div>
      ),
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Specialty",
      dataIndex: "profile",
      key: "specialty",
    },
    {
      title: "",
      key: "actions",
      render: () => (
        <Space>
          <Button
            type="text"
            icon={<EditOutlined />}
            className={styles.actionButton}
          />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            className={styles.actionButton}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={3}>Doctors</Title>
        <Button type="primary">Add Doctor</Button>
      </div>
      <Table
        dataSource={doctors}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        className={styles.doctorsTable}
      />
    </div>
  );
};

export default Doctors;
