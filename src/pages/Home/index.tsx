import { Card, Row, Col, Typography, Statistic } from "antd";
import { DoctorsWidget } from "../../shared/components/DoctorsWidget";
import styles from "./styles.module.scss";

const { Title } = Typography;

export default function Home() {
  // Example data
  const statsData = {
    totalDoctors: 56,
    totalPatients: 1245,
    totalAppointments: 368,
    totalRevenue: 32500,
  };

  return (
    <div className={styles.home_page}>
      <div className={styles.header}>
        <Title level={3}>Dashboard</Title>
        <div className={styles.date}>
          <span>
            Today,{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      <Row gutter={[24, 24]} className={styles.statsRow}>
        <Col xs={24} sm={12} lg={6}>
          <Card className={styles.statCard}>
            <Statistic
              title="Total Doctors"
              value={statsData.totalDoctors}
              valueStyle={{ color: "#1a56db" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className={styles.statCard}>
            <Statistic
              title="Total Patients"
              value={statsData.totalPatients}
              valueStyle={{ color: "#1a56db" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className={styles.statCard}>
            <Statistic
              title="Total Appointments"
              value={statsData.totalAppointments}
              valueStyle={{ color: "#1a56db" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className={styles.statCard}>
            <Statistic
              title="Total Revenue"
              value={statsData.totalRevenue}
              prefix="$"
              valueStyle={{ color: "#1a56db" }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} className={styles.widgets}>
        <Col xs={24} lg={16}>
          <DoctorsWidget />
        </Col>
        <Col xs={24} lg={8}>
          <Card
            title="Recent Activity"
            className={styles.activityCard}
            bodyStyle={{ height: "400px" }}
          >
            {/* Future Recent Activity Widget Content */}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
