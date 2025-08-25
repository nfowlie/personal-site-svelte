<script>
	import { applicationRune } from '$lib/runes/ApplicationRune.svelte';
	import { onMount } from 'svelte';
	import Draggable from '../draggable.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} applicationName
	 * @property {string} applicationBackground
	 * @property {Snippet} children
	 */

	/** @type {Props} */
	const { applicationName, applicationBackground, children } = $props();
	/**
	 * @type {HTMLDivElement}
	 */
	let root;

	onMount(() => {
		// Set Application Background Color
		root.style.setProperty('--application-background-color', applicationBackground);

		// Change current application name in status bar
		root.addEventListener('mouseleave', (e) => {
			applicationRune.title = 'fowlie.dev';
		});
		root.addEventListener('mouseenter', (e) => {
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
		--application-background-color: #fff;
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
