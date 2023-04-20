const Base = {}
const base_url = 'http://localhost:5000/api/'
const headers = new Headers({
	'Content-Type': 'application/json'
})

const baseAction = async (url: string, action: string, body: string) => {
	const headers = new Headers({
		'Content-Type': 'application/json'
	})
	let response
	if (body === undefined || body === '') {
		response = await fetch(url, { method: action, headers: headers })
	} else {
		response = await fetch(url, { method: action, headers: headers, body })
	}

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

const baseFetch = async (url: string) => {
	return baseAction(url, 'GET')
}

const baseCreate = async (url: string, body: string) => {
	return baseAction(url, 'POST', body)
}

const baseUpdate = async (url: string, body: string) => {
	return baseAction(url, 'PUT', body)
}

const baseRemove = async (url: string) => {
	return baseAction(url, 'DELETE')
}

Base.fetchAll = async (table_name: string) => {
	const url = `${base_url}/_table/${table_name}`
	return baseFetch(url)
}

Base.fetchWithParams = async (table_name: string, params: string) => {
	const url = `${base_url}${table_name}${params}`
	return baseFetch(url)
}

Base.fetchPaged = async (table_name: string, limit: number, offset: number) => {
	const url = `${base_url}${table_name}`

	return baseFetch(url)
}

Base.fetchById = async (table_name: string, id: any) => {
	const url = `${base_url}${table_name}/${id}`
	return baseFetch(url)
}

Base.create = async (table_name: string, body: string) => {
	const url = `${base_url}${table_name}`
	return baseCreate(url, body)
}

Base.updateById = async (table_name: string, id: number, body: string) => {
	const url = `${base_url}${table_name}/${id}`
	return baseUpdate(url, body)
}

Base.update = async (table_name: string, id: number, body: string) => {
	return await Base.updateById(table_name, id, body)
}

Base.remove = async (table_name: string, id: any) => {
	const url = `${base_url}${table_name}/${id}`
	return baseRemove(url)
}

export { Base }
