import {
  Box,
  Grid,
  GridItem,
  Card,
  Heading,
  Text,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Button } from "@/components/elements/button";
import { Badge } from "@/components/elements/badge";
import {
  TbUsers,
  TbBriefcase,
  TbStack,
  TbDeviceMobile,
  TbServer,
  TbSparkles,
  TbRocket,
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
  TbCode,
} from "react-icons/tb";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LanguageSwitch } from "@/components/layouts/LanguageSwitch";
import { useTranslation } from "react-i18next";

const statIcons = [TbUsers, TbBriefcase, TbStack];
const expertiseIcons = [TbDeviceMobile, TbServer, TbSparkles, TbRocket];

const serviceTech = [
  ["React", "Next.js", "Vite", "React Native", "Expo", "Swift", "Kotlin"],
  ["Node.js", "NestJS", "GraphQL", "REST API", "AWS", "GCP", "Terraform"],
  ["OpenAI", "Anthropic", "LangChain", "Ollama", "AWS", "GCP"],
  ["n8n", "GitHub Actions", "Terraform", "AWS", "GCP"],
];

export default function Home() {
  useScrollAnimation();
  const { t } = useTranslation();

  const stats = t("about.stats", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;
  const expertiseItems = t("works.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const philosophyItems = t("philosophy.items", {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;

  const socialLinks = [
    { icon: TbMail, href: "mailto:contact@watarumaeda.com", label: "Email" },
    {
      icon: TbBrandGithub,
      href: "https://github.com/wataru-maeda",
      label: "GitHub",
      external: true,
    },
    {
      icon: TbBrandLinkedin,
      href: "https://www.linkedin.com/in/wataru-maeda",
      label: "LinkedIn",
      external: true,
    },
  ];

  return (
    <Box
      minH="100vh"
      bg="bg"
      color="fg"
      fontFamily="sans"
      px={{ base: 4, md: 6, lg: 8 }}
      py={8}
      css={{
        "::selection": {
          backgroundColor: "var(--primary)",
          color: "white",
        },
      }}
    >
      <LanguageSwitch />

      <Box maxW="1400px" mx="auto">
        {/* Hero + Stats Bento Grid */}
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={4} mb={4}>
          {/* Hero Card */}
          <GridItem>
            <Card.Root bg="bg" borderRadius="2xl" p={8} boxShadow="sm" h="full">
              <Text
                fontFamily="mono"
                fontSize="xs"
                letterSpacing="wider"
                color="fg.muted"
                textTransform="uppercase"
                mb={4}
              >
                {t("hero.role")}
              </Text>

              <Heading
                as="h1"
                fontWeight="black"
                fontSize={{ base: "5xl", md: "7xl" }}
                lineHeight={0.9}
                letterSpacing="tighter"
                mb={6}
              >
                WATARU
                <br />
                <Box as="span" color="#3b82f6">
                  MAEDA
                </Box>
              </Heading>

              <Text fontSize="lg" color="fg.muted" mb={6} maxW="xl">
                {t("about.description")}
              </Text>

              <Flex gap={3} flexWrap="wrap">
                <a href="mailto:contact@watarumaeda.com">
                  <Button
                    size="md"
                    px={6}
                    colorPalette="blue"
                    borderRadius="full"
                  >
                    {t("hero.buttons.contact")}
                  </Button>
                </a>
                <a href="#expertise">
                  <Button
                    variant="outline"
                    size="md"
                    px={6}
                    borderRadius="full"
                    borderWidth={2}
                  >
                    {t("hero.buttons.projects")}
                  </Button>
                </a>
              </Flex>
            </Card.Root>
          </GridItem>

          {/* Stats Cards */}
          <GridItem>
            <Flex direction="column" gap={4} h="full">
              {stats.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <Card.Root
                    key={index}
                    bg="bg"
                    borderRadius="2xl"
                    p={6}
                    boxShadow="sm"
                    flex={1}
                  >
                    <Flex alignItems="center" gap={4}>
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
                      <Box>
                        <Text
                          fontSize="3xl"
                          fontWeight="bold"
                          lineHeight="1"
                          mb={1}
                        >
                          {stat.value}
                        </Text>
                        <Text
                          fontSize="xs"
                          color="fg.muted"
                          textTransform="uppercase"
                          letterSpacing="wide"
                        >
                          {stat.label}
                        </Text>
                      </Box>
                    </Flex>
                  </Card.Root>
                );
              })}
            </Flex>
          </GridItem>
        </Grid>

        {/* Expertise + Philosophy Bento Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={4}
          mb={4}
        >
          {/* Expertise Cards */}
          {expertiseItems.map((item, index) => {
            const Icon = expertiseIcons[index];
            const tech = serviceTech[index];
            return (
              <GridItem
                key={index}
                colSpan={{ base: 1, lg: index % 3 === 0 ? 2 : 1 }}
              >
                <Card.Root
                  bg="bg"
                  borderRadius="2xl"
                  p={6}
                  boxShadow="sm"
                  h="full"
                >
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
                    <Heading as="h3" fontSize="lg" fontWeight="bold">
                      {item.title}
                    </Heading>
                  </Flex>
                  <Text
                    fontSize="sm"
                    color="fg.muted"
                    mb={4}
                    lineHeight="relaxed"
                  >
                    {item.description}
                  </Text>
                  <Flex flexWrap="wrap" gap={2}>
                    {tech.map((t, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="px-2 py-1 text-xs font-mono rounded-md"
                      >
                        {t}
                      </Badge>
                    ))}
                  </Flex>
                </Card.Root>
              </GridItem>
            );
          })}

          {/* Philosophy Cards */}
          {philosophyItems.slice(0, 2).map((item, index) => (
            <GridItem key={`phil-${index}`}>
              <Card.Root
                bg="bg"
                borderRadius="2xl"
                p={6}
                boxShadow="sm"
                h="full"
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
                    <TbCode size={20} color="#3b82f6" />
                  </Box>
                  <Heading as="h3" fontSize="md" fontWeight="bold">
                    {item.title}
                  </Heading>
                </Flex>
                <Text fontSize="sm" color="fg.muted" lineHeight="relaxed">
                  {item.description}
                </Text>
              </Card.Root>
            </GridItem>
          ))}
        </Grid>

        {/* Philosophy Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={4}
          mb={4}
        >
          {philosophyItems.slice(2).map((item, index) => (
            <GridItem key={`phil-rest-${index}`}>
              <Card.Root
                bg="bg"
                borderRadius="2xl"
                p={6}
                boxShadow="sm"
                h="full"
              >
                <Heading as="h3" fontSize="md" fontWeight="bold" mb={3}>
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="fg.muted" lineHeight="relaxed">
                  {item.description}
                </Text>
              </Card.Root>
            </GridItem>
          ))}
        </Grid>

        {/* Footer */}
        <Box py={12}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            mb={6}
          >
            {t("contact.title")}
          </Heading>
          <Flex gap={3} mb={8}>
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <ChakraLink
                  key={index}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w={12}
                  h={12}
                  bg="rgba(59, 130, 246, 0.1)"
                  borderRadius="xl"
                  transition="all 0.3s"
                  css={{
                    "&:hover": {
                      backgroundColor: "#3b82f6",
                      transform: "translateY(-2px)",
                    },
                    "& svg": {
                      transition: "color 0.3s",
                      color: "#3b82f6",
                    },
                    "&:hover svg": {
                      color: "#FFFFFF",
                    },
                  }}
                  aria-label={link.label}
                >
                  <Icon size={24} />
                </ChakraLink>
              );
            })}
          </Flex>
          <Text
            fontSize="sm"
            color="fg.muted"
            textAlign="center"
            pt={8}
            borderTop="1px solid"
            borderColor="border"
          >
            © {new Date().getFullYear()} Wataru Maeda. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
