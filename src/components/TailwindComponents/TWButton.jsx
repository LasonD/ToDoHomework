

export const TWButton = (props) => {
  return (
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
