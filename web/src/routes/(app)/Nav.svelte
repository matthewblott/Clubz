<script lang="ts">
	export let checked = false
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	const change = (e: Event) => {
		if (e.target?.tagName === 'A') {
			dispatch('changed')
		}
	}
</script>

<ul class={checked ? 'display' : ''} on:click={change}>
	<li><a href="/home">Home</a></li>
	<li><a href="/clubs">Clubs</a></li>
</ul>

<style>
	@media (max-width: 1024px) {
		ul {
			display: none;
		}

		.display {
			flex-direction: column;
			display: inline-flex;
		}
	}
</style>
