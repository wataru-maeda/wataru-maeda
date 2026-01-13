import { Button } from "@/components/ui/button";
import { Box, Grid, GridItem, Heading, Flex, Text, Link as ChakraLink, VStack } from "@chakra-ui/react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      as="footer"
      py={24}
      px={{ base: 6, md: 12, lg: 24 }}
      bg="rgba(241, 245, 249, 0.3)"
    >
      <Box maxW="7xl" mx="auto">
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={16}
          mb={24}
          className="scroll-animate"
        >
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              letterSpacing="tighter"
              mb={8}
            >
              {t('contact.title')}
            </Heading>
            <ChakraLink href="mailto:contact@watarumaeda.com">
              <Button
                size="lg"
                fontSize="lg"
                px={8}
                py={6}
                borderRadius="full"
              >
                <Mail style={{ marginRight: '0.5rem', height: '1.25rem', width: '1.25rem' }} /> {t('contact.email')}
              </Button>
            </ChakraLink>
          </Box>

          <Flex
            flexDirection="column"
            justifyContent="end"
            alignItems={{ base: "start", lg: "end" }}
            gap={6}
          >
            <ChakraLink
              href="mailto:contact@watarumaeda.com"
              className="group"
              display="flex"
              alignItems="center"
              fontSize="2xl"
              fontWeight="medium"
              transition="color 0.3s"
              css={{
                '&:hover': {
                  color: 'var(--primary)'
                }
              }}
            >
              {t('contact.email')}{' '}
              <ArrowUpRight
                style={{
                  marginLeft: '0.5rem',
                  height: '1.5rem',
                  width: '1.5rem',
                  opacity: 0,
                  transition: 'all 0.3s'
                }}
                className="group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </ChakraLink>
            <ChakraLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              display="flex"
              alignItems="center"
              fontSize="2xl"
              fontWeight="medium"
              transition="color 0.3s"
              css={{
                '&:hover': {
                  color: 'var(--primary)'
                }
              }}
            >
              {t('contact.github')}{' '}
              <Github
                style={{
                  marginLeft: '0.5rem',
                  height: '1.5rem',
                  width: '1.5rem',
                  opacity: 0,
                  transition: 'all 0.3s'
                }}
                className="group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </ChakraLink>
            <ChakraLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              display="flex"
              alignItems="center"
              fontSize="2xl"
              fontWeight="medium"
              transition="color 0.3s"
              css={{
                '&:hover': {
                  color: 'var(--primary)'
                }
              }}
            >
              {t('contact.linkedin')}{' '}
              <Linkedin
                style={{
                  marginLeft: '0.5rem',
                  height: '1.5rem',
                  width: '1.5rem',
                  opacity: 0,
                  transition: 'all 0.3s'
                }}
                className="group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </ChakraLink>
          </Flex>
        </Grid>

        <Flex
          pt={8}
          borderTop="1px solid"
          borderColor="border"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          fontSize="sm"
          color="fg.muted"
        >
          <Text>© {new Date().getFullYear()} Wataru Maeda. All rights reserved.</Text>
          <Text mt={{ base: 2, md: 0 }} fontFamily="mono">Designed & Built with precision.</Text>
        </Flex>
      </Box>
    </Box>
  );
}
