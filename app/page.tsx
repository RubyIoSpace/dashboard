import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <div className="flex items-center gap-2 font-medium text-2xl sm:text-3xl">
            <Image
              src="/logo.svg"
              alt="RubyIO Logo"
              width={48}
              height={48}
              className="rounded-md"
            />
            RubyIO Dashboard
          </div>
        </div>

        <div>
          Este é um exemplo de aplicação Next.js com exemplos de funcionalidades
          comuns entre diversos projetos
        </div>

        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="tracking-[-.01em]">
            Módulo de autenticação com Login, Registro e Recuperação de Senha.
          </li>
          <li className="tracking-[-.01em]">Gestão de usuários e perfis</li>
          <li className="tracking-[-.01em]">
            Módulo de gestão de produtos, com UPLOAD de imagens e categorias
            (combos encadeadas).
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/login"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            Acessar
          </Link>

          <a
            href="https://github.com/RubyIoSpace/dashboard"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentação
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <a
            className="text-foreground underline"
            href="https://rubyio.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RubyIO
          </a>
        </div>
      </footer>
    </div>
  )
}
