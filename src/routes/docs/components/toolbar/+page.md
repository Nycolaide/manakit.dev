---
title: Toolbar
desc: Preview Toolbar
---

<script lang="ts">
    import Preview from "$lib/components/docs/preview.svelte";
    import Datatable from "$lib/components/docs/datatable.svelte";
    import {Btn, Card, Toolbar, CardTitle, CardText, CardActions, CardSubtitle} from "manakit";
    import {dataToolbarProps, dataToolbarSlot} from "$lib/assets/data";

    let size = '';
</script>

# Toolbar {#toolbar}

## Usage {#usage}

<Btn on:click={() => size = ''} active={size === ''}>Default</Btn>
<Btn on:click={() => size = 'xs'} active={size === 'xs'}>XS</Btn>
<Btn on:click={() => size = 'sm'} active={size === 'sm'}>SM</Btn>
<Btn on:click={() => size = 'lg'} active={size === 'lg'}>LG</Btn>

<Preview>
	<svelte:fragment slot="preview">
        <Toolbar class={`toolbar-${size}`}>
            <p class="text-xl">Application</p>
        </Toolbar>
    </svelte:fragment>

</Preview>

## Examples {#examples}

### Position toolbar class content

<Preview>

```svelte
<script>
	import { Toolbar } from 'manakit';
</script>

<Toolbar>
	<div class="toolbar-start">toolbar-start</div>
	<div class="toolbar-center">toolbar-center</div>
	<div class="toolbar-end">toolbar-end</div>
</Toolbar>
```

<svelte:fragment slot="preview">
<Toolbar>

<div class="toolbar-start">toolbar-start</div>
<div class="toolbar-center">toolbar-center</div>
<div class="toolbar-end">toolbar-end</div>
</Toolbar>
</svelte:fragment>

</Preview>

### Bottom toolbar

<Preview>

```svelte
<script>
	import { Toolbar } from 'manakit';
</script>

<Toolbar bottom>
	<p class="text-xl">Application</p>
</Toolbar>
```

<svelte:fragment slot="preview">
<Toolbar bottom class="position-absolute">

<p class="text-xl">Application</p>
</Toolbar>
</svelte:fragment>

</Preview>

### Size toolbar

<Preview>

```svelte
<script>
	import { Toolbar } from 'manakit';
</script>

<Toolbar class="toolbar-xs">
	<p class="text-xl">Toolbar XS</p>
</Toolbar>
<Toolbar class="toolbar-sm">
	<p class="text-xl">Toolbar SM</p>
</Toolbar>
<Toolbar>
	<p class="text-xl">Toolbar Default</p>
</Toolbar>
<Toolbar class="toolbar-lg">
	<p class="text-xl">Toolbar LG</p>
</Toolbar>
```

<svelte:fragment slot="preview">
<Toolbar class="toolbar-xs">

<p class="text-xl">Toolbar XS</p>
</Toolbar>
<Toolbar class="toolbar-sm">
<p class="text-xl">Toolbar SM</p>
</Toolbar>
<Toolbar>
<p class="text-xl">Toolbar Default</p>
</Toolbar>
<Toolbar class="toolbar-lg">
<p class="text-xl">Toolbar LG</p>
</Toolbar>
</svelte:fragment>

</Preview>

## API {#api}

### Props {#api-props}

<Datatable data={dataToolbarProps} />

### Slots {#api-slots}

<Datatable data={dataToolbarSlot}/>
