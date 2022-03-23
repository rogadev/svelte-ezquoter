import { writable } from 'svelte/store';

export const pricesheets = writable([]);

export const addPricesheet = (name, desc, prices) => {
	pricesheets.update((ps) => [
		...ps,
		{
			name: name,
			desc: desc,
			prices: [...prices]
		}
	]);
};

export const deletePricesheet = (id) => {
	pricesheets.update((ps) => ps.filter((ps) => ps.id !== id));
};
