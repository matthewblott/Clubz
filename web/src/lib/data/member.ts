import { Base as data } from './base2.ts'

const table_name = 'members'
export const Member: any = {}

Member.fetchAll = async () => {
	return data.fetchAll(table_name)
}

Member.fetchByClub = async (clubId: number) => {
	const params = `?clubId=${clubId}`
	return await data.fetchWithParams(table_name, params)
}

Member.fetchById = async (id) => {
	return data.fetchById(table_name, id)
}

Member.create = async (item: schema) => {
	const body = JSON.stringify(item)
	const json = await data.create(table_name, body)
	const id = json

	return id
}

Member.update = async (item: schema) => {
	const id = item.id
	const body = JSON.stringify(item)
	const json = await data.update(table_name, id, body)

	return json.id
}

Member.remove = async (id: number) => {
	return await data.remove(table_name, id)
}
