import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const icons = [
  "/images/icon-web-mobile.png",
  "/images/icon-backend.png",
  "/images/icon-ai.png",
  "/images/icon-prototype.png"
];

export default function WhatIDo() {
  const { language } = useLanguage();
  const t = translations[language];

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
          {t.works.title}
        </Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
        >
          {t.works.items.map((item, index) => (
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
                    p={3}
                    bg="bg.subtle"
                    borderRadius="xl"
                    transition="background-color 0.3s"
                    css={{
                      '.group:hover &': {
                        backgroundColor: 'rgba(37, 99, 235, 0.1)'
                      }
                    }}
                  >
                    <Image
                      src={icons[index]}
                      alt={item.title}
                      w="full"
                      h="full"
                      objectFit="contain"
                      opacity={0.8}
                      transition="opacity 0.3s"
                      css={{
                        '.group:hover &': {
                          opacity: 1
                        }
                      }}
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
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
