import { StaticImageData } from "next/image";
import path from "path";
import { promises as fs } from "fs";

// export function getImages(r: __WebpackModuleApi.RequireContext) {
//   let images: StaticImageData[] = [];

//   r.keys().map((item: string) => {
//     if (!item.startsWith("./")) return;
//     images.push(r(item).default);
//   });
//   return images;

// }

export async function getImages(folder: string) {
  const directoryPath = path.join(
    __dirname,
    `../../../../public/static/images/${folder}`
  );
  const files = await fs.readdir(directoryPath);

  return files;
}
