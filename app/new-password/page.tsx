import Image from "next/image"

import { NewPasswordForm } from "./components/new-password-form"
import { NewPasswordFormValues } from "./components/new-password-form.schema"

export default function ResetPasswordPage() {
  async function handleSubmit(data: NewPasswordFormValues) {
    // Aqui você pode enviar para a API, mostrar toast, redirecionar, etc.
    console.log("Nova senha definida:", data)
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

        <NewPasswordForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
