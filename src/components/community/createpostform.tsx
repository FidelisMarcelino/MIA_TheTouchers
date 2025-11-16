import { useState } from "react";
import { Modal, Button, Form, Input, Grid, Upload  } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { API } from "../../service/api";
import type { RcFile } from "antd/es/upload";
const { useBreakpoint } = Grid;

const CreatePostForm = () => {
    const [open, setOpen] = useState(false);

    const [form] = Form.useForm();
    const [file, setFile] = useState<RcFile[] | null>(null);
    const screens = useBreakpoint();
    const isMobile = !screens.md;

    const handleSubmit = (values) => {
         const formData = new FormData();
         formData.append("title", values.title);
         formData.append("description", values.description);
         formData.append("address", values.address);

        if(file){
            formData.append("images", values.images)
        }

        API.post('/post', formData);
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
        title="Create New Post"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={isMobile ? "95%" : 400}
        style={{ top: isMobile ? 12 : 40}}
        modalRender={modal => (
          <div style={{ backgroundColor: "#E3CFCB", borderRadius: 8 }}>
            {modal}
          </div>
        )}
        
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

          <Form.Item label="Image">
                <Upload
                beforeUpload={(file) => {
                    setFile(file);
                    return false; // prevent auto upload
                }}
                >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
                </Upload>
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