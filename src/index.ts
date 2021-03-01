// import * as fs from "fs-extra";
import { join } from "path";
import * as path from "path";
import { copyTemplate } from "./main";
// import { contentReplacer, createFileWithReplacer } from "./helpers";
// import { createFolders } from "./helpers/createFolders";
// import { dirTree } from "./helpers/folderStructure";
// import { getAllFolders, useGlob } from "./helpers/useGlob";

// const vars: Record<string, string> = { hello: "me", name: "André" };

const template = path.join(__dirname, "..", "template");
const exit = path.join(__dirname, "..", "out");
// const indexOnTempaltes = path.join(exit, "index.js");
// const ind = path.join(exit, "index2.js");
async function main() {
  await copyTemplate(template, join(__dirname, "..", "exit"), {
    hello: "world",
    name: "André",
  });
}

main().catch(console.error);
