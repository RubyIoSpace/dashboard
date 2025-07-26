import { RiDeleteBinLine, RiErrorWarningLine } from "@remixicon/react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

import { DropdownMenuItem } from "./ui/dropdown-menu"

interface DeleteDialogButtonProps {
  onDelete: () => void;
  disabled?: boolean;
  triggerText?: string;
  title?: string;
  description?: string;
  type?: "button" | "dropdown";
}

export function DeleteDialogButton({
  onDelete,
  disabled,
  triggerText = "Delete",
  title = "Are you sure?",
  description = "This action cannot be undone. This will permanently delete this record.",
  type = "button",
}: DeleteDialogButtonProps) {
  return (
    <AlertDialog>
      {type === "button" && <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="sm"
          className="flex items-center gap-2"
          disabled={disabled}
        >
          <RiDeleteBinLine size={16} aria-hidden="true" />
          {triggerText}
        </Button>
      </AlertDialogTrigger>}

      {type === "dropdown" && <AlertDialogTrigger asChild>
        <DropdownMenuItem
          variant="destructive"
          className="dark:data-[variant=destructive]:focus:bg-destructive/10"
          disabled={disabled}
        >
          <RiDeleteBinLine size={16} aria-hidden="true" />
          {triggerText}
        </DropdownMenuItem>
      </AlertDialogTrigger>}

      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <RiErrorWarningLine className="opacity-80" size={18} />
            <AlertDialogTitle>{title}</AlertDialogTitle>
          </div>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={disabled}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onDelete}
            disabled={disabled}
            className="bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40"
          >
            {triggerText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}