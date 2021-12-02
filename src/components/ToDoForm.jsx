import React from 'react';
import { Form, Input, Button } from 'antd';

export const ToDoForm = (props) => {
  const { onSubmit, onRemoveCompleted } = props;

  const titleRules = [
    {
      required: true,
      message: 'Todo title cannot be empty!',
    },
    {
      pattern: /([A-Z]|[А-Я]).*/,
      message: 'Todo title should start with a capital letter!',
    },
    {
      min: 3,
      message: 'Todo title should be longer than 3 characters!',
    },
  ];

  const descriptionRules = [
    {
      required: true,
      message: 'Todo description cannot be empty!',
    },
    {
      min: 3,
      message: 'Todo description should be longer than 3 characters!',
    },
  ];

  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (onSubmit) {
      onSubmit({title: values.title, description: values.description});
    }
    form.resetFields();
  }

  return (
    <Form className="todo-form" form={form} layout={'column'} onFinish={onFinish}>
      <Form.Item name="title" className="todo-form-input" rules={titleRules}>
        <Input placeholder={'Todo title'} />
      </Form.Item>
      <Form.Item name="description" className="todo-form-input" rules={descriptionRules}>
        <Input placeholder={'Todo description'} />
      </Form.Item>
      <Form.Item className="todo-form-actions">
        <div className="actions-container">
          <Button className="todo-form-action" htmlType="submit" type="primary">Add</Button>
          <Button className="todo-form-action" htmlType="submit" type="primary" onClick={onRemoveCompleted}>Remove completed</Button>
        </div>
      </Form.Item>
    </Form>
  )
}
