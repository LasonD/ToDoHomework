import { useState } from "react";

export const TWCheckbox = (props) => {
  const { onChange, checked } = props;

  const [isChecked, setChecked] = useState(checked);

  const onCheck = () => {
      setChecked(!checked);
      if (onChange) {
        onChange(checked);
      }
  }

  return (
    <div class="form-check">
      <input
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        onChange={onCheck}
        id="flexCheckDefault"
      ></input>
      <label
        class="form-check-label inline-block text-gray-800 mx-2"
        htmlFor="flexCheckDefault"
      >
          <p className={checked ? "completed" : ""}>
            {props.children}
          </p>
      </label>
    </div>
  );
};
