import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

function FormInput(props) {
  const { label, inputProps, error } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input {...inputProps} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}

export default FormInput;
