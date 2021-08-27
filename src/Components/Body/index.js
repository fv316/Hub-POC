import { SimpleGrid } from "@chakra-ui/react";
import Card from "../Card";

const cardItems = [
  {
    name: "Onboarding Guide",
    description:
      "Sign up for acquiring with a couple of clicks. No need for a long process.",
    id: 0,
  },
  {
    name: "Terminal Transactions",
    description:
      "Link devices to the terminal and use those features to their full potential",
    id: 1,
  },
  {
    name: "E-Commerce Guide",
    description:
      "Sign up for acquiring with a couple of clicks. No need for a long process.",
    id: 2,
  },
  {
    name: "Point Collection",
    description:
      "Sign up for acquiring with a couple of clicks. No need for a long process.",
    id: 3,
  },
];

const Body = () => {
  return (
    <SimpleGrid
      columns={2}
      spacing={10}
      padding="32px"
      minChildWidth="200px"
      alignSelf="stretch"
    >
      {cardItems.map((card) => (
        <Card
          name={card.name}
          description={card.description}
          key={card.id}
        ></Card>
      ))}
    </SimpleGrid>
  );
};

export default Body;
