import { Container, VStack, Heading, Text, Button, Box, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to The Rocking Band's Tour
        </Heading>
        <Image src="https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBsaXZlfGVufDB8fHx8MTcxNzQ1MjE5OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rocking Band" borderRadius="md" boxShadow="lg" />
        <Text fontSize="xl" textAlign="center">
          Join us on our electrifying tour across the country. Experience the magic of live music like never before!
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Tickets
        </Button>
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Follow Us
          </Heading>
          <HStack spacing={4} justify="center">
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
