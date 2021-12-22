export const TWCard = (props) => {
  const { title, extra } = props;

  return (
    <div class="p-10 container max-w-2xl">
      <div class="rounded shadow-lg">
        <div class="px-6 py-4">
          <div className="flex justify-between">
            <div class="font-bold text-xl mb-2">{title}</div>
            <div class="font-light text-sm ">{extra}</div>
          </div>
          <div class="text-gray-700 text-base">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
