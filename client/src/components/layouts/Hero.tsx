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
          fontSize="10vw"
          lineHeight={0.9}
          letterSpacing="tighter"
          color="fg"
          className="animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          WATARU
          <br />
          MAEDA
        </Heading>
      </Box>
    </Box>
  );
}
