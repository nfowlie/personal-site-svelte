<script lang="ts">
	import IdeFolder from './IdeFolder.svelte';
	import IdeFile from './IdeFile.svelte';
	import ide_data from '../data/ide_data.json';

	// Runes
	import { iframeRune } from '$lib/runes/IFrameRune.svelte';
	let activeSite;
</script>

<div id="IDE">
	<div class="titleBar">{iframeRune.title}</div>
	<div class="sideBar">
		{#each ide_data as folders, index}
			{#if folders.folder == ''}
				{#each folders.projects as project, subIndex}
					<IdeFile
						icon={project.type}
						tabIndex={subIndex}
						fileName={project.name}
						fileOpen={false}
						src={project.src}
					></IdeFile>
				{/each}
			{:else}
				<IdeFolder tabIndex={index} folderName={folders.folder} folderOpen={false}>
					{#each folders.projects as project, subIndex}
						<IdeFile
							icon={project.type}
							tabIndex={subIndex}
							fileName={project.name}
							fileOpen={false}
							src={project.src}
						></IdeFile>
					{/each}
				</IdeFolder>
			{/if}
		{/each}
	</div>
	<div class="previewArea">
		<iframe id="application" title="lfjslkfjsd" height="100%" width="100%" src={iframeRune.src}
		></iframe>
	</div>
</div>

<style>
	#IDE {
		display: grid;
		grid-template-columns: max-content 1fr;
		grid-template-areas:
			'titleBar titleBar'
			'sideBar previewArea';
		grid-template-rows: auto 1fr;
		height: 100%;
		--ide_border_radius: 10px;
		--ide_border_size: 1px;
		--ide_border_style: solid;
		--ide_border_color: hsl(228, 22%, 66%);
	}

	.titleBar {
		border-top-left-radius: var(--ide_border_radius);
		border-top-right-radius: var(--ide_border_radius);
		grid-area: titleBar;
		background-color: hsl(229, 20%, 17%);
		color: hsl(227, 70%, 87%);
		border-bottom: var(--ide_border_size) var(--ide_border_style) var(--ide_border_color);
		font-weight: 700;
		font-size: 1.2rem;
		padding: 12px;
	}
	.sideBar {
		resize: horizontal;
		border-bottom-left-radius: var(--ide_border_radius);
		border-left: none;
		border-bottom: none;
		grid-area: sideBar;
		background-color: hsl(229, 19%, 23%);
		border-right: var(--ide_border_size) var(--ide_border_style) var(--ide_border_color);
		padding: 0.5rem;
	}
	:global(.sideBar > section) {
		margin-left: 0 !important;
	}
	.previewArea {
		border-right: 4px solid rgb(101, 156, 155);
		border-bottom-right-radius: var(--ide_border_radius);
		grid-area: previewArea;
		background-color: hsl(227, 15%, 37%);
		padding: 0 4px 4px 0;
	}
	iframe {
		border-bottom-right-radius: var(--ide_border_radius);
	}
</style>
