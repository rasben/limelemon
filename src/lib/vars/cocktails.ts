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

export const cocktails: CocktailDetails[] = [
	{
		label: 'Gin & Tonic',
		alcPercentage: '10%',
		image: '/cocktails/gintonic.png',
		pricePerLiter: 250,
		ingredients: [{ ...ice }, { ...lime }, { ...gin, amount: '25%' }, { ...tonic, amount: '75%' }]
	},
	{
		label: 'Lemonade',
		pricePerLiter: 150,
		ingredients: [
			{ ...sugarSyrup, amount: '25%' },
			{ ...danskvand, amount: '50%' },
			{ ...limeJuice, amount: '25%' }
		]
	},
	{
		label: 'Rabarber Lemonade',
		pricePerLiter: 250,
		ingredients: [
			{ ...rhubarbSyrup, amount: '35%' },
			{ ...danskvand, amount: '50%' },
			{ ...lemonJuice, amount: '15%' }
		]
	},
	{
		label: 'Moscow Mule',
		pricePerLiter: 175,
		ingredients: [
			{ ...vodka, amount: '26%' },
			{ ...sugarSyrup, amount: '5%' },
			{ ...limeJuice, amount: '11%' },
			{ ...jamaicaGingerBeer, amount: '58%' }
		]
	},
	{
		label: 'Miss Vanilla Rhubarbara',
		pricePerLiter: 225,
		ingredients: [
			{ ...gin, amount: '22%' },
			{ ...rhubarbSyrup, amount: '22%' },
			{ ...danskvand, amount: '43%' },
			{ ...lemonJuice, amount: '13%' }
		]
	}
];
