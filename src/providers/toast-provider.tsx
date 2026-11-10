"use client"

import { Toaster } from "react-hot-toast"

export const TProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "oklch(0.2 0.018 255)",
          color: "oklch(0.97 0.01 255)",
          border: "1px solid oklch(1 0 0 / 12%)",
        },
      }}
    />
  )
}

