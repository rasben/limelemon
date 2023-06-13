<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
</script>

<div class="container mx-auto flex flex-col justify-center py-20">
	<a href="/" class="font-bold mb-2" data-sveltekit-reload>Hjem</a>
	<slot />
</div>
