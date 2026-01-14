import { Box, Heading, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: TbMail,
      href: "mailto:contact@watarumaeda.com",
      label: "Email",
    },
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
      as="footer"
      py={24}
      px={{ base: 6, md: 12, lg: 24 }}
      bg="rgba(241, 245, 249, 0.3)"
    >
      <Box maxW="7xl" mx="auto">
        <Box mb={24} className="scroll-animate">
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            letterSpacing="tighter"
            mb={12}
          >
            {t('contact.title')}
          </Heading>

          <Flex gap={6} flexWrap="wrap">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <ChakraLink
                  key={index}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w={16}
                  h={16}
                  bg="#000000"
                  borderRadius="xl"
                  transition="all 0.3s"
                  css={{
                    '&:hover': {
                      backgroundColor: '#3b82f6',
                      transform: 'translateY(-4px)'
                    },
                    '& svg': {
                      transition: 'all 0.3s',
                      color: '#FFFFFF'
                    }
                  }}
                  aria-label={link.label}
                >
                  <Icon size={32} />
                </ChakraLink>
              );
            })}
          </Flex>
        </Box>

        <Flex
          pt={8}
          borderTop="1px solid"
          borderColor="border"
          justifyContent="center"
          alignItems="center"
          fontSize="sm"
          color="fg.muted"
        >
          <Text>© {new Date().getFullYear()} Wataru Maeda. All rights reserved.</Text>
        </Flex>
      </Box>
    </Box>
  );
}
