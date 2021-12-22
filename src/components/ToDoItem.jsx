import React from 'react';
import { Button, Checkbox, Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { TWDivider } from './TailwindComponents/TWDivider';

export const ToDoItem = (props) => {
  const { item, onCheck, onRemove } = props;
  const onRemoveItem = (e) => {
    e.preventDefault();

    if (onRemove) {
      onRemove(item.id);
    }
  }

  const onCheckItem = () => {
    if (onCheck) {
      onCheck(item.id);
    }
  }

  /* Since there is no data element corresponding the date and time of creation
  in the API's model, the solution is to store it inside the content along with the title and 
  then parse appropriately while rendering */
  const detatchTitleAndTime = () => {
    const timeRegex = /\s\|\s\d{2}\.\d{2}\.\d{4}\s-\s\d{2}:\d{2}/;
    const raw = item.content;
    const match = raw.match(timeRegex);

    let title, time;

    if (match && match.length > 0) {
      const matchedTimePart = match[match.length - 1];
      time = matchedTimePart.substr(3);
      title = raw.replace(matchedTimePart, '');
    } else {
      time = "N/A";
      title = raw;
    }

    return { title, time };
  }

  return (
    <li className={"todo-item" + item.completed === true ? " completed" : ""} key={item.id}>
      <div className={item.completed === true ? "container-completed" : ""}>
        <h3 className={item.completed === true ? "completed" : ""}>{detatchTitleAndTime().title}</h3>
        <div className={"todo-item-content"}>
          <Checkbox className={item.completed ? "completed" : ""}
            checked={item.completed}
            onChange={onCheckItem}
          >{item.description}</Checkbox>
          <Button className="remove-btn" type="danger" onClick={onRemoveItem}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
        </div>
        <time className="time-of-creation">{detatchTitleAndTime().time}</time>
        <TWDivider />
      </div>
    </li>
  )
}