<script lang="ts">
	import type { CocktailOrder } from '$lib/types/types';
	import { pricingPackages } from '$lib/vars/vars';
	import { cocktails } from '$lib/vars/cocktails';
	import CocktailChooser from '$lib/components/CocktailChooser.svelte';

	export let data;
	export let totalPrice = 0;
	let selectedPackage = data?.selectedPackage;
	let cocktailOrders: CocktailOrder[] = [];

	cocktails.forEach(function (cocktail) {
		cocktailOrders.push({
			cocktail: cocktail,
			liters: 0
		});
	});
</script>

<div class="flex">
	<section class="grow w-full">
		<div class="grid md:grid-cols-2 gap-4 mb-4">
			{#each cocktails as cocktail, i}
				<CocktailChooser {cocktail} bind:cocktailOrder={cocktailOrders[i]} bind:totalPrice />
			{/each}
		</div>
	</section>

	<aside
		class="ml-8 w-full transition-all md:w-1/3 duration-700 overflow-hidden {totalPrice <= 0
			? 'max-w-[0px]'
			: 'max-w-[500px]'}"
	>
		<div class="card variant-filled p-4">
			<h2 class="h2 mb-2">
				{pricingPackages[selectedPackage]?.label}
			</h2>
			<h3 class="h3 mb-2">
				total pris: {totalPrice.toLocaleString()} kr
			</h3>

			<ul class="list-dl">
				{#each cocktailOrders as cocktailOrder}
					{#if cocktailOrder.liters > 0}
						<li>
							<span class="font-bold">
								{cocktailOrder.cocktail.label}:
							</span>
							{cocktailOrder.liters} liter
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</aside>
</div>
