import { Box, Grid, GridItem } from "@chakra-ui/react";
import { LanguageSwitch } from "@/components/layouts/LanguageSwitch";
import HeroSection from "./_sections/HeroSection";
import StatsSection from "./_sections/StatsSection";
import ExpertiseSection from "./_sections/ExpertiseSection";
import PhilosophySection from "./_sections/PhilosophySection";
import FooterSection from "./_sections/FooterSection";

export default function Home() {
  return (
    <Box
      minH="100vh"
      bg="dark.bg"
      color="dark.textPrimary"
      fontFamily="sans"
      px={{ base: 4, md: 6, lg: 8 }}
      py={8}
    >
      <LanguageSwitch />

      <Box maxW="8xl" mx="auto">
        {/* Hero + Stats Bento Grid */}
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={4} mb={4}>
          <GridItem>
            <HeroSection />
          </GridItem>
          <GridItem>
            <StatsSection />
          </GridItem>
        </Grid>

        {/* Expertise Bento Grid */}
        <ExpertiseSection />

        {/* Philosophy Bento Grid */}
        <PhilosophySection />

        {/* Footer */}
        <FooterSection />
      </Box>
    </Box>
  );
}
