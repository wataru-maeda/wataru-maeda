import { Box, Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

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
  );
}
