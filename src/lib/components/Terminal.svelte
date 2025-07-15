<script>
	import profileImage from '$lib/images/profile.jpg';
	import profileData from '$lib/data/profile_fetch_data.json';
</script>

<div id="terminal">
	<div class="commandContainer">
		<span class="username">noel</span><span class="system">@fowlie</span>
		<span class="commandTilde">~</span><span class="system">&gt;</span>
		<span class="command">profilefetch</span>
	</div>
	<!-- svelte-ignore a11y_img_redundant_alt -->
	<img src={profileImage} alt="Picture of Noel" />
	<div id="infoBlock">
		<h1 id="infoTitle">Noel Echo Fowlie</h1>
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

<style>
	#terminal {
		--terminal-command: #57c2d8;
		--terminal-username: #abd376;
		--terminal-system: #cbccc6;
		display: grid;
		column-gap: 2rem;
		row-gap: 1rem;
		grid-template-areas:
			'command command'
			'picture infoBlock';
		padding: 1rem;
		align-content: start;
		justify-content: start;
		height: 100%;
	}
	.commandContainer {
		grid-area: command;

		.username,
		.commandTilde {
			color: var(--terminal-username);
		}
		.system {
			color: var(--terminal-system);
		}
		.command {
			color: var(--terminal-command);
		}
	}
	img {
		grid-area: picture;
		border-radius: 50%;
		height: 250px;
		width: 250px;
	}
	#infoBlock {
		grid-area: infoBlock;
	}
	#infoTitle {
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
</style>
