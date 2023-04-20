import { writable } from 'svelte/store'
import { error } from '@sveltejs/kit'
import { Member as data } from '$lib/data/member'
import type { Member } from '$lib/schema/member'

export let store = writable<Member[]>([])

export async function fetchData(clubId: number) {
	return await data.fetchByClub(clubId)
}
