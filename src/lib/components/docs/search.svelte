<script lang="ts">
	import { dataNavigationDocs } from '$lib/assets/data';

	let searchQuery = '';
	let list: string | any[] = [];

	function handleSearch(search: string) {
		if (!search || search === '') return (list = []);
		const query = search.trim().toLowerCase();

		list = dataNavigationDocs
			.map((category) => ({
				name: category.name,
				items: category.items.filter(
					(item) =>
						item.name.toLowerCase().includes(query) || item.tags.toLowerCase().includes(query)
				)
			}))
			.filter((category) => category.items.length > 0);
	}

	$: handleSearch(searchQuery);
</script>

<input bind:value={searchQuery} placeholder="search" />

<div>
	{#each list as category (category.name)}
		<div class="category">
			<h2>{category.name}</h2>
			{#each category.items as item (item.href)}
				<div class="item">
					<a href={`${item.href}?search=${searchQuery}`}>{item.name}</a>
				</div>
			{/each}
		</div>
	{/each}

	{#if list.length === 0}
		<p>Aucun résultat trouvé.</p>
	{/if}
</div>
