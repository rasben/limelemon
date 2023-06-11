<script lang="ts">
	import type { CocktailDetails, CocktailOrder } from '$lib/types/types';

	export let cocktail: CocktailDetails;
	export let cocktailOrder: CocktailOrder;
	export let totalPrice;

	function removeCocktail(): void {
		if (cocktailOrder.liters <= 0) {
			return;
		}

		cocktailOrder.liters--;
		totalPrice -= cocktailOrder.cocktail.pricePerLiter;
	}

	function addCocktail(): void {
		cocktailOrder.liters++;
		totalPrice += cocktailOrder.cocktail.pricePerLiter;
	}
</script>

<div class="card flex flex-col variant-soft p-4 min-h-[200px] relative items-center justify-center">
	{#if cocktail?.image}
		<img
			src={cocktail.image}
			alt=""
			class="opacity-50 absolute w-full h-full top-0 left-0 object-cover"
		/>
	{/if}

	<section class="relative z-10">
		<h2 class="text-2xl font-bold">
			{cocktail.label}
		</h2>
	</section>

	{#if cocktail?.alcPercentage}
		<span class="badge absolute top-2 right-2">
			Alk.: {cocktail.alcPercentage}
		</span>
	{/if}

	<span class="badge variant-filled absolute bottom-2 right-2">
		{cocktail.pricePerLiter.toLocaleString()} kr pr. liter
	</span>

	<footer class="flex absolute left-2 bottom-2 z-10 items-center justify-center">
		<button type="button" class="btn-icon btn-icon-sm variant-filled" on:click={removeCocktail}
			>-</button
		>

		<span class="inline-block text-center min-w-[75px]">
			{cocktailOrder.liters} liter
		</span>

		<button type="button" class="btn-icon btn-icon-sm variant-filled" on:click={addCocktail}
			>+</button
		>
	</footer>
</div>
