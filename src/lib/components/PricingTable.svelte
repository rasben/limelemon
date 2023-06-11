<script lang="ts">
	import { pricingPackages } from '$lib/vars/vars';
	import PricingTableItem from '$lib/components/PricingTableItem.svelte';

	export let selectedPackage;
	export let recommendedPackage;
</script>

<div class="md:flex items-stretch justify-center items-start relative pt-8">
	{#each Object.entries(pricingPackages) as [id, pricingPackage], i}
		<PricingTableItem
			bind:selectedPackage
			{pricingPackage}
			index={i}
			{id}
			isRecommended={id === recommendedPackage}
		/>
	{/each}
</div>
