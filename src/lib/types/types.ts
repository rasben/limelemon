export type PricingPackage = {
	label: string;
	description: string | null;
	priceGuideline: string | null;
	features: string[];
};

export type Ingredient = {
	label: string;
	alcPercentage?: number;
	amountPerLiter?: number;
	amountPercentage?: number;
};

export type ShoppingListItem = {
	ingredient: Ingredient;
	liters?: number;
	pieces?: number;
};

export type CocktailDetails = {
	label: string;
	image?: string;
	alcPercentage?: number;
	color?: string;
	icon?: string;
	pricePerLiter: number;
	ingredients: Ingredient[];
};

export type CocktailOrder = {
	cocktail: CocktailDetails;
	liters: number;
};

export type CocktailPackageItem = {
	cocktail: CocktailDetails;
	litersPerGuest: number;
};

export type CocktailPackage = {
	label?: string;
	items: CocktailPackageItem[];
	price?: string;
};

export type Booking = {
	guests?: number;
	hours?: number;
	time?: string;
	date?: string;
	theme?: string;
	notes?: string;
	glassSizeMl?: number;
	cocktails?: CocktailOrder[];
};
