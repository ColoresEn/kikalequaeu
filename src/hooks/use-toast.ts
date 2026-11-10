"use client"

import type { ReactNode } from "react"
import { toast as toastManager } from "@/components/ui/toast"

type ToastOptions = {
  title?: ReactNode
  description?: ReactNode
  variant?: "default" | "destructive"
}

function toast({ title, description, variant }: ToastOptions) {
  const id = toastManager.add({
    title,
    description,
    type: variant === "destructive" ? "error" : "success",
  })

  return {
    id,
    dismiss: () => toastManager.close(id),
    update: (options: ToastOptions) => toastManager.update(id, options),
  }
}

function useToast() {
  return {
    toast,
    dismiss: (toastId?: string) => toastManager.close(toastId),
  }
}

export { useToast, toast }
