"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { updateProfile } from "@/actions/user-action";
import { useState, type FormEvent } from "react";
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

export default function UserEditForm({
  name,
  email,
  image,
  userId,
}: UserProps) {
  const router = useRouter();
  const { update: updateSession } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({ name, email, image, userId });
  const { toast } = useToast();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await updateProfile(state);
      await updateSession();
      toast({ description: "Tu perfil se ha actualizado." });
      setIsEditing(false);
      router.refresh();
    } catch {
      toast({
        variant: "destructive",
        description: "No se pudo actualizar el perfil. Inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Button
        type="button"
        variant="outline"
        onClick={() => setIsEditing((editing) => !editing)}
        aria-expanded={isEditing}
      >
        {isEditing ? "Cancelar edición" : "Editar perfil"}
      </Button>

      {isEditing && (
        <form onSubmit={onSubmit} className="mt-5 max-w-xl space-y-5">
          <div className="space-y-2">
            <p className="text-sm font-medium">Imagen de perfil</p>
            <ImageUpload
              value={state.image}
              onChange={(image) => setState((current) => ({ ...current, image }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profile-name">Nombre</Label>
            <Input
              placeholder="Tu nombre"
              id="profile-name"
              type="text"
              value={state.name}
              onChange={(event) =>
                setState((current) => ({ ...current, name: event.target.value }))
              }
              autoComplete="name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profile-email">Correo electrónico</Label>
            <Input
              placeholder="tu@correo.com"
              id="profile-email"
              type="email"
              value={state.email}
              onChange={(event) =>
                setState((current) => ({ ...current, email: event.target.value }))
              }
              autoComplete="email"
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Guardando…" : "Guardar cambios"}
          </Button>
        </form>
      )}
    </div>
  );
}
