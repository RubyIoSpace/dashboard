interface InputErrorMessageProps {
  message?: string;
  className?: string;
}

export function InputErrorMessage({ message, className }: InputErrorMessageProps) {
  if (!message) return null
  return (
    <span className={`text-xs text-destructive ${className ?? ""}`}>
      {message}
    </span>
  )
}