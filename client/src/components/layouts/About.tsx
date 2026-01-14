import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Card,
  Flex,
} from "@chakra-ui/react";
import { TbUsers, TbBriefcase, TbStack } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const statIcons = [TbUsers, TbBriefcase, TbStack];

export default function About() {
  const { t } = useTranslation();
  const stats = t('about.stats', { returnObjects: true }) as Array<{ value: string; label: string }>;

  return (
    <Box
      as="section"
      py={24}
      px={{ base: 6, md: 12, lg: 24 }}
      id="about"
    >
      <Box maxW="7xl" mx="auto">
        <Heading
          as="h2"
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          letterSpacing="tight"
          mb={6}
          className="scroll-animate"
        >
          {t('about.title')}
        </Heading>

        <Text
          fontSize={{ base: "lg", md: "xl" }}
          lineHeight="relaxed"
          color="fg.muted"
          maxW="3xl"
          mb={12}
          className="scroll-animate"
        >
          {t('about.description')}
        </Text>

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
          gap={4}
          mb={12}
          className="scroll-animate"
        >
          {stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <GridItem key={index}>
                <Card.Root
                  bg="bg"
                  borderRadius="xl"
                  p={6}
                  boxShadow="sm"
                  transition="all 0.3s"
                  css={{
                    '&:hover': {
                      boxShadow: 'md',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Flex alignItems="center" gap={4}>
                    <Box
                      w={12}
                      h={12}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="rgba(59, 130, 246, 0.1)"
                      borderRadius="lg"
                    >
                      <Icon size={24} color="#3b82f6" />
                    </Box>
                    <Box>
                      <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        lineHeight="1"
                        mb={1}
                        color="fg"
                      >
                        {stat.value}
                      </Text>
                      <Text
                        fontSize="sm"
                        color="fg.muted"
                        textTransform="uppercase"
                        letterSpacing="wide"
                      >
                        {stat.label}
                      </Text>
                    </Box>
                  </Flex>
                </Card.Root>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
