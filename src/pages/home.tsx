import {
  Layout,
  Input,
  Typography,
  Row,
  Col,
  Card,
  Radio,
  Tag,
  Badge,
} from "antd";
import {
  SearchOutlined,
  StarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar";
import cardData from "../data/home/cardData";
const { Content } = Layout;
const { Title, Text } = Typography;

// --- Sample Data ---


const Home = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Filter Logic
  const filteredData = cardData.filter((item) => {
    const matchCategory = filter === "All" || item.tag === filter;
    const matchSearch = 
      item.title.toLowerCase().includes(search.toLowerCase()) || 
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch
  })

  return (
    <Layout>
    <Navbar />

    {/* Filter Section */}
    <Content style={{ backgroundColor: "#FFFBF2" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <Title level={1} style={{ color: "black", margin: 0 }}>
                Directory
          </Title>  
        <Text italic style={{ color: "gray", fontSize: 16 }}>
          Discover and support local food businesses
        </Text>

        <Input
          size="large"
          placeholder="Search by name or description..."
          prefix={
            <SearchOutlined
              style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: 18 }}
            />
          }
          style={{
            marginTop: 20,
            borderRadius: 8,
            border: "none",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div
        style={{
          padding: "24px 20px",
          marginBottom: 24,
          backgroundColor: "#f0e1d6",
        }}
      >
        <Radio.Group
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            display: "flex",
            gap: 12,
          }}
        >
          {["All", "Food", "Beverages", "Services"].map((item) => (
            <Radio.Button
              key={item}
              value={item}
              style={{
                borderRadius: 10,
                border: "1px solid #C9A89C",
                padding: "0 24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: item === filter ? "#7a2e1c" : "#fff7f2",
                color: item === filter ? "#ffffff" : "#7a2e1c",
                fontWeight: 500,
                height: 45,
              }}
            >
              {item}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>

      <Row gutter={[35, 24]} style={{ padding: "24px 20px" }}>
        {filteredData.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <Badge.Ribbon text={item.tag} color={item.tagColor}>
              <Card
                hoverable
                onClick={() => {
                  navigate(`/detail/${item.id}`, { 
                    state: item,
                    replace: false
                  });
                }}
                cover={
                  <img
                    alt={item.title}
                    src={item.image}
                    style={{ height: 220, objectFit: "cover" }}
                  />
                }
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
                  cursor: "pointer",
                  padding: "20px"
                }}
              >
                <Row
                  justify="space-between"
                  align="middle"
                  style={{ marginBottom: 12 }}
                >
                  <Col>
                    <Title level={5} style={{ margin: 0 }}>
                      {item.title}
                    </Title>
                  </Col>
                  <Col>
                    <Tag
                      icon={<StarOutlined />}
                      color="volcano"
                      style={{
                        fontSize: 14,
                        padding: "4px 8px",
                        borderRadius: 6,
                      }}
                    >
                      {item.rating}
                    </Tag>
                  </Col>
                </Row>
                <Text
                  type="secondary"
                  style={{ display: "block", marginBottom: 12 }}
                >
                  {item.description}
                </Text>
                <Text>
                  <EnvironmentOutlined
                    style={{ marginRight: 8, color: "#6B2B2B" }}
                  />
                  {item.location}
                </Text>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </Content>
  </Layout>
);
}

export default Home;