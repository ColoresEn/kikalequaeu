"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateUser } from "@/actions/user-action";
import ImageUpload from "./ImageUpload";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserProps {
  name: string;
  email: string;
  image: string;
  userId: string;
}

export default function AdminUserEditForm({
  name,
  email,
  image,
  userId,
}: UserProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({ name, email, image, userId });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await updateUser(state);
      toast({ description: "Se ha actualizado el usuario." });
      router.push("/admin/users");
      router.refresh();
    } catch {
      toast({
        variant: "destructive",
        description: "No se pudo actualizar el usuario. Inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="surface-panel w-full max-w-2xl space-y-5 p-5 sm:p-7"
    >
      <div className="space-y-2">
        <p className="text-sm font-medium">Imagen de perfil</p>
        <ImageUpload
          value={state.image}
          onChange={(image) => setState((current) => ({ ...current, image }))}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="user-name">Nombre</Label>
        <Input
          id="user-name"
          name="name"
          autoComplete="name"
          value={state.name}
          onChange={(event) =>
            setState((current) => ({ ...current, name: event.target.value }))
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="user-email">Correo electrónico</Label>
        <Input
          id="user-email"
          name="email"
          type="email"
          autoComplete="email"
          value={state.email}
          onChange={(event) =>
            setState((current) => ({ ...current, email: event.target.value }))
          }
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Guardando…" : "Guardar cambios"}
      </Button>
    </form>
  );
}
