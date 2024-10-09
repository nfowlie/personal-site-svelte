<script>
	import LucideIcon from '$lib/components/LucideIcon.svelte';
	const { fileName, fileOpen } = $props();
</script>

<div class="file {fileOpen ? 'open' : ''}">
	{#if fileOpen}
		<LucideIcon name="CodeXml" color="hsl(227, 70%, 87%)" />
	{:else}
		<LucideIcon name="CodeXml" color="hsl(228, 13%, 44%)" />
	{/if}
	{fileName}
</div>

<style>
	.file {
		margin-left: 1.75rem;
		color: hsl(228, 13%, 44%);
		padding-block-start: 0.4rem;
	}
	.file.open {
		color: hsl(227, 70%, 87%);
	}
</style>
