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
	};
</script>

<div id="desktops" bind:this={desktop}>
	<a href="/" class="current" on:click={changeDesktop}>1</a>
	<a href="/projects" on:click={changeDesktop}>2</a>
	<a href="/resume" on:click={changeDesktop}>3</a>
</div>

<style>
	#desktops {
	}
	a {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		font-weight: 700;
		height: 100%;
		width: 2rem;
		border-radius: 50%;
		transition: 250ms;
		background-color: hsla(0, 0%, 62%, 0.58);
		opacity: 0.5;
		color: var(--gray0);
	}
	a.current {
		width: 4rem;
		border-radius: 25px;
		opacity: 1;
	}
</style>
