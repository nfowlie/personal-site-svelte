<script>
</script>

<div id="skills"></div>

<style>
	#terminal {
		--terminal-command: #57c2d8;
		--terminal-username: #abd376;
		--terminal-system: #cbccc6;
		display: grid;
		column-gap: 2rem;
		row-gap: 1rem;
		background-color: rgba(16, 16, 16, 0.699);
		grid-template-areas:
			'command command'
			'picture infoBlock';
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
		height: 300px;
		width: 300px;
	}
	#infoBlock {
		grid-area: infoBlock;
	}
	#infoTitle {
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
