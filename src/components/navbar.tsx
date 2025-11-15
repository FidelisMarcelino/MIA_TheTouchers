import {Typography, Layout, Button} from "antd";
import type React from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Header } = Layout;

const Navbar: React.FC = () => {
    return (
        <Header style={{
        background: "linear-gradient(to right, #6B2B2B, #ac514c)",
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "full"
      }}> 
            <Link to={"/home"}>
                <Title level={1} style={{ color: "white", margin: 0, fontSize: "24px" }}>
                FoodMSME
                </Title>  
            </Link>

            <nav style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px"}
                }>
                <Link to={"/home"}>
                    <Button style={{
                        backgroundColor: "transparent",
                        color: "white",
                        fontWeight: "bold",
                        border: 0
                    }} >Home</Button>
                </Link>
                <Link to={"/community"}>
                    <Button style={{
                        backgroundColor: "transparent",
                        color: "white",
                        fontWeight: "bold",
                        border: 0
                    }}>Community</Button>
                </Link>
                <Link to={"/vendor"}>
                    <Button style={{
                        backgroundColor: "transparent",
                        color: "white",
                        fontWeight: "bold",
                        border: 0
                    }}>Partnership</Button>
                </Link>
                <Link to={"/home"}>
                    <Button style={{
                        backgroundColor: "transparent",
                        color: "white",
                        fontWeight: "bold",
                        border: 0
                    }}>Register</Button>
                </Link>
                <Link to={"/home"}>
                    <Button style={{
                        backgroundColor: "transparent",
                        color: "white",
                        fontWeight: "bold",
                        border: 0
                    }}>Login</Button>
                </Link>
            </nav>

        </Header>
    );
}

export default Navbar;