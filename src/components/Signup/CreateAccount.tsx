/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, HStack, Text, Image, Center, Link} from "@chakra-ui/react"
import { logo, phones, playstore } from "../../assets";
import SignupForm from "./SignupForm";
import { FaApple } from "react-icons/fa";





const CreateAccount = () => {
  
  return (
    <Box h="100vh" overflowY="scroll">
      <Box display="flex" flexDir="row" width="100%">
        <Box
          display={{ base: "none", md: "block" }}
          width="50%"
          minH="100vh"
          bg="linear-gradient(324.93deg, #007AFF 0.74%, #0F70DA 100%)"
        >
          <Center
            display="flex"
            justifyContent="center"
            flexDirection="column"
            py="6%"
          >
            <Text
              color="white"
              fontSize="25px"
              fontWeight="600"
              textAlign="center"
              width="450px"
            >
              Social media shared today, tomorrow or by location
            </Text>
            <Box
              mt={5}
              borderRadius="50%"
              width="450px"
              minH="450px"
              position="relative"
              bg="linear-gradient(324.93deg, #0F70DA 0.74%, #007AFF 100%)"
            >
              <Image
                src={phones}
                boxSize={500}
                alt="Phones"
                position="absolute"
                zIndex="1"
                top="0"
                right="0"
              />
            </Box>
          </Center>
        </Box>
        <Box
          width={{ base: "100%", md: "50%" }}
          // py={{ base: "", md: 4 }}
          px={5}
          pt={{ base: 5, md: "" }}
        >
          <HStack>
            <Image src={logo} alt="logo" boxSize={{ base: 38, md: 50 }} />
            <Text fontWeight="bold" fontSize="larger">
              Capzul
            </Text>
          </HStack>
          <Text fontSize="23px" fontWeight="bold" mt={{ base: 4, md: 4 }}>
            Create account
          </Text>
          <Text fontSize="15px" pt={1}>
            For business, band or celebrity.
          </Text>
          <SignupForm />
          <Center mt={6}>
            <Text fontSize={{ base: "12px", md: "15px" }}>
              Don’t have an account?{" "}
              <span style={{ color: "#007AFF" }}>
                <Link href="/" style={{ textDecoration: "none" }}>
                  Log In
                </Link>
              </span>
            </Text>
          </Center>
          <HStack gap={10} mt={4} pb={{base:"5",md:""}}>
            <HStack bg="#000000" borderRadius={6} p={1} width="210px">
              <Image src={playstore} alt="playstore" boxSize={8} pl={2} />
              <Text fontSize={{ base: "10px", md: "10px" }} color="white">
                GET IT ON{" "}
                <span style={{ fontSize: "15px" }}>
                  <br />
                  Google Play
                </span>
              </Text>
            </HStack>
            <HStack bg="#000000" borderRadius={6} p={1} width="210px">
              <FaApple style={{ color: "white", fontSize: "2rem" }} />
              <Text fontSize="10px" color="white">
                Download on the{" "}
                <span style={{ fontSize: "15px" }}>
                  <br />
                  App Store
                </span>
              </Text>
            </HStack>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateAccount
