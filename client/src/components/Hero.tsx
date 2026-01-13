import { Button } from "@/components/ui/button";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Box
      as="section"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      px={{ base: 6, md: 12, lg: 24 }}
      pt={20}
      pb={10}
      position="relative"
      overflow="hidden"
    >
      {/* Grid Background (Subtle) */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        pointerEvents="none"
        opacity={0.03}
        style={{
          backgroundImage: 'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <Box zIndex={10} maxW="7xl" w="full" mx="auto">
        <Box mb={8} className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Text
            fontFamily="mono"
            fontSize={{ base: "sm", md: "base" }}
            letterSpacing="wider"
            color="fg.muted"
            textTransform="uppercase"
          >
            {t.hero.role}
          </Text>
        </Box>

        <Heading
          as="h1"
          fontFamily="sans"
          fontWeight="black"
          fontSize="12vw"
          lineHeight={0.9}
          letterSpacing="tighter"
          color="fg"
          mb={8}
          className="animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          WATARU<br />MAEDA
        </Heading>

        <Text
          fontFamily="sans"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="normal"
          maxW="2xl"
          mb={12}
          color="fg.muted"
          className="animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          {t.hero.catchphrase.prefix}
          <Box as="span" color="fg" fontWeight="medium">{t.hero.catchphrase.highlight1}</Box>
          {t.hero.catchphrase.middle}
          <Box as="span" color="fg" fontWeight="medium">{t.hero.catchphrase.highlight2}</Box>
          {t.hero.catchphrase.suffix}
        </Text>

        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          gap={4}
          className="animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a href="mailto:contact@watarumaeda.com">
            <Button
              size="lg"
              w={{ base: "full", sm: "auto" }}
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="medium"
              colorPalette="blue"
              css={{
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                transition: 'all 0.3s',
                '&:hover': {
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
                }
              }}
            >
              {t.hero.buttons.contact}
            </Button>
          </a>
          <a href="#works">
            <Button
              variant="outline"
              size="lg"
              w={{ base: "full", sm: "auto" }}
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="medium"
              borderWidth={2}
              css={{
                transition: 'all 0.3s',
                '& svg': {
                  transition: 'transform 0.3s'
                },
                '&:hover svg': {
                  transform: 'translateX(0.25rem)'
                }
              }}
            >
              {t.hero.buttons.projects} <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
            </Button>
          </a>
        </Flex>
      </Box>
    </Box>
  );
}
