<script>
	import Application from '$lib/components/Application.svelte';
	import Terminal from '$lib/components/Terminal.svelte';
	import IDE from '$lib/components/IDE.svelte';
</script>

<main>
	<Application
		applicationName="Terminal ~> profilefetch"
		applicationBackground="rgba(16, 16, 16, 0.699)"
	>
		<Terminal></Terminal>
	</Application>

	<Application applicationName="IDE" applicationBackground="hsl(228, 13%, 44%)">
		<IDE></IDE>
	</Application>
</main>

<style>
	main {
		margin-inline: 1rem;
	}
</style>
