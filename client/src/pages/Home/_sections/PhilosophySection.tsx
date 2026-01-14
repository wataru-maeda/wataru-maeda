import { Box, Card, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { TbCode } from "react-icons/tb";
import { useTranslation } from "react-i18next";

export default function PhilosophySection() {
  const { t } = useTranslation();
  const philosophyItems = t("philosophy.items", {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}
      mb={4}
    >
      {philosophyItems.map((item, index) => (
        <GridItem key={`phil-${index}`}>
          <Card.Root
            bg="dark.card"
            borderRadius="2xl"
            p={6}
            h="full"
            borderWidth="1px"
            borderColor="dark.cardBorder"
          >
            <Flex alignItems="center" gap={3} mb={3}>
              <Box
                w={10}
                h={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="rgba(59, 130, 246, 0.1)"
                borderRadius="lg"
                flexShrink={0}
              >
                <TbCode size={20} color="primary.500" />
              </Box>
              <Heading as="h3" fontSize="md" fontWeight="bold" color="dark.textPrimary">
                {item.title}
              </Heading>
            </Flex>
            <Text fontSize="sm" color="dark.textMuted" lineHeight="relaxed">
              {item.description}
            </Text>
          </Card.Root>
        </GridItem>
      ))}
    </Grid>
  );
}
