import { StaticImageData } from "next/image";

export function getImages(r: __WebpackModuleApi.RequireContext) {
  let images: StaticImageData[] = [];

  r.keys().map((item: string) => {
    if (!item.startsWith("./")) return;
    images.push(r(item).default);
  });
  return images;
}
