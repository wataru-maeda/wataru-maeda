import { Box } from "@chakra-ui/react";
import About from "@/components/layouts/About";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/layouts/Hero";
import Philosophy from "@/components/layouts/Philosophy";
import TechStack from "@/components/layouts/TechStack";
import WhatIDo from "@/components/layouts/WhatIDo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LanguageSwitch } from "@/components/layouts/LanguageSwitch";

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
