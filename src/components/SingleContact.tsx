"use client";

import { useState } from "react";
import dayjs from "dayjs";
import { IContact } from "@/interfaces";
import { Button } from "@/components/ui/button";
import { deleteContact } from "@/actions/contact-action";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  data: IContact;
}

function SingleContact({ data }: ContactProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  async function handleDelete() {
    setIsDeleting(true);
    try {
      await deleteContact({ id: data.id });
      toast({ description: "Se ha eliminado el mensaje." });
    } catch {
      toast({
        variant: "destructive",
        description: "No se pudo eliminar el mensaje. Inténtalo de nuevo.",
      });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <tr className="align-top transition-colors hover:bg-accent/40">
      <th scope="row" className="px-4 py-4 font-medium">
        <span className="block text-foreground">{data.postername}</span>
        <a
          href={`mailto:${data.email}`}
          className="mt-1 block max-w-52 truncate text-xs font-normal text-primary underline-offset-2 hover:underline"
        >
          {data.email}
        </a>
      </th>
      <td className="max-w-48 px-4 py-4 text-foreground">{data.topic}</td>
      <td className="max-w-[30rem] px-4 py-4">
        <details className="group">
          <summary className="cursor-pointer list-none text-muted-foreground marker:hidden">
            <span className="line-clamp-2">{data.message}</span>
            <span className="mt-1 inline-block text-xs font-semibold text-primary group-open:hidden">
              Leer mensaje completo
            </span>
            <span className="mt-1 hidden text-xs font-semibold text-primary group-open:inline-block">
              Ocultar mensaje
            </span>
          </summary>
          <p className="mb-0 mt-2 whitespace-pre-wrap break-words text-foreground">
            {data.message}
          </p>
        </details>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-muted-foreground">
        <time dateTime={dayjs(data.createdAt).toISOString()}>
          {dayjs(data.createdAt).format("MMM D, YYYY")}
        </time>
      </td>
      <td className="px-4 py-4 text-right">
        <Button
          size="icon"
          variant="destructive"
          onClick={handleDelete}
          disabled={isDeleting}
          aria-label={`Eliminar mensaje de ${data.postername}`}
        >
          {isDeleting ? (
            <span className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
          ) : (
            <Trash2 />
          )}
        </Button>
      </td>
    </tr>
  );
}

export default SingleContact;
