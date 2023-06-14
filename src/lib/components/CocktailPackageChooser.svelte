<script lang="ts">
	import { availableCocktailPackages as cocktailPackages } from '$lib/vars/cocktailPackages';
	import type { CocktailPackage, CocktailOrder, CocktailPackageItem } from '$lib/types/types';

	export let cocktailOrders;
	export let guests;

	function choosePackage(cocktailPackage: CocktailPackage) {
		// First, let's get rid of any existing litres.
		cocktailOrders.forEach(function (cocktailOrder: CocktailOrder) {
			cocktailOrder.liters = 0;
		});

		// Find the cocktailOrders in the package, and update any matching
		// litres in the original object.
		cocktailPackage.items.forEach(function (cocktailPackageItem: CocktailPackageItem) {
			const existingCocktailOrder = cocktailOrders.find(
				(i) => i.cocktail === cocktailPackageItem.cocktail
			);

			let liters = cocktailPackageItem.litersPerGuest * guests;
			liters = Math.ceil(liters);

			if (existingCocktailOrder) {
				existingCocktailOrder.liters = liters;

				return;
			}

			// Else, let's just add the cocktailOrder to the array.
			cocktailOrders.push({
				cocktail: cocktailPackageItem.cocktail,
				liters: liters
			} as CocktailOrder);
		});

		cocktailOrders = cocktailOrders;
	}
</script>

<div class="grid lg:grid-cols-2 gap-4 mb-4">
	<div class="flex text-center items-center lg:text-right">
		<p class="grow mr-4">
			I tvivl om hvad du skal vælge? Prøv en af vores færdiglavede skabeloner.<br />
			<span class="font-bold">Mængderne er justeret til dine {guests} gæster.</span>
		</p>
		<iconify-icon
			class="hidden lg:block rotate-12"
			icon="heroicons:arrow-trending-up"
			height="50"
		/>
	</div>

	<div class="flex flex-col md:flex-row w-full gap-4 items-center p-1 p-2">
		{#each cocktailPackages as cocktailPackage}
			<button
				class="btn variant-filled w-full"
				on:click={() => {
					choosePackage(cocktailPackage);
				}}
			>
				{cocktailPackage.label}
			</button>
		{/each}
	</div>
</div>
