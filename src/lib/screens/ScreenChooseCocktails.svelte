<script lang="ts">
	import 'iconify-icon';

	import type { CocktailOrder } from '$lib/types/types';
	import { pricingPackages } from '$lib/vars/pricingPackages';
	import { availableCocktails as cocktails } from '$lib/vars/cocktails';
	import CocktailChooser from '$lib/components/CocktailChooser.svelte';
	import CocktailPackageChooser from '$lib/components/CocktailPackageChooser.svelte';
	import CocktailOrdersList from '$lib/components/CocktailOrdersList.svelte';

	export let totalPrice = 0;
	export let selectedPackage;

	import { guestsStore, cocktailOrdersStore } from '$lib/stores/booking';

	let guests;

	guestsStore.subscribe((value) => {
		guests = value;
	});

	let cocktailOrders: CocktailOrder[] = [];

	cocktails.forEach(function (cocktail) {
		cocktailOrders.push({
			cocktail: cocktail,
			liters: 0
		});
	});

	// todo, is this bad performance?
	$: {
		cocktailOrdersStore.update((n) => cocktailOrders);

		totalPrice = 0;

		cocktailOrders.forEach((cocktailOrder) => {
			if (!cocktailOrder?.liters) {
				return;
			}

			const literPrice = cocktailOrder.cocktail.pricePerLiter;

			totalPrice += cocktailOrder.liters * literPrice;
		});
	}
</script>

<CocktailPackageChooser bind:cocktailOrders {guests} />
<hr class="mb-4" />

<div class="flex">
	<section class="grow w-full">
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
			{#each cocktailOrders as cocktailOrder}
				<CocktailChooser bind:cocktailOrder />
			{/each}
		</div>
	</section>

	<aside
		class="fixed bottom-0 left-0 z-20 w-full transition-all duration-700 overflow-hidden
                {totalPrice <= 0 ? 'max-h-[0px]' : 'max-h-[500px]'}"
	>
		<div class="variant-filled p-4">
			<h2 class="h2 mb-2">
				{pricingPackages[selectedPackage]?.label}

				<small class="h4">
					total pris: {totalPrice.toLocaleString()} kr
				</small>
			</h2>

			<a class="btn variant-filled-surface absolute right-5 top-5" href="/indkoeb">Indkøbsliste</a>

			<CocktailOrdersList {cocktailOrders} />
		</div>
	</aside>
</div>
