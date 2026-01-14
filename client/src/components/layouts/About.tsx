import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const stats = t('about.stats', { returnObjects: true }) as Array<{ value: string; label: string }>;

  return (
    <Box
      as="section"
      py={24}
      px={{ base: 6, md: 12, lg: 24 }}
    >
      <Box maxW="7xl" mx="auto">
        {/* Header */}
        <Box mb={16} className="scroll-animate">
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            letterSpacing="tight"
            mb={6}
          >
            {t('about.title')}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight="relaxed"
            color="fg.muted"
            maxW="3xl"
          >
            {t('about.description')}
          </Text>
        </Box>

        {/* Stats Grid with Profile */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
          mb={16}
        >
          {/* Profile Image Card */}
          <GridItem
            className="scroll-animate group"
            style={{ animationDelay: "0.1s" }}
          >
            <Box
              position="relative"
              h="full"
              minH={64}
              overflow="hidden"
              borderRadius="xl"
              bg="bg.subtle"
              transition="all 0.3s"
              css={{
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <Image
                src="/images/profile-wataru.jpg"
                alt="Wataru Maeda"
                objectFit="cover"
                w="full"
                h="full"
                filter="grayscale(100%)"
                transition="all 0.7s"
                css={{
                  ".group:hover &": {
                    filter: "grayscale(0%)",
                    transform: "scale(1.05)"
                  },
                }}
              />
              <Box
                position="absolute"
                inset={0}
                boxShadow="inset 0 0 0 1px rgba(0, 0, 0, 0.1)"
                pointerEvents="none"
              />
            </Box>
          </GridItem>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <GridItem
              key={index}
              className="scroll-animate group"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <Box
                h="full"
                minH={64}
                p={8}
                borderRadius="xl"
                bg="bg.subtle"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                transition="all 0.3s"
                css={{
                  '&:hover': {
                    backgroundColor: 'rgba(37, 99, 235, 0.05)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="bold"
                  lineHeight="1"
                  mb={3}
                  color="fg"
                  transition="color 0.3s"
                  css={{
                    '.group:hover &': {
                      color: 'var(--primary)'
                    }
                  }}
                >
                  {stat.value}
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  color="fg.muted"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  {stat.label}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>

        {/* Vision Quote */}
        <Box
          className="scroll-animate"
          style={{ animationDelay: "0.5s" }}
          maxW="4xl"
          mx="auto"
          textAlign="center"
        >
          <Text
            as="blockquote"
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="semibold"
            lineHeight="tight"
            color="fg"
            position="relative"
            py={8}
          >
            <Box
              as="span"
              position="absolute"
              top={0}
              left="50%"
              transform="translateX(-50%)"
              w={12}
              h={1}
              bg="primary"
              borderRadius="full"
            />
            "{t('about.vision')}"
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
