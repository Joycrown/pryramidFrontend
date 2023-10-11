/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Link,
  SimpleGrid,
  FormLabel,
  InputGroup,
  HStack,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import {FcGoogle} from "react-icons/fc"
import { ErrorMessage, Field, Formik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";
import TextField from "./textField";
import { useState } from "react";
import { useFormContext } from "../utils/context";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {

   const { setFormData } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickPassword = () => setShowPassword(!showPassword);
  const handleClickConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const [isLoading, setIsLoading] = useState(false);
 const navigate = useNavigate();
  const handleSubmit = (values:any) => {
    setIsLoading(true);
    setTimeout(() => {
     
      navigate("/welcome");
    }, 2000);
    setFormData(values)
  };
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    dob: "",
    confirmPassword: "",
    agreeToTerms: false
  };
  const phoneRegExp = /^[a-zA-Z0-9+@._-]*$/;
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .matches(phoneRegExp, "Contact is not valid")
      .required("Any Contact is required"),
    dob: Yup.string().required("Date Of Birth is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must contain 8 characters, one uppercase, one lowercase, one number, and one special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
    agreeToTerms: Yup.boolean()
      .oneOf([true], "You must agree to the terms and conditions to proceed")
      .required("You must agree to the terms and conditions to proceed"),
  });
  const fields = [
    {
      label: "first name",
      name: "first_name",
      type: "text",
    },
    {
      label: "last name",
      name: "last_name",
      type: "text",
    },
    {
      label: "Email or phone number",
      name: "email",
      type: "text",
    },
    {
      label: "Date of birth (MM/DD/YY)",
      name: "dob",
      type: "date",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
    },
  ];  

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: any) => {
          handleSubmit(values);

          // actions.resetForm();
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mt={5}>
              {fields.map((items, index: number) =>
                items.name === "password" ||
                items.name === "confirmPassword" ? (
                  <Box display="flex" flexDir="column" key={index}>
                    <FormLabel>{items.label}</FormLabel>
                    <InputGroup size="md">
                      <TextField
                        mt={2}
                        name={items.name}
                        position="relative"
                        type={
                          items.name === "password"
                            ? showPassword
                              ? "text"
                              : "password"
                            : showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        value={formik.values[items.name]}
                        onChange={formik.handleChange}
                      />
                      <InputRightElement
                        width="4.5rem"
                        position="absolute"
                        mt={2}
                        onClick={
                          items.name === "password"
                            ? handleClickPassword
                            : handleClickConfirmPassword
                        }
                        cursor="pointer"
                      >
                        {items.name === "password" ? (
                          showPassword ? (
                            <AiOutlineEye />
                          ) : (
                            <AiOutlineEyeInvisible />
                          )
                        ) : showConfirmPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                ) : (
                  <Box display="flex" flexDir="column" key={index}>
                    <FormLabel fontSize={{ base: "15px", md: "" }}>
                      {items.label}
                    </FormLabel>
                    <TextField
                      name={items.name}
                      type={items.type}
                      value={formik.values[items.name]}
                      onChange={formik.handleChange}
                    />
                  </Box>
                )
              )}
            </SimpleGrid>
            <HStack pt={5} justifyContent="space-between">
              <HStack fontSize={{ base: "12px", md: "15px" }}>
                <Field type="checkbox" name="rememberMe" />
                <Text>Remember me</Text>
              </HStack>
              <Link href="/forgotPassword" style={{ textDecoration: "none" }}>
                <Text color="#007AFF" fontSize={{ base: "12px", md: "15px" }}>
                  Forgot Password?
                </Text>
              </Link>
            </HStack>
            <HStack pt={5} fontSize={{ base: "12px", md: "15px" }}>
              <Field type="checkbox" name="agreeToTerms" />
              <Text>
                I agree to all the{" "}
                <span style={{ color: "#007AFF" }}>Terms</span> and{" "}
                <span style={{ color: "#007AFF" }}>Privacy policy</span>{" "}
              </Text>
            </HStack>
            <Box color="red" fontSize="12px" pt={2}>
              <ErrorMessage
                name="agreeToTerms"
                component="div"
                className="error"
              />
            </Box>
            <HStack
              justifyContent="space-between"
              pt={6}
              fontSize={{ base: "12px", md: "15px" }}
            >
              <Box
                as="button"
                type="submit"
                bg="#007AFF"
                color="white"
                width="300px"
                textAlign="center"
                borderRadius={5}
                p={2}
                fontSize={{ base: "12px", md: "15px" }}
                fontWeight="600"
              >
                {isLoading ? "Creating Account..." : " Create account"}
              </Box>
              <Box
                as="button"
                type="submit"
                bg="#2D3748"
                color="white"
                width="300px"
                textAlign="center"
                borderRadius={5}
                p={2}
                fontWeight="600"
              >
                <HStack
                  justifyContent={{ base: "center", md: "center" }}
                  gap={{ base: 1, md: 1 }}
                >
                  <FcGoogle style={{ fontSize: "1rem" }} />
                  <Text fontSize={{ base: "12px", md: "15px" }}>
                    Sign-in with google
                  </Text>
                </HStack>
              </Box>
            </HStack>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
