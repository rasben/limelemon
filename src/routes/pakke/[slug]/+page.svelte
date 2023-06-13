<script lang="ts">
	import ScreenChooseCocktails from '$lib/screens/ScreenChooseCocktails.svelte';

	export let data;

	let selectedPackage = data?.selectedPackage;
</script>

<ScreenChooseCocktails {selectedPackage} />
