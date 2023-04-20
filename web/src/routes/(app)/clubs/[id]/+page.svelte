<script lang="ts">
	export let data: any
	import { createForm, getValue } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete, Edit, XSquare } from 'lucide-svelte'
	import { Club as api } from '$lib/data/club'
	import { ClubSchema } from '$lib/schema/club'
	import type { Club } from '$lib/schema/club'
	import { goto } from '$app/navigation'
	import TextField from '$lib/components/TextField.svelte'

	const { form } = createForm<Club>({
		initialValues: data,
		async onSubmit(values) {
			const id = await api.update(values)
			const url = `/clubs/${id}`
			goto(url)
		},
		validate: validateSchema(ClubSchema),
		extend: [reporter]
	})

	const territories = () => {
		const id = getValue(data, 'id')
		goto(`/clubs/${id}/members`)
	}

	const remove = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#id')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/clubs')
	}
	const cancel = () => {
		goto('/clubs')
	}
</script>

<h1>Club</h1>

<form use:form>
	<button><Save />Save</button>
	<button on:click|preventDefault={remove}><Delete />Delete</button>
	<button on:click|preventDefault={territories}><Edit /> Members</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="id">Id</label>
		<input id="id" name="id" readonly />
		<TextField name="name" />
		<TextField name="addressLine1" />
		<TextField name="postalTown" />
		<TextField name="postcode" />
	</fieldset>
</form>
