<script>
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
</svelte:head>

<nav class="navbar">
	<ul class="navbar-nav">
		<li><a href="/">About</a></li>
		<li><a href="resume">Resume</a></li>
		<li><a href="projects">Projects</a></li>

		<!-- Dropdown -->
		<li class="nav-item has-dropdown">
			<a href="#">Theme</a>
			<ul class="dropdown">
				<li class="dropdown-item">
					<a id="light" href="#" on:click={theme.toggleLight}>{theme.light ? 'dark' : 'light'}</a>
				</li>
				<li class="dropdown-item">
					<a id="solar" href="#" on:click={theme.toggleSolar}
						>{theme.solar ? 'normalize' : 'solarize'}</a
					>
				</li>
			</ul>
		</li>
	</ul>
</nav>
<slot />

<style>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	a {
		color: currentColor;
		text-decoration: none;
	}

	.navbar {
		height: 70px;
		width: 100%;
		background: var(--bg-nav);
		color: var(--text);
		transition:
			background 500ms ease-in-out,
			color 1000ms ease-in-out;
	}

	.navbar-nav {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		height: 100%;
	}

	.dropdown {
		position: absolute;
		width: 500px;
		opacity: 0;
		z-index: 2;
		background: var(--bg-dropdown);
		border-top: 2px solid var(--border-color);

		border-bottom-right-radius: 8px;
		border-bottom-left-radius: 8px;

		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 3rem;
		margin-top: 2rem;
		padding: 0.5rem;

		box-shadow: rgba(2, 8, 20, 0.1) 0px 0.175em 0.5em;
		transform: translateX(-40%);

		transition: opacity 0.15s ease-out;
	}

	@media only screen and (max-width: 1600px) {
		.dropdown {
			right: 1rem;
			transform: translateX(0);
		}
	}
	@media only screen and (max-width: 540px) {
		.dropdown {
			width: 100vw;
			right: 0;
		}
	}
	.has-dropdown:focus-within .dropdown {
		opacity: 1;
		pointer-events: auto;
	}

	.dropdown-item a {
		width: 100%;
		height: 100%;
		size: 0.7rem;
		padding-left: 10px;
		font-weight: bold;
	}

	.dropdown-item a::before {
		content: ' ';
		background: var(--bg);
		border: 2px solid var(--border-color);
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		display: inline-block;
		vertical-align: middle;
		margin-right: 10px;
	}
	#solar:before {
		background: var(--bg-solar);
	}
</style>
