import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { TodoCheckbox } from "./TodoCheckbox";
import { TodoItemEditing } from "./TodoItemEditing";

export function TodoItem(props) {
  const { todoData, loadTodoList } = props;

  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <TodoItemEditing
        todoData={todoData}
        loadTodoList={loadTodoList}
        finishEditing={() => setIsEditing(false)}
      />
    );
  }
  return (
    <Stack as="li" direction="row">
      <Stack as="label" direction="row" alignItems="center">
        <TodoCheckbox todoData={todoData} loadTodoList={loadTodoList} />
        <span>{todoData.todo}</span>
      </Stack>
      <Button
        data-testid="modify-button"
        size="sm"
        onClick={() => {
          setIsEditing(true);
        }}
      >
        수정
      </Button>
      <Button data-testid="delete-button" size="sm">
        삭제
      </Button>
    </Stack>
  );
}
