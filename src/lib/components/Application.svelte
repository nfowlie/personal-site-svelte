<script lang="ts">
	import { onMount } from 'svelte';
	// Runes
	import { applicationRune } from '$lib/runes/ApplicationRune.svelte';

	// import Draggable from '../draggable.svelte';

	const { applicationName, applicationBackground, children } = $props();
	let root: HTMLDivElement;

	onMount(() => {
		// Set Application Background Color
		root.style.setProperty('--application-background-color', applicationBackground);

		// Change current application name in status bar
		root.addEventListener('mouseleave', () => {
			applicationRune.title = 'fowlie.dev';
		});
		root.addEventListener('mouseenter', () => {
			applicationRune.title = applicationName;
		});
	});
</script>

<!-- <Draggable> -->
<div class="application" bind:this={root}>
	{@render children()}
</div>

<!-- </Draggable> -->

<style>
	.application {
		/*--application-background-color: #fff;*/
		border: var(--border_size) var(--border_style) var(--border_color_inactive);
		transition: var(--window_dim_animation_speed);
		opacity: var(--window_dim_strength);
		border-radius: var(--border_radius);
		background-color: var(--application-background-color);
	}
	.application:hover,
	.application:active {
		border: var(--border_size) var(--border_style) var(--border_color_active);
		opacity: 1;
	}
</style>
