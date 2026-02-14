import { $, which } from 'bun'

console.log((await $`echo hello world`.quiet()).text());
