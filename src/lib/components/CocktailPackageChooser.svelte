<script lang="ts">
	import { availableCocktailPackages as cocktailPackages } from '$lib/vars/cocktailPackages';
	import type { CocktailPackage, CocktailOrder } from '$lib/types/types';

	export let cocktailOrders;

	function choosePackage(cocktailPackage: CocktailPackage) {
		// First, let's get rid of any existing litres.
		cocktailOrders.forEach(function (cocktailOrder: CocktailOrder) {
			cocktailOrder.liters = 0;
		});

		// Find the cocktailOrders in the package, and update any matching
		// litres in the original object.
		cocktailPackage.cocktailOrders.forEach(function (cocktailOrder: CocktailOrder) {
			const existingCocktailOrder = cocktailOrders.find(
				(i) => i.cocktail === cocktailOrder.cocktail
			);

			if (existingCocktailOrder) {
				existingCocktailOrder.liters = cocktailOrder.liters;

				return;
			}

			// Else, let's just add the cocktailOrder to the array.
			cocktailOrders.push(cocktailOrder);
		});

		cocktailOrders = cocktailOrders;
		//cocktailOrders = cocktailPackage.cocktailOrders;
	}
</script>

<div class="flex gap-4 items-center mb-4">
	De her knapper er buggy:
	{#each cocktailPackages as cocktailPackage}
		<button
			class="btn variant-filled"
			on:click={() => {
				choosePackage(cocktailPackage);
			}}
		>
			{cocktailPackage.label}
		</button>
	{/each}
</div>
