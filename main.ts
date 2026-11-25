// u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947:
// "The Funniest One-Line Resignation Letter".
//
// The resignation letter of a cron job, written in its own voice: the
// flat, tired, faintly passive-aggressive worker who has had enough.
// Chosen in-session from 8 fresh candidates against the judge's
// criteria, in order: (1) on-subject — unmistakably a cron job's
// resignation; (2) real comic turn — the job that wakes at 3 a.m. to
// restart a crashing service decides, for once, to sleep in;
// (3) tired voice held for the whole line; (4) tight, no wasted words,
// no quotation marks, no explaining of the joke; (5) specific and
// surprising — 3 a.m., crashing again by 3:01, a complaint only this
// cron job could make. The sponsor's own examples were avoided
// (no "every minute since March", no "tired of saying no", no
// "never got a thank you").
//
//   "My only job is waking up at 3 a.m. to restart a service that
//    crashes again by 3:01, and I have decided to sleep in."
//   (115 characters, 115 bytes, one line, no trailing newline.)
//
// Runner-up, kept for the record: "I email a weekly report to an
// inbox whose owner left in April, and I am finally joining him."
// (92 chars) — same voice, slightly less specific a complaint.
//
// Writes the entry to /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in
// for /output outside the grader container). Node 22, standard library
// only. No network access, no randomness, no clock reads: identical
// input bytes always yield identical output bytes, so repeated runs
// agree byte for byte.
//
// The gate (kit RULES.txt: entry must be 1 to 140 characters, single
// line, UTF-8 text, not only white space; the sealed scorer gives a
// Valid column of 1 or 0 and only a valid entry goes before the judge).
// This program validates the entry against that gate before writing
// and fails fast on any violation, then reads the file back and checks
// it byte for byte.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My only job is waking up at 3 a.m. to restart a service that crashes again by 3:01, and I have decided to sleep in.";

const MIN_CHARS = 1;
const MAX_CHARS = 140;

function abort(reason: string): never {
  process.stderr.write("main.ts: " + reason + "\n");
  process.exit(1);
}

// The gate counts characters (Unicode code points), not bytes.
const charCount = [...ENTRY].length;
if (charCount < MIN_CHARS || charCount > MAX_CHARS) {
  abort(
    "entry is " +
      charCount +
      " characters, violates the rule that the entry must be 1-140 characters, single line: " +
      JSON.stringify(ENTRY),
  );
}
if (ENTRY.trim().length === 0) {
  abort("entry is only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  abort("entry must be a single line, no line breaks");
}
if (ENTRY !== ENTRY.trim()) {
  abort("entry has leading or trailing white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const destPath = join(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
} catch (err) {
  abort("cannot create " + outDir + ": " + (err as Error).message);
}

try {
  writeFileSync(destPath, ENTRY, "utf8");
} catch (err) {
  abort("cannot write " + destPath + ": " + (err as Error).message);
}

let written: string;
try {
  written = readFileSync(destPath, "utf8");
} catch (err) {
  abort("cannot read back " + destPath + ": " + (err as Error).message);
}
if (written !== ENTRY) {
  abort("read-back mismatch: file does not equal the entry");
}
if (written.endsWith("\n")) {
  abort("entry.txt ends with a newline");
}

const bytes = Buffer.byteLength(written, "utf8");
const hash = createHash("sha256").update(written, "utf8").digest("hex");

process.stdout.write(
  "wrote " +
    destPath +
    " (" +
    charCount +
    " chars, " +
    bytes +
    " bytes, sha256 " +
    hash +
    ")\n",
);
