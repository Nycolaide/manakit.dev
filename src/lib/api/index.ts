/* eslint-disable @typescript-eslint/no-unused-vars */
import { manakitRegistry } from '$lib/store';
import axios from 'axios';

export async function getRegistryManakit() {
	try {
		const values = await axios.get(`https://registry.npmjs.org/manakit`);

		manakitRegistry.set({
			version: values?.data['dist-tags']?.latest
		});
	} catch (error) {
		/* empty */
	}
}
