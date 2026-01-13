import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Philosophy() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Box
      as="section"
      py={24}
      px={{ base: 6, md: 12, lg: 24 }}
      bg="fg"
      color="bg"
    >
      <Box maxW="7xl" mx="auto">
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          letterSpacing="tight"
          mb={24}
          color="bg"
          className="scroll-animate"
        >
          {t.philosophy.title}
        </Heading>

        <VStack gap={0} align="stretch">
          {t.philosophy.items.map((item, index) => (
            <Grid
              key={index}
              className="group scroll-animate"
              templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
              gap={8}
              py={12}
              borderTop="1px solid"
              borderColor="rgba(255, 255, 255, 0.2)"
              transition="background-color 0.5s"
              css={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }
              }}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GridItem colSpan={{ base: 1, md: 2 }}>
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontFamily="mono"
                  fontWeight="light"
                  color="rgba(255, 255, 255, 0.4)"
                  transition="color 0.3s"
                  css={{
                    '.group:hover &': {
                      color: 'var(--primary)'
                    }
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 1, md: 10 }}>
                <Heading
                  as="h3"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  mb={4}
                  color="bg"
                  transition="transform 0.3s"
                  css={{
                    '.group:hover &': {
                      transform: 'translateX(0.5rem)'
                    }
                  }}
                >
                  {item.title}
                </Heading>
                <Text
                  fontSize="lg"
                  color="rgba(255, 255, 255, 0.7)"
                  maxW="2xl"
                  transition="color 0.3s"
                  css={{
                    '.group:hover &': {
                      color: 'rgba(255, 255, 255, 0.9)'
                    }
                  }}
                >
                  {item.description}
                </Text>
              </GridItem>
            </Grid>
          ))}
          <Box borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.2)" />
        </VStack>
      </Box>
    </Box>
  );
}
