import { Stack } from "@chakra-ui/react";
import Card from "../Card/index";

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
    name: "E-commerce Guide",
    description:
      "Sign up for acquiring with a couple of clicks. No need for a long process.",
    id: 2,
  },
  {
    name: "Points Collection",
    description:
      "Sign up for acquiring with a couple of clicks. No need for a long process.",
    id: 3,
  },
];

const Body = () => {
  return (
    <Stack>
      {cardItems.map((card) => (
        <Card
          name={card.name}
          description={card.description}
          key={card.id}
        ></Card>
      ))}
    </Stack>
  );
};

export default Body;
