import { StaticImageData } from "next/image";
import { buySideText } from "./descriptions";
import { getImages } from "./getImages";

type Case = {
  name: string;
  id: string;
  description: string;
  text: string[][];
  service: string;
  images: StaticImageData[];
};

export const cases: Case[] = [
  {
    name: "Buy | Side",
    id: "buySide",
    description: "Cервис денежных переводов",
    text: buySideText,
    service: "Дизайн, продвижение",
    images: getImages(
      require.context("@/data/cases/images/buySide", false, /\.(PNG|JPG)$/)
    ),
  },
];
