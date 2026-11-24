// Alien Field Notes: The Two Day Earth Review
// Entry for the make.fun bounty
// u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000
//
// Writes one original line — an alien tourist's review of Earth —
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace, so the program validates the line before writing it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Two-day trip to Earth: the locals spend a third of their lives unconscious, then drink bitter bean water to apologise for it. 4/5 stars — chaotic, cosy, would orbit again.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, must be 1-200`);
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
console.log(`Wrote ${line.length} characters to ${outPath}`);
