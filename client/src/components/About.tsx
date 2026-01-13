import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Box
      as="section"
      py={24}
      px={{ base: 6, md: 12, lg: 24 }}
      borderTop="1px solid"
      borderColor="rgba(226, 232, 240, 0.4)"
    >
      <Grid
        maxW="7xl"
        mx="auto"
        templateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }}
        gap={{ base: 12, lg: 24 }}
      >
        <GridItem colSpan={{ base: 1, lg: 5 }} className="scroll-animate">
          <Flex flexDirection="column" gap={8}>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              letterSpacing="tight"
              position="sticky"
              top={24}
              zIndex={10}
              mixBlendMode="difference"
              color="fg"
            >
              {t.about.title}
            </Heading>
            <Box
              position="relative"
              w={{ base: 48, md: 64 }}
              aspectRatio={1}
              overflow="hidden"
              bg="rgba(241, 245, 249, 0.2)"
              mt={{ base: 8, lg: 0 }}
            >
              <Image
                src="/images/profile-wataru.jpg"
                alt="Wataru Maeda"
                objectFit="cover"
                w="full"
                h="full"
                filter="grayscale(100%)"
                transition="all 0.7s"
                css={{
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
              <Box
                position="absolute"
                inset={0}
                boxShadow="inset 0 0 0 1px rgba(0, 0, 0, 0.1)"
                pointerEvents="none"
              />
            </Box>
          </Flex>
        </GridItem>

        <GridItem
          colSpan={{ base: 1, lg: 7 }}
          className="scroll-animate"
          style={{ animationDelay: "0.2s" }}
        >
          <Flex flexDirection="column" justifyContent="center" gap={12}>
            <Box maxW="none">
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                lineHeight="relaxed"
                color="fg.muted"
              >
                {t.about.description}
              </Text>
            </Box>

            <Box
              position="relative"
              pl={8}
              borderLeft="4px solid"
              borderColor="primary"
              py={2}
            >
              <Text
                as="blockquote"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                lineHeight="tight"
                color="fg"
              >
                "{t.about.vision}"
              </Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
