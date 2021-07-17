import React from "react";
import CardsContainer from "./CardsContainer";

export default {
  title: "Components/CardsContainer",
  component: CardsContainer,
  argTypes: {
    handleClicks: {
      table: {
        disable: true,
      },
    },
  },
};

const data = [
  {
    id: 1,
    image: "https://fallguys-skins.com/img/skins/s1/full/rare/xtwit.png",
    season: "Season 1",
    rarity: "epic",
    name: "Twit",
    score: 56,
  },
  {
    id: 2,
    image: "https://fallguys-skins.com/img/skins/s1/full/rare/xtwit.png",
    season: "Season 1",
    rarity: "epic",
    name: "Twit",
    score: 56,
  },
  {
    id: 3,
    image: "https://fallguys-skins.com/img/skins/s1/full/rare/xtwit.png",
    season: "Season 1",
    rarity: "epic",
    name: "Twit",
    score: 56,
  },
  {
    id: 4,
    image: "https://fallguys-skins.com/img/skins/s1/full/rare/xtwit.png",
    season: "Season 1",
    rarity: "epic",
    name: "Twit",
    score: 56,
  },
];

const Template = args => <CardsContainer {...args} />;
export const PrimaryCardsContainer = Template.bind({});
PrimaryCardsContainer.args = {
  title: "Text here",
  data: data,
  handleClicks: {
    add: () => {},
    remove: () => {},
  },
};
