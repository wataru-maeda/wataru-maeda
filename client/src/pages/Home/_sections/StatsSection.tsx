import { Box, Flex, Text } from "@chakra-ui/react";
import { TbUsers, TbBriefcase, TbStack } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const statIcons = [TbUsers, TbBriefcase, TbStack];

export default function StatsSection() {
  const { t } = useTranslation();
  const stats = t("about.stats", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  return (
    <Flex direction="column" gap={4} h="full">
      {stats.map((stat, index) => {
        const Icon = statIcons[index];
        return (
          <Box
            key={index}
            flex={1}
            borderRadius="2xl"
            borderWidth="1px"
            borderColor="dark.cardBorder"
            bg="dark.card"
            p={6}
            transition="all 0.3s ease"
            cursor="pointer"
            _hover={{
              borderColor: "primary.500",
              transform: "translateY(-4px)",
              boxShadow:
                "0 8px 30px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.2)",
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.05) 80%, #0a0a0a 100%)",
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
                borderRadius="xl"
                flexShrink={0}
                color="primary.500"
              >
                <Icon size={24} />
              </Box>
              <Box>
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  lineHeight="1"
                  mb={1}
                  color="dark.textPrimary"
                >
                  {stat.value}
                </Text>
                <Text
                  fontSize="xs"
                  color="dark.textMuted"
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  {stat.label}
                </Text>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
}
