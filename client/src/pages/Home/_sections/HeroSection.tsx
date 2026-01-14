import {
  Box,
  Card,
  Heading,
  Text,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import { useTranslation } from "react-i18next";

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

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <Card.Root bg="#0a0a0a" borderRadius="2xl" p={8} h="full" borderWidth="1px" borderColor="#1a1a1a">
      <Text
        fontFamily="mono"
        fontSize="xs"
        letterSpacing="wider"
        color="#999999"
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
        color="#ffffff"
      >
        WATARU
        <br />
        <Box as="span" color="#3b82f6">
          MAEDA
        </Box>
      </Heading>

      <Text fontSize="lg" color="#999999" mb={6} maxW="xl">
        {t("about.description")}
      </Text>

      <Flex gap={3} flexWrap="wrap">
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
    </Card.Root>
  );
}
