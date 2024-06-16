---
title: Colors
desc: colors class
---

<script lang="ts">
    import {Row, Col, Card} from "manakit";
	import {dataPaletteWebkit, dataPaletteManakit} from "$lib/assets/data";
	let palette = dataPaletteManakit;
</script>

# Colors {#colors}

{#each Object.keys(palette) as color}

<div>
<h3>{color}</h3>
{#each Object.keys(palette[color]) as shade}
<div style="background-color: {palette[color][shade]}; width: 40px; height: 24px;"/>
<div class="text-xs">{`${color}-${shade}`}</div>
{/each}
</div>
{/each}
