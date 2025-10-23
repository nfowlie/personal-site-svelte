<script>
	import Command from '$lib/components/terminal/Command.svelte';
	import Output from '$lib/components/terminal/Output.svelte';
	import { commandContent } from '$lib/runes/CommandRune.svelte';

	let isFocused = $state(true);
	let terminalEl;

	$effect(() => {
		commandContent.events;
		terminalEl?.scrollTo(0, terminalEl.scrollHeight, 'smooth');
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
	.commandContainer {
		grid-area: command;

		.username,
		.commandTilde {
			color: var(--terminal-username);
		}
		.system {
			color: var(--terminal-system);
		}
		.command {
			color: var(--terminal-command);
		}
	}
	img {
		grid-area: picture;
		border-radius: 50%;
		height: 250px;
		width: 250px;
	}
	#infoBlock {
		grid-area: infoBlock;
	}
	#infoTitle {
		margin: 0;
		border-block-end: 2px dashed black;
		display: inline-block;
		color: var(--terminal-title);
	}
	.info {
		display: flex;
	}
	.info-title {
		margin-inline-end: 1rem;
		color: var(--terminal-title);
		font-weight: 700;
	}
	.info-title::after {
		content: ':';
	}
	.info-detail {
		color: var(--terminal-detail);
	}
	a {
		color: inherit;
	}

	.cursor {
		display: inline-block;
		height: 1em;
		width: 1em;
		background-color: blue;
		align-self: flex-end;
		justify-content: flex-end;
	}
</style>
