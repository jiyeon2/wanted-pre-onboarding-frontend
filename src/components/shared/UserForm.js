import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useUserFormButtonLabel } from "../../hooks/useUserFormButtonLabel";
import { useUserFormValidation } from "../../hooks/useUserFormValidation";
import FormInput from "../shared/FormInput";

function UserForm(props) {
  const { type } = props; // form type은 signin , signup
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const { isAllValid, errors } = useUserFormValidation(formState);
  const buttonLabel = useUserFormButtonLabel(type);

  return (
    <form>
      <Stack spacing={4}>
        <FormInput
          label="이메일"
          inputProps={{
            type: "email",
            [`data-test-id`]: "email-input",
            name: "email",
            value: formState.email,
            onChange: onChangeHandler,
          }}
          error={errors.email}
        />
        <FormInput
          label="비밀번호"
          inputProps={{
            type: "password",
            [`data-test-id`]: "password-input",
            name: "password",
            value: formState.password,
            onChange: onChangeHandler,
          }}
          error={errors.email}
        />
        <Button
          data-test-id={buttonLabel["data-test-id"]}
          isDisabled={!isAllValid}
        >
          {buttonLabel.label}
        </Button>
      </Stack>
    </form>
  );
}

export default UserForm;
