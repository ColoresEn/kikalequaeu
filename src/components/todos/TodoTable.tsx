import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces";
import TodosTableActions from "./TodosTableActions";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";

interface IProps {
  todos: ITodo[];
}

export default function TodosTable({ todos }: IProps) {
  const formatDate = (value: Date | string) =>
    new Intl.DateTimeFormat("es-ES", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));

  if (todos.length === 0) {
    return (
      <section
        aria-label="Lista de tareas"
        className="rounded-2xl border border-dashed border-border bg-card/70 px-6 py-12 text-center"
      >
        <h2 className="mb-2 text-lg font-semibold">Aún no tienes tareas</h2>
        <p className="m-0 text-sm text-muted-foreground">
          Crea una tarea para empezar a organizar tus pendientes.
        </p>
      </section>
    );
  }

  return (
    <Table className="overflow-hidden rounded-2xl border border-border bg-card/90">
      <TableCaption className="text-muted-foreground">
        Tus tareas, ordenadas de la más reciente a la más antigua.
      </TableCaption>
      <TableHeader className="bg-secondary/60">
        <TableRow>
          <TableHead>Tarea</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="hidden lg:table-cell">Creada</TableHead>
          <TableHead className="hidden lg:table-cell">Actualizada</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo?.id}>
            <TableCell className="max-w-64">
              <span className={todo.completed ? "text-muted-foreground line-through" : "font-medium"}>
                {todo.title}
              </span>
              {todo.body && (
                <span className="mt-1 block line-clamp-2 text-xs font-normal text-muted-foreground">
                  {todo.body}
                </span>
              )}
            </TableCell>
            <TableCell>
              {todo?.completed ? (
                <Badge>Completada</Badge>
              ) : (
                <Badge variant="secondary">Pendiente</Badge>
              )}
            </TableCell>
            <TableCell className="hidden whitespace-nowrap text-sm text-muted-foreground lg:table-cell">
              {todo.createdAt ? (
                <time dateTime={dayjs(todo.createdAt).toISOString()}>
                  {formatDate(todo.createdAt)}
                </time>
              ) : (
                "—"
              )}
            </TableCell>
            <TableCell className="hidden whitespace-nowrap text-sm text-muted-foreground lg:table-cell">
              {todo.updatedAt ? (
                <time dateTime={dayjs(todo.updatedAt).toISOString()}>
                  {formatDate(todo.updatedAt)}
                </time>
              ) : (
                "—"
              )}
            </TableCell>
            <TableCell className="text-right">
              <TodosTableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="bg-secondary/40">
        <TableRow>
          <TableCell colSpan={5} className="text-right text-sm text-muted-foreground">
            {todos.length} {todos.length === 1 ? "tarea" : "tareas"}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
