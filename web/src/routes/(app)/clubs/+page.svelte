<script lang="ts">
	import { Edit, PlusSquare } from 'lucide-svelte'
	import type { PageData } from './$types'
	import Pager from '$lib/components/Pager.svelte'

	export let data: PageData

	$: promise = data

	const next = async () => {}
</script>

<h1>Clubs</h1>
<Pager limit={0} count={0} on:next={next} />

{#await promise}
	<p>waiting for the promise to resolve...</p>
{:then value}
	<table role="grid">
		<thead>
			<th scope="col"> Id </th>
			<th scope="col">Name</th>
			<th>
				<a href="/clubs/new"><PlusSquare /></a>
			</th>
		</thead>
		<tbody>
			{#each value.items as { id, name }}
				<tr>
					<td scope="row">
						{id}
					</td>
					<td>{name}</td>
					<td>
						<a href="/clubs/{id}"><Edit /></a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:catch error}
	{error}
{/await}
