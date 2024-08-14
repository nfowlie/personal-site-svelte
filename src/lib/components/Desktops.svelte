<script>
	import LucideIcon from '$lib/components/LucideIcon.svelte';
	import { onMount } from 'svelte';
	/**
	 * @type {HTMLDivElement}
	 */
	let desktop,
		/**
		 * @type {any[] | NodeListOf<HTMLButtonElement>}
		 */
		buttons;
	onMount(() => {
		buttons = desktop?.querySelectorAll('button');
	});
	const changeDesktop = (e) => {
		buttons.forEach((button) => {
			button.classList.remove('current');
		});

		e.target.classList.add('current');
	};
</script>

<div id="desktops" bind:this={desktop}>
	<button class="current" on:click={changeDesktop}>1</button>
	<button on:click={changeDesktop}>2</button>
	<button on:click={changeDesktop}>3</button>
</div>

<style>
	#desktops {
		padding-inline: 0.75rem;
		padding-block: 0.35rem;
		background-color: var(--gray4);
		display: inline-block;
		border-radius: 10px;
	}
	button {
		font-weight: 700;
		height: 100%;
		width: 2rem;
		border-radius: 50%;
		transition: 250ms;
	}
	button.current {
		width: 4rem;
		border-radius: 25px;
	}
</style>
