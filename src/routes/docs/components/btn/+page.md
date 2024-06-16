---
title: Btn
desc: Preview Button
---

<script lang="ts">
    import Preview from "$lib/components/docs/preview.svelte";
    import Datatable from "$lib/components/docs/datatable.svelte";
    import {Btn} from "manakit";
    import {dataBtnProps, dataBtnSlot} from "$lib/assets/data";

    let typeBtn = "";

	let size = "";
	let icon = "";
	let square = false;
	let circle = false;
	let rounded = false;
	let outline = false;
	let text = false;
	let link = false;


	const handleSize = state => size = state;
	const handleIcon = state => icon = state;   
</script>

# Btn {#btn}

The `Btn` Preview remplaces the standard html `button` , `anchor` and `input type button`, with Manakit theme and a multitude of options. Any color helper class can be used to alter the background or text color.

## Usage {#usage}

<Btn on:click={() => (outline = false, text = false, link = false)} active={!outline && !text && !link}>Default</Btn>
<Btn on:click={() => (outline = true, text = false, link = false)} active={outline}>Outline</Btn>
<Btn on:click={() => (outline = false, text = true, link = false)} active={text}>Text</Btn>
<Btn on:click={() => (outline = false, text = false, link = true)} active={link}>Link</Btn>

<p>Sizing</p>
<div>
	<Btn class="btn-sm" on:click={() => handleSize("btn-xs")}  active={size === "btn-xs"} square>xs</Btn>
	<Btn class="btn-sm" on:click={() => (size = "btn-sm")}  active={size === "btn-sm"} square>sm</Btn>
	<Btn class="btn-sm" on:click={() => size = "btn-md"}  active={size === "btn-md" || size === ""} square>md</Btn>
	<Btn class="btn-sm" on:click={() => size = "btn-lg"}  active={size === "btn-lg"} square>lg</Btn>
</div>
<p>Icon</p>
<div>
	<Btn class="btn-sm" on:click={() => handleIcon("")}  active={icon === ""} >Default</Btn>
	<Btn class="btn-sm" on:click={() => handleIcon("left")}  active={icon === "left"}>Icon Left</Btn>
	<Btn class="btn-sm" on:click={() => handleIcon("right")}  active={icon === "right"}>Icon Right</Btn>
	<Btn class="btn-sm" on:click={() => handleIcon("icon")}  active={icon === "icon"}>Icon</Btn>
</div>
<p>Form</p>
    <div>
	    <Btn class="btn-sm" on:click={() => (square = false, circle = false, rounded = false)}  active={!square && !circle && !rounded}>Default</Btn>
		<Btn class="btn-sm" on:click={() => (square = true, circle = false, rounded = false)}  active={square}>Square</Btn>
		<Btn class="btn-sm" on:click={() => (square = false, circle = true, rounded = false)}  active={circle}>Circle</Btn>
		<Btn class="btn-sm" on:click={() => (square = false, circle = false, rounded = true)}  active={rounded}>Rounded</Btn>
	</div>
