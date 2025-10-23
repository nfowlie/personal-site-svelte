<script>
	import { onMount } from 'svelte';
	import { commandContent } from '$lib/runes/CommandRune.svelte';
	const commandList = {
		// Terminal Commands
		profilefetch: `lkjfdlksj`,
		'-p': `sjdflkj`,
		// Help Commands
		help: `-h, help\n	Print help\n-p, profilefetch\n	Displays profile information\nc, clear\n	Clears the terminal history`,
		'-h': `-h, help\n	Print help\n-p, profilefetch\n	Displays profile information\nc, clear\n	Clears the terminal history`,
		// Clear Commands
		c: ``,
		clear: ``
	};

	const { isFocused } = $props();

	$effect(() => {
		isFocused;
		switch (isFocused) {
			case true:
				document.querySelector('input')?.focus();
				break;
			case false:
				document.querySelector('input')?.blur();
				break;
		}
	});

	function enterCommand(event) {
		if (event?.key === 'Enter') {
			const command = {
				command: event.target.value,
				output: `command not found: ${event.target.value}`
			};
			if (commandList[event.target.value]) {
				command.output = commandList[event.target.value];
			}
			commandContent.publish(command);
			if (event.target.value === 'c' || event.target.value === 'clear') {
				commandContent.clear();
			}

			event.target.value = '';
		}
	}
</script>

<div id="command">
	<span class="system">&gt;</span>
	<input type="text" class="command" placeholder="" onkeydown={enterCommand} />
</div>

<style>
	#command {
		display: flex;
		gap: 0.5em;
		flex-wrap: wrap;
		width: 100%;
		align-items: center;
	}
	.system {
		color: var(--terminal-system);
	}
	.command {
		color: var(--terminal-command);
	}
	input {
		flex-grow: 1;
		height: fit-content;
		background-color: transparent;
		border: none;
		overflow: auto;
		outline: none;

		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;

		resize: none;
	}
</style>
