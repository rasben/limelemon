<script lang="ts">
	//export let classes;
	//export let cardClasses

	import CheckList from '$lib/components/CheckList.svelte';

	export let id;
	export let pricingPackage;
	export let selectedPackage;
	export let index;
	export let isSelected;
	export let isRecommended;

	const itemClasses = `md:w-1/3 w-full min-w-[300px] mb-4 md:mb-0 hover:z-30`;
	const inactiveItemClasses = '';
	const activeItemClasses = `z-20`;
	const cardClasses =
		'card flex flex-col text-center h-full p-4 overflow-hidden transition-all shadow-lg shadow-black duration-500 hover:variant-filled hover:max-h-[2000px]';
	const inactiveCardClasses = `md:mt-6`;
	const activeCardClasses = 'variant-filled max-h-[2000px]';

	const itemLoopClasses = {
		0: `md:absolute md:pr-4 lg:relative left-0`,
		1: 'relative z-10',
		2: `md:absolute md:pl-4 lg:relative right-0`
	};

	$: isSelected = selectedPackage === id;
</script>

<div
	class="{itemClasses} {itemLoopClasses[index]}
   {isSelected ? activeItemClasses : inactiveItemClasses}"
	on:click={() => {
		selectedPackage = id;
	}}
	on:keypress={() => {
		selectedPackage = id;
	}}
	role="button"
	tabindex="0"
>
	<div class="{cardClasses} {isSelected ? activeCardClasses : inactiveCardClasses}">
		{#if isRecommended}
			<span class="badge variant-filled-secondary inline-block mb-4">
				Vores anbefaling til din fest
			</span>
		{/if}
		<h2 class="h3 mb-2">
			{pricingPackage?.label}
		</h2>
		<p class="relative">
			{pricingPackage?.description}
		</p>

		{#if pricingPackage?.features.length}
			<CheckList items={pricingPackage.features} />
		{/if}
		<div class="grow" />

		{#if pricingPackage?.price}
			<p class="h5 font-bold mb-2">
				{pricingPackage.price}
			</p>
		{/if}

		<a class="btn variant-filled-primary mt-2" href="/pakke/{id}">
			Vælg cocktails med denne pakke
		</a>
	</div>
</div>
