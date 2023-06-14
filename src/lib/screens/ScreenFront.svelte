<script>
	import PricingPackageChooser from '$lib/components/PricingPackageChooser.svelte';
	import RangeSlider from 'svelte-range-slider-pips';
	import { bookingStore } from '$lib/store';
	let selectedPackage;
	let booking = {};

	bookingStore.subscribe((bookingStore) => {
		booking = bookingStore;
	});

	let guests = 4;
	let hours = 30;
	let hoursSliderValue = [guests];
	let guestsSliderValue = [hours];

	$: {
		hours = hoursSliderValue[0];
		guests = guestsSliderValue[0];
		booking.guests = guests;
		booking.hours = hours;
		booking.pricingPackage = selectedPackage;
		bookingStore.set(booking);
	}
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
		<RangeSlider
			min={5}
			max={100}
			step={5}
			bind:values={guestsSliderValue}
			pips
			first="label"
			last="label"
		/>
	</div>

	<div class="mb-4 mx-auto">
		<span class="label">
			Festen varer
			<span class="font-bold">{hours} timer</span>
		</span>
		<RangeSlider min={2} max={7} step={1} bind:values={hoursSliderValue} pips all="label" />
	</div>
</div>

<div class="w-full text-center">
	<h2 class="h2">Vores cocktail pakker</h2>
	<PricingPackageChooser bind:selectedPackage {guests} {hours} />
</div>
