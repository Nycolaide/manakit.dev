---
title: Preprocess
desc: config preprocess
---

<script lang="ts">
    import Datatable from "$lib/components/docs/datatable.svelte";
    import {dataPreprocessParams} from "$lib/assets/data";
</script>

# Preprocessor {#preprocessor}

## Using Vite

Add manakit on your vite configuration.

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { manakit } from 'manakit/vite';

export default defineConfig({
	plugins: [sveltekit(), manakit()]
});
```

## Parameters

<Datatable data={dataPreprocessParams}/>

### Custom configuration

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { manakit } from 'manakit/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		manakit({
			verif: {
				version: false,
                install: false
			}
            style: {
                preprocessor: 'sass',
                colorPalette: ['manakit', 'webkit'],
                minimify: true
            }
		})
	],
});

```
