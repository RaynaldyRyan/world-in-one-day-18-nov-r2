// news-image-20261118 round 2: the entry is the rendered front page beside
// this file (entry.png, 1024x1024). Validate the PNG (signature, IHDR
// dimensions, size cap), copy it to the output directory, and verify the
// copy byte-for-byte (SHA-256) before exiting.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const SRC = new URL('./entry.png', import.meta.url);
const OUT = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
const MAX_BYTES = 1024 * 1024; // 1 MiB gate

// --- validate the source PNG before copying ---
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const srcBuf = readFileSync(SRC);
if (srcBuf.length < 33 || !srcBuf.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a valid PNG (bad signature)');
}
if (srcBuf.toString('ascii', 12, 16) !== 'IHDR') {
  throw new Error('entry.png has no IHDR chunk');
}
const width = srcBuf.readUInt32BE(16);
const height = srcBuf.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}
if (statSync(SRC).size > MAX_BYTES) {
  throw new Error(`entry.png exceeds the 1 MiB cap (${statSync(SRC).size} bytes)`);
}

copyFileSync(SRC, OUT);

const hash = (buf: Buffer) => createHash('sha256').update(buf).digest('hex');
const srcHash = hash(srcBuf);
const outHash = hash(readFileSync(OUT));
if (srcHash !== outHash) {
  throw new Error(`entry.png copy mismatch: src ${srcHash} out ${outHash}`);
}
console.log(`entry.png copied OK (${width}x${height}, ${srcBuf.length} bytes, ${srcHash.slice(0, 12)}...)`);
