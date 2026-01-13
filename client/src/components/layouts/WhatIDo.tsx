import { Box, Grid, GridItem, Heading, Text, Flex } from "@chakra-ui/react";
import { TbDeviceMobile, TbServer, TbSparkles, TbRocket } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const icons = [TbDeviceMobile, TbServer, TbSparkles, TbRocket];

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
          mb={20}
          className="scroll-animate"
        >
          {t('works.title')}
        </Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={{ base: 12, lg: 8 }}
        >
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <GridItem
                key={index}
                className="scroll-animate group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Flex
                  flexDirection="column"
                  alignItems="start"
                  gap={6}
                  py={8}
                  px={6}
                  h="full"
                  position="relative"
                  transition="all 0.3s"
                  _before={{
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "2px",
                    bg: "transparent",
                    transition: "all 0.3s"
                  }}
                  css={{
                    '&:hover::before': {
                      backgroundColor: 'var(--primary)'
                    },
                    '&:hover': {
                      transform: 'translateX(8px)'
                    }
                  }}
                >
                  {/* Large Icon */}
                  <Box
                    transition="all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                    css={{
                      '.group:hover &': {
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <Icon
                      size={64}
                      style={{
                        color: '#3b82f6',
                        strokeWidth: 1.5
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <Box flex={1}>
                    <Heading
                      as="h3"
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="bold"
                      mb={3}
                      color="fg"
                      lineHeight="tight"
                    >
                      {item.title}
                    </Heading>
                    <Text
                      fontSize="md"
                      color="fg.muted"
                      lineHeight="relaxed"
                    >
                      {item.description}
                    </Text>
                  </Box>

                  {/* Subtle Number */}
                  <Text
                    position="absolute"
                    top={4}
                    right={4}
                    fontSize="sm"
                    fontFamily="mono"
                    fontWeight="medium"
                    color="rgba(0, 0, 0, 0.1)"
                    transition="all 0.3s"
                    css={{
                      '.group:hover &': {
                        color: 'rgba(37, 99, 235, 0.2)'
                      }
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
