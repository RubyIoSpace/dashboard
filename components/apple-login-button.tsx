"use client"

import { Button } from "@/components/ui/button"

import { AppleIcon } from "./apple-icon"

interface AppleLoginButtonProps {
  className?: string
}

export const AppleLoginButton = ({ className }: AppleLoginButtonProps) => {
  const handleAppleLogin = () => {
    console.log("Login com Apple")
  }

  return (
    <Button
      variant="outline"
      className={`w-full ${className}`}
      onClick={handleAppleLogin}
      type="button"
    >
      <AppleIcon />
      Entrar com Apple
    </Button>
  )
}
