<script>
	export let project;
</script>

<div
	class="project"
	on:click={() => (window.location.href = project.siteLink)}
	role="button"
	tabindex="0"
	on:keydown={(event) => {
		if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') {
			return;
		}
		window.location.href = project.siteLink;
	}}
>
	<div class="project-title">{project.name}</div>
	<div class="project-description">
		{project.description}
		<a href={project.repoLink}>Repo Link</a>
	</div>
</div>

<style>
	.project {
		padding: 1rem;
		height: 400px;
		justify-content: flex-end;
		display: flex;
		flex-direction: column;

		isolation: isolate;
		position: relative;
		overflow: hidden;
		border-radius: 15px;
		color: var(--gray0);
	}

	.project::after {
		transition: 1s;
		z-index: -1;
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
				0deg,
				var(--project-gradient-0) 0%,
				var(--project-gradient-1) 50%,
				var(--project-gradient-2) 60%,
				var(--project-gradient-3) 100%
			),
			var(--background-image);
		background-position: center;
		background-size: cover;
		opacity: var(--project-opacity);
	}

	.project:hover::after {
		transform: scale(1.15);
		opacity: 1;
	}

	.project:hover {
		cursor: pointer;
	}

	.project > div {
		opacity: 0.5;
		transition: 500ms opacity;
	}

	.project:hover > div {
		opacity: 1;
	}

	.project-title {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.project-description {
		/* width: 400px; */
	}

	.project-description > a {
		display: block;
		margin-top: 0.5rem;
	}
</style>
