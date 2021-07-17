import React from "react";
import CardsContainer from "./CardsContainer";

export default {
  title: "Components/CardsContainer",
  component: CardsContainer,
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

export const PrimaryCardsContainer = () => <CardsContainer data={data} />;
