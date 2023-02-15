import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import UserForm from "../shared/UserForm";
import { requestSignup } from "../../utils/axios";

const signupMessages = {
  onSuccess: "회원가입에 성공하였습니다. 로그인 페이지로 이동합니다",
  onError: "회원가입에 실패하였습니다",
};

export default function SignupForm() {
  const navigate = useNavigate();
  const toast = useToast();

  const onSuccess = (res, formData) => {
    console.log(res);
    toast({
      title: signupMessages.onSuccess,
      description: `가입 이메일 : ${formData.email}`,
      status: "success",
    });
    navigate("/signin");
  };
  const onError = (error) => {
    toast({
      title: signupMessages.onError,
      description: error,
      status: "error",
    });
    console.error(error);
  };

  const formSubmitHandler = (formData) => {
    requestSignup(formData, onSuccess, onError);
  };
  return <UserForm type="signup" formSubmitHandler={formSubmitHandler} />;
}
