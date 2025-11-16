import {Col, Layout, Row, Typography, Button} from "antd";
import Navbar from "../components/navbar";
import { CommentOutlined, SmileOutlined, SnippetsOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const {Title, Text} = Typography;
const {Content} = Layout;
const Vendor = () => {
    return (
        <Layout>
            <Navbar></Navbar>
            <Content style={{backgroundColor: "#FFFBF2"}}>
                <Row style={{width: "100%", height: "auto", padding: "40px 20px", borderBottom: "2px  solid #E3CFCB"}}>
                    <Row justify={"center"} align={"middle"} style={{width: "100%", flexDirection: "column"}}>
                        <Title level={1} style={{margin: 0}}>Partnership</Title>
                        <Text italic style={{
                            color: "gray", 
                            fontSize: 16
                        }}>Sign up now become our partner and introduce your business to our community</Text>
                    </Row>
                </Row>
                <Row style={{width: "100%", height: "auto", padding: "40px 20px", borderBottom: "2px  solid #E3CFCB"}} gutter={[10, 10]}>
                    <Col lg={8} md={12} xs={24}>
                        <Row justify={"center"} align={"middle"} style={{border: "2px  solid #E3CFCB", padding: "50px 10px", borderRadius: "10px", backgroundColor:"#F0E1D6", color: "#6B2B2B"}}>
                            <SnippetsOutlined style={{fontSize: "72px"}} />
                            <Title level={4} style={{textAlign: "center"}}>
                                Introduce Your Business to Our Community
                            </Title>
                        </Row>
                    </Col>
                    <Col lg={8} md={12} xs={24}>
                        <Row justify={"center"} align={"middle"} style={{border: "2px  solid #E3CFCB", padding: "50px 10px",  borderRadius: "10px", backgroundColor:"#F0E1D6", color: "#6B2B2B"}}>
                            <SmileOutlined style={{fontSize: "72px"}} />
                            <Title level={4} style={{textAlign: "center"}}>
                                Receives Meaningful Feedback from Customers 
                            </Title>
                        </Row>
                    </Col>
                    <Col lg={8} md={12} xs={24}>
                    <Row justify={"center"} align={"middle"} style={{border: "2px  solid #E3CFCB", padding: "50px 10px",  borderRadius: "10px", backgroundColor:"#F0E1D6", color: "#6B2B2B"}}>
                            <CommentOutlined style={{fontSize: "72px"}} />
                            <Title level={4} style={{textAlign: "center"}}>
                                Communicate with Your Potential Customers
                            </Title>
                        </Row>
                    </Col>
                </Row>
                <Row justify={"center"} align={"middle"} style={{width: "100%", height: "auto", padding: "40px 20px", borderBottom: "2px  solid #E3CFCB", flexDirection: "column", gap:"20px"}}>
                        <Text style={{fontSize: "20px", fontWeight: "bold"}}>Register Your Business Now!</Text>
                        <Link to="/partnership/register">
                        <Button type="primary" style={{backgroundColor: "#7a2e1c", padding: "20px 20px"}} >Register</Button></Link>
                </Row>
                </Content>
        </Layout>
    );
}

export default Vendor;