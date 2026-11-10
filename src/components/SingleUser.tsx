"use client";

import { useState } from "react";
import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { deleteUser } from "@/actions/user-action";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import type { AdminUserSummary } from "@/actions/getUsers";
import { useToast } from "@/hooks/use-toast";

interface UserProps {
  data: AdminUserSummary;
}

function SingleUser({ data }: UserProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  return (
    <article className="flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-card/90 p-4">
      <Image
        src={data.image || avatarPlaceholder}
        alt=""
        width={48}
        height={48}
        className="size-12 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <h2 className="m-0 truncate text-base font-semibold">{data.name}</h2>
        <p className="m-0 mt-1 truncate text-sm text-muted-foreground">
          {data.email || "Sin correo"}
        </p>
        <p className="m-0 mt-1 text-xs text-muted-foreground">
          {data.role === "ADMIN" ? "Administrador" : "Usuario"} ·{" "}
          <time dateTime={data.createdAt}>
            {new Intl.DateTimeFormat("es-ES", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(data.createdAt))}
          </time>
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <Button
          size="icon"
          variant="ghost"
          onClick={async () => {
            setIsDeleting(true);
            try {
              await deleteUser({ id: data.id });
              toast({ description: "Se ha eliminado el usuario." });
            } catch {
              toast({
                variant: "destructive",
                description: "No se pudo eliminar el usuario. Inténtalo de nuevo.",
              });
            } finally {
              setIsDeleting(false);
            }
          }}
          disabled={isDeleting}
          aria-label={`Eliminar a ${data.name}`}
        >
          {isDeleting ? <Spinner /> : <Trash2 aria-hidden="true" className="size-4" />}
        </Button>
        <Link
          href={`/admin/users/${data.id}`}
          aria-label={`Editar a ${data.name}`}
          className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Pencil aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </article>
  );
}

export default SingleUser;
