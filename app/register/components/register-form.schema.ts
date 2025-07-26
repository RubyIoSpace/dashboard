import { z } from "zod"

export const registerFormSchema = z.object({
  name: z.string().min(3, "Digite seu nome completo"),
  email: z.email("Digite um e-mail válido"),
})

export type RegisterFormValues = z.infer<typeof registerFormSchema>
