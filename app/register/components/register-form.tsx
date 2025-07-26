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

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Criar conta</CardTitle>
          <CardDescription>
            Cadastre-se com sua conta Apple ou Google
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemplo@email.com"
                    required
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  Enviaremos um e-mail de confirmação para o endereço fornecido
                </p>

                <Button type="submit" className="w-full">
                  Criar conta
                </Button>
              </div>
              <div className="text-center text-sm">
                Já tem uma conta?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Fazer login
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground text-center text-xs text-balance">
        Ao continuar, você concorda com nossos{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Termos de Serviço
        </a>{" "}
        e{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Política de Privacidade
        </a>
        .
      </div>
    </div>
  )
}
