import { buySideText } from "./descriptions/buySide";
import { desertRoseText } from "./descriptions/desertRose";
import { fakeParisText } from "./descriptions/fakeParis";
import { lapLandText } from "./descriptions/lapLand";
import { pinkHairLabText } from "./descriptions/pinkHairLab";
import { staffStudioText } from "./descriptions/staffStudio";
import { tmfText } from "./descriptions/tmf";
import { whiteWayText } from "./descriptions/whiteWayAuto";

type Case = {
  name: string;
  id: string;
  description: string;
  text: string[][];
  service: string;
  video?: string;
};

export const cases: Case[] = [
  {
    name: "LapLand",
    id: "lapLand",
    description: "Частное производство льда",
    text: lapLandText,
    service: "Дизайн, продвижение",
  },
  {
    name: "Desert Rose",
    id: "desertRose",
    description: "Ресторан",
    text: desertRoseText,
    service: "Дизайн, продвижение",
    video: "https://drive.google.com/uc?export=download&id=1D9taj5c0d2wO5wuU4iakCjZ-3fNJIAmi",
  },
  {
    name: "FAKE.PARIS",
    id: "fakeParis",
    description: "Косметический бренд",
    text: fakeParisText,
    service: "Дизайн, продвижение",
  },
  {
    name: "Buy | Side",
    id: "buySide",
    description: "Cервис денежных переводов",
    text: buySideText,
    service: "Дизайн, продвижение",
    video: "https://drive.google.com/uc?export=download&id=1Hub_D8f0WFt-uJNrBgE_2u3Z1WJxn6SV",
  },
  {
    name: "Staff studio",
    id: "staffStudio",
    description: "Новостной telegram-канал",
    text: staffStudioText,
    service: "Дизайн, продвижение",
  },
  {
    name: "WHITE WAY AUTO",
    id: "whiteWay",
    description: "Сервис по подбору и доставке автомобилей из Южной Кореи",
    text: whiteWayText,
    service: "Дизайн, продвижение",
    video: "https://drive.google.com/uc?export=download&id=1J2WfLRGVbThOLytqLvbsPihStQCyP8bT",
  },
  {
    name: "Pink Hair Lab",
    id: "pinkHairLab",
    description: "Cалон красоты",
    text: pinkHairLabText,
    service: "Дизайн, продвижение",
    video: "https://drive.google.com/uc?export=download&id=1Y6xFYrxumW-Kv0ZO67YCe9baD3iXWQh8",
  },
  {
    name: "TMF",
    id: "tmf",
    description: "Производство котлов, печей и каминов",
    text: tmfText,
    service: "Дизайн, продвижение",
  },
];
