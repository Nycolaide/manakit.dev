<script context="module">
	import { h1, h2, h3 } from './modules';
	export { h1, h2, h3 };
</script>

<script lang="ts">
	import Seo from '$lib/components/seo.svelte';

	export let title;
	export let desc;
</script>

<Seo {title} {desc} />

<a href="/">Return to Home</a>
<a href="/docs">Docs</a>
Docs Theme MDSVEX
<slot />
