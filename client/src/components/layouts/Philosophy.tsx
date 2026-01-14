import { Box, Grid, GridItem, Heading, Text, Card } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Philosophy() {
  const { t } = useTranslation();
  const items = t("philosophy.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <Box as="section" py={24} px={{ base: 6, md: 12, lg: 24 }}>
      <Box maxW="7xl" mx="auto">
        <Heading
          as="h2"
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          letterSpacing="tight"
          mb={12}
          className="scroll-animate"
        >
          {t("philosophy.title")}
        </Heading>

        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          {items.map((item, index) => (
            <GridItem
              key={index}
              className="scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card.Root
                bg="bg"
                borderRadius="xl"
                p={6}
                boxShadow="sm"
                transition="all 0.3s"
                h="full"
                css={{
                  "&:hover": {
                    boxShadow: "md",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Heading
                  as="h3"
                  fontSize="lg"
                  fontWeight="bold"
                  mb={3}
                  color="fg"
                >
                  {item.title}
                </Heading>
                <Text fontSize="sm" lineHeight="relaxed" color="fg.muted">
                  {item.description}
                </Text>
              </Card.Root>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
