import { Member as data } from '$lib/data/member'
import type { Member as schema } from '$lib/schema/member'
import { error } from '@sveltejs/kit'

export const load = async ({ params, url }): schema => {
	const paths = url.pathname.split('/').filter((item) => item !== '')
	const clubId = paths[1]
	const item = await data.fetchById(params.id)

	if (item) {
		return item
	}
	throw error(404, 'Not found')
}
