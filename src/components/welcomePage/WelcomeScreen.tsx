import {Box, Center, Heading,Link,Image} from "@chakra-ui/react"
import { logo } from "../../assets";

const WelcomeScreen = () => {
  return (
    <Box>
      <Center h="100vh">
        <Box maxW="400px">
          <Center>
            <Image src={logo} alt="Logo" boxSize={24} />
          </Center>
          <Heading textAlign="center" color="#000" mt={3}>
            Welcome to Capzul
          </Heading>
          <Center mt={4}>
            <Link style={{ textDecoration: "none" }} href="/signup">
              <Box
                fontSize="15px"
                p={3}
                borderRadius="md"
                bg="#007AFF"
                color="white"
              >
                Sign Up
              </Box>
            </Link>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}

export default WelcomeScreen