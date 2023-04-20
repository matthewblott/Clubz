<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, XSquare } from 'lucide-svelte'
	import { Member as api } from '$lib/data/member'
	import { MemberSchema } from '$lib/schema/member'
	import type { Member } from '$lib/schema/member'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import TextField from '$lib/components/TextField.svelte'

	const pathname = $page.url.pathname
	const paths = pathname.split('/').filter((item) => item !== '')
	const clubId = parseInt(paths[1])

	const { form } = createForm<Member>({
		async onSubmit(values) {
			const id = await api.create(values)
			const url = `/clubs/${clubId}/members/${id}`
			goto(url)
		},
		validate: validateSchema(MemberSchema),
		extend: [reporter]
	})
	const cancel = () => {
		goto(`/clubs/${clubId}/members`)
	}
</script>

<h1>Member</h1>

<form use:form>
	<button><Save /> Save</button>
	<button on:click|preventDefault={cancel}><XSquare />Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="id">Id</label>
		<input id="id" value="[New]" readonly />
		<input type="number" name="id" value="0" style="display: none;" />

		<label for="clubId">Club Id</label>
		<input type="number" id="clubId" name="clubId" value={clubId} readonly />

		<TextField name="forename" />
		<TextField name="surname" />
		<TextField name="emailAddress" />
	</fieldset>
</form>
