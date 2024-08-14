<script>
	import * as icons from 'lucide-svelte';
	export let name;
</script>

<svelte:component this={icons[name]} {...$$props} class="icon" />

<style>
	:global(.icon) {
		color: var(--gray1);
	}
</style>
