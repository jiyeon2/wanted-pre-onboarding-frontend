import { Button, Stack } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { TodoCheckbox } from "./TodoCheckbox";
import { updateTodo } from "../../utils/axios";

export function TodoItemEditing(props) {
  const { todoData, loadTodoList, finishEditing } = props;

  const editInputRef = useRef(null);

  useEffect(() => {
    editInputRef.current.focus();
  }, []);

  const onSuccess = () => {
    loadTodoList();
    finishEditing();
  };

  const onError = (e) => {
    console.error(e);
  };

  const handleEditSubmit = () => {
    const body = {
      todo: editInputRef.current.value,
      isCompleted: todoData.isCompleted,
    };
    updateTodo(todoData.id, body, onSuccess, onError);
  };
  return (
    <Stack as="li" direction="row">
      <Stack as="label" direction="row" alignItems="center">
        <TodoCheckbox todoData={todoData} loadTodoList={loadTodoList} />
        <input
          data-testid="modify-input"
          type="text"
          defaultValue={todoData.todo}
          ref={editInputRef}
        />
      </Stack>
      <Button data-testid="submit-button" size="sm" onClick={handleEditSubmit}>
        제출
      </Button>
      <Button data-testid="cancel-button" size="sm" onClick={finishEditing}>
        취소
      </Button>
    </Stack>
  );
}
