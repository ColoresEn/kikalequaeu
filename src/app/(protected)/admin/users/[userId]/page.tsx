import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import getUserById from "@/actions/getUserById";
import AdminUserEditForm from "@/components/AdminUserEditForm";
import AdminPageSkeleton from "@/components/admin/AdminPageSkeleton";

export const metadata: Metadata = {
  title: "Editar usuario",
};

export default function UserDetailPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  return (
    <div className="space-y-6">
      <Link
        href="/admin/users"
        className="inline-flex min-h-10 items-center text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        Volver a usuarios
      </Link>
      <header className="space-y-2">
        <h1 className="m-0 text-3xl font-semibold tracking-tight sm:text-4xl">
          Editar usuario
        </h1>
        <p className="m-0 max-w-2xl text-sm leading-6 text-muted-foreground">
          Actualiza los datos visibles de esta cuenta.
        </p>
      </header>
      <Suspense fallback={<AdminPageSkeleton label="usuario" />}>
        <UserDetailContent params={params} />
      </Suspense>
    </div>
  );
}

async function UserDetailContent({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await getUserById({ userId });

  if (!user) {
    notFound();
  }

  return (
    <AdminUserEditForm
      name={user.name || ""}
      image={user.image || ""}
      userId={user.id}
      email={user.email || ""}
    />
  );
}
