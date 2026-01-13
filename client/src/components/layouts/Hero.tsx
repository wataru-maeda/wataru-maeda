import { Button } from "@/components/elements/button";
import { Box, Heading, Text } from "@chakra-ui/react";
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
      {/* Grid Background (Subtle) */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        pointerEvents="none"
        opacity={0.03}
        style={{
          backgroundImage:
            "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Box zIndex={10} maxW="7xl" w="full" mx="auto">
        <Box
          mb={8}
          className="animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <Text
            fontFamily="mono"
            fontSize={{ base: "sm", md: "base" }}
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
          fontSize="12vw"
          lineHeight={0.9}
          letterSpacing="tighter"
          color="fg"
          mb={12}
          className="animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          WATARU
          <br />
          MAEDA
        </Heading>

        <Box
          className="animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a href="mailto:contact@watarumaeda.com">
            <Button
              size="lg"
              w={{ base: "full", sm: "auto" }}
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="medium"
              colorPalette="blue"
              css={{
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                transition: "all 0.3s",
                "&:hover": {
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                },
              }}
            >
              {t("hero.buttons.contact")}
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
