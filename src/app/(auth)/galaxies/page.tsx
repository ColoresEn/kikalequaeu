import { GalaxyCard } from "@/components/GalaxyCard";
import { GalaxyData } from "@/models/types";
import { connection } from "next/server";

async function loadGalaxies(): Promise<GalaxyData[]> {
  const response = await fetch("https://images-api.nasa.gov/search?q=galaxies", {
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) {
    throw new Error(`NASA image search failed with status ${response.status}`);
  }

  const data = (await response.json()) as {
    collection?: { items?: GalaxyData[] };
  };
  return (data.collection?.items ?? []).filter(
    (galaxy) =>
      typeof galaxy?.data?.[0]?.nasa_id === "string" &&
      typeof galaxy.data[0].title === "string",
  );
}

async function GalaxiesPage() {
  await connection();
  const galaxies = await loadGalaxies();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-8 max-w-3xl sm:mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Descubre el universo observable
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Explora galaxias e imágenes del archivo público de la NASA.
        </p>
        {galaxies.length > 0 && (
          <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">
            {galaxies.length} resultados
          </p>
        )}
      </header>

      {galaxies.length > 0 ? (
        <section
          aria-label="Resultados de galaxias"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {galaxies.map((galaxy, index) => (
            <GalaxyCard
              galaxy={galaxy}
              key={galaxy.data[0].nasa_id}
              priority={index < 4}
            />
          ))}
        </section>
      ) : (
        <p className="rounded-xl border border-border bg-card px-5 py-6 text-muted-foreground">
          No hay galaxias disponibles en este momento. Vuelve a intentarlo más
          tarde.
        </p>
      )}
    </div>
  );
}

export default GalaxiesPage;
