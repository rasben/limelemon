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
	alcPercentage: '10%',
	image: '/cocktails/gintonic.png',
	pricePerLiter: 250,
	ingredients: [{ ...ice }, { ...lime }, { ...gin, amount: '25%' }, { ...tonic, amount: '75%' }]
};

export const lemonade: CocktailDetails = {
	label: 'Lemonade',
	pricePerLiter: 150,
	ingredients: [
		{ ...sugarSyrup, amount: '25%' },
		{ ...danskvand, amount: '50%' },
		{ ...limeJuice, amount: '25%' }
	]
};

export const rhubarbLemonade: CocktailDetails = {
	label: 'Rabarber Lemonade',
	pricePerLiter: 250,
	ingredients: [
		{ ...rhubarbSyrup, amount: '35%' },
		{ ...danskvand, amount: '50%' },
		{ ...lemonJuice, amount: '15%' }
	]
};

export const moscowMule: CocktailDetails = {
	label: 'Moscow Mule',
	pricePerLiter: 175,
	ingredients: [
		{ ...vodka, amount: '26%' },
		{ ...sugarSyrup, amount: '5%' },
		{ ...limeJuice, amount: '11%' },
		{ ...jamaicaGingerBeer, amount: '58%' }
	]
};

export const missVanillaRhubarbara: CocktailDetails = {
	label: 'Miss Vanilla Rhubarbara',
	pricePerLiter: 225,
	ingredients: [
		{ ...gin, amount: '22%' },
		{ ...rhubarbSyrup, amount: '22%' },
		{ ...danskvand, amount: '43%' },
		{ ...lemonJuice, amount: '13%' }
	]
};

export const availableCocktails = [
	ginTonic,
	lemonade,
	rhubarbLemonade,
	moscowMule,
	missVanillaRhubarbara
] as CocktailDetails[];
