import { VStack, SimpleGrid, Heading, HStack, Text } from "@chakra-ui/react";
import Card from "../Card";
import LongCard from "../Card Long";

const cardItems = [
  {
    name: "Guides",
    description:
      "Find the perfect guide for your company. Follow one of our guides and connect to Salt within minutes.",
    id: 0,
  },
  {
    name: "APIs",
    description:
      "If you know what you are looking for go staight to our API definitions and begin making funcation calls.",
    id: 1,
  },
  {
    name: "Get API Tokens",
    description:
      "Sign up for Salt with a couple of clicks. No need for any long processes.",
    id: 2,
  },
];

const longCardItems = [
  {
    name: "Onboarding",
    description:
      "Onboarding into any of our Salt products. Offer services ranging from acquiring to loyalty to your clients.",
    id: 0,
  },
  {
    name: "Terminal Transactions",
    description:
      "Link any device to your Salt terminal and begin using your handware to its full potential.",
    id: 1,
  },
  {
    name: "E-Commerce",
    description:
      "Accept and process payments from any online store or marketplace.",
    id: 2,
  },
  {
    name: "Point Collection",
    description:
      "Begin collecting and redeeming loyatly points to attract more clients to your shops.",
    id: 3,
  },
  {
    name: "Loans",
    description:
      "Starting accepting installements or unlock funding for your business.",
    id: 4,
  },
  {
    name: "Accounting Connections",
    description:
      "Stream all of the accounting data directly to your personal platform.",
    id: 5,
  },
];

const Body = () => {
  return (
    <VStack alignItems="flex-start" alignSelf="stretch">
      <HStack
        spacing="32px"
        p="32px"
        justifyContent="space-evenly"
        alignItems="center"
        alignSelf="stretch"
      >
        {cardItems.map((card) => (
          <Card
            name={card.name}
            description={card.description}
            key={card.id}
          ></Card>
        ))}
      </HStack>

      <VStack p="12px 64px" alignItems="flex-start" alignSelf="stretch">
        <Heading size="lg">
          Salt <b>Products</b>
        </Heading>
        <Text>
          The perfect products to make your company <b>boom</b>.
        </Text>
      </VStack>

      <SimpleGrid
        columns={2}
        spacing="32px 64px"
        p="12px 64px"
        alignItems="center"
        alignSelf="stretch"
        minChildWidth="400px"
      >
        {longCardItems.map((card) => (
          <LongCard
            name={card.name}
            description={card.description}
            key={card.id}
          ></LongCard>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Body;
