import { Box, Center, Heading, Link, Image, Text } from "@chakra-ui/react";
import { logo } from "../../assets";
import { useFormContext } from "../utils/context";

const Home = () => {
  const { formData} = useFormContext();
console.log(formData)
  return (
    <Box>
      <Center h="100vh">
        <Box maxW="400px">
          <Center>
            <Image src={logo} alt="Logo" boxSize={24} />
          </Center>
          <Heading textAlign="center" color="#000" mt={3}>
            Welcome to Capzul {formData?.last_name}
          </Heading>
          <Center>
          <Text>Enjoy your stay in Capzul !</Text>
          </Center>
          <Center mt={4}>
            <Link style={{ textDecoration: "none" }} href="/">
              <Box
                fontSize="15px"
                p={3}
                borderRadius="md"
                bg="#007AFF"
                color="white"
              >
                Log out
              </Box>
            </Link>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default Home;
