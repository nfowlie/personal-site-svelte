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
	}
	button {
		font-weight: 700;
		height: 100%;
		width: 2rem;
		border-radius: 50%;
		transition: 250ms;
		background-color: hsla(0, 0%, 62%, 0.58);
		opacity: 0.5;
		color: var(--gray0);
	}
	button.current {
		width: 4rem;
		border-radius: 25px;
		opacity: 1;
	}
</style>
