import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const text = "My older sister, the night I was too scared to audition, said, 'The audience forgets a bad note by breakfast — you'll remember not trying for years, so go sing.'";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outDir, "entry.txt");
try {
  mkdirSync(outDir, { recursive: true });
} catch {}
writeFileSync(entryPath, text, "utf8");
