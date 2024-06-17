import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const storage = browser ? localStorage : null;
const value = storage == null ? void 0 : storage.getItem('color-scheme');

export const colorScheme = writable(
	value
		? value
		: browser
			? window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
			: 'light'
);

colorScheme.subscribe(($theme: string) => {
	if (!browser) return;
	document.documentElement.classList.remove('light', 'dark');
	document.documentElement.classList.add($theme);
});
