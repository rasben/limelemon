<script lang="ts">
	//export let classes;
	//export let cardClasses

	import CheckList from '$lib/components/CheckList.svelte';

	export let pricingPackage;
	export let index;
	export let selectedPackage;
	export let isRecommended;

	$: isSelected = pricingPackage === selectedPackage;

	const itemClasses = `md:w-1/3 w-full min-w-[300px] mb-4 md:mb-0 hover:z-30`;
	const inactiveItemClasses = '';
	const activeItemClasses = `z-20`;
	const cardClasses =
		'card flex flex-col text-center h-full p-4 overflow-hidden transition-all shadow-lg shadow-black duration-500 hover:variant-filled hover:max-h-[2000px]  hover:md:mt-0';
	const inactiveCardClasses = `md:mt-6`;
	const activeCardClasses = 'variant-filled max-h-[2000px]';

	const itemLoopClasses = {
		0: `md:absolute md:pr-4 lg:relative left-0`,
		1: 'relative z-10',
		2: `md:absolute md:pl-4 lg:relative right-0`
	};
</script>

<button
	on:click={() => {
		selectedPackage = pricingPackage;
	}}
	class="{itemClasses} {itemLoopClasses[index]}
   {isSelected ? activeItemClasses : inactiveItemClasses}"
>
	<div class="{cardClasses} {isSelected ? activeCardClasses : inactiveCardClasses}">
		{#if isRecommended}
			<span class="badge variant-filled-secondary inline-block mb-4">
				Vores anbefaling til din fest
			</span>
		{/if}
		<h2 class="h2 mb-4">
			{pricingPackage?.label}
		</h2>

		{#if pricingPackage?.description}
			<p class="relative mb-4">
				{pricingPackage?.description}
			</p>
		{/if}

		{#if pricingPackage?.features.length}
			<CheckList items={pricingPackage.features} />
		{/if}
		<div class="grow" />

		{#if pricingPackage?.price}
			<p class="h5 font-bold mb-2">
				{pricingPackage.price.toLocaleString()}
			</p>
		{/if}

		{#if isSelected}
			<a class="btn variant-filled-primary mt-2" href="/pakke"> Vælg cocktails med denne pakke </a>
		{/if}
	</div>
</button>
