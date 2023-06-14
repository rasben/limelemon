<script lang="ts">
	import ShoppingList from '$lib/components/ShoppingList.svelte';
	import { bookingStore } from '$lib/store';

	export let booking = {};

	bookingStore.subscribe((bookingStore) => {
		booking = bookingStore;
	});
</script>

<h1 class="h1">{booking?.pricingPackage?.label}</h1>
<ShoppingList cocktailOrders={booking?.cocktailOrders} />
