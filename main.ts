// One-Line Laugh-Off — make.fun
// Writes a single one-line joke (1-200 characters) to /output/entry.txt.
// Runs on Node 22.18+, no dependencies, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

process.umask(0o022);

const JOKE =
  "Dad fitted a smart lock so no one could break in, locked himself out three times by Tuesday, and now just leaves the key under the flowerpot like it's 1998.";

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
