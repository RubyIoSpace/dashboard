import { z } from "zod"

export const newPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .regex(/[A-Z]/, "A senha deve conter uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter uma letra minúscula")
      .regex(/\d/, "A senha deve conter um número")
      .regex(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        "A senha deve conter um símbolo"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })

export type NewPasswordFormValues = z.infer<typeof newPasswordFormSchema>
