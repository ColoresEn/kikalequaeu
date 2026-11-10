import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Car, Shield, Clock, CreditCard, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Acceso controlado",
    description: "Plazas asignadas con entrada sencilla para residentes y comerciantes.",
  },
  {
    icon: Shield,
    title: "Seguridad constante",
    description: "Instalación vigilada con atención al uso diario y estancias prolongadas.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Entra y sal cuando lo necesites, todos los días del año.",
  },
  {
    icon: CreditCard,
    title: "Tarifas claras",
    description: "Condiciones adaptadas al centro de Gandia, sin vueltas innecesarias.",
  },
];

export default function Home() {
  return (
    <div className="pb-8">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary">
              Parking privado · Centro histórico de Gandia
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Tu plaza de aparcamiento, y deja de dar vueltas con el coche.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Esoma S.L. ofrece parking para residentes y comercios con acceso diario, ubicación céntrica y atención directa para consultar disponibilidad.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={buttonVariants({ size: "lg", className: "sm:min-w-44" })}
              >
                  Reserva tu plaza
                  <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "border-border/80 bg-card/40 sm:min-w-44",
                })}
              >
                Consultar disponibilidad
              </Link>
            </div>
          </div>

          <div className="surface-panel relative mx-auto w-full max-w-md p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
            <div className="flex flex-col items-center gap-6 text-center">
              <Image src="/img/logoEsoma2.png" alt="Logo Esoma Parking" width={220} height={220} className="h-auto w-40 sm:w-52" priority />
              <dl className="grid w-full grid-cols-2 gap-3 text-left">
                <div className="rounded-xl border border-border/70 bg-background/45 p-4">
                  <dt className="text-xs text-muted-foreground">Ubicación</dt>
                  <dd className="mt-1 text-sm font-medium">Centro de Gandia</dd>
                </div>
                <div className="rounded-xl border border-border/70 bg-background/45 p-4">
                  <dt className="text-xs text-muted-foreground">Acceso</dt>
                  <dd className="mt-1 text-sm font-medium">Todos los días</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Pensado para el uso diario</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Una solución práctica para aparcar cerca de casa o del negocio en una zona con alta demanda.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="surface-panel p-5 transition-colors hover:border-primary/25">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <feature.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="surface-panel flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Consulta plaza y condiciones</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
              Escríbenos y te informaremos sobre disponibilidad, accesos y cuota mensual según el tipo de plaza.
            </p>
          </div>
          <Link
            href="/contact"
            className={buttonVariants({ size: "lg" })}
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
}
