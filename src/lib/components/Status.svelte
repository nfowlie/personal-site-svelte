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
	<button>
		<LucideIcon name="Share" />
	</button>
	<button>
		<LucideIcon name="Phone" />
	</button>
	<button>
		<LucideIcon name="Mail" />
	</button>
	<button>
		<LucideIcon name="Linkedin" />
	</button>
</div>

<style>
	#status {
		padding-inline: 0.75rem;
		padding-block: 0.35rem;
		background-color: var(--gray4);
		display: inline-block;
		border-radius: 10px;
	}
</style>
