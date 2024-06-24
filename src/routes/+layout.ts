import { getRegistryManakit } from '$lib/api';
import { manakitRegistry } from '$lib/store';

export async function load() {
	await getRegistryManakit();

	let manakit = {};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	manakitRegistry.subscribe(($data: any) => (manakit = $data));

	return {
		registry: manakit
	};
}
