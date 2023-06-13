import type { CocktailPackage } from '$lib/types/types';
import {
	ginTonic,
	lemonade,
	missVanillaRhubarbara,
	moscowMule,
	rhubarbLemonade
} from '$lib/vars/cocktails';

export const exclusive: CocktailPackage = {
	label: 'Den eksklusive',
	price: '95 kr pp. / time, eksl. moms',
	items: [
		{
			cocktail: missVanillaRhubarbara,
			litersPerGuest: 2
		},
		{
			cocktail: moscowMule,
			litersPerGuest: 1
		}
	]
};

export const premium: CocktailPackage = {
	label: 'Den specielle',
	price: '85 kr pp. / time, eksl. moms',
	items: [
		{
			cocktail: ginTonic,
			litersPerGuest: 2
		},
		{
			cocktail: moscowMule,
			litersPerGuest: 2
		}
	]
};

export const virgin: CocktailPackage = {
	label: 'Den appelsinfrie',
	price: '25 kr pp. / time, eksl. moms',
	items: [
		{
			cocktail: lemonade,
			litersPerGuest: 3
		},
		{
			cocktail: rhubarbLemonade,
			litersPerGuest: 3
		}
	]
};

export const availableCocktailPackages: CocktailPackage[] = [exclusive, premium, virgin];
