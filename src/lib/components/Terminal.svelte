<script>
	import profileImage from '$lib/images/profile.jpg';
</script>

<div id="terminal">
	<!-- svelte-ignore a11y_img_redundant_alt -->
	<img src={profileImage} alt="Picture of Noel" />
	<div id="infoBlock">
		<h1 id="infoTitle">Noel Echo Fowlie</h1>
		<div class="info">
			<div class="info-title">Employer</div>
			<div class="info-detail">Banc of California</div>
		</div>
		<div class="info">
			<div class="info-title">Title</div>
			<div class="info-detail">Full-Stack Web Developer</div>
		</div>
		<div class="info">
			<div class="info-title">Location</div>
			<div class="info-detail">Long Beach, CA</div>
		</div>
		<div class="info">
			<div class="info-title">Github</div>
			<div class="info-detail">
				<a href="https://github.com/nfowlie">nfowlie</a>
			</div>
		</div>
		<div class="info">
			<div class="info-title">Email</div>
			<div class="info-detail">
				<a href="mailto:noel@fowlie.dev">noel@fowlie.dev</a>
			</div>
		</div>
		<div class="info">
			<div class="info-title">Phone</div>
			<div class="info-detail">
				<a href="tel:+17046999544">704-699-9544</a>
			</div>
		</div>
		<div class="info">
			<div class="info-title">LinkedIn</div>
			<div class="info-detail">
				<a href="https://www.linkedin.com/in/noel-echo-fowlie/">Noel Echo Fowlie</a>
			</div>
		</div>
		<div class="info">
			<div class="info-title">Experience</div>
			<div class="info-detail">10+ Years</div>
		</div>
		<div class="info">
			<div class="info-title">Site Framework</div>
			<div class="info-detail">Svelte 5</div>
		</div>
	</div>
</div>

<style>
	#terminal {
		display: flex;
		column-gap: 2rem;
	}
	img {
		border-radius: 50%;
		height: 300px;
		width: 300px;
	}
	#infoBlock {
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
