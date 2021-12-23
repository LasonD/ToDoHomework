import React from "react";

import { TWDivider } from "./TailwindComponents/TWDivider";
import { TWDeleteButton } from "./TailwindComponents/TWDeleteButton";
import { TWCheckbox } from "./TailwindComponents/TWCheckbox";
import { TWAmendPopup } from "./TailwindComponents/TWAmendPopup";

export const ToDoItem = (props) => {
  const { item, onCheck, onRemove, onAmend } = props;

  const onRemoveItem = (e) => {
    e.preventDefault();

    if (onRemove) {
      onRemove(item.id);
    }
  };

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
      title = raw.replace(matchedTimePart, "");
    } else {
      time = "N/A";
      title = raw;
    }

    return { title, time };
  };

  return (
    <li
      className={
        "block justify-between items-center" + item.completed === true
          ? " completed"
          : ""
      }
      key={item.id}
    >
      <div className={item.completed === true ? "container-completed" : ""}>
        <h3
          className={
            (item.completed === true ? "completed" : "") +
            " m-4 text-gray-800 text-lg"
          }
        >
          {detatchTitleAndTime().title}
        </h3>
        <div className="flex justify-between m-4">
          <TWCheckbox
            className={item.completed ? "completed" : ""}
            checked={item.completed}
            onChange={onCheck}
          >
            {item.description}
          </TWCheckbox>
          <TWDeleteButton onClick={onRemoveItem}></TWDeleteButton>
        </div>
        <div className="flex justify-between m-4">
          <TWAmendPopup item={{id: item.id, title: detatchTitleAndTime().title, description: item.description}} onAmendItem={onAmend}></TWAmendPopup>
          <time className="font-mono font-light text-gray-300 float-right">
            {detatchTitleAndTime().time}
          </time>
        </div>
        <TWDivider />
      </div>
    </li>
  );
};
