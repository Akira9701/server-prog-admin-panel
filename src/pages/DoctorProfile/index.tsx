import { useEffect } from "react";
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
  Progress,
} from "antd";
import { CalendarOutlined, UserOutlined, StarFilled } from "@ant-design/icons";
import { RootState } from "../../store";
import { fetchDoctorByIdSuccess } from "../../store/slices/doctorSlice";
import { doctors } from "../../shared/mocks/doctors.mocks";
import { doctorAppointments } from "../../shared/mocks/appointments.mocks";
import styles from "./styles.module.scss";

const { Title, Text } = Typography;

const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { selectedDoctor } = useSelector((state: RootState) => state.doctors);

  useEffect(() => {
    // Find doctor from mock data
    const doctor = doctors.find((doc) => doc.id === id);
    if (doctor) {
      dispatch(fetchDoctorByIdSuccess(doctor));
    }
  }, [dispatch, id]);

  if (!selectedDoctor) {
    return <div>Loading...</div>;
  }

  // Mock satisfaction data
  const satisfactionData = {
    excellent: 28600,
    good: 12400,
    poor: 4251,
    total: 45251,
  };

  return (
    <div className={styles.profileContainer}>
      <Card className={styles.mainCard}>
        <Row gutter={[24, 24]}>
          <Col span={24} md={12}>
            <Space align="center" size={16}>
              <Avatar
                size={64}
                style={{ backgroundColor: selectedDoctor.avatarUrl }}
                icon={<UserOutlined />}
              />
              <div>
                <Title level={3}>{selectedDoctor.firstName} {selectedDoctor.lastName}</Title>
                <Text type="secondary">{selectedDoctor.specialization}</Text>
              </div>
            </Space>
          </Col>
        </Row>

        <Row gutter={[24, 24]} className={styles.statsRow}>
          <Col xs={24} md={8}>
            <Card className={styles.statCard}>
              <Statistic
                title="Appointment"
                value={selectedDoctor.totalAppointments}
                valueStyle={{ color: "#1677ff" }}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className={styles.statCard}>
              <Statistic
                title="Total Patients"
                value={selectedDoctor.totalPatients}
                valueStyle={{ color: "#1677ff" }}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className={styles.statCard}>
              <Statistic
                title="Rate"
                value={selectedDoctor.rating}
                precision={1}
                valueStyle={{ color: "#1677ff" }}
                suffix={<StarFilled style={{ color: "#faad14" }} />}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 24]} className={styles.contentRow}>
          <Col span={24} md={16}>
            <Card
              title="Upcoming Appointment"
              className={styles.appointmentCard}
            >
              <List
                itemLayout="horizontal"
                dataSource={doctorAppointments}
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
                          <Text type="secondary">{item.patientName}</Text>
                        </Space>
                      }
                      avatar={
                        <div className={styles.timeIconWrapper}>
                          <CalendarOutlined />
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={24} md={8}>
            <Card
              title="Patient Satisfaction"
              className={styles.satisfactionCard}
            >
              <div className={styles.chartContainer}>
                <div className={styles.donutChart}>
                  <Progress
                    type="circle"
                    percent={100}
                    success={{
                      percent:
                        (satisfactionData.excellent / satisfactionData.total) *
                        100,
                    }}
                    trailColor="#f97316"
                    strokeColor="#22c55e"
                    format={() => (
                      <div>
                        <span className={styles.totalLabel}>Total</span>
                        <Text strong className={styles.totalValue}>
                          {satisfactionData.total.toLocaleString()}
                        </Text>
                      </div>
                    )}
                  />
                </div>
                <Space direction="vertical" className={styles.legend}>
                  <Space>
                    <span
                      className={`${styles.dot} ${styles.excellent}`}
                    ></span>
                    <Text>Excellent</Text>
                  </Space>
                  <Space>
                    <span className={`${styles.dot} ${styles.good}`}></span>
                    <Text>Good</Text>
                  </Space>
                  <Space>
                    <span className={`${styles.dot} ${styles.poor}`}></span>
                    <Text>Poor</Text>
                  </Space>
                </Space>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DoctorProfile;
