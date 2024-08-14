<script>
	// import ProfileImage from '$lib/assets/images/profile.jpg';
	import Terminal from '$lib/components/Terminal.svelte';
</script>

<main>
	<Terminal></Terminal>
</main>

<style>
	main {
		margin: 0 auto;
		display: grid;
		grid-template-areas: 'terminal';
		margin-inline: 1rem;
	}
	:global(main > *) {
		border: 4px solid rgb(101, 156, 155);
		transition: 400ms;
		opacity: 0.85;
	}
	:global(main > *:hover) {
		border: 4px solid rgb(65, 184, 164);
		opacity: 1;
	}
	:global(#terminal) {
		grid-area: terminal;
		width: 610px;
	}
</style>
