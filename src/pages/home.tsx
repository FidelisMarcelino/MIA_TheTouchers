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
  ConfigProvider,
} from "antd";
import {
  SearchOutlined,
  StarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

// --- Sample Data ---
const cardData = [
  {
    id: 1,
    title: "Artisan Bakery Co.",
    description: "Fresh handmade breads and pastries baked daily",
    location: "San Francisco",
    rating: 4.8,
    tag: "Food",
    tagColor: "red",
    image:
      "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&q=80&w=600&auto=format&fit=crop",
    clock: "Mon-Fri: 6am-8pm, Sat-Sun: 7am-6pm"
  },
  {
    id: 2,
    title: "Spice Kitchen",
    description: "Authentic Indian cuisine with traditional recipes",
    location: "New York",
    rating: 4.6,
    tag: "Food",
    tagColor: "red",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&q=80&w=600&auto=format&fit=crop",
    clock: "Mon-Fri: 6am-8pm, Sat-Sun: 7am-6pm"
  },
  {
    id: 3,
    title: "Fresh Juice Bar",
    description: "Cold-pressed juices and smoothie bowls",
    location: "Los Angeles",
    rating: 4.7,
    tag: "Beverages",
    tagColor: "volcano",
    image:
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    clock: "Mon-Fri: 6am-8pm, Sat-Sun: 7am-6pm"
  },
  {
    id: 4,
    title: "The Daily Grind",
    description: "Specialty coffee and artisanal espresso drinks",
    location: "Seattle",
    rating: 4.9,
    tag: "Beverages",
    tagColor: "volcano",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&q=80&w=600&auto=format&fit=crop",
    clock: "Mon-Fri: 6am-8pm, Sat-Sun: 7am-6pm"
  },
  {
    id: 5,
    title: "Noodle House",
    description: "Hand-pulled noodles and authentic ramen",
    location: "Tokyo",
    rating: 4.7,
    tag: "Food",
    tagColor: "red",
    image:
      "https://images.unsplash.com/photo-1756709073651-d82820f62327?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9vZGxlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    clock: "Mon-Fri: 6am-8pm, Sat-Sun: 7am-6pm"
  },
  {
    id: 6,
    title: "Gourmet Catering",
    description: "Full-service catering for events of all sizes",
    location: "Chicago",
    rating: 4.9,
    tag: "Services",
    tagColor: "blue",
    image:
      "https://images.unsplash.com/photo-1751651054926-36ea440bb06c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdvdXJtZXQlMjBjYXRlcmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    clock: "Mon-Fri: 6am-8pm, Sat-Sun: 7am-6pm"
  },
];

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
    <Header
      style={{
        background: "linear-gradient(to right, #812c21, #ac514c)",
        padding: "50px 250px",
        height: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <Title level={1} style={{ color: "white", margin: 0 }}>
          Food MSME Directory
        </Title>
        <Text italic style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: 16 }}>
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
    </Header>

    {/* Filter Section */}
    <Content style={{ backgroundColor: "#FFFBF2" }}>
      <div
        style={{
          padding: "24px 250px",
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

      <Row gutter={[35, 24]} style={{ padding: "24px 250px" }}>
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
                bodyStyle={{ padding: "20px" }}
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
                  cursor: "pointer",
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