<script lang="ts">
	import 'iconify-icon';

	export let items: [];
</script>

<ul class="mb-2">
	{#each items as item}
		<li class="flex">
			<iconify-icon icon="bi:check" height="30" />
			<span>{item}</span>
		</li>
	{/each}
</ul>
