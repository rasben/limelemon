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
	cocktailOrders: [
		{
			cocktail: missVanillaRhubarbara,
			liters: 2
		},
		{
			cocktail: moscowMule,
			liters: 10
		}
	]
};

export const premium: CocktailPackage = {
	label: 'Den specielle',
	price: '85 kr pp. / time, eksl. moms',
	cocktailOrders: [
		{
			cocktail: ginTonic,
			liters: 20
		},
		{
			cocktail: moscowMule,
			liters: 10
		}
	]
};

export const virgin: CocktailPackage = {
	label: 'Den appelsinfrie',
	price: '25 kr pp. / time, eksl. moms',
	cocktailOrders: [
		{
			cocktail: lemonade,
			liters: 30
		},
		{
			cocktail: rhubarbLemonade,
			liters: 30
		}
	]
};

export const availableCocktailPackages: CocktailPackage[] = [exclusive, premium, virgin];
