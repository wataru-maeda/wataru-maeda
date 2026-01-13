import { Box, Flex, Button } from "@chakra-ui/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <Flex
      className={cn(className)}
      position="fixed"
      top={6}
      right={6}
      zIndex={50}
      alignItems="center"
      gap={2}
      bg="rgba(255, 255, 255, 0.8)"
      backdropFilter="blur(8px)"
      p={1}
      borderRadius="full"
      border="1px solid"
      borderColor="border"
      boxShadow="sm"
    >
      <Button
        onClick={() => setLanguage('en')}
        px={3}
        py={1}
        borderRadius="full"
        fontSize="xs"
        fontWeight="bold"
        transition="all 0.3s"
        bg={language === 'en' ? 'primary' : 'transparent'}
        color={language === 'en' ? 'white' : 'fg.muted'}
        boxShadow={language === 'en' ? 'sm' : 'none'}
        css={{
          '&:hover': {
            color: language === 'en' ? 'white' : 'var(--foreground)'
          }
        }}
      >
        EN
      </Button>
      <Button
        onClick={() => setLanguage('ja')}
        px={3}
        py={1}
        borderRadius="full"
        fontSize="xs"
        fontWeight="bold"
        transition="all 0.3s"
        bg={language === 'ja' ? 'primary' : 'transparent'}
        color={language === 'ja' ? 'white' : 'fg.muted'}
        boxShadow={language === 'ja' ? 'sm' : 'none'}
        css={{
          '&:hover': {
            color: language === 'ja' ? 'white' : 'var(--foreground)'
          }
        }}
      >
        JP
      </Button>
    </Flex>
  );
}
