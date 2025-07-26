import Image from "next/image"

import { RegisterForm } from "./components/register-form"
import { RegisterFormValues } from "./components/register-form.schema"

export default function RegisterPage() {
  async function handleSubmit(data: RegisterFormValues) {
    // Aqui você pode enviar para a API, mostrar toast, redirecionar, etc.
    console.log("Dados do registro:", data)
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

        <RegisterForm onSubmit={handleSubmit}/>
      </div>
    </div>
  )
}
