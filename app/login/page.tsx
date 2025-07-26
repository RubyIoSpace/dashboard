"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import { LoginForm } from "./components/login-form"

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = async (data: { email: string; password: string }) => {
    console.log("Dados de login:", data)

    // Aqui você faria a chamada para sua API de autenticação
    // Por exemplo:
    // const response = await fetch("/api/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })

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

        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  )
}
