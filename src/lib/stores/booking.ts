import { writable } from 'svelte/store';
import type { CocktailOrder } from '$lib/types/types';

export const guestsStore = writable(30);
export const hoursStore = writable(4);
export const cocktailOrdersStore = writable([] as CocktailOrder[]);
