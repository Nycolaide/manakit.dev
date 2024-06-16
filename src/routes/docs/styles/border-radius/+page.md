---
title: Border Radius
desc: border-radius class
---

<script lang="ts">
    import Preview from "$lib/components/docs/preview.svelte";
    import Datatable from "$lib/components/docs/datatable.svelte";
    import {Row, Col, Card} from "manakit";
    import {dataBorderRadius, dataBorderRadiusPosition} from "$lib/assets/data";
</script>

# Border Radius {#border-radius}

<Datatable data={dataBorderRadiusPosition}/>

## Values

<Datatable data={dataBorderRadius}/>

# Usage {#usage}

### Rounded corners

<Preview>

```svelte
<Row style="justify-content: center; text-align: center;">
	<Col class="col-auto">
		<div class="bg:primary rounded-0 preview-card" />
		<span class="text-xs">.rounded-0</span>
	</Col>
	<Col class="col-auto">
		<div class="bg:primary rounded-sm preview-card" />
		<span class="text-xs">.rounded-sm</span>
	</Col>
	<Col class="col-auto">
		<div class="bg:primary rounded preview-card" />
		<span class="text-xs">.rounded</span>
	</Col>
	<Col class="col-auto">
		<div class="bg:primary rounded-lg preview-card" />
		<span class="text-xs">.rounded-lg</span>
	</Col>
	<Col class="col-auto">
		<div class="bg:primary rounded-pill preview-card" />
		<span class="text-xs">.rounded-xl</span>
	</Col>
</Row>
```

<svelte:fragment slot="preview">
<Row style="justify-content: center; text-align: center;">

<Col class="col-auto">
    <div class="bg:primary rounded-0 preview-card" />
    <span class="text-xs">.rounded-0</span>
</Col>
<Col class="col-auto">
    <div class="bg:primary rounded-sm preview-card" />
    <span class="text-xs">.rounded-sm</span>
</Col>
<Col class="col-auto">
    <div class="bg:primary rounded preview-card" />
    <span class="text-xs">.rounded</span>
</Col>
<Col class="col-auto">
    <div class="bg:primary rounded-lg preview-card" />
    <span class="text-xs">.rounded-lg</span>
</Col>
<Col class="col-auto">
    <div class="bg:primary rounded-pill preview-card" />
    <span class="text-xs">.rounded-xl</span>
</Col>
</Row>
</svelte:fragment>
</Preview>

## Pill and circle

<Preview>

```svelte
<Row style="justify-content: center; text-align: center;">
	<Col class="col-auto">
		<div class="bg:primary rounded-pill preview-card-large" />
		<span class="text-xs">.rounded-pill</span>
	</Col>

	<Col class="col-auto">
		<div class="bg:primary rounded-circle preview-card" />
		<span class="text-xs">.rounded-circle</span>
	</Col>
</Row>
```

<svelte:fragment slot="preview">
<Row style="justify-content: center; text-align: center;">

<Col class="col-auto">
    <div class="bg:primary rounded-pill preview-card-large" />
    <span class="text-xs">.rounded-pill</span>
</Col>

<Col class="col-auto">
    <div class="bg:primary rounded-circle preview-card" />
    <span class="text-xs">.rounded-circle</span>
</Col>
</Row>
</svelte:fragment>
</Preview>

### Rounding by side

<Preview>

```svelte
<Row style="justify-content: center; text-align: center;">
	<Col class="col-auto">
		<div class="bg:primary rounded-t-lg preview-card" />
		<span class="text-xs">.rounded-t-lg</span>
	</Col>
	<Col class="col-auto">
		<div class="bg:primary rounded-l-lg preview-card" />
		<span class="text-xs">.rounded-l-lg</span>
	</Col>
	<Col class="col-auto">
		<div class="bg:primary rounded-b-lg preview-card" />
		<span class="text-xs">.rounded-b-lg</span>
	</Col>
	<Col class="col-auto">
		<div class="bg:primary rounded-r-lg preview-card" />
		<span class="text-xs">.rounded-r-lg</span>
	</Col>
</Row>
```

<svelte:fragment slot="preview">
<Row style="justify-content: center; text-align: center;">

<Col class="col-auto">
    <div class="bg:primary rounded-t-lg preview-card"/>
    <span class="text-xs">.rounded-t-lg</span>
</Col>
<Col class="col-auto">
    <div class="bg:primary rounded-l-lg preview-card"/>
    <span class="text-xs">.rounded-l-lg</span>
</Col>
<Col class="col-auto">
    <div class="bg:primary rounded-b-lg preview-card"/>
    <span class="text-xs">.rounded-b-lg</span>
</Col>
<Col class="col-auto">
   <div class="bg:primary rounded-r-lg preview-card"/>
    <span class="text-xs">.rounded-r-lg</span>
</Col>

</Row>
</svelte:fragment>
</Preview>

### Rounding by corner

<Preview>

```svelte
<Row style="justify-content: center; text-align: center;">
	<Col class="col-auto">
		<div class="bg:primary rounded-tr-lg preview-card" />
		<span class="text-xs">.rounded-tr-lg</span>
	</Col>
	<Col class="col-auto">
		<div class="bg:primary rounded-tl-lg preview-card" />
		<span class="text-xs">.rounded-tl-lg</span>
	</Col>
	<Col class="col-auto">
		<div class="bg:primary rounded-br-lg preview-card" />
		<span class="text-xs">.rounded-br-lg</span>
	</Col>
	<Col class="col-auto">
		<div class="bg:primary rounded-bl-lg preview-card" />
		`
		<span class="text-xs">.rounded-bl-lg</span>
	</Col>
</Row>
```

<svelte:fragment slot="preview">
<Row style="justify-content: center; text-align: center;">

<Col class="col-auto">
    <div class="bg:primary rounded-tr-lg preview-card"/>
    <span class="text-xs">.rounded-tr-lg</span>
</Col>
<Col class="col-auto">
    <div class="bg:primary rounded-tl-lg preview-card"/>
    <span class="text-xs">.rounded-tl-lg</span>
</Col>
<Col class="col-auto">
    <div class="bg:primary rounded-br-lg preview-card"/>
    <span class="text-xs">.rounded-br-lg</span>
</Col>
<Col class="col-auto">
    <div class="bg:primary rounded-bl-lg preview-card"/>`
    <span class="text-xs">.rounded-bl-lg</span>
</Col>

</Row>
</svelte:fragment>
</Preview>

<style>
    .preview-card {
        width: 75px; 
        height: 75px;
    }

    .preview-card-large {
        width: 150px; 
        height: 75px;
    }
</style>
