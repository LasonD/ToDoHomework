import React from 'react';
import { Form, Input, Button } from 'antd';

export const ToDoForm = (props) => {
  const { onSubmit, onRemoveCompleted } = props;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (onSubmit) {
      onSubmit(values.name);
    }
    form.resetFields();
  }

  return (
    <Form className="todo-form" form={form} layout={'inline'} onFinish={onFinish}>
      <Form.Item name="name" className="todo-form-input">
        <Input placeholder={'New todo'} />
      </Form.Item>
      <Form.Item className="todo-form-actions">
        <Button htmlType="submit" type="primary">Add</Button>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" onClick={onRemoveCompleted}>Remove Completed</Button>
      </Form.Item>
    </Form>
  )
}
