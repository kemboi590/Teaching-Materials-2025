import z from "zod";

export const userSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string()
})

export const userLoginShema = z.object({
    email: z.string(),
    password: z.string()
})