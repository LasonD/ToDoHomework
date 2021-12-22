import React from 'react';

import { TWButton } from './TailwindComponents/TWButton';

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

  const onFinish = (e) => {
    const titleInput = e.target.title;
    const descriptionInput = e.target.description;

    if (onSubmit) {
      onSubmit({title: titleInput.value, description: descriptionInput.value});
    }

    titleInput.value = null;
    descriptionInput.value = null;
  }

  return (
    <form className="todo-form" layout={'column'} onSubmit={onFinish}>
      <div className="mb-6">
        <input type="text" id="title" name="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Todo title" required></input>
      </div>
      <div className="mb-6">
        <input type="text" id="description" name="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Todo description" required></input>
      </div>
      <div className="mb-6 flex justify-between">
        <TWButton htmlType="submit" type="primary">Add</TWButton>
        <TWButton htmlType="submit" type="primary" onClick={onRemoveCompleted}>Remove completed</TWButton>
      </div>
    </form>
  )
}
