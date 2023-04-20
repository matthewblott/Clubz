<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, XSquare } from 'lucide-svelte'
	import { Club as api } from '$lib/data/club'
	import { ClubSchema } from '$lib/schema/club'
	import type { Club } from '$lib/schema/club'
	import { goto } from '$app/navigation'
	import TextField from '$lib/components/TextField.svelte'

	const { form } = createForm<Club>({
		async onSubmit(values) {
			delete values.id
			const id = await api.create(values)
			const url = `/clubs/${id}`
			goto(url)
		},
		validate: validateSchema(ClubSchema),
		extend: [reporter]
	})

	const cancel = () => {
		goto('/clubs')
	}
</script>

<h1>Club</h1>

<form use:form>
	<button> <Save /> Save</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="id">Id</label>
		<input id="id" value="[New]" readonly />
		<input type="number" name="id" value="0" style="display: none;" />
		<TextField name="name" />

		<TextField name="addressLine1" />
		<TextField name="postalTown" />
		<TextField name="postcode" />
	</fieldset>
</form>
