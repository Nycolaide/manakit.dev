export const dataSwitchSlot = [
	{ name: 'default', desc: 'The default Svelte slot' },
	{ name: 'before', desc: 'The slot before Toogle' },
	{ name: 'after', desc: 'The slot after Toogle' }
];

export const dataSwitchProps = [
	{
		name: 'value',
		type: 'unknow',
		default: '',
		desc: 'get value toogle'
	},
	{
		name: 'error',
		type: 'boolean',
		default: 'false',
		desc: 'add value style error'
	},
	{
		name: 'info',
		type: 'boolean',
		default: 'false',
		desc: 'add value style info'
	},
	{
		name: 'success',
		type: 'boolean',
		default: 'false',
		desc: 'add value style success'
	},
	{
		name: 'warning',
		type: 'boolean',
		default: 'false',
		desc: 'add value style warning'
	},
	{
		name: 'right',
		type: 'boolean',
		default: 'false',
		desc: 'display default content (not slot after and before) on right'
	}
];
