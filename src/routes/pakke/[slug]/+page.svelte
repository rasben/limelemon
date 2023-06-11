<script lang="ts">
	import { pricingPackages } from '$lib/vars/vars';

	export let data;
	let selectedPackage = data?.selectedPackage;
</script>

Du har valgt
<span class="font-bold">
	{pricingPackages[selectedPackage]?.label}
</span>
