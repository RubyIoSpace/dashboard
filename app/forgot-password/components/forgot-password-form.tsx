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
  forgotPasswordFormSchema,
  ForgotPasswordFormValues,
} from "./forgot-password-form.schema"

interface ForgotPasswordFormProps {
  onSubmit: (data: ForgotPasswordFormValues) => void
  className?: string
}

export function ForgotPasswordForm({
  onSubmit,
  className,
  ...props
}: ForgotPasswordFormProps & Omit<React.ComponentProps<"div">, "onSubmit">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordFormSchema),
  })

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Esqueceu sua senha?</CardTitle>
          <CardDescription>
            Digite seu e-mail para receber o link de recuperação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemplo@email.com"
                    {...register("email")}
                    required
                  />
                  <InputErrorMessage message={errors.email?.message} />
                  <p className="text-xs text-muted-foreground">
                    Enviaremos um link para redefinir sua senha
                  </p>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  Enviar link de recuperação
                </Button>
              </div>
              <div className="text-center text-sm">
                Lembrou da senha?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  {isSubmitting ? "Acessando..." : "Fazer login"}
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground text-center text-xs text-balance">
        Se você não receber o e-mail em alguns minutos, verifique sua caixa de
        spam ou{" "}
        <Link
          href="/register"
          className="underline underline-offset-4 hover:text-primary"
        >
          crie uma nova conta
        </Link>
        .
      </div>
    </div>
  )
}
