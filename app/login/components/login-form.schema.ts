import { z } from "zod"

export const loginFormSchema = z.object({
  email: z.email("Digite um e-mail válido"),
  password: z.string().min(1, "Digite sua senha"),
})

export type LoginFormValues = z.infer<typeof loginFormSchema>
