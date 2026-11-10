"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteTodoAction } from "@/actions/todo.actions";
import Spinner from "@/components/Spinner";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interfaces";
import { useToast } from "@/hooks/use-toast";

const TodosTableActions = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function handleDelete() {
    setLoading(true);
    try {
      await deleteTodoAction({ id: todo.id });
      toast({ description: "Se ha eliminado la tarea." });
    } catch {
      toast({
        variant: "destructive",
        description: "No se pudo eliminar la tarea. Inténtalo de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size="icon"
        variant="ghost"
        onClick={handleDelete}
        disabled={loading}
        aria-label={`Eliminar ${todo.title}`}
      >
        {loading ? <Spinner /> : <Trash aria-hidden="true" size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
