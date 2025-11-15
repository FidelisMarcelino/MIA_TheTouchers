import { Layout, Button, Form, Input, InputNumber, Select, Typography} from "antd";
import Navbar from "../components/navbar";
const {Content} = Layout;
const {Title} = Typography;

const tagOptions = [
  { label: "Food", value: "Food" },
  { label: "Beverage", value: "Beverage" },
  { label: "Service", value: "Service" },
];

const RegisterVendor = () => {
    const [form] = Form.useForm();
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
            <Title level={1} style={{ textAlign: "center", marginBottom: 30 }}>Register Item</Title>

            <Form layout="vertical" form={form}>
                <Form.Item label="Title" name="title" rules={[{ required: true }]}>
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
                label="Location"
                name="location"
                rules={[{ required: true }]}
                >
                <Input.TextArea
                    placeholder="Jl. Anggrek Cakra No.1 ..."
                    rows={2}
                />
                </Form.Item>

                <Form.Item label="Tag" name="tag" rules={[{ required: true }]}>
                <Select placeholder="Select tag" options={tagOptions} />
                </Form.Item>

                <Form.Item
                label="Image URL"
                name="image"
                rules={[{ required: true }]}
                >
                <Input placeholder="/pinangsia.png" />
                </Form.Item>

                <Form.Item
                label="Operating Hours"
                name="clock"
                rules={[{ required: true }]}
                >
                <Input placeholder="Mon-Fri: 6am-8pm" />
                </Form.Item>

                <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
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