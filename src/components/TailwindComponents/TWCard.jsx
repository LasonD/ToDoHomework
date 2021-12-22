

export const TWCard = (props) => {
    const { title, extra } = props;

    return (
    <div class="p-10">  
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <div class="text-gray-700 text-base">
          {props.children}
        </div>
      </div>
    </div>
  </div>)
}