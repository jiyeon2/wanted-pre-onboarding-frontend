import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useUserFormButtonLabel } from "../../hooks/useUserFormButtonLabel";
import { useUserFormValidation } from "../../hooks/useUserFormValidation";
import FormInput from "../shared/FormInput";

function UserForm(props) {
  const { type, formSubmitHandler } = props; // form type은 signin , signup
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const { isAllValid, errors } = useUserFormValidation(formState);
  const buttonLabel = useUserFormButtonLabel(type);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isAllValid) return;

    formSubmitHandler(formState);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack spacing={4}>
        <FormInput
          label="이메일"
          inputProps={{
            type: "email",
            [`data-testid`]: "email-input",
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
            [`data-testid`]: "password-input",
            name: "password",
            value: formState.password,
            onChange: onChangeHandler,
          }}
          error={errors.password}
        />
        <Button
          data-testid={buttonLabel["data-testid"]}
          isDisabled={!isAllValid}
          type="submit"
        >
          {buttonLabel.label}
        </Button>
      </Stack>
    </form>
  );
}

export default UserForm;
