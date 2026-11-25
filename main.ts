// One-Line Laugh-Off — make.fun
// Writes a single one-line joke (1-200 characters) to /output/entry.txt.
// Runs on Node 22.18+, no dependencies, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

process.umask(0o022);

const JOKE =
  "My dad bought a smart lock so nobody could break in, then locked himself out three times in the first week and now leaves the key under the same flowerpot.";

const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${chars} characters, outside the 1-200 gate`);
}
if (JOKE.includes("\n")) {
  throw new Error("joke must be one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
