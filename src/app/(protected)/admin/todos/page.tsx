import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getUserTodoListAction } from "@/actions/todo.actions";
import getCurrentUser from "@/actions/getCurrentUser";
import AddTodoForm from "@/components/todos/AddTodoForm";
import TodosTable from "@/components/todos/TodoTable";
import AdminPageSkeleton from "@/components/admin/AdminPageSkeleton";

export const metadata: Metadata = {
  title: "Tareas",
};

export default function TodosPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 className="m-0 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tareas
          </h1>
          <p className="m-0 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Organiza tus pendientes y revisa lo que ya has completado.
          </p>
        </div>
        <Suspense
          fallback={
            <div className="h-10 w-32 animate-pulse rounded-lg bg-muted" />
          }
        >
          <AddTodoButton />
        </Suspense>
      </header>
      <Suspense fallback={<AdminPageSkeleton label="tareas" />}>
        <TodosContent />
      </Suspense>
    </div>
  );
}

async function AddTodoButton() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/login");
  }
  return <AddTodoForm userId={currentUser.id} />;
}

async function TodosContent() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/login");
  }

  const todos = await getUserTodoListAction({ userId: currentUser.id });
  return <TodosTable todos={todos} />;
}
