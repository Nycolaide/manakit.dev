import { derived, writable } from 'svelte/store';
import translations from '$lib/locales';

export const locale = writable('en');
export const locales = Object.keys(translations);

function translate(locale: string, key: string | number, vars: { [x: string]: never }) {
	if (!key) console.warn('[i18n] no key provided to $t()');
	if (!locale) console.warn(`[i18n] no translation for key "${key}"`);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let text = (translations as any)[locale][key];

	if (!text) {
		console.warn(`[i18n] no translation found for ${locale}.${key}`);
		return key;
	}

	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(
	locale,
	($locale) =>
		(key: string, vars = {}) =>
			translate($locale, key, vars)
);
