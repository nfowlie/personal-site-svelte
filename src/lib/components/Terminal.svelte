<script lang="ts">
	import Command from '$lib/components/terminal/Command.svelte';
	import Output from '$lib/components/terminal/Output.svelte';
	import { commandContent } from '$lib/runes/CommandRune.svelte';

	let isFocused: boolean = $state(true);
	let terminalEl: HTMLElement;

	$effect(() => {
		commandContent.events;
		terminalEl?.scrollTo(0, terminalEl.scrollHeight);
	});
</script>

<div
	id="terminal"
	bind:this={terminalEl}
	onpointerenter={() => (isFocused = true)}
	onpointerleave={() => (isFocused = false)}
>
	<Output></Output>
	<Command {isFocused}></Command>
</div>

<style>
	#terminal {
		--terminal-command: #57c2d8;
		--terminal-username: #abd376;
		--terminal-system: #cbccc6;
		--terminal-detail: #cbccc6;
		display: flex;
		flex-wrap: wrap;
		column-gap: 2rem;
		row-gap: 1rem;

		padding: 1rem;
		align-content: start;
		justify-content: start;
		overflow-y: scroll;
		height: calc(100vh - 16vh);
	}
</style>
