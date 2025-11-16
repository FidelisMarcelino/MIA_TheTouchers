import {Typography, Layout} from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Header } = Layout;

import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Header>
    <nav
      style={{
        width: "100%",
        background: "#6B2B2B",
        borderBottom: "1px solid #ddd",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={3} style={{color: "#fff"}}>Lokanomy</Title>
        {!isMobile && (
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: 25,
              fontSize: 18,
              margin: 0,
              padding: 0,
            }}
          >
            <Link to={"/"}><li style={{ cursor: "pointer", color: "#fff" }}>Home</li></Link>
            <Link to={"/community"}><li style={{ cursor: "pointer", color: "#fff" }}>Community</li></Link>
            <Link to={"/partnership"}><li style={{ cursor: "pointer", color: "#fff" }}>Partnership</li></Link>
            <Link to={"/register"}><li style={{ cursor: "pointer", color: "#fff" }}>Register</li></Link>
            
          </ul>
        )}

        {isMobile && (
          <div
            onClick={() => setOpen(!open)}
            style={{
              cursor: "pointer",
            }}
          >
            <MenuOutlined style={{fontSize: "22px", color: "#fff"}} />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && open && (
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            background: "#6B2B2B",
            padding: "10px 20px",

            fontSize: 18,
            margin: 0,
          }}
        >
            <Link to={"/"}><li style={{ cursor: "pointer", color:"#fff" }}>Home</li></Link>
            <Link to={"/community"}><li style={{ cursor: "pointer", color:"#fff" }}>Community</li></Link>
            <Link to={"/partnership"}><li style={{ cursor: "pointer", color:"#fff" }}>Partnership</li></Link>
            <Link to={"/register"}><li style={{ cursor: "pointer", color:"#fff" }}>Register</li></Link>
        </ul>
      )}
    </nav>
    </Header>
  );
}

export default Navbar;