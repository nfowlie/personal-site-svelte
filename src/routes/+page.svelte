<script>
	import ProfileImage from '$lib/assets/images/profile.jpg';
</script>

<header>
	<img src={ProfileImage} alt="Picture of Noel" />
	<h1>Noel Fowlie</h1>
	<h3>Web Developer</h3>
</header>

<main>
	<section>
		<p>Hi! My name is Noel Echo Fowlie.</p>
		<p>I've been a web developer for 15 years.</p>
		<p>
			I am passionate about tech. Always trying out new technologies, applications, and hardware.
		</p>
		<p>
			I self host many of the applications I use daily, giving me hands on experience with server
			and DNS management.
		</p>
	</section>
</main>

<style>
	header {
		padding: 1em;
		background: var(--bg-nav);
		margin-bottom: 1em;
		padding-bottom: 3.5em;
		text-align: center;
		clip-path: polygon(0% 0%, 0.67% 75%, 50% 100%, 100% 75%, 100% 0%);
	}
	@media only screen and (max-width: 540px) {
		header {
			clip-path: polygon(0% 0%, 0.67% 80%, 50% 100%, 100% 80%, 100% 0%);
		}
	}
	main {
		max-width: 1280px;
		width: 80vw;
		margin: 0 auto;
	}
	img {
		border-radius: 50%;
		height: 300px;
		width: 300px;
	}

	section {
		padding: 1em 4em;
	}
</style>
