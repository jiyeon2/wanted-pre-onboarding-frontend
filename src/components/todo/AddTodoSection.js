import { Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import FormInput from "../shared/FormInput";
import { createTodo } from "../../utils/axios";

function AddTodoSection(props) {
  const { onSuccessHandler } = props;

  const onSuccess = (res) => {
    // 다시 불러오기
    onSuccessHandler();
  };
  const onError = (e) => {
    console.error(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target["new-todo-input"];
    const newTodoValue = input.value.trim();
    if (!newTodoValue) return;

    createTodo({ todo: newTodoValue }, onSuccess, onError);
    input.value = "";
  };
  return (
    <Stack
      as="form"
      direction="row"
      alignItems="flex-end"
      onSubmit={handleSubmit}
    >
      <FormInput
        label="새로운 할 일"
        inputProps={{
          type: "text",
          name: "new-todo-input",
          required: true,
          "data-testid": "new-todo-input",
        }}
      />
      <Button type="submit" data-testid="new-todo-add-button">
        추가
      </Button>
    </Stack>
  );
}

export default AddTodoSection;
