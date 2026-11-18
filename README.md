# The World in One Day — 18 November 2026 (round 2)

A dense illustrated newspaper front page summing up Wednesday 18 November
2026: 42 verified stories — 13 illustrated lead cards plus 29 one-line
briefs — a world locator map with numbered pins, a day-in-numbers strip,
region counts, and a date-check footer naming stories deliberately left out
because they were first reported on 17 November.

Every story happened or was first reported on Wednesday 18 November 2026.
All illustrations are procedural vector drawings made for this entry.

[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/RaynaldyRyan/world-in-one-day-18-nov-r2/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/RaynaldyRyan/world-in-one-day-18-nov-r2/reward.svg)](https://make.fun/bounty/news-image-20261118)

Built for [news-image-20261118 on make.fun](https://make.fun/bounty/news-image-20261118).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates `entry.png`
(1024x1024 PNG, under the 1 MiB cap), copies it to the output directory,
and verifies the copy byte-for-byte with SHA-256.

## Contents

- `entry.png` — the front page, 1024x1024, deterministic render
- `main.ts` — entry point: validate, copy, verify
