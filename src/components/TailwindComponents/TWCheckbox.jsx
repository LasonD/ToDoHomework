export const TWCheckbox = (props) => {

    
  return (
    <div class="form-check">
      <input
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        value=""
        id="flexCheckDefault"
      ></input>
      <label
        class="form-check-label inline-block text-gray-800"
        htmlFor="flexCheckDefault"
      >
          <p className={props.checked ? "completed" : ""}>
            {props.children}
          </p>
      </label>
    </div>
  );
};
