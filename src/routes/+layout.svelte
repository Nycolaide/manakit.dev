<script lang="ts">
	import 'manakit/style/css';
	import '$lib/assets/styles/app.scss';

	import { App } from 'manakit';

	import Darkmode from '$lib/components/darkmode.svelte';
	import Analytics from '$lib/components/analytics.svelte';
	import Tagmanager from '$lib/components/tagmanager.svelte';
	import Rgpd from '$lib/components/rgpd.svelte';
</script>

<Analytics />
<Tagmanager />

<App>
	<Darkmode />
	<slot />
	<Rgpd />
</App>
