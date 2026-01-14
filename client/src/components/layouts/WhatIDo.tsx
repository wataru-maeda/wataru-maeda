import { Card, CardHeader, CardTitle } from "@/components/elements/card";
import { Badge } from "@/components/elements/badge";
import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/react";
import { TbDeviceMobile, TbServer, TbSparkles, TbRocket } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const icons = [TbDeviceMobile, TbServer, TbSparkles, TbRocket];

// Map technologies to each service
const serviceTech = [
  // Web/Mobile App Development
  ["React", "Next.js", "Vite", "React Native", "Expo", "Swift", "Kotlin"],
  // Backend/Infra
  ["Node.js", "NestJS", "GraphQL", "REST API", "AWS", "GCP", "Terraform"],
  // Generative AI Integration
  ["OpenAI", "Anthropic", "LangChain", "Ollama", "AWS", "GCP"],
  // Automation Support
  ["n8n", "GitHub Actions", "Terraform", "AWS", "GCP"]
];

export default function WhatIDo() {
  const { t } = useTranslation();
  const items = t('works.items', { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <Box
      as="section"
      py={24}
      px={{ base: 6, md: 12, lg: 24 }}
      bg="rgba(241, 245, 249, 0.3)"
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
          Expertise
        </Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {items.map((item, index) => {
            const Icon = icons[index];
            const tech = serviceTech[index];
            return (
              <Box
                key={index}
                className="scroll-animate group"
                style={{ animationDelay: `${index * 0.1}s` }}
                h="full"
              >
                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-background h-full">
                  <CardHeader className="pb-4">
                    <Box
                      w={16}
                      h={16}
                      mb={6}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="bg.subtle"
                      borderRadius="xl"
                      transition="all 0.3s"
                      css={{
                        '.group:hover &': {
                          backgroundColor: 'rgba(37, 99, 235, 0.1)'
                        },
                        '& svg': {
                          transition: 'all 0.3s',
                          color: '#000000'
                        },
                        '.group:hover & svg': {
                          color: '#3b82f6'
                        }
                      }}
                    >
                      <Icon size={40} />
                    </Box>
                    <CardTitle className="text-xl font-bold mb-4">{item.title}</CardTitle>
                    <Text color="fg.muted" lineHeight="relaxed" mb={4}>
                      {item.description}
                    </Text>
                    <Flex flexWrap="wrap" gap={2} mt={4}>
                      {tech.map((t, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="px-3 py-1 text-xs font-mono font-normal bg-secondary hover:bg-secondary/80 text-foreground rounded-md"
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
