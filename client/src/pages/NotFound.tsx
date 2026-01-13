import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MdErrorOutline } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <Flex
      minH="100vh"
      w="full"
      alignItems="center"
      justifyContent="center"
      className="bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <Card className="w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <Flex justifyContent="center" mb={6}>
            <Box position="relative">
              <Box
                position="absolute"
                inset={0}
                bg="red.100"
                borderRadius="full"
                className="animate-pulse"
              />
              <Box position="relative">
                <MdErrorOutline style={{ height: '4rem', width: '4rem', color: '#ef4444' }} />
              </Box>
            </Box>
          </Flex>

          <Heading as="h1" fontSize="4xl" fontWeight="bold" color="slate.900" mb={2}>
            404
          </Heading>

          <Heading as="h2" fontSize="xl" fontWeight="semibold" color="slate.700" mb={4}>
            Page Not Found
          </Heading>

          <Text color="slate.600" mb={8} lineHeight="relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </Text>

          <Flex
            flexDirection={{ base: "column", sm: "row" }}
            gap={3}
            justifyContent="center"
          >
            <Button
              onClick={handleGoHome}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <IoHome style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
              Go Home
            </Button>
          </Flex>
        </CardContent>
      </Card>
    </Flex>
  );
}
