"use client"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { InputErrorMessage } from "@/components/input-error-message"

import {
  newPasswordFormSchema,
  NewPasswordFormValues,
} from "./new-password-form.schema"

interface NewPasswordFormProps {
  onSubmit: (data: NewPasswordFormValues) => void
  className?: string
}

export function NewPasswordForm({
  onSubmit,
  className,
  ...props
}: NewPasswordFormProps & Omit<React.ComponentProps<"div">, "onSubmit">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<NewPasswordFormValues>({
    resolver: zodResolver(newPasswordFormSchema),
  })

  const password = watch("password") || ""

  // Requisitos visuais de senha
  const requirements = [
    {
      text: "Pelo menos 8 caracteres",
      isValid: password.length >= 8,
    },
    {
      text: "Uma letra maiúscula (A-Z)",
      isValid: /[A-Z]/.test(password),
    },
    {
      text: "Uma letra minúscula (a-z)",
      isValid: /[a-z]/.test(password),
    },
    {
      text: "Um número (0-9)",
      isValid: /\d/.test(password),
    },
    {
      text: "Um símbolo (!@#$%^&*)",
      isValid: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    },
  ]

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Criar nova senha</CardTitle>
          <CardDescription>
            Digite sua nova senha seguindo os requisitos de segurança
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid gap-6">
              {/* Requisitos de senha */}
              <div className="rounded-lg bg-muted/50 p-4">
                <h4 className="mb-2 text-sm font-medium">
                  Sua senha deve conter:
                </h4>
                <ul className="space-y-1 text-xs">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span
                        className={cn(
                          "h-1 w-1 rounded-full transition-colors",
                          requirement.isValid
                            ? "bg-green-500"
                            : "bg-muted-foreground"
                        )}
                      ></span>
                      <span
                        className={cn(
                          "transition-colors",
                          requirement.isValid
                            ? "text-green-600 dark:text-green-400"
                            : "text-muted-foreground"
                        )}
                      >
                        {requirement.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="password">Nova senha</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Digite sua nova senha"
                    {...register("password")}
                    required
                  />
                  <InputErrorMessage message={errors.password?.message} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="confirmPassword">Confirmar senha</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirme sua nova senha"
                    {...register("confirmPassword")}
                    required
                  />
                  <InputErrorMessage message={errors.confirmPassword?.message} />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  Definir nova senha
                </Button>
              </div>
              <div className="text-center text-sm">
                Lembrou da senha?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Fazer login
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground text-center text-xs text-balance">
        Após definir sua nova senha, você será redirecionado para a tela de
        login.
      </div>
    </div>
  )
}
