<script>
	import Application from '$lib/components/Application.svelte';
	import Terminal from '$lib/components/Terminal.svelte';
	import IDE from '$lib/components/IDE.svelte';
</script>

<main>
	<Application
		applicationName="Terminal ~> profilefetch"
		applicationBackground="rgba(16, 16, 16, .8)"
	>
		<Terminal></Terminal>
	</Application>

	<Application applicationName="IDE" applicationBackground="hsl(228, 13%, 44%)">
		<IDE></IDE>
	</Application>
</main>

<style>
	main {
		margin-block: var(--window_gaps_block);
		margin-inline: var(--window_gaps_out);
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--window_gaps_in);
		justify-content: space-around;
	}
</style>
