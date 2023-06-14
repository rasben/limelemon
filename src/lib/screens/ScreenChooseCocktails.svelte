<script lang="ts">
	import 'iconify-icon';

	import type { Booking } from '$lib/types/types';
	import { availableCocktails as cocktails } from '$lib/vars/cocktails';
	import CocktailChooser from '$lib/components/CocktailChooser.svelte';
	import CocktailPackageChooser from '$lib/components/CocktailPackageChooser.svelte';
	import CocktailOrdersList from '$lib/components/CocktailOrdersList.svelte';

	export let totalPrice = 0;

	import { bookingStore } from '$lib/store';

	let booking = {} as Booking;
	let cocktailOrders = [];

	cocktails.forEach(function (cocktail) {
		cocktailOrders.push({
			cocktail: cocktail,
			liters: 0
		});
	});

	bookingStore.subscribe((bookingStore: Booking) => {
		booking = bookingStore;
	});

	$: {
		totalPrice = 0;

		// Tally up the total price for the selections.
		cocktailOrders.forEach((cocktailOrder) => {
			if (!cocktailOrder?.liters) {
				return;
			}

			const literPrice = cocktailOrder.cocktail.pricePerLiter;
			totalPrice += cocktailOrder.liters * literPrice;
		});

		booking.cocktailOrders = cocktailOrders;
		booking.totalPrice = totalPrice;

		bookingStore.set(booking);
	}
</script>

<CocktailPackageChooser bind:cocktailOrders guests={booking?.guests} />
<hr class="mb-4" />

<section class="grow w-full">
	<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
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
			{booking?.pricingPackage?.label}

			<small class="h4">
				total pris: {totalPrice.toLocaleString()} kr
			</small>
		</h2>

		<a class="btn variant-filled-surface absolute right-5 top-5" href="/indkoeb">Indkøbsliste</a>

		<CocktailOrdersList {cocktailOrders} />
	</div>
</aside>
