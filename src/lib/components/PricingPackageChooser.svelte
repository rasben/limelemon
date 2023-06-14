<script lang="ts">
	import {
		availablePricingPackages as pricingPackages,
		fixed as packageFixed,
		premixed as packagePremixed,
		unlimited as packageUnlimited
	} from '$lib/vars/pricingPackages';
	import PricingPackageChooserItem from '$lib/components/PricingPackageChooserItem.svelte';

	export let guests;
	export let hours;
	export let selectedPackage;

	let recommendedPackage;
	selectedPackage = packageUnlimited;
	$: setRecommendation();

	function setRecommendation() {
		if (guests > 30 && hours > 2) {
			recommendedPackage = packageFixed;
		} else if (guests < 30 && hours > 2) {
			recommendedPackage = packageUnlimited;
		} else {
			recommendedPackage = packagePremixed;
		}

		selectedPackage = recommendedPackage;
	}

	// Update recommendation whenever guests or hours are changed.
	$: guests, hours, setRecommendation();
</script>

<div class="md:flex justify-center items-start relative pt-8">
	{#each pricingPackages as pricingPackage, index}
		<PricingPackageChooserItem
			{index}
			bind:selectedPackage
			{pricingPackage}
			isRecommended={pricingPackage === recommendedPackage}
		/>
	{/each}
</div>
