interface Task {
  title: string;
}

export const Task = (props: Task) => {
  const { title } = props;
  return (
    <div className="p-2 mb-1 bg-white border-gray-100 rounded-md">{title}</div>
  );
};
