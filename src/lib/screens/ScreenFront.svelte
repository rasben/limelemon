<script>
	import PricingTable from '$lib/components/PricingTable.svelte';
	import RangeSlider from 'svelte-range-slider-pips';
	import { guestsStore, hoursStore } from '$lib/stores/booking';

	let selectedPackage;
	let recommendedPackage;
	let guests;
	let hours;

	$: {
		guestsStore.update((n) => guests);
		hoursStore.update((n) => hours);
	}

	$: {
		if (guests > 30 && hours > 2) {
			recommendedPackage = 'fixed';
		} else if (guests < 30 && hours > 2) {
			recommendedPackage = 'premixed';
		} else {
			recommendedPackage = 'unlimited';
		}
	}

	$: selectedPackage = recommendedPackage;
</script>

<div class="card p-10 mb-10 w-full max-w-[500px] mx-auto text-center">
	<div class="mb-6">
		<h2
			class="h2 mb-2 bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
		>
			Fortæl os om din fest
		</h2>
		<p>.. så vi kan anbefale en pakke til dig.</p>
	</div>

	<div class="mb-4 mx-auto">
		<span class="label">
			Jeg har
			<span class="font-bold">{guests} gæster</span>
		</span>
		<RangeSlider min={5} max={100} step={5} bind:values={guests} pips first="label" last="label" />
	</div>

	<div class="mb-4 mx-auto">
		<span class="label">
			Festen varer
			<span class="font-bold">{hours} timer</span>
		</span>
		<RangeSlider min={2} max={7} step={1} bind:values={hours} pips all="label" />
	</div>
</div>

<div class="w-full text-center">
	<h2 class="h2">Vores cocktail pakker</h2>
	<PricingTable bind:selectedPackage bind:recommendedPackage />
</div>
