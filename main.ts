// The Funniest Excuse for Skipping a Meeting
// A single razor-sharp excuse line, at most 200 characters, written to
// /output/entry.txt for the make.fun judge to compare head to head.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The excuse: the meeting never actually ends, it just gets renamed every
// week, so attendance is a formality nobody can ever complete.
const EXCUSE =
  "I can't make it — I've been in this meeting since Tuesday. It never ended; they just keep renaming it.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
}

validate(EXCUSE);
// The grader runs this in a sandbox with /output; allow an override so the
// same file can be exercised locally without touching the sandbox path.
const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length}-character entry to ${OUTPUT_PATH}`);
