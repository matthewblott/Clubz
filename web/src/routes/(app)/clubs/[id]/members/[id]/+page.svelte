<script lang="ts">
	export let data: any
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { createForm } from 'felte'
	import { Save, Delete, XSquare } from 'lucide-svelte'
	import { Member as api } from '$lib/data/member'
	import type { Member } from '$lib/schema/member'
	import { goto } from '$app/navigation'
	import { MemberSchema } from '$lib/schema/member'
	import { page } from '$app/stores'
	import TextField from '$lib/components/TextField.svelte'

	const pathname = $page.url.pathname
	const paths = pathname.split('/').filter((item) => item !== '')
	const clubId = parseInt(paths[1])

	const { form } = createForm<Member>({
		initialValues: data,
		async onSubmit(values) {
			const id = await api.update(values)
			const url = `/members/${id}`
			goto(url)
		},
		validate: validateSchema(MemberSchema),
		extend: [reporter]
	})

	const remove = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#id')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto(`/clubs/${clubId}/members`)
	}
	const cancel = () => {
		goto(`/clubs/${clubId}/members`)
	}
</script>

<h1>Member</h1>

<form use:form>
	<button><Save /> Save</button>
	<button on:click|preventDefault={remove}><Delete /> Delete </button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="id">Id</label>
		<input id="id" name="id" readonly />

		<label for="clubId">Club Id</label>
		<input id="clubId" name="clubId" readonly />

		<TextField name="forename" />
		<TextField name="surname" />
		<TextField name="emailAddress" />
	</fieldset>
</form>
