import { Badge } from "@/components/ui/badge";
import { Box, Grid, GridItem, Heading, Text, Flex, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const techCategories = [
  {
    category: "Core",
    items: ["TypeScript"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vite", "React Native", "Expo"]
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "GraphQL", "REST API"]
  },
  {
    category: "Infrastructure",
    items: ["AWS", "GCP", "Terraform"]
  },
  {
    category: "Native",
    items: ["Swift", "Kotlin"]
  }
];

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      py={24}
      px={{ base: 6, md: 12, lg: 24 }}
    >
      <Box maxW="7xl" mx="auto">
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          letterSpacing="tight"
          mb={16}
          className="scroll-animate"
        >
          {t('tech.title')}
        </Heading>

        <VStack gap={12} align="stretch">
          {techCategories.map((cat, index) => (
            <Grid
              key={index}
              templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
              gap={8}
              alignItems="baseline"
              borderBottom="1px solid"
              borderColor="rgba(226, 232, 240, 0.4)"
              pb={8}
              css={{
                '&:last-child': {
                  borderBottom: 'none'
                }
              }}
              className="scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GridItem colSpan={{ base: 1, md: 3 }}>
                <Heading
                  as="h3"
                  fontSize="lg"
                  fontFamily="mono"
                  fontWeight="medium"
                  color="fg.muted"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  {cat.category}
                </Heading>
              </GridItem>
              <GridItem colSpan={{ base: 1, md: 9 }}>
                <Flex flexWrap="wrap" gap={3}>
                  {cat.items.map((item, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="px-4 py-2 text-base font-mono font-normal bg-secondary hover:bg-secondary/80 text-foreground rounded-md"
                    >
                      {item}
                    </Badge>
                  ))}
                </Flex>
              </GridItem>
            </Grid>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
