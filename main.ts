// Monday Morning Punchlines — one joke about Monday mornings, written to /output/entry.txt.
// The joke is the whole entry: a single line, 1 to 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "Monday morning: my alarm resigned, my coffee went on strike, and my bed took me hostage — HR still expects me at 9.";

// The gate only accepts 1 to 200 characters of UTF-8 text, so check first.
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
}
if (joke.includes("\n")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
console.log(joke);
