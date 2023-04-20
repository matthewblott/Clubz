import { z } from 'zod'

const ClubSchema = z.object({
	id: z.number(),
	name: z.string().min(1).max(50),
	addressLine1: z.string().min(1).max(50),
	postalTown: z.string().min(1).max(50),
	postcode: z.string().min(1).max(10)
})

type Club = z.infer<typeof ClubSchema>
export { ClubSchema, Club }
