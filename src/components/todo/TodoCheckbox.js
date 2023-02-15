import { updateTodo } from "../../utils/axios";

export function TodoCheckbox(props) {
  const { todoData, loadTodoList } = props;

  const onError = (e) => {
    console.error(e);
  };

  const handleCompletedChange = (e) => {
    const body = { todo: todoData.todo, isCompleted: !todoData.isCompleted };
    updateTodo(todoData.id, body, loadTodoList, onError);
  };

  return (
    <input
      type="checkbox"
      checked={todoData.isCompleted === true ? true : false}
      value={todoData.isCompleted}
      onChange={handleCompletedChange}
    />
  );
}
