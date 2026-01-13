import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
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
          mb={16}
          className="scroll-animate"
        >
          {t('works.title')}
        </Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
        >
          {items.map((item, index) => {
            const Icon = icons[index];
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
                        }
                      }}
                    >
                      <Icon
                        size={40}
                        style={{
                          opacity: 0.8,
                          transition: 'all 0.3s',
                          color: '#3b82f6'
                        }}
                        className="group-hover:opacity-100"
                      />
                    </Box>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text color="fg.muted" lineHeight="relaxed">
                      {item.description}
                    </Text>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
