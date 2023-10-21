import path from "path";
import { promises as fs } from "fs";

export async function getImages(folder: string) {
  const directoryPath = path.join(
    __dirname,
    `../../../../public/static/images/${folder}`
  );
  const files = await fs.readdir(directoryPath);

  return files;
}
