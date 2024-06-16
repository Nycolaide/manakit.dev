<script lang="ts">
	import 'manakit/style/css';
	import '$lib/assets/styles/app.scss';

	import { App } from 'manakit';

	import Darkmode from '$lib/components/darkmode.svelte';
</script>

<App>
	<Darkmode />
	<slot />
</App>
