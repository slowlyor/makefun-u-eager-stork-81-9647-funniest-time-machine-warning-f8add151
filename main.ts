// Funniest Time Machine Warning Label — make.fun entry.
// Writes a single one-line warning label (<=120 chars) to /output/entry.txt.
// Node stdlib only, deterministic, no network, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: This machine does not undo mistakes. It only lets you watch yourself make them twice.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1-120 characters of non-whitespace UTF-8 text.
// Refuse to write anything that would fail it.
if (LABEL.length < 1 || LABEL.length > 120 || LABEL.trim().length === 0) {
  throw new Error(`Label is ${LABEL.length} characters; must be 1-120.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LABEL + "\n", "utf8");
console.log(`Wrote ${LABEL.length} characters to ${OUTPUT_PATH}`);
