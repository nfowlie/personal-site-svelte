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
			applicationRune.title = 'Fowlie.dev';
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
		border: 4px solid rgb(101, 156, 155);
		transition: 400ms;
		opacity: 0.85;
		border-radius: var(--border-radius);
		background-color: var(--application-background-color);
	}
	.application:hover {
		border: 4px solid rgb(65, 184, 164);
		opacity: 1;
	}
</style>
