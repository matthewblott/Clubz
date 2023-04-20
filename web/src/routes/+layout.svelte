<script>
	import '@picocss/pico/css/pico.min.css'
	import '../app.css'

	let title = 'Home'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<slot />
