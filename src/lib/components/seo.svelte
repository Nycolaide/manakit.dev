<script lang="ts">
	const siteData = {
		title: 'Manakit',
		desc: 'Free and open sources components for Svelte and Sveltekit'
	};

	export let formatTitle = true;
	export let title = '';
	export let desc = siteData.desc;

	$: formattedTitle = formatTitle
		? title
			? `${title} — ${siteData.title}`
			: `${siteData.title}`
		: title;
</script>

<svelte:head>
	<title>{formattedTitle}</title>
	<meta name="description" content={desc} />
</svelte:head>
