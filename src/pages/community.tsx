import Navbar from "../components/navbar";
import { Layout, Typography, Row, Image, Button, Col, } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;
import { LikeFilled, MessageFilled } from "@ant-design/icons";
import HeaderData from "../data/community/headerData";
import CreatePostForm from "../components/community/createpostform";


const Community = () => {
    return (
         <Layout style={{minHeight: "100vh", width: "100%", margin: "0"}}>
            <Navbar />
            <Content style={{
                backgroundColor: "#FFFBF2",
                height: "100%",
            
            }}>
                <Row style={{width: "100%", height: "auto"}}>
                <div style={{
                    width: "100%",
                    padding: "40px 20px",
                    borderBottom: "2px  solid #E3CFCB"
                }} >
                    <Title level={1} style={{margin: 0}}>Community</Title>
                    <Text italic style={{
                        color: "gray", 
                        fontSize: 16
                    }}>Connect with people around the world and support local businesses together</Text>
                </div>
                </Row>
                <Row style={{padding: "40px 20px"}}>
                <Row
                justify="start"
                align="middle"
                style={{
                    backgroundColor: "#FCF7F2",
                    width: "80%",
                    padding: "40px 20px",
                    border: "2px solid #E3CFCB",
                    borderRadius: "12px",
                    gap: "20px",
                    flexWrap: "wrap" 
                }}
                >
                <Col>
                    <Image
                    src="/pp.webp"
                    width={120}
                    style={{ borderRadius: "50%", border: "2px solid #E3CFCB" }}
                    preview={false}
                    />
                </Col>
                <Col flex="1" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div>
                    <Title level={3} style={{ margin: 0 }}>
                        Reynard Amadeus Lie
                    </Title>
                    <Text>Total Posts: 0</Text>
                    </div>

                    <Row justify="start" align="middle" gutter={[12, 12]}>
                    <Col>
                        <Button
                        type="primary"
                        style={{ backgroundColor: "#7a2e1c", color: "white" }}
                        >
                        View Your Posts
                        </Button>
                    </Col>
                    <Col>
                        <CreatePostForm />
                    </Col>
                    </Row>
                </Col>
                </Row>
                </Row>
                <Row justify={"start"} align="middle" style={{width: "full", padding:"20px 0px", gap: "10px", borderTop: "2px  solid #E3CFCB",}}>
                    <Title level={2} style={{margin: 0, paddingLeft: "20px"}}>Around You</Title>
                </Row>
                <Row
                justify="center"
                align="middle"
                style={{ padding: 20, width: "100%", gap: "20px"}}
                >
                    {HeaderData.map((item) => (
                    <Row gutter={[8, 8]} style={{ width: "100%", backgroundColor: "#ffff", border: "2px solid #7a2e1c", padding: "20px", cursor: "pointer", borderRadius:"10px"  }} align="middle" key={item.id}>
                        <Col lg={12} xs={24} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <Image
                            src={item.image}
                            style={{ border: "2px solid #7a2e1c", borderRadius: "50%" }}
                            width={50}
                            height={50}
                            preview={false}
                        />
                        <Title
                            level={4}
                            style={{
                            fontWeight: "bold",
                            margin: 0,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                            }}
                        >
                            {item.title}
                        </Title>
                        </Col>

                        <Col
                        lg={12}
                        xs={24}
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: 16,

                        }}>
                        <Text style={{fontSize: "20px"}}><LikeFilled /> {item.likes}</Text>
                        <Text style={{fontSize: "20px" }}><MessageFilled /> {item.comments}</Text>
                        </Col>
                    </Row>
                ))}
                </Row>
                    
               
            </Content>
         </Layout>
    );  
}

export default Community;