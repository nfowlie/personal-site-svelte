<script>
	import profileImage from '$lib/images/profile.jpg';
	import profileData from '$lib/data/profile_fetch_data.json';
	import { commandContent } from '$lib/runes/CommandRune.svelte';
	console.log(commandContent.events.length);
</script>

<div id="output">
	<!-- Snippets -->
	{#snippet command(event)}
		<div class="command">
			<span class="system">></span>
			<span class="command">profilefetch</span>
			<div class="output">
				{#if event === 'profilefetch' || event.command === 'profilefetch' || event.command === '-p'}
					{@render profileFetch()}
				{:else}
					{event.output}
				{/if}
			</div>
		</div>
	{/snippet}
	{#snippet profileFetch()}
		<div class="profileFetch">
			<img src={profileImage} alt="Noel Echo Fowlie wearing glasses." />
			<div class="infoBlock">
				<h1 class="infoTitle">Noel Echo Fowlie</h1>
				<div class="info">
					<div class="info-title">Employer</div>
					<div class="info-detail">{profileData.Employer}</div>
				</div>
				<div class="info">
					<div class="info-title">Title</div>
					<div class="info-detail">{profileData.Title}</div>
				</div>
				<div class="info">
					<div class="info-title">Location</div>
					<div class="info-detail">{profileData.Location}</div>
				</div>
				<div class="info">
					<div class="info-title">Github</div>
					<div class="info-detail">
						<a href="https://github.com/nfowlie">{profileData.Github}</a>
					</div>
				</div>
				<div class="info">
					<div class="info-title">Email</div>
					<div class="info-detail">
						<a href="mailto:noel@fowlie.dev">{profileData.Email}</a>
					</div>
				</div>
				<div class="info">
					<div class="info-title">Phone</div>
					<div class="info-detail">
						<a href="tel:+17046999544">{profileData.Phone}</a>
					</div>
				</div>
				<div class="info">
					<div class="info-title">LinkedIn</div>
					<div class="info-detail">
						<a href="https://www.linkedin.com/in/noel-echo-fowlie/">{profileData.LinkedIn}</a>
					</div>
				</div>
				<div class="info">
					<div class="info-title">Experience</div>
					<div class="info-detail">{profileData.Experience}</div>
				</div>
				<div class="info">
					<div class="info-title">Site Framework</div>
					<div class="info-detail">{profileData.SiteFramework}</div>
				</div>
			</div>
		</div>
	{/snippet}

	<!-- Rendered DOM -->
	{@render command('profilefetch')}
	{#each commandContent.events as event}
		{@render command(event)}
	{/each}
</div>

<style>
	#output {
		width: 100%;
	}
	.system {
		color: var(--terminal-system);
	}
	.command {
		color: var(--terminal-command);
		white-space: pre-line;
	}
	.output {
		color: var(--terminal-system);
		white-space: pre;
	}
	.profileFetch {
		display: flex;
		gap: 2em;
		white-space: initial;
	}
	img {
		grid-area: picture;
		border-radius: 50%;
		height: 250px;
		width: 250px;
	}
	.infoBlock {
		grid-area: infoBlock;
	}
	.infoTitle {
		margin: 0;
		border-block-end: 2px dashed black;
		display: inline-block;
		color: var(--terminal-title);
	}
	.info {
		display: flex;
	}
	.info-title {
		margin-inline-end: 1rem;
		color: var(--terminal-title);
		font-weight: 700;
	}
	.info-title::after {
		content: ':';
	}
	.info-detail {
		color: var(--terminal-detail);
	}
	a {
		color: inherit;
	}

	.cursor {
		display: inline-block;
		height: 1em;
		width: 1em;
		background-color: blue;
		align-self: flex-end;
		justify-content: flex-end;
	}
</style>
