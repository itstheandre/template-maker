import { ICopyDir } from "../types";
import { red } from "../consts";
import { fsExists } from "../helpers";
import {
  whenNoSuchThing,
  noSuchThing,
  noOutDir,
  whenNoInitial,
  noInitialValue,
  whenNoOutDir,
  notEnoughCurlies,
  whenNotEnoughCurlies,
} from "./badData.errors";

export async function validateError(
  value: ICopyDir | string,
  outDir?: string,
  vars: Record<string, string> = {},
  number: number = 2
): Promise<void> {
  if (!value) {
    red(noInitialValue);
    whenNoInitial();
  }
  if (typeof value === "object") {
    if (!(await fsExists(value.inDir))) {
      red(noSuchThing);
      whenNoSuchThing();
    }
    if (!value.outDir) {
      red(noOutDir);
      whenNoOutDir();
    }
  }

  if (!outDir) {
    red(noOutDir);
    whenNoOutDir();
  }
  if (number < 2) {
    red(notEnoughCurlies);
    whenNotEnoughCurlies();
  }
}
