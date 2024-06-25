export function setCookie(name: string, value: boolean | string) {
	const expirationTime = new Date();
	expirationTime.setMonth(expirationTime.getMonth() + 1);
	document.cookie = `${encodeURIComponent(name)}=${value}; path=/; expires=${expirationTime.toUTCString()};`;
}
