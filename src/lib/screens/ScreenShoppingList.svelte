<script lang="ts">
	import { cocktailOrdersStore } from '$lib/stores/booking';

	import ShoppingList from '$lib/components/ShoppingList.svelte';

	export let cocktailOrders;

	cocktailOrdersStore.subscribe((value) => {
		cocktailOrders = value;
	});
</script>

<ShoppingList {cocktailOrders} />
