"use client"

import { Button } from "@/components/ui/button"

import { GoogleIcon } from "./google-icon"

interface GoogleLoginButtonProps {
  className?: string
}

export const GoogleLoginButton = ({ className }: GoogleLoginButtonProps) => {
  const handleGoogleLogin = () => {
    console.log("Login com Google")
  }

  return (
    <Button
      variant="outline"
      className={`w-full ${className}`}
      onClick={handleGoogleLogin}
      type="button"
    >
      <GoogleIcon />
      Entrar com Google
    </Button>
  )
}
