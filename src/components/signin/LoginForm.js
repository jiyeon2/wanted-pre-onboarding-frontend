import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import UserForm from "../shared/UserForm";
import { requestLogin } from "../../utils/axios";
import { saveJWT } from "../../utils/localStorage";

const loginMessages = {
  onSuccess: "로그인 성공하였습니다. todo 페이지로 이동합니다",
  onError: "로그인에 실패하였습니다",
};

export default function LoginForm() {
  let navigate = useNavigate();
  const toast = useToast();

  const onSuccess = (res, formData) => {
    console.log(res);
    toast({
      title: loginMessages.onSuccess,
      status: "success",
    });

    saveJWT(res.data.access_token);

    // TODO : todo 페이지 생성
    // navigate("/todo");
  };
  const onError = (error) => {
    toast({
      title: loginMessages.onError,
      description: error,
      status: "error",
    });
    console.error(error);
  };

  const formSubmitHandler = (formData) => {
    requestLogin(formData, onSuccess, onError);
  };

  return <UserForm type="signin" formSubmitHandler={formSubmitHandler} />;
}
