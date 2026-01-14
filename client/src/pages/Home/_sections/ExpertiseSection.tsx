import {
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Badge } from "@/components/elements/badge";
import { TbDeviceMobile, TbServer, TbSparkles, TbRocket } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const expertiseIcons = [TbDeviceMobile, TbServer, TbSparkles, TbRocket];

const serviceTech = [
  ["React", "Next.js", "Vite", "React Native", "Expo", "Swift", "Kotlin"],
  ["Node.js", "NestJS", "GraphQL", "REST API", "AWS", "GCP", "Terraform"],
  ["OpenAI", "Anthropic", "LangChain", "Ollama", "AWS", "GCP"],
  ["n8n", "GitHub Actions", "Terraform", "AWS", "GCP"],
];

export default function ExpertiseSection() {
  const { t } = useTranslation();
  const expertiseItems = t("works.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={4}
      mb={4}
    >
      {expertiseItems.map((item, index) => {
        const Icon = expertiseIcons[index];
        const tech = serviceTech[index];
        return (
          <GridItem key={index}>
            <Card.Root bg="#0a0a0a" borderRadius="2xl" p={6} h="full" borderWidth="1px" borderColor="#1a1a1a">
              <Flex alignItems="center" gap={3} mb={4}>
                <Box
                  w={12}
                  h={12}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="rgba(59, 130, 246, 0.1)"
                  borderRadius="xl"
                  flexShrink={0}
                >
                  <Icon size={24} color="#3b82f6" />
                </Box>
                <Heading as="h3" fontSize="lg" fontWeight="bold" color="#ffffff">
                  {item.title}
                </Heading>
              </Flex>
              <Text fontSize="sm" color="#999999" mb={4} lineHeight="relaxed">
                {item.description}
              </Text>
              <Flex flexWrap="wrap" gap={2}>
                {tech.map((t, i) => (
                  <Badge
                    key={i}
                    bg="#1a1a1a"
                    color="#999999"
                    px={2}
                    py={1}
                    fontSize="xs"
                    fontFamily="mono"
                    borderRadius="md"
                  >
                    {t}
                  </Badge>
                ))}
              </Flex>
            </Card.Root>
          </GridItem>
        );
      })}
    </Grid>
  );
}
