<script>
	import Start from '$lib/components/Start.svelte';
	import Desktops from '$lib/components/Desktops.svelte';
	import Status from '$lib/components/Status.svelte';
	import { themeRender } from '../stores/theme.svelte';

	const theme = themeRender();
</script>

<svelte:head>
	<title>Noel Echo Fowlie</title>
	<style>
		body {
			margin: 0;
			padding: 0;
			font-family: sans-serif;
			color: var(--text);
			background: var(--bg);
			transition:
				background 500ms ease-in-out,
				color 1000ms ease-in-out;
		}
	</style>
	{#if theme.solar}
		<style>
			:root {
				--gray0: hsl(175, 35%, 73%);
				--gray1: hsl(185, 50%, 65%);
				--gray2: hsl(184, 39%, 52%);
				--gray3: hsl(183, 31%, 53%);
				--gray4: hsl(184, 31%, 40%);
				--gray5: hsl(192, 32%, 12%);
				--gray6: hsl(190, 30%, 4%);
				--bg-solar: #fff;
				--project-gradient-0: hsla(200, 20%, 9%, 1);
				--project-gradient-1: hsla(200, 20%, 9%, 50%);
				--project-gradient-2: hsla(200, 20%, 9%, 10%);
				--project-gradient-3: hsla(200, 20%, 9%, 0%);
				--terminal-detail: white;
			}
		</style>
	{:else}
		<style>
			:root {
				--gray0: hsl(0, 0%, 97%);
				--gray1: hsl(212, 22%, 88%);
				--gray2: hsl(206, 10%, 47%);
				--gray3: hsl(206, 10%, 47%);
				--gray4: hsl(208, 11%, 30%);
				--gray5: hsl(218, 12%, 19%);
				--gray6: hsl(200, 20%, 9%);
				--blue: hsl(192, 100%, 32%);
				--yellow: hsl(56, 100%, 70%);
				--purple: hsl(285, 65%, 50%);
				--project-gradient-0: hsla(200, 20%, 9%, 1);
				--project-gradient-1: hsla(200, 20%, 9%, 50%);
				--project-gradient-2: hsla(200, 20%, 9%, 10%);
				--project-gradient-3: hsla(200, 20%, 9%, 0%);
				--bg-solar: var(--yellow);
				--terminal-title: hsl(175, 35%, 73%);
			}
		</style>
	{/if}
	{#if theme.light}
		<style>
			:root {
				--bg: var(--gray0);
				--bg-nav: linear-gradient(to right, var(--gray0), var(--gray3));
				--bg-dropdown: var(--gray0);
				--text: var(--gray6);
				--border-color: var(--blue);

				--project-opacity: 0.85;
				--terminal-title: hsl(184, 31%, 40%);
			}
			#light:before {
				background: black;
			}
		</style>
	{:else}
		<style>
			:root {
				--bg: var(--gray5);
				--bg-nav: linear-gradient(to right, var(--gray5), var(--gray6));
				--bg-dropdown: var(--gray6);
				--text: var(--gray0);
				--border-color: var(--purple);
				--project-opacity: 0.55;
			}
			#light:before {
				background: white;
			}
		</style>
	{/if}
	{#if theme.light && theme.solar}
		<style>
			:root {
				--terminal-title: hsl(192, 32%, 12%) !important;
				--terminal-detail: black;
			}
		</style>
	{/if}
</svelte:head>

<nav class="navbar">
	<Start></Start>
	<Desktops></Desktops>
	<Status></Status>
</nav>
<slot />

<style>
	.navbar {
		position: relative;
		display: grid;
		margin-block: 0.5rem;
		margin-inline: 1rem;
		grid-template-columns: repeat(3, max-content);
		justify-content: space-between;
	}
</style>
