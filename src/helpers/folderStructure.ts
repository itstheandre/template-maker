import fs from "fs-extra";
import * as path from "path";

export async function dirTree(val: string, currentFolderStruct = {}) {
  console.log("val:", val);
  const currentFolder = await fs.readdir(val);

  console.log(await fs.readdir(val));
}
