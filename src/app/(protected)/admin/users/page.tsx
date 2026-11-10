import { Suspense } from "react";
import type { Metadata } from "next";
import getUsers from "@/actions/getUsers";
import AdminPageSkeleton from "@/components/admin/AdminPageSkeleton";
import AdminUsersDirectory from "@/components/admin/AdminUsersDirectory";

export const metadata: Metadata = {
  title: "Usuarios",
};

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="m-0 text-3xl font-semibold tracking-tight sm:text-4xl">
          Usuarios
        </h1>
        <p className="m-0 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Consulta y administra las cuentas registradas.
        </p>
      </header>
      <Suspense fallback={<AdminPageSkeleton label="usuarios" />}>
        <UsersDirectoryContent />
      </Suspense>
    </div>
  );
}

async function UsersDirectoryContent() {
  const users = await getUsers();
  return <AdminUsersDirectory users={users} />;
}
