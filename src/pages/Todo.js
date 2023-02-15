import { Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import AddTodoSection from "../components/todo/AddTodoSection";
import { loadTodos } from "../utils/axios";
import { TodoItem } from "../components/todo/TodoItem";

export function Todo() {
  const [todos, setTodos] = useState([]);

  const onSuccess = (res) => {
    console.log(res);
    setTodos(res.data);
  };
  const onError = (error) => {
    console.error(error);
  };

  const loadTodoList = useCallback(() => {
    loadTodos(onSuccess, onError);
  }, []);

  useEffect(() => {
    loadTodoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack as="section" spacing={4}>
      <Heading as="h2">투두 페이지</Heading>
      <Stack>
        <AddTodoSection onSuccessHandler={loadTodoList} />
        {!todos.length && <p>투두가 없습니다</p>}
        {todos.length > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todoData={todo}
              loadTodoList={loadTodoList}
            />
          ))}
      </Stack>
    </Stack>
  );
}
