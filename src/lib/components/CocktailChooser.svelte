<script lang="ts">
	import type { CocktailDetails, CocktailOrder } from '$lib/types/types';
	import WaveBackground from '$lib/components/WaveBackground.svelte';

	export let cocktailOrder: CocktailOrder;

	let cocktail = cocktailOrder?.cocktail as CocktailDetails;
	$: liters = cocktailOrder?.liters ?? 0;

	function removeCocktail(): void {
		if (cocktailOrder.liters <= 0) {
			return;
		}

		cocktailOrder.liters--;
	}

	function addCocktail(): void {
		cocktailOrder.liters++;
	}
</script>

<div
	class="card flex flex-col variant-filled-surface p-4 min-h-[200px] relative items-center justify-center overflow-hidden"
>
	<WaveBackground percentage={liters} />

	{#if cocktail?.image}
		<img
			src={cocktail.image}
			alt=""
			class="opacity-50 absolute w-full h-full z-0 top-0 left-0 object-cover"
		/>
	{/if}

	<section class="relative z-10">
		<h2 class="text-2xl font-bold">
			{cocktail.label}
		</h2>
	</section>

	{#if cocktail?.alcPercentage}
		<span class="badge absolute z-10 top-2 right-2">
			Alk.: {cocktail.alcPercentage}
		</span>
	{/if}

	<span class="badge variant-filled absolute z-10 bottom-2 right-2">
		{cocktail.pricePerLiter.toLocaleString()} kr pr. liter
	</span>

	<footer class="flex absolute left-2 bottom-2 z-10 items-center justify-center">
		<button type="button" class="btn-icon btn-icon-sm variant-filled" on:click={removeCocktail}>
			<iconify-icon icon="mdi:minus-thick" />
		</button>

		<span class="inline-block text-center min-w-[75px]">
			{liters} liter
		</span>

		<button type="button" class="btn-icon btn-icon-sm variant-filled" on:click={addCocktail}>
			<iconify-icon icon="mdi:plus-thick" />
		</button>
	</footer>
</div>
