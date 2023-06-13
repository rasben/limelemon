<script lang="ts">
	import 'iconify-icon';

	export let cocktailOrders;
</script>

<div class="flex flex-wrap items-center">
	{#each cocktailOrders as cocktailOrder}
		{#if cocktailOrder?.liters > 0}
			<span class="flex relative items-center mr-2">
				<iconify-icon
					icon={cocktailOrder.cocktail?.icon ?? 'mdi:glass-cocktail'}
					class="mr-1"
					height="20"
				/>
				<span class="font-bold mr-1">
					{cocktailOrder.cocktail.label}:
				</span>

				{cocktailOrder.liters} liter

				<span class="divider-vertical ml-2" />
			</span>
		{/if}
	{/each}
</div>