<Preview>
	<svelte:fragment slot="preview">
    	<Btn class={size} {outline} {text} {link} {circle} {square} {rounded}>
			{#if icon === "left"}
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
					<path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
				</svg>
			{/if}
			{#if icon === "icon"}
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
					<path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
				</svg>
			{:else}
    		Button
			{/if}
			{#if icon === "right"}
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
					<path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
				</svg>
			{/if}
    	</Btn>
    </svelte:fragment>

</Preview>

## Examples {#examples}

### Buttons with brand colors {#buttons-with-brand-colors}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn>Default</Btn>
<Btn class="primary">Primary</Btn>
<Btn class="secondary">Secondary</Btn>
<Btn class="tertiary">Tertiary</Btn>
<Btn class="bg:secondary text:primary">Custom</Btn>
```

<svelte:fragment slot="preview">
<Btn>Default</Btn>
<Btn class="primary">Primary</Btn>
<Btn class="secondary">Secondary</Btn>
<Btn class="tertiary">Tertiary</Btn>
<Btn class="bg:secondary text:primary">Custom</Btn>
</svelte:fragment>

</Preview>

### Actives Buttons {#actives-buttons}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn active>Default</Btn>
<Btn class="primary" active>Primary</Btn>
<Btn class="secondary" active>Secondary</Btn>
<Btn class="tertiary" active>Tertiary</Btn>
<Btn class="bg:secondary text:primary" active>Custom</Btn>
```

<svelte:fragment slot="preview">
<Btn active>Default</Btn>
<Btn class="primary" active>Primary</Btn>
<Btn class="secondary" active>Secondary</Btn>
<Btn class="tertiary" active>Tertiary</Btn>
<Btn class="bg:secondary text:primary" active>Custom</Btn>
</svelte:fragment>

</Preview>

### Buttons with state colors {#buttons-with-state-colors}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn info>Info</Btn>
<Btn success>Success</Btn>
<Btn warning>Warning</Btn>
<Btn error>Error</Btn>
```

<svelte:fragment slot="preview">
<Btn info>Info</Btn>
<Btn success>Success</Btn>
<Btn warning>Warning</Btn>
<Btn error>Error</Btn>
</svelte:fragment>

</Preview>

### Outline buttons {#buttons-outline}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn outline>Default</Btn>
<Btn class="primary" outline>Primary</Btn>
<Btn class="secondary" outline>Secondary</Btn>
<Btn class="tertiary" outline>Tertiary</Btn>
```

<svelte:fragment slot="preview">
<Btn outline>Default</Btn>
<Btn class="primary" outline>Primary</Btn>
<Btn class="secondary" outline>Secondary</Btn>
<Btn class="tertiary" outline>Tertiary</Btn>
</svelte:fragment>

</Preview>

### Outline buttons with state colors {#buttons-outline-with-state-colors}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn info outline>Default</Btn>
<Btn success outline>Primary</Btn>
<Btn warning outline>Secondary</Btn>
<Btn error outline>Tertiary</Btn>
```

<svelte:fragment slot="preview">
<Btn info outline>Default</Btn>
<Btn success outline>Primary</Btn>
<Btn warning outline>Secondary</Btn>
<Btn error outline>Tertiary</Btn>
</svelte:fragment>

</Preview>

### Rounded buttons {#buttons-rounded}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn rounded>Default</Btn>
<Btn class="primary" rounded>Primary</Btn>
<Btn class="secondary" rounded>Secondary</Btn>
<Btn class="tertiary" rounded>Tertiary</Btn>
```

<svelte:fragment slot="preview">
<Btn rounded>Default</Btn>
<Btn class="primary" rounded>Primary</Btn>
<Btn class="secondary" rounded>Secondary</Btn>
<Btn class="tertiary" rounded>Tertiary</Btn>
</svelte:fragment>

</Preview>

### Text buttons {#buttons-text}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn text>Default</Btn>
<Btn class="primary" text>Primary</Btn>
<Btn class="secondary" text>Secondary</Btn>
<Btn class="tertiary" text>Tertiary</Btn>
```

<svelte:fragment slot="preview">
<Btn text>Default</Btn>
<Btn class="primary" text>Primary</Btn>
<Btn class="secondary" text>Secondary</Btn>
<Btn class="tertiary" text>Tertiary</Btn>
</svelte:fragment>

</Preview>

### link buttons {#buttons-link}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn link>Default</Btn>
<Btn class="primary" link>Primary</Btn>
<Btn class="secondary" link>Secondary</Btn>
<Btn class="tertiary" link>Tertiary</Btn>
```

<svelte:fragment slot="preview">
<Btn link>Default</Btn>
<Btn class="primary" link>Primary</Btn>
<Btn class="secondary" link>Secondary</Btn>
<Btn class="tertiary" link>Tertiary</Btn>
</svelte:fragment>

</Preview>

### Buttons Sizes {#buttons-sizes}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn class="btn-xs">Button xs</Btn>
<Btn class="btn-sm">Button sm</Btn>
<Btn class="btn-md">Button md</Btn>
<Btn class="btn-lg">Button lg</Btn>
```

<svelte:fragment slot="preview">
<Btn class="btn-xs">Button xs</Btn>
<Btn class="btn-sm">Button sm</Btn>
<Btn class="btn-md">Button md</Btn>
<Btn class="btn-lg">Button lg</Btn>
</svelte:fragment>

</Preview>

### Wide and Block button {#wide-and-block}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn wide>Button Wide</Btn>
<Btn block>Button Block</Btn>
```

<svelte:fragment slot="preview">
<Btn wide>Button Wide</Btn>
<Btn block>Button Block</Btn>
</svelte:fragment>

</Preview>

### Buttons with different HTML tags {#buttons-with-different-HTML-tags}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn tag="a">Anchor</Btn>
<Btn href="https://manakit.dev" target="_blank">Anchor automatique</Btn>
<Btn tag="button">Button</Btn>
<Btn tag="input" type="submit">Submit</Btn>
<Btn tag="input" type="button" value="Input" />
<Btn tag="input" type="submit" value="Submit" />
<Btn tag="input" type="radio" ariaLabel="Radio" />
<Btn tag="input" type="checkbox" ariaLabel="Checkbox" />
<Btn tag="input" type="reset" value="Reset" />
```

<svelte:fragment slot="preview">
<Btn tag="a">Anchor</Btn>
<Btn href="https://manakit.dev" target="_blank">Anchor automatique</Btn>
<Btn tag="button">Button</Btn>
<Btn tag="input" type="submit">Submit</Btn>
<Btn tag="input" type="button" value="Input"/>
<Btn tag="input" type="submit" value="Submit"/>
<Btn tag="input" type="radio" ariaLabel="Radio"/>
<Btn tag="input" type="checkbox" ariaLabel="Checkbox"/>
<Btn tag="input" type="reset" value="Reset"/>
</svelte:fragment>

</Preview>

### Disabled buttons {#disabled-buttons}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn disabled>Disabled using attribute</Btn>
```

<svelte:fragment slot="preview">
<Btn disabled>Disabled using attribute</Btn>
</svelte:fragment>

</Preview>

### Square buttons {#square-buttons}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn square>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
<Btn square outline>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
```

<svelte:fragment slot="preview">
<Btn square>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
<Btn square outline>
<svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
</svelte:fragment>

</Preview>

### Circle buttons {#circle-buttons}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn circle>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
<Btn circle outline>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
```

<svelte:fragment slot="preview">
<Btn circle>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
<Btn circle outline>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
</svelte:fragment>

</Preview>

### With Icons {#with-icons}

<Preview>

```svelte
<script>
	import { Btn } from 'manakit';
</script>

<Btn>
	Button
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
<Btn outline>
	Button
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
</Btn>
<Btn>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
	Button
</Btn>
<Btn outline>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/></svg
	>
	Button
</Btn>
```

<svelte:fragment slot="preview">
<Btn>
Button
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
<Btn outline>
Button
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Btn>
<Btn>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
Button
</Btn>
<Btn outline>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
Button
</Btn>
</svelte:fragment>

</Preview>

## API {#api}

### Props {#api-props}

<Datatable data={dataBtnProps} />

### Slots {#api-slots}

<Datatable data={dataBtnSlot}/>
