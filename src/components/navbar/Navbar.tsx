import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import { UserRound, UserRoundPlus, MessageCircle } from "lucide-react";
import Image from "next/image";
import getCurrentUser from "@/actions/getCurrentUser";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserButton from "./UserButton";

const Navbar = () => (
  <Suspense fallback={<NavbarFallback />}>
    <NavbarContent />
  </Suspense>
);

async function NavbarContent() {
  await connection();
  const currentUser = await getCurrentUser();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3 rounded-lg">
          <Image
            src="/img/logoFondo.png"
            alt="Esoma Parking"
            width={40}
            height={40}
            className="rounded-lg"
            priority
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-foreground">
              {currentUser ? `Hola, ${currentUser.name}` : "Esoma Parking"}
            </p>
            <p className="hidden text-xs text-muted-foreground sm:block">Parking privado en Gandia</p>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "ghost",
              className: "hidden sm:inline-flex",
            })}
          >
            Reservas
          </Link>
          {currentUser ? (
            <UserButton user={currentUser} />
          ) : (
            <SignInButton />
          )}
        </div>
      </nav>
    </header>
  );
}

function NavbarFallback() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3 rounded-lg">
          <Image
            src="/img/logoFondo.png"
            alt="Esoma Parking"
            width={40}
            height={40}
            className="rounded-lg"
            priority
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-foreground">
              Esoma Parking
            </p>
            <p className="hidden text-xs text-muted-foreground sm:block">
              Parking privado en Gandia
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "ghost",
              className: "hidden sm:inline-flex",
            })}
          >
            Reservas
          </Link>
          <div
            aria-hidden="true"
            className="size-9 animate-pulse rounded-full bg-muted"
          />
        </div>
      </nav>
    </header>
  );
}

function SignInButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border/80 bg-card/70"
            aria-label="Abrir menú de usuario"
          />
        }
      >
          <Image src={avatarPlaceholder} alt="" width={36} height={36} className="aspect-square rounded-full object-cover" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem render={<Link href="/login" />}>
              <UserRound className="size-4" />
              Acceso
          </DropdownMenuItem>
          <DropdownMenuItem render={<Link href="/register" />}>
              <UserRoundPlus className="size-4" />
              Registro
          </DropdownMenuItem>
          <DropdownMenuItem render={<Link href="/contact" />}>
              <MessageCircle className="size-4" />
              Reservas
          </DropdownMenuItem>
          <DropdownMenuItem render={<Link href="/galaxies" />}>
              <MessageCircle className="size-4" />
              Galaxias
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Navbar;
