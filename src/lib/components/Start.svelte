<script>
	import LucideIcon from '$lib/components/LucideIcon.svelte';
	import { applicationRune } from '$lib/runes/ApplicationRune.svelte';
</script>

<div id="start">
	<div class="title">
		{applicationRune.title}
	</div>
</div>

<style>
	#start {
		color: white;
		font-weight: 700;
		line-height: 1em;
		display: flex;
		align-items: center;
	}
</style>
