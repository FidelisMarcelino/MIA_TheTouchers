import { useState } from "react";
import { Modal, Button, Form, Input, Grid  } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

const CreatePostForm = () => {
    const [open, setOpen] = useState(false);

    const [form] = Form.useForm();

    const screens = useBreakpoint();
    const isMobile = !screens.md;

    const handleSubmit = (values) => {
        setOpen(false);
        form.resetFields();
    };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}  
      style={{
        backgroundColor: "#7a2e1c", 
        color: "white" 
        }}>
        <PlusOutlined></PlusOutlined> Add New Post 
      </Button>

      <Modal
        title="Registration Form"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={isMobile ? "95%" : 400}
        style={{ top: isMobile ? 12 : 40}}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            label="title"
            name="title"
            rules={[{ required: true, message: "Please enter the title" }]}
          >
            <Input placeholder="Enter your post's title" />
          </Form.Item>

          <Form.Item
            label="Caption"
            name="description"
            rules={[
              { required: true, message: "Enter your post's caption" },
            ]}
          >
            <Input placeholder="Enter your Post's Caption" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter the location's address" }]}
          >
            <Input placeholder="Please enter the location's address" />
          </Form.Item>

          <Form.Item>
                <Button type="primary" htmlType="submit" block style={{backgroundColor: "#7a2e1c"}}>
                <PlusOutlined></PlusOutlined> Create Post
                </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreatePostForm;