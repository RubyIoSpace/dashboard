"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import { LoginForm } from "./components/login-form"
import { LoginFormValues } from "./components/login-form.schema"

export default function LoginPage() {
  const router = useRouter()

  async function handleSubmit(data: LoginFormValues) {
    // Aqui você pode enviar para a API, mostrar toast, redirecionar, etc.
    console.log("Dados do login:", data)

    // Simular sucesso no login
    // Em caso de sucesso, redirecionar para dashboard
    router.push("/dashboard")
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <Image
            src="/logo.svg"
            alt="RubyIO Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          RubyIO Dashboard
        </a>

        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
