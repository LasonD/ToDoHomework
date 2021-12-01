import React, { useState, useEffect } from 'react';
import { Card, Divider } from 'antd';
import { ToDoItem } from './ToDoItem';
import { ToDoForm } from './ToDoForm';
import axios from 'axios';

const token = "3f1b2e94bd0c9e8b754aeefd1200d09583d51951";
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }  
};

export const ToDo = () => {
  const [todos, setTodos] = useState([
    {id: 1, content: 'some', completed: false},
    {id: 2, content: 'another one', completed: false}
  ]);
  const [idCount, setIdCount] = useState(10);

  useEffect(async () => {
    const result = await axios.get("https://api.todoist.com/rest/v1/tasks", config);
    setTodos(result.data);
  }, []);

  const onRemove = async (id) => {
    const index = todos.findIndex(todo => id === todo.id);

    if (index !== -1) {
        await axios.delete(`https://api.todoist.com/rest/v1/tasks/${id}`, config);
        todos.splice(index, 1);
        setTodos([...todos]);
    }
  }

  const onCheck = async (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    
    if (index !== -1) {
      const todo = todos[index];

      todo.completed = !todo.completed;
      todos.splice(index, 1, todo);
      setTodos([...todos]);
    }
  }

  const onRemoveCompleted = async () => {
    let completed = todos.filter(todo => todo.completed === true);

    for (let todo of completed) {
      await axios.post(`https://api.todoist.com/rest/v1/tasks/${todo.id}/close`, '', config);
      todos.splice(todos.indexOf(todo), 1);
      setTodos([...todos]);
    }
  }

  const onSubmit = async (content) => {
    const todo = { content };
    const { data } = await axios.post("https://api.todoist.com/rest/v1/tasks", todo, config);
    
    setTodos([...todos, { ...todo, id: data.id }]);
    setIdCount(idCount + 1);
  } 

  const renderTodoItems = (todos) => {
    return (
      <ul className="todo-list">
        { todos.map(todo => <ToDoItem 
            key={todo.id}
            item={todo}
            onRemove={onRemove} 
            onCheck={onCheck} 
          />) }
      </ul>
    )
  }

  return (
    <Card title={'My todos'} className="todo-card">
      <ToDoForm onSubmit={onSubmit} onRemoveCompleted={onRemoveCompleted} />
      <Divider />
      { renderTodoItems(todos) }
    </Card>
  );
}
