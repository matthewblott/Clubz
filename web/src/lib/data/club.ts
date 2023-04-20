import { Base as data } from './base2.ts'

const table_name = 'clubs'
export const Club: any = {}

Club.fetchAll = async () => {
	return data.fetchAll(table_name)
}

Club.fetchPaged = async (limit: number, offset: number) => {
	return await data.fetchPaged(table_name, limit, offset)
}

Club.fetchById = async (id) => {
	return data.fetchById(table_name, id)
}

Club.create = async (item: schema) => {
	const items = []

	const body = JSON.stringify(item)
	const json = await data.create(table_name, body)
	const id = json

	return id
}

Club.update = async (item: schema) => {
	const id = item.id
	const body = JSON.stringify(item)

	const json = await data.update(table_name, id, body)

	return json.id
}

Club.remove = async (id: number) => {
	return await data.remove(table_name, id)
}

Club.fetchRegions = async () => {
	const fieldName = 'Region'
	const res = await data.fetchDistinct(table_name, fieldName)

	return res
}
