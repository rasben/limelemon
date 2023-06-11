export type PricingPackage = {
	label: string;
	description: string | null;
	priceGuideline: string | null;
	features: string[];
};

export type Ingredient = {
	label: string;
	alcPercentage?: string;
	amount?: string;
};

export type CocktailDetails = {
	label: string;
	image?: string;
	alcPercentage?: string;
	pricePerLiter: number;
	ingredients: Ingredient[];
};

export type CocktailOrder = {
	cocktail: CocktailDetails;
	liters: number;
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
