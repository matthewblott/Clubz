<script lang="ts">
	import { onMount } from 'svelte'
	import { Edit, PlusSquare, XSquare } from 'lucide-svelte'
	import { fetchData } from './store'
	import { goto } from '$app/navigation'
	// import Pager from '$lib/components/Pager.svelte'
	import { page } from '$app/stores'

	const pathname = $page.url.pathname
	const paths = pathname.split('/').filter((item) => item !== '')
	const clubId = parseInt(paths[1])

	$: items = []
	// $: count = 0

	// const next = (args: any) => {
	// 	const offset = args.detail.offset
	// 	update(offset)
	// }

	const update = async (offset = 0) => {
		const data = await fetchData(clubId)
		const url = `/clubs/${clubId}/members`

		goto(url)

		items = data
	}
	const cancel = () => {
		goto(`/clubs/${clubId}`)
	}
	onMount(() => {
		update()
	})
</script>

<h1>Members</h1>

<!-- <Pager limit={10} {count} on:next={next} /> -->
<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
<table role="grid">
	<thead>
		<th scope="col">Id</th>
		<th scope="col">Name</th>
		<th>
			<a href="/clubs/{clubId}/members/new"><PlusSquare /></a>
		</th>
	</thead>
	<tbody>
		{#each items as { id, forename, surname }}
			<tr>
				<td scope="row">{id}</td>
				<td>{forename} {surname}</td>
				<td>
					<a href="/clubs/{clubId}/members/{id}"><Edit /></a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
