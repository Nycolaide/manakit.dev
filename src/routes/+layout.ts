import { getRegistryManakit } from '$lib/api';
import { manakitRegistry } from '$lib/store';

export async function load() {
	await getRegistryManakit();

	let manakit = {};
	manakitRegistry.subscribe(($data: any) => (manakit = $data));

	return {
		registry: manakit
	};
}
