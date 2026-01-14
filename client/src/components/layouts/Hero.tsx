import { Button } from "@/components/elements/button";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      px={{ base: 6, md: 12, lg: 24 }}
      pt={20}
      pb={10}
      position="relative"
      overflow="hidden"
    >
      <Box zIndex={10} maxW="7xl" w="full" mx="auto">
        <Box
          mb={6}
          className="animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <Text
            fontFamily="mono"
            fontSize={{ base: "xs", md: "sm" }}
            letterSpacing="wider"
            color="fg.muted"
            textTransform="uppercase"
          >
            {t("hero.role")}
          </Text>
        </Box>

        <Heading
          as="h1"
          fontFamily="sans"
          fontWeight="black"
          fontSize={{ base: "7xl", md: "8xl", lg: "9xl" }}
          lineHeight={0.9}
          letterSpacing="tighter"
          color="fg"
          mb={8}
          className="animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          WATARU
          <br />
          <Box as="span" color="#3b82f6">
            MAEDA
          </Box>
        </Heading>

        <Flex
          gap={4}
          className="animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
          flexWrap="wrap"
        >
          <a href="mailto:contact@watarumaeda.com">
            <Button
              size="lg"
              px={8}
              py={6}
              fontSize="md"
              fontWeight="medium"
              colorPalette="blue"
              borderRadius="full"
            >
              {t("hero.buttons.contact")}
            </Button>
          </a>
          <a href="#expertise">
            <Button
              variant="outline"
              size="lg"
              px={8}
              py={6}
              fontSize="md"
              fontWeight="medium"
              borderRadius="full"
              borderWidth={2}
            >
              {t("hero.buttons.projects")}
            </Button>
          </a>
        </Flex>
      </Box>
    </Box>
  );
}
