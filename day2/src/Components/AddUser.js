import { Button, Form, Input, Table } from "antd";
import { useState } from "react";


function AddUser() {
  const [data, setData] = useState([]);

  const onFinishForm = (values) => {
    setData((prevState) => [...prevState, values]);
  };

  const columns = [
{
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  return (
    <div style={{ margin: "20px" }}>
      <div style={{ float: "right" }}>
          <Form onFinish={onFinishForm}>
            <Form.Item label="ID" name="id">
              <Input />
            </Form.Item>
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Role" name="role">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
      </div>
      <div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
}

export default AddUser;