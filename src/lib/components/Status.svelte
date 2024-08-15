<script>
	import LucideIcon from '$lib/components/LucideIcon.svelte';
</script>

<div id="status">
	<button>
		<LucideIcon name="Lightbulb" />
	</button>
	<button>
		<LucideIcon name="Sun" />
	</button>
	<button
		on:click={() => {
			navigator.share({ url: document.URL });
		}}
	>
		<LucideIcon name="Share" />
	</button>
	<button
		on:click={() => {
			window.open('tel:17046999544', '_self');
		}}
	>
		<LucideIcon name="Phone" />
	</button>
	<button
		on:click={() => {
			window.open('mailto:noel@fowlie.dev', '_self');
		}}
	>
		<LucideIcon name="Mail" />
	</button>
	<button
		on:click={() => {
			window.open('https://www.linkedin.com/in/noel-echo-fowlie/', 'blank');
		}}
	>
		<LucideIcon name="Linkedin" />
	</button>
</div>

<style>
	#status {
	}
</style>
