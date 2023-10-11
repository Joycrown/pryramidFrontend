import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react"
import { Field, useField } from "formik"



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TextField = ({ ...props }: any) => {
  const [field, meta] = useField(props)
  return (
    <FormControl isInvalid={!!meta.error && meta.touched}>
      <Field
        fontSize={{ base: "12px", md: "" }}
        as={Input}
        {...field}
        {...props}
        variant="outline"
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
export default TextField