import { Box, Card, Flex, Text } from "@chakra-ui/react";
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
          <Card.Root
            key={index}
            bg="#0a0a0a"
            borderRadius="2xl"
            p={6}
            flex={1}
            borderWidth="1px"
            borderColor="#1a1a1a"
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
              >
                <Icon size={24} color="#3b82f6" />
              </Box>
              <Box>
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  lineHeight="1"
                  mb={1}
                  color="#ffffff"
                >
                  {stat.value}
                </Text>
                <Text
                  fontSize="xs"
                  color="#999999"
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  {stat.label}
                </Text>
              </Box>
            </Flex>
          </Card.Root>
        );
      })}
    </Flex>
  );
}
