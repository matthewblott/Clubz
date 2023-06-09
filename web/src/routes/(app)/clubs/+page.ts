import { navigating } from '$app/stores'
import { Club as data } from '$lib/data/club'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = (async ({ params }) => {
	const limit = 10
	const offset = 0
	const items = await data.fetchPaged(limit, offset)

	if (items) {
		return { items }
	}
	throw error(404, 'Not found')
}) satisfies PageLoad
