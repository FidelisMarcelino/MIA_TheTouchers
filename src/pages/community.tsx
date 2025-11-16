import Navbar from "../components/navbar";
import { Layout, Typography, Row, Col, } from "antd";
import { EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import HeaderData from "../data/community/headerData";
import CreatePostForm from "../components/community/createpostform";
import { useEffect, useState } from "react";
import { API } from "../service/api";
import LikeDislikeRow from "../components/community/likedislike";
const { Content } = Layout;
const { Title, Text } = Typography;

interface Post {
  id: number;
  name: string;
  address: string;
  title: string;
  description: string;
  likes: number;
  dislikes: number;
  image?: string | null;
}

const Community = () => {
    const [apiData, setApiData] = useState<Post[]>([]);
    const [combinedData, setCombinedData] = useState<Post[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await API.get<Post[]>("/post/list");
            setApiData(response.data.data ?? []);
        };

        fetchData();
    }, []);

    useEffect(() => {
        setCombinedData([...HeaderData, ...apiData]);
    }, [apiData]);
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
                    <Title level={1} style={{margin: 0, color: "#2B1E1C"}}>Community</Title>
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
                        <>
                        <Col>
                            <UserOutlined style={{fontSize: "108px"}}></UserOutlined>
                        </Col>
                        <Col flex="1" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <Title level={3} style={{ margin: 0 }}>
                                Reynard Amadeus Lie
                            </Title>
                            <Text>Total Posts: 0</Text>
                            <Row justify="start" align="middle" gutter={[12, 12]}>
                            <Col>
                                <CreatePostForm />
                            </Col>
                            </Row>
                        </Col>    
                    </>
                    </Row>
                </Row>
                <Row justify={"start"} align="middle" style={{width: "full", padding:"20px 0px", gap: "10px", borderTop: "2px  solid #E3CFCB",}}>
                    <Title level={2} style={{margin: 0, paddingLeft: "20px", color: "#2B1E1C"}}>Around You</Title>
                </Row>
                <Row
                justify="center"
                align="middle"
                style={{ padding: 20, width: "100%", gap: "20px"}}
                >
                    {combinedData.map((item: Post) => (
                    <Row justify={"start"} style={{ width: "100%", backgroundColor: "#FCF7F2", border: "2px solid #7a2e1c", padding: " 40px", borderRadius:"10px", flexDirection:"column", gap:"25px"  }} align="middle" key={item.id}>
                        <Row align={"middle"} justify={"start"} style={{ width:"100%", gap: "12px" }}>
                        <Row justify={"start"} align={"top"} style={{flexDirection: "column"}}>
                            <Title
                                level={5}
                                style={{
                                fontWeight: "bold",
                                margin: 0,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                color: "#2B1E1C"
                                }}
                            >
                               <UserOutlined />  {item.name}
                            </Title>
                            <Text italic style={{color: "gray", 
                                 fontSize: 16}}><EnvironmentOutlined /> {item.address}</Text>
                        </Row>
                        </Row>
                        <Row justify={"start"} align={"top"} style={{width:"100%", gap: "10px"}}>
                             <Title
                                level={3}
                                style={{
                                fontWeight: "bold",
                                margin: 0,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                color: "#2B1E1C"
                                }}
                            >
                                {item.title}
                            </Title>
                            <Text style={{ color: "gray", fontSize: "20px"}}>
                                {item.description}
                            </Text>
                        </Row>
                        <Row style={{height: "2px", width:"90%", backgroundColor: "#E3CFCB", margin: "20px 0"}}></Row>
                        <LikeDislikeRow  likes={item.likes} dislikes={item.dislikes}> </LikeDislikeRow>
                    </Row>
                ))}
                </Row>
                    
               
            </Content>
         </Layout>
    );  
}

export default Community;