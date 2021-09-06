import { VStack, SimpleGrid, Heading, Text } from "@chakra-ui/react";
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
    name: "Learn",
    description: "Starting learning how to code with the Salt Academy.",
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
      "Onboarding into any of our Salt products. Offer services ranging from acquiring to loyalty.",
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
    name: "Identity",
    description:
      "Begin collecting and redeeming loyatly points to attract more clients to your shops.",
    id: 3,
    svg: "src/Images/noun_Bunch of keys_1993195.svg",
  },
  {
    name: "Security",
    description:
      "Starting accepting installements or unlock funding for your business.",
    id: 4,
  },
  {
    name: "Accounting Connections",
    description:
      "Stream all of the accounting data directly to your personal platform.",
    id: 5,
    svg: "src/Images/noun_application programming interface_2307579.svg",
  },
];

const Body = () => {
  return (
    <VStack maxWidth="1175px" padding="12px 64px">
      <SimpleGrid gap="64px" columns={{ base: 1, md: 1, lg: 3 }}>
        {cardItems.map((card) => (
          <Card
            name={card.name}
            description={card.description}
            svg={card.svg}
            key={card.id}
          ></Card>
        ))}
      </SimpleGrid>

      <VStack p="48px 0px" alignItems="flex-start" alignSelf="stretch">
        <Heading fontSize="36px" fontWeight="extrabold">
          Product Guides
        </Heading>
        <Text>
          The perfect products to make your company <b>boom</b>.
        </Text>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap="32px 64px"
        alignSelf="center"
      >
        {longCardItems.map((card) => (
          <LongCard
            name={card.name}
            description={card.description}
            svg={card.svg}
            key={card.id}
          ></LongCard>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Body;
