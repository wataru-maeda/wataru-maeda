import { Card, CardHeader, CardTitle } from "@/components/elements/card";
import { Badge } from "@/components/elements/badge";
import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/react";
import { TbDeviceMobile, TbServer, TbSparkles, TbRocket } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const icons = [TbDeviceMobile, TbServer, TbSparkles, TbRocket];

const serviceTech = [
  ["React", "Next.js", "Vite", "React Native", "Expo", "Swift", "Kotlin"],
  ["Node.js", "NestJS", "GraphQL", "REST API", "AWS", "GCP", "Terraform"],
  ["OpenAI", "Anthropic", "LangChain", "Ollama", "AWS", "GCP"],
  ["n8n", "GitHub Actions", "Terraform", "AWS", "GCP"],
];

export default function WhatIDo() {
  const { t } = useTranslation();
  const items = t("works.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <Box
      as="section"
      py={24}
      px={{ base: 6, md: 12, lg: 24 }}
      id="expertise"
    >
      <Box maxW="7xl" mx="auto">
        <Heading
          as="h2"
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          letterSpacing="tight"
          mb={12}
          className="scroll-animate"
        >
          Expertise
        </Heading>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
          {items.map((item, index) => {
            const Icon = icons[index];
            const tech = serviceTech[index];
            return (
              <Box
                key={index}
                className="scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-background h-full">
                  <CardHeader className="pb-4">
                    <Flex alignItems="center" gap={4} mb={4}>
                      <Box
                        w={14}
                        h={14}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="rgba(59, 130, 246, 0.1)"
                        borderRadius="lg"
                        flexShrink={0}
                      >
                        <Icon size={28} color="#3b82f6" />
                      </Box>
                      <CardTitle className="text-xl font-bold">
                        {item.title}
                      </CardTitle>
                    </Flex>
                    <Text color="fg.muted" lineHeight="relaxed" mb={4} fontSize="sm">
                      {item.description}
                    </Text>
                    <Flex flexWrap="wrap" gap={2}>
                      {tech.map((t, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="px-3 py-1 text-xs font-mono font-normal bg-secondary text-foreground rounded-md"
                        >
                          {t}
                        </Badge>
                      ))}
                    </Flex>
                  </CardHeader>
                </Card>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
