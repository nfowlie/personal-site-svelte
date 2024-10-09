<script>
	import IdeFolder from './IdeFolder.svelte';
	import IdeFile from './IdeFile.svelte';
</script>

<div id="IDE">
	<div class="titleBar">s</div>
	<div class="sideBar">
		<IdeFolder folderName="components" folderOpen={true}>
			<IdeFolder folderName="components" folderOpen={true}>
				<IdeFile fileName="sfsdfsk" fileOpen={true} />
				<IdeFile fileName="sfsdfsk" fileOpen={true} />
				<IdeFile fileName="sfsdfsk" fileOpen={true} />
			</IdeFolder>
			<IdeFile fileName="sfsdfsk" />
		</IdeFolder>
		<IdeFolder folderName="components" folderOpen={false}>
			<div></div>
		</IdeFolder>
	</div>
	<div class="previewArea">d</div>
</div>

<style>
	#IDE {
		display: grid;
		grid-template-columns: max-content 1fr;
		grid-template-areas:
			'titleBar titleBar'
			'sideBar previewArea';
		--border-style: 1px solid hsl(228, 22%, 66%);
	}

	.titleBar {
		grid-area: titleBar;
		background-color: hsl(229, 20%, 17%);
		border-bottom: var(--border-style);
	}
	.sideBar {
		grid-area: sideBar;
		background-color: hsl(229, 19%, 23%);
		border-right: var(--border-style);
		padding: 0.5rem;
	}
	:global(.sideBar > section) {
		margin-left: 0 !important;
	}
	.previewArea {
		grid-area: previewArea;
		background-color: hsl(227, 15%, 37%);
	}
</style>
