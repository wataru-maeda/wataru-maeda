import { Box, Card, Heading, Text, Flex } from "@chakra-ui/react";
import { Button } from "@/components/elements/button";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <Card.Root bg="bg" borderRadius="2xl" p={8} boxShadow="sm" h="full">
      <Text
        fontFamily="mono"
        fontSize="xs"
        letterSpacing="wider"
        color="fg.muted"
        textTransform="uppercase"
        mb={4}
      >
        {t("hero.role")}
      </Text>

      <Heading
        as="h1"
        fontWeight="black"
        fontSize={{ base: "5xl", md: "7xl" }}
        lineHeight={0.9}
        letterSpacing="tighter"
        mb={6}
      >
        WATARU
        <br />
        <Box as="span" color="#3b82f6">
          MAEDA
        </Box>
      </Heading>

      <Text fontSize="lg" color="fg.muted" mb={6} maxW="xl">
        {t("about.description")}
      </Text>

      <Flex gap={3} flexWrap="wrap">
        <a href="mailto:contact@watarumaeda.com">
          <Button px={6} colorPalette="blue" borderRadius="full">
            {t("hero.buttons.contact")}
          </Button>
        </a>
        <a href="#expertise">
          <Button
            variant="outline"
            px={6}
            borderRadius="full"
            borderWidth={2}
          >
            {t("hero.buttons.projects")}
          </Button>
        </a>
      </Flex>
    </Card.Root>
  );
}
