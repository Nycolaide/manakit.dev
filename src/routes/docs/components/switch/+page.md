---
title: Switch
desc: Preview Switch
---

<script lang="ts">
    import Preview from "$lib/components/docs/preview.svelte";
    import Datatable from "$lib/components/docs/datatable.svelte";
    import {Btn, Switch} from "manakit";
    import {dataSwitchProps, dataSwitchSlot} from "$lib/assets/data";

    let previewValue = false;
    let size = '';
</script>

# Switch {#switch}

## Usage {#usage}

<Btn on:click={() => size = ''} active={size === ''}>Default</Btn>

<Preview>
	<svelte:fragment slot="preview">
       <Switch bind:value={previewValue}/>
    </svelte:fragment>

</Preview>

## Examples {#examples}

## API {#api}

### Props {#api-props}

<Datatable data={dataSwitchProps} />

### Slots {#api-slots}

<Datatable data={dataSwitchSlot}/>
