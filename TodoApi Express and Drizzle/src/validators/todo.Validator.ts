import z from "zod";

export const todoSchema = z.object({
    todoName: z.string(),
    description: z.string(),
    userId: z.number(),
    dueDate: z.string(),
    isCompleted: z.boolean()
})

