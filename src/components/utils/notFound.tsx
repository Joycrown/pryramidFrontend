// import { Suspense } from "react";
import { Center, Box, Heading, Text, Link } from "@chakra-ui/react";
import {
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";

const NotFound = () => {
    
    const error = useRouteError() as Error;
    if (!isRouteErrorResponse(error)) {
      return null;
  }
  console.log(error.data)
  if (isRouteErrorResponse(error)) {
    
    return (
      <Box mx="auto">
        <Center h="100vh">
          <Box w="400px" maxW="400px">
            <Heading textAlign="center" color="#000">
              404
            </Heading>
            <Center my="2rem" boxShadow="2xl" h="70px" borderRadius={5}>
              <Text textAlign="center">{error.data}</Text>
            </Center>

            <Center>
              <Link
                href="/welcome"
                _focus={{ outline: "none" }}
                textAlign="center"
                color="brand.primary"
              >
                Go back
              </Link>
            </Center>
          </Box>
        </Center>
      </Box>
    );
  }
};

export default NotFound;
