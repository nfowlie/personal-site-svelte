<script>
	import LucideIcon from '$lib/components/LucideIcon.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {string} folderName
	 * @property {boolean} folderOpen
	 * @property {Snippet} children	 */

	/** @type {Props} */
	const { folderName, folderOpen, children } = $props();
</script>

<section class="folder {folderOpen ? 'open' : ''}">
	{#if folderOpen}
		<LucideIcon name="FolderOpen" color="hsl(40, 62%, 73%)" />
	{:else}
		<LucideIcon name="Folder" color="hsl(228, 13%, 44%)" />
	{/if}
	{folderName}
	{@render children()}
</section>

<style>
	.folder {
		margin-left: 1.75rem;
		color: hsl(228, 13%, 44%);
		padding-block-start: 0.4rem;
	}

	:first-child {
		padding-block-start: 0;
	}

	.folder.open {
		color: hsl(40, 62%, 73%);
	}
</style>
