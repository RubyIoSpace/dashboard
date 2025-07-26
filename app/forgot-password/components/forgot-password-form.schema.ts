import { z } from "zod"

export const forgotPasswordFormSchema = z.object({
  email: z.email("Digite um e-mail válido"),
})

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordFormSchema>
