import Popup from "reactjs-popup";
import moment from "moment";
import "reactjs-popup/dist/index.css";
import { TWButton } from "./TWButton";

export const TWAmendPopup = (props) => {
  const { item, onAmendItem } = props;

  const onFinish = (e) => {
    e.preventDefault();
    const titleInput = e.target.title;
    const descriptionInput = e.target.description;

    if (onAmendItem) {
      const newItem = {
        content:
          titleInput.value +
          " | " +
          moment(Date.now()).format("DD.MM.yyyy - HH:mm"),
        description: descriptionInput.value,
      };
      onAmendItem(item.id, newItem);
    }

    titleInput.value = null;
    descriptionInput.value = null;
  };

  return (
    <Popup
      trigger={
        <button class="bg-white hover:bg-gray-100 text-gray-400 hover:text-gray-500 font-semibold py-2 px-4 rounded shadow">
          Amend
        </button>
      }
      position="right center"
    >
      <form className="todo-form" onSubmit={onFinish}>
        <div className="mb-6 flex justify-center text-gray-400">
          <p>Amend your Todo item</p>
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="title"
            name="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="New Todo title"
            defaultValue={item.title}
            required
          ></input>
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="description"
            name="description"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="New Todo description"
            defaultValue={item.description}
            required
          ></input>
        </div>
        <div className="mb-6 flex justify-center">
          <TWButton htmlType="submit" type="primary">
            Amend
          </TWButton>
        </div>
      </form>
    </Popup>
  );
};
