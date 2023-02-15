import { Button } from "@chakra-ui/react";
import { updateTodo } from "../../utils/axios";

export function TodoItem(props) {
  const { todoData, loadTodoList } = props;
  const { id, todo, isCompleted, userId } = todoData;

  const onSuccess = () => {
    loadTodoList();
  };
  const onError = (e) => {
    console.error(e);
  };

  const handleCompletedChange = (e) => {
    updateTodo(
      id,
      { ...todoData, isCompleted: !isCompleted },
      onSuccess,
      onError
    );
  };
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted ? true : false}
          value={isCompleted}
          onChange={handleCompletedChange}
        />
        <span>{todo}</span>
      </label>
      <Button data-testid="modify-button" size="sm">
        수정
      </Button>
      <Button data-testid="delete-button" size="sm">
        삭제
      </Button>
    </li>
  );
}
