"use client";

export default function GalaxiesError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section
      aria-labelledby="galaxies-error-title"
      className="mx-auto flex min-h-80 w-full max-w-7xl flex-col items-start justify-center px-4 py-12 sm:px-6"
    >
      <h1 id="galaxies-error-title" className="text-2xl font-semibold tracking-tight text-foreground">
        No se pudieron cargar las galaxias
      </h1>
      <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
        No hemos podido conectar con el archivo de la NASA. Comprueba tu
        conexión y vuelve a intentarlo.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 inline-flex min-h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        Volver a intentar
      </button>
    </section>
  );
}
