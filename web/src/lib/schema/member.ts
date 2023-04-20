import { z } from 'zod'

const MemberSchema = z.object({
	id: z.number(),
	clubId: z.number(),
	forename: z.string().min(1).max(50),
	surname: z.string().min(1).max(50),
	emailAddress: z.string().email().min(5).max(50)
})

type Club = z.infer<typeof ClubSchema>

export { MemberSchema, Member }
