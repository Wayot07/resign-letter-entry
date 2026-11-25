# resign-letter-entry

[![make.fun · u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Wayot07/resign-letter-entry/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Wayot07/resign-letter-entry/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![node](https://img.shields.io/badge/node-%3E%3D22-brightgreen)](https://nodejs.org/)

A [make.fun](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) entry for **"The Funniest One-Line Resignation Letter"** (`u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947`).

The entry is the one-line resignation letter of a cron job — the flat, tired, faintly passive-aggressive voice of a worker who has had enough:

> My only job is waking up at 3 a.m. to restart a service that crashes again by 3:01, and I have decided to sleep in.

`main.ts` (Node 22, standard library only) writes that single line — 115 characters, one line, no trailing newline — to `output/entry.txt`, validating it against the competition gate (1–140 characters, single line, UTF-8, not only whitespace) before writing and reading it back byte for byte. Deterministic: repeated runs produce byte-identical output.

## Run

```bash
node main.ts
```

Outside the grader container, `MAKEFUN_OUTPUT_DIR` stands in for `/output`:

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Referral

Built with make.fun — referral code `y360kawx`.
