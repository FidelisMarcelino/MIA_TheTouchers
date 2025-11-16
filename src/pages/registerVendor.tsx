import { Layout, Button, Form, Input, Select, Typography, Upload} from "antd";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { API } from "../service/api";
import type { RcFile } from "antd/es/upload";
const {Content} = Layout;
const {Title} = Typography;

const tagOptions = [
  { label: "Food", value: "Food" },
  { label: "Beverage", value: "Beverage" },
  { label: "Service", value: "Service" },
];

const RegisterVendor = () => {
    const [file, setFile] = useState<RcFile[] | null>([]);
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const onSubmit = async (values: any) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("address", values.address);
        formData.append("category", values.category);
        formData.append("time", values.time);
        formData.append("phoneNumber", values.phoneNumber);
        formData.append("email", values.email);
        formData.append("website", values.website);
        if (file) {
        file?.forEach((file) => {
            formData.append("files", file);
        });
        }

        await API.post("vendor/", formData);
        navigate("/home");
    };
    return (
        <Layout>
            <Navbar></Navbar>
            <Content style={{ backgroundColor: "#FFFBF2" }}>
            <div 
            style={{
                maxWidth: 700,
                margin: "auto",
                padding: "40px 20px",
                marginTop: "40px",
                backgroundColor: "#FCF7F2",
                borderRadius: 12,
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                flexDirection: "column",
                width: "100%",
                border: "2px solid #E3CFCB" 
            }}
            >
            <Title level={1} style={{ textAlign: "center", marginBottom: 30 }}>Partnership Registry</Title>

            <Form layout="vertical" form={form} onFinish={onSubmit}>
                <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                <Input placeholder="Mie Pinangsia Amei" />
                </Form.Item>

                <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true }]}
                >
                <Input.TextArea placeholder="Enter description..." rows={3} />
                </Form.Item>

                <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true }]}
                >
                <Input.TextArea
                    placeholder="Jl. Anggrek Cakra No.1 ..."
                    rows={2}
                />
                </Form.Item>

                <Form.Item label="Category" name="Category" rules={[{ required: true }]}>
                <Select placeholder="Select tag" options={tagOptions} />
                </Form.Item>

                <Form.Item label="Image">
                    <Upload
                        beforeUpload={(file: RcFile) => {
                        setFile(prev => [...prev, file]); 
                        return false;
                        }}
                        multiple 
                    >
                    <Button icon={<UploadOutlined />}>Upload Image</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                label="Operating Hours"
                name="time"
                rules={[{ required: true }]}
                >
                <Input placeholder="Mon-Fri: 6am-8pm" />
                </Form.Item>

                <Form.Item label="Phone" name="phoneNumber" rules={[{ required: true }]}>
                <Input placeholder="0812xxxx" />
                </Form.Item>

                <Form.Item
                label="Email"
                name="email"
                >
                <Input placeholder="email@gmail.com" />
                </Form.Item>

                <Form.Item label="Website" name="website">
                <Input placeholder="https://www.example.com" />
                </Form.Item>

                <Button type="primary" htmlType="submit" block style={{backgroundColor: "#7a2e1c", padding: "20px 20px"}}>
                Submit
                </Button>
            </Form>
            </div>
            </Content>
        </Layout>
    );
}

export default RegisterVendor;