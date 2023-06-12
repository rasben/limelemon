<script lang="ts">
	import { exclusive, premium, virgin } from '$lib/vars/cocktailPackages';
	import type { CocktailPackage } from '$lib/types/types';

	export let cocktailOrders;

	const cocktailPackages = [exclusive, premium, virgin] as CocktailPackage[];

	function choosePackage(cocktailPackage) {
		cocktailOrders = cocktailPackage.cocktailOrders;
	}
</script>

<div class="flex gap-4 items-center mb-4">
	De her knapper er buggy:
	{#each cocktailPackages as cocktailPackage}
		<button
			class="btn variant-filled"
			on:click={() => {
				choosePackage(cocktailPackage);
			}}
		>
			{cocktailPackage.label}
		</button>
	{/each}
</div>
