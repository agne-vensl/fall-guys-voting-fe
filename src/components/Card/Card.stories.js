import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = args => <Card {...args} />;

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
  data: {
    id: 1,
    image: "https://fallguys-skins.com/img/skins/s1/full/rare/xtwit.png",
    season: "Season 1",
    rarity: "epic",
    name: "Twit",
    score: 56,
  },
};
