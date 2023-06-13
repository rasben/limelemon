<script lang="ts">
	import type { CocktailOrder, ShoppingListItem, Ingredient } from '$lib/types/types';

	export let cocktailOrders;

	let shoppingList = [] as ShoppingListItem[];

	$: {
		cocktailOrders.forEach((cocktailOrder: CocktailOrder) => {
			const orderLiters = cocktailOrder?.liters;

			if (!orderLiters) {
				return;
			}

			const ingredients = cocktailOrder.cocktail.ingredients as Ingredient[];
			ingredients.forEach((ingredient) => {
				let ingredientLiters = 0;
				let ingredientAmount = 0;

				if (ingredient?.amountPercentage && orderLiters) {
					ingredientLiters = orderLiters * (ingredient.amountPercentage / 100);
				}

				if (ingredient?.amountPerLiter && orderLiters) {
					ingredientAmount = orderLiters * ingredient?.amountPerLiter;
				}

				let shoppingListItem = shoppingList.find((i) => i.ingredient === ingredient);

				ingredientLiters = Math.ceil(ingredientLiters);
				ingredientAmount = Math.ceil(ingredientAmount);

				// If we found the existing shopping item, we'll update that
				// instead of pushing a new one.
				if (shoppingListItem) {
					shoppingListItem.liters = ingredientLiters;
					shoppingListItem.pieces = ingredientAmount;
					return;
				}

				shoppingListItem = {
					ingredient: ingredient,
					liters: ingredientLiters,
					pieces: ingredientAmount
				} as ShoppingListItem;

				shoppingList.push(shoppingListItem);
			});
		});
	}
</script>

<div class="grid grid-cols-2 gap-10">
	<div class="card p-8 variant-filled">
		<h2 class="h3 mb-1">Valgte cocktails</h2>
		<ul class="mb-4 list list-disc">
			{#each cocktailOrders as cocktailOrder}
				{#if cocktailOrder.liters}
					<li>
						<span class="font-bold mr-1">
							- {cocktailOrder.cocktail.label}:
						</span>
						{cocktailOrder.liters} liter
					</li>
				{/if}
			{/each}
		</ul>
	</div>
	<div class="card p-8 variant-filled">
		<h2 class="h3 mb-1">Indkøbsliste</h2>
		<ul class="mb-4 list list-disc">
			{#each shoppingList as shoppingListItem}
				<li>
					<span class="font-bold mr-1">
						- {shoppingListItem.ingredient.label}:
					</span>
					{#if shoppingListItem?.liters}
						{shoppingListItem.liters} liter
					{/if}

					{#if shoppingListItem?.pieces}
						{shoppingListItem.pieces} stk.
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</div>
