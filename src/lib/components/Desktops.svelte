<script lang="ts">
	import { onMount } from 'svelte';

	let desktop: HTMLDivElement, buttons: NodeListOf<HTMLButtonElement>;

	onMount(() => {
		buttons = desktop?.querySelectorAll('button');
	});
	const changeDesktop = () => {
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
	a {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		font-weight: 700;
		height: 100%;
		width: 2rem;
		border-radius: var(--title_bar_border_radius);
		transition: var(--title_bar_animation_speed);
		background-color: hsla(0, 0%, 62%, 0.58);
		opacity: 0.5;
	}
	a.current {
		width: 4rem;
		opacity: 1;
	}
</style>
