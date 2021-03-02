// import * as fs from "fs-extra";
// import { join } from "path";
import { copyTemplate } from "./main";
// // import { contentReplacer, createFileWithReplacer } from "./helpers";
// // import { createFolders } from "./helpers/createFolders";
// // import { dirTree } from "./helpers/folderStructure";
// // import { getAllFolders, useGlob } from "./helpers/useGlob";

// import { join } from "path";

// // const vars: Record<string, string> = { hello: "me", name: "André" };

// const template = path.join(__dirname, "..", "template");
// const exit = join(__dirname, "..", "out");
// // const indexOnTempaltes = path.join(exit, "index.js");
// // const ind = path.join(exit, "index2.js");
async function main() {
  // @ts-expect-error
  await copyTemplate();
  // await copyTemplate(join(__dirname, "banana"), exit, {
  //   hello: "world",
  //   name: "André",
  // });
}

main().catch((e) => {
  console.log("e:", e.message);
  return;
});
export * from "./main";
