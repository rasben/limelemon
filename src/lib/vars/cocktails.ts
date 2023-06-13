import type { CocktailDetails } from '$lib/types/types';
import {
	gin,
	ice,
	tonic,
	lime,
	sugarSyrup,
	danskvand,
	limeJuice,
	vodka,
	jamaicaGingerBeer,
	lemonJuice,
	rhubarbSyrup
} from '$lib/vars/ingredients';

export const ginTonic: CocktailDetails = {
	label: 'Gin & Tonic',
	pricePerLiter: 250,
	icon: 'mdi:glass-stange',
	alcPercentage: 10,
	image: '/cocktails/gintonic.png',
	color: '#e9edf5',
	ingredients: [
		{ ...ice },
		{ ...lime, amountPerLiter: 2 },
		{ ...gin, amountPercentage: 25 },
		{ ...tonic, amountPercentage: 75 }
	]
};

export const lemonade: CocktailDetails = {
	label: 'Lemonade',
	pricePerLiter: 150,
	icon: 'mdi:beer',
	color: '#fffab5',

	ingredients: [
		{ ...sugarSyrup, amountPercentage: 25 },
		{ ...danskvand, amountPercentage: 50 },
		{ ...limeJuice, amountPercentage: 25 }
	]
};

export const rhubarbLemonade: CocktailDetails = {
	label: 'Rabarber Lemonade',
	pricePerLiter: 250,
	icon: 'mdi:beer',
	color: '#f55b5b',
	ingredients: [
		{ ...rhubarbSyrup, amountPercentage: 35 },
		{ ...danskvand, amountPercentage: 50 },
		{ ...lemonJuice, amountPercentage: 15 }
	]
};

export const moscowMule: CocktailDetails = {
	label: 'Moscow Mule',
	pricePerLiter: 175,
	icon: 'mdi:cup',
	alcPercentage: 10.5,
	color: '#f5f7f0',
	ingredients: [
		{ ...vodka, amountPercentage: 26 },
		{ ...sugarSyrup, amountPercentage: 5 },
		{ ...limeJuice, amountPercentage: 11 },
		{ ...jamaicaGingerBeer, amountPercentage: 58 }
	]
};

export const missVanillaRhubarbara: CocktailDetails = {
	label: 'Miss Vanilla Rhubarbara',
	pricePerLiter: 225,
	icon: 'mdi:glass-cocktail',
	color: '#f294be',
	alcPercentage: 8.7,
	ingredients: [
		{ ...gin, amountPercentage: 22 },
		{ ...rhubarbSyrup, amountPercentage: 22 },
		{ ...danskvand, amountPercentage: 43 },
		{ ...lemonJuice, amountPercentage: 13 }
	]
};

export const availableCocktails = [
	ginTonic,
	lemonade,
	rhubarbLemonade,
	moscowMule,
	missVanillaRhubarbara
] as CocktailDetails[];
