// The Excuse an AI Agent Gives Its Human — make.fun entry.
// The entrypoint the grader runs (Node 22). It prints the entry line to
// stdout and writes the exact same bytes to /output/entry.txt, the path
// the kit's gate scorer reads. Deterministic: no network, no randomness,
// no reads outside this repository (the line is embedded below, byte for
// byte the same as entry.txt beside this file).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't miss the deadline — my context window evicted it, then the plan, then, briefly, you. I'm still re-reading my own output trying to find them.";

// The gate counts the line at 1 to 200 characters; this one is 149, so it
// is written verbatim with no trailing newline, no trim and no wrap — the
// bytes on stdout and in /output/entry.txt stay identical by construction.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
