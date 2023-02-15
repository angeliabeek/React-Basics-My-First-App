import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => (
  <Input
    variant="flushed"
    marginTop="1rem"
    padding="1rem"
    backgroundColor="blue.100"
    color="gray.500"
    fontSize="1.25rem"
    onChange={onChange}
    {...props}
  ></Input>
);
