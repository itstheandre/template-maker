export function contentReplacer(
  str: string,
  vars: Record<string, string> = {},
  number = 2
) {
  const keys = Object.keys(vars);
  if (!keys.length) {
    return str;
  }
  const regBase = keys
    .map((e) => {
      const leftSide = `\{`.repeat(number);
      const rightSide = `\}`.repeat(number);
      const regConstructor = `${leftSide}${e}${rightSide}`;
      return regConstructor;
    })
    .join("|");

  const regex = new RegExp(regBase, "gi");
  return str.replace(regex, (matched: any) => {
    const insideBrackets = /[^{\}]+(?=})/g.exec(matched)!;
    return vars[insideBrackets[0]];
  });
}
