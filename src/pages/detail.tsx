import { useLocation, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Carousel,
  Col,
  Layout,
  Row,
  Tag,
  Typography,
} from "antd";
import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
  StarFilled,
} from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;
const { Content } = Layout;

const MapEmbed = ({ address }: { address: string }) => {
  const encodedAddress = encodeURIComponent(address);

  return (
    <iframe
      title="Google Map"
      width="100%"
      height="300"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://maps.google.com/maps?q=${encodedAddress}&output=embed`}
    ></iframe>
  );
};

type ItemType = {
  id: number;
  title: string;
  description: string;
  location: string;
  rating: number;
  image: string;
  tag: string;
  tagColor: string;
  phone?: string;
  email?: string;
  website?: string;
  clock: string;
};

const contentStyle: React.CSSProperties = {
  height: "48vh",
  color: "#fff",
  textAlign: "center",
  borderRadius: 8,
};

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const item = location.state as ItemType;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7f7f7" }}>
      <Layout>
        <Content
          style={{
            backgroundColor: "#FFFFFF",
            padding: "24px",
            borderRadius: 8,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              background: "linear-gradient(to right, #7a2e1c, #ac514c)",
              padding: "24px 48px",
              color: "white",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              marginBottom: 30,
            }}
          >
            <Button
              type="link"
              href="/"
              style={{
                color: "white",
                fontWeight: "bold",
                marginBottom: 8,
                padding: 0,
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              ← Back to Home
            </Button>

            <Title level={2} style={{ color: "white", margin: 0 }}>
              {item.title}
            </Title>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 6,
                flexWrap: "wrap",
              }}
            >
              <Tag
                color={item.tagColor}
                style={{
                  fontWeight: "bold",
                  fontSize: 13,
                  padding: "2px 10px",
                  borderRadius: 8,
                }}
              >
                {item.tag}
              </Tag>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#FFD700",
                }}
              >
                <StarFilled style={{ marginRight: 4 }} />
                <Text style={{ color: "white", fontWeight: 500 }}>
                  {item.rating}
                </Text>
              </div>
            </div>
          </div>
          <Row
            gutter={[32, 32]}
            justify="center"
            style={{ padding: "0 4vw" }}
          >
            <Col xs={24} md={14} lg={12}>
              <Carousel
                arrows
                infinite
                style={{
                  width: "100%",
                  maxWidth: 720,
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                {[1, 2, 3].map((_, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        ...contentStyle,
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </Col>

            <Col xs={24} md={10} lg={8}>
              <Card
                title={
                  <Title level={4} style={{ margin: 0, color: "#d19c97" }}>
                    Contact Information
                  </Title>
                }
                style={{
                  width: "100%",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                  minHeight: "48vh",
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  <EnvironmentOutlined
                    style={{ marginRight: 8, color: "#d19c97" }}
                  />
                  <Text strong>ADDRESS</Text>
                  <Text
                    style={{ display: "block", marginLeft: 24, color: "#666" }}
                  >
                    {item?.location ?? "Not Available"}
                  </Text>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <PhoneOutlined style={{ marginRight: 8, color: "#d19c97" }} />
                  <Text strong>PHONE</Text>
                  <Text
                    style={{ display: "block", marginLeft: 24, color: "#666" }}
                  >
                    {item?.phone ?? "Not Available"}
                  </Text>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <MailOutlined style={{ marginRight: 8, color: "#d19c97" }} />
                  <Text strong>EMAIL</Text>
                  <a
                    href={`mailto:${item?.email}`}
                    style={{ display: "block", marginLeft: 24, color: "#666" }}
                  >
                    {item?.email ?? "Not Available"}
                  </a>
                </div>

                <div>
                  <GlobalOutlined
                    style={{ marginRight: 8, color: "#d19c97" }}
                  />
                  <Text strong>WEBSITE</Text>
                  <a
                    href={item?.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", marginLeft: 24, color: "#666" }}
                  >
                    {item?.website ?? "Not Available"}
                  </a>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Row 2 — About + Map */}
          <Row
            gutter={[32, 32]}
            justify="center"
            align="top"
            style={{ padding: "6vh 4vw" }}
          >
            <Col xs={24} md={14} lg={12}>
              {/* Small Images */}
              <Row
                gutter={[8, 8]}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  marginBottom: 12,
                }}
              >
                {[1, 2, 3].map((_, i) => (
                  <Col key={i}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: 80,
                        height: 80,
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                  </Col>
                ))}
              </Row>

              {/* About Card */}
              <Card
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transition: "0.3s ease-in-out",
                  boxShadow: isHovered
                    ? "0 0 15px rgba(128, 0, 0, 0.3)"
                    : "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Text style={{ fontWeight: "bolder", fontSize: "20px" }}>
                  About
                </Text>
                <div>
                  <Text type="secondary">{item.description}</Text>
                </div>
              </Card>
            </Col>

            <Col xs={24} md={10} lg={8}>
              <MapEmbed address={item.location} />
            </Col>
          </Row>

          {/* Row 3 — Hours */}
          <Row justify="center" style={{ paddingBottom: "5vh" }}>
            <Col xs={24} md={20} lg={16}>
              <Card>
                <div>
                  <ClockCircleOutlined
                    style={{ marginRight: 8, color: "#d19c97" }}
                  />
                  <Text strong>Hours of Operation</Text>
                  <Text
                    style={{ display: "block", marginLeft: 22, color: "#666" }}
                  >
                    {item?.clock ?? "Not Available"}
                  </Text>
                </div>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Detail;
