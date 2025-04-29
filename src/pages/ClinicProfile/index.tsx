import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  Card,
  Avatar,
  Statistic,
  Typography,
  List,
  Space,
  Button,
  Form,
  Input
} from "antd";
import { UserOutlined, EditOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";
import { RootState } from "../../store";
import { fetchClinicByIdSuccess } from "../../store/slices/clinicSlice";
import { clinics } from "../../shared/mocks/clinic.mocks";
import { clinicAppointments } from "../../shared/mocks/appointments.mocks";
import styles from "./styles.module.scss";

const { Title, Text } = Typography;

const ClinicProfile = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { selectedClinic } = useSelector((state: RootState) => state.clinics);
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const clinic = clinics.find((c) => c.id === id);
    if (clinic) {
      dispatch(fetchClinicByIdSuccess(clinic));
      form.setFieldsValue(clinic);
    }
  }, [dispatch, id, form]);

  if (!selectedClinic) {
    return <div>Loading...</div>;
  }

  const totalAppointments = clinicAppointments.length;
  const completedAppointments = clinicAppointments.filter(
    (app) => app.status === "completed"
  ).length;
  const pendingAppointments = clinicAppointments.filter(
    (app) => app.status === "scheduled"
  ).length;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      // Here you would typically dispatch an action to update the clinic
      console.log("Updated clinic data:", values);
      setIsEditing(false);
    });
  };

  const handleCancel = () => {
    form.setFieldsValue(selectedClinic);
    setIsEditing(false);
  };

  return (
    <div className={styles.profileContainer}>
      <Card className={styles.mainCard}>
        <Row gutter={[24, 24]}>
          <Col span={24} md={12}>
            <Space align="center" size={16}>
              <Avatar
                size={64}
                style={{ backgroundColor: selectedClinic.logoUrl }}
                icon={<UserOutlined />}
              />
              <div>
                {isEditing ? (
                  <Form form={form} component={false}>
                    <Form.Item name="name" style={{ marginBottom: 0 }}>
                      <Input className={styles.input} />
                    </Form.Item>
                  </Form>
                ) : (
                  <Title level={3}>{selectedClinic.name}</Title>
                )}
            
              </div>
            </Space>
          </Col>
          <Col span={24} md={12} style={{ textAlign: "right" }}>
            {!isEditing ? (
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={handleEdit}
              >
                Edit Profile
              </Button>
            ) : (
              <Space>
                <Button
                  type="primary"
                  icon={<SaveOutlined />}
                  onClick={handleSave}
                >
                  Save
                </Button>
                <Button icon={<CloseOutlined />} onClick={handleCancel}>
                  Cancel
                </Button>
              </Space>
            )}
          </Col>
        </Row>

        <Row gutter={[24, 24]} className={styles.statsRow} style={{ marginTop: '24px' }}>
          <Col xs={24} md={8}>
            <Card className={styles.statCard}>
              <Statistic
                title="Total Appointments"
                value={totalAppointments}
                valueStyle={{ color: "#1677ff" }}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className={styles.statCard}>
              <Statistic
                title="Completed Appointments"
                value={completedAppointments}
                valueStyle={{ color: "#22c55e" }}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className={styles.statCard}>
              <Statistic
                title="Pending Appointments"
                value={pendingAppointments}
                valueStyle={{ color: "#f97316" }}
              />
            </Card>
          </Col>
        </Row>

        <Form
          form={form}
          layout="vertical"
          disabled={!isEditing}
          className={styles.form}
          requiredMark={false}
        >
          <Row gutter={[24, 24]}>
            <Col span={24} md={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input email!" },
                  { type: "email", message: "Please input valid email!" },
                ]}
                className={styles.formItem}
              >
                <Input className={styles.input} />
              </Form.Item>
            </Col>
            <Col span={24} md={12}>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true, message: "Please input phone!" }]}
                className={styles.formItem}
              >
                <Input className={styles.input} />
              </Form.Item>
            </Col>
            <Col span={24} md={24}>
              <Row gutter={16}>
                <Col span={12} className={styles.halfWidth}>
                  <Form.Item
                    name="workingHours"
                    label="Working Hours"
                    rules={[{ required: true, message: "Please input working hours!" }]}
                    className={styles.formItem}
                  >
                    <Input className={styles.input} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="address"
                    label="Address"
                    rules={[{ required: true, message: "Please input address!" }]}
                    className={styles.formItem}
                  >
                    <Input className={styles.input} />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>

        <Row gutter={[24, 24]} className={styles.contentRow}>
          <Col span={24}>
            <Card title="Recent Appointments" className={styles.appointmentCard}>
              <List
                itemLayout="horizontal"
                dataSource={clinicAppointments.slice(0, 5)}
                renderItem={(item) => (
                  <List.Item
                    className={styles.appointmentItem}
                    actions={[<Text type="secondary">{">"}</Text>]}
                  >
                    <List.Item.Meta
                      title={
                        <div>
                          <Text>{item.time}</Text>
                        </div>
                      }
                      description={
                        <Space direction="vertical">
                          <Text strong>{item.type}</Text>
                          <Text type="secondary">
                            Doctor: {item.doctorName}
                          </Text>
                          <Text type="secondary">
                            Patient: {item.patientName}
                          </Text>
                        </Space>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ClinicProfile;