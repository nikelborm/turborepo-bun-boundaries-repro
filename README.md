# To repro

```sh
bun i
bunx turbo boundaries
```

Observe false-positive:

```plaintext
$ bunx turbo boundaries

• turbo 2.8.8
Checking packages...
  × importing from a type declaration package, but import is not declared as a type-only import
   ╭─[/tmp/tmp.h3VTUsXhPq/my-turborepo/packages/pkg-a/index.ts:1:1]
 1 │ import { $, which } from 'bun'
   · ───────────────┬──────────────
   ·                ╰── package imported here
 2 │ 
   ╰────

Checked 1 files in 1 packages, 1 issue found
```
