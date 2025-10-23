<script lang="ts">
	import LucideIcon from '$lib/components/LucideIcon.svelte';

	let { folderName, folderOpen, children, tabIndex } = $props();
</script>

<section
	tabindex={tabIndex}
	role="button"
	class="folder {folderOpen ? 'open' : ''}"
	onclick={(event: MouseEvent) => {
		if (event.target == event.currentTarget) folderOpen = !folderOpen;
	}}
	onkeypress={(event: KeyboardEvent) => {
		if (event.target == event.currentTarget) folderOpen = !folderOpen;
	}}
>
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
		user-select: none;
		margin-left: 1.75rem;
		color: hsl(228, 13%, 44%);
		padding-block-start: 0.4rem;
	}

	.folder:hover {
		cursor: pointer;
	}

	:first-child {
		padding-block-start: 0;
	}

	.folder.open {
		color: hsl(40, 62%, 73%);
	}
	:global(.folder:not(.open) > .file) {
		display: none;
	}
</style>
