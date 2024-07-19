<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import projects from '$lib/data/projects.json';
</script>

<main>
	<h1>Projects</h1>
	<h2>Personal</h2>
	<div class="projects">
		{#each projects.personal as project, i}
			<ProjectCard {project} --background-image="url({project.image})" />
		{/each}
	</div>
</main>

<style>
	main {
		max-width: 1280px;
		width: 80vw;
		margin: 0 auto;
		background: linear-gradient(
				0deg,
				var(--project-gradient-0) 0%,
				var(--project-gradient-1) 50%,
				var(--project-gradient-2) 60%,
				var(--project-gradient-3) 100%
			),
			var(--background-image);
		background: linear-gradient(
				0deg,
				var(--project-gradient-0) 0%,
				var(--project-gradient-1) 50%,
				var(--project-gradient-2) 60%,
				var(--project-gradient-3) 100%
			),
			var(--background-image);
	}

	h1,
	h2 {
		text-align: center;
	}

	h2 {
		margin-top: 2rem;
	}

	.projects {
		display: grid;
		column-gap: 6%;
		grid-template-columns: 48% 48%;
		row-gap: 30px;
	}

	@media screen and (max-width: 992px) {
		.projects {
			grid-template-columns: 100%;
		}
	}
</style>
