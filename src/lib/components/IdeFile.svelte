<script>
	import LucideIcon from '$lib/components/LucideIcon.svelte';
	let { fileName, fileOpen, tabIndex, icon, src } = $props();
	import iconLookup from '$lib/data/icon_lookup.json';
	import { iframeRune } from '$lib/runes/IFrameRune.svelte';
</script>

<div
	tabindex={tabIndex}
	role="button"
	class="file {fileOpen ? 'open' : ''}"
	onclick={(event) => {
		if (event.target == event.currentTarget) fileOpen = !fileOpen;
		iframeRune.title = fileName;
		iframeRune.src = src;
	}}
	onkeypress={(event) => {
		if (event.target == event.currentTarget) fileOpen = !fileOpen;
		iframeRune.title = fileName;
		iframeRune.src = src;
	}}
>
	<LucideIcon
		name={iconLookup[icon]}
		color={fileOpen ? 'hsl(227, 70%, 87%)' : 'hsl(228, 13%, 44%)'}
	/>

	{fileName}
</div>

<style>
	.file:hover {
		cursor: pointer;
	}
	.file {
		user-select: none;
		margin-left: 0;
		color: hsl(228, 13%, 44%);
		padding-block-start: 0.4rem;
	}
	.file.open {
		color: hsl(227, 70%, 87%);
	}
	:global(.folder > .file) {
		margin-left: 1.75rem !important;
	}
</style>
