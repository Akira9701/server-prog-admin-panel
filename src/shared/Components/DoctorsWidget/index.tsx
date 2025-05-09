import { FC } from "react";
import { Table, Button, Avatar, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDoctorStore } from "../../../store/doctorStore";
import { Doctor } from "../../../types/user.types";
import styles from "./styles.module.scss";

const { Title, Text } = Typography;

export const DoctorsWidget: FC = () => {
  // Get doctors from Zustand store
  const { doctors } = useDoctorStore();

  // Only display first 5 doctors for the widget
  const displayedDoctors = doctors.slice(0, 5);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: Doctor) => (
        <div className={styles.nameCell}>
          <Avatar
            style={{ background: record.avatarUrl, marginRight: 12 }}
            size="small"
          />
          <Text strong>{text}</Text>
        </div>
      ),
    },
    {
      title: "qualification",
      dataIndex: "qualification",
      key: "qualification",
    },
    {
      title: "qualification",
      dataIndex: "specialization",
      key: "specialization",
    },
    {
      title: "",
      key: "actions",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: () => (
        <div className={styles.actions}>
          <Button type="text" icon={<EditOutlined />} size="small" />
          <Button type="text" icon={<DeleteOutlined />} size="small" />
        </div>
      ),
    },
  ];

  return (
    <div className={styles.widget}>
      <div className={styles.widgetHeader}>
        <Title level={5} style={{ margin: 0 }}>
          Doctors
        </Title>
        <Link to="/doctors" className={styles.viewAll}>
          View All
        </Link>
      </div>
      <Table
        dataSource={displayedDoctors}
        columns={columns}
        pagination={false}
        rowKey="id"
        size="small"
        className={styles.doctorsTable}
      />
    </div>
  );
};
