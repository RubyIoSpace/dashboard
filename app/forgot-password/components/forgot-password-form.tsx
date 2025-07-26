import Link from "next/link"

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

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
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
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemplo@email.com"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Enviaremos um link para redefinir sua senha
                  </p>
                </div>

                <Button type="submit" className="w-full">
                  Enviar link de recuperação
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
