---
title: Typography
desc: typography class
---

<script lang="ts">
    import Datatable from "$lib/components/docs/datatable.svelte";
    import {dataTypographySize, dataTypographyPosition, dataTypographyTransform, dataTypographyWeight} from "$lib/assets/data";
</script>

# Typography {#typography}

<Datatable data={dataTypographySize}/>

## Weight text

<Datatable data={dataTypographyWeight}/>

## Position text

<Datatable data={dataTypographyPosition}/>

## Styles and transform text

<Datatable data={dataTypographyTransform}/>
