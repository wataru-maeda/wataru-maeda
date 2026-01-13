import { Box } from "@chakra-ui/react";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import TechStack from "@/components/TechStack";
import WhatIDo from "@/components/WhatIDo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LanguageSwitch } from "@/components/LanguageSwitch";

export default function Home() {
  useScrollAnimation();
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      bg="bg"
      color="fg"
      fontFamily="sans"
      css={{
        '::selection': {
          backgroundColor: 'var(--primary)',
          color: 'white'
        }
      }}
    >
      <LanguageSwitch />
      <Box as="main" flexGrow={1}>
        <Hero />
        <About />
        <WhatIDo />
        <TechStack />
        <Philosophy />
      </Box>
      <Footer />
    </Box>
  );
}
