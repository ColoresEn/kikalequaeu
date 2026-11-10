"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { GalaxyData } from "@/models/types";

type GalaxyDetails = GalaxyData["data"][number];
type NasaItem = Pick<GalaxyData, "data"> & {
  links?: GalaxyData["links"];
};

async function getGalaxy(
  id: string,
  signal: AbortSignal,
): Promise<NasaItem | undefined> {
  const response = await fetch(
    `https://images-api.nasa.gov/search?nasa_id=${encodeURIComponent(id)}`,
    { signal },
  );
  if (!response.ok) {
    throw new Error(`NASA image search failed with status ${response.status}`);
  }

  const data = (await response.json()) as {
    collection?: { items?: NasaItem[] };
  };
  return data.collection?.items?.find((item) => item.data?.[0]);
}

function GalaxySkeleton() {
  return (
    <section
      aria-busy="true"
      aria-label="Cargando detalles de la galaxia"
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12"
    >
      <div className="mb-8 h-5 w-36 animate-pulse rounded bg-muted" />
      <div className="mb-8 h-10 w-3/4 max-w-2xl animate-pulse rounded bg-muted sm:h-12" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)] lg:gap-10">
        <div className="aspect-[4/3] animate-pulse rounded-2xl bg-muted" />
        <div className="space-y-5">
          <div className="h-5 w-28 animate-pulse rounded bg-muted" />
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-muted" />
        </div>
      </div>
    </section>
  );
}

function GalaxyPage() {
  const { id } = useParams<{ id: string }>();
  return <GalaxyDetail key={id} id={id} />;
}

function GalaxyDetail({ id }: { id: string }) {
  const [galaxyData, setGalaxyData] = useState<GalaxyDetails | null>(null);
  const [galaxyImage, setGalaxyImage] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "success" | "not-found" | "error">("loading");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => {
      setStatus("error");
      controller.abort();
    }, 10_000);

    const fetchGalaxy = async () => {
      try {
        const galaxy = await getGalaxy(id, controller.signal);
        if (controller.signal.aborted) return;
        const data = galaxy?.data[0];
        if (!data) {
          setStatus("not-found");
          return;
        }

        const image =
          galaxy.links?.find((link) => link.rel === "preview")?.href ??
          galaxy.links?.[0]?.href ??
          null;

        setGalaxyData(data);
        setGalaxyImage(image);
        setStatus("success");
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("Failed to load galaxy details:", error);
        setStatus("error");
      } finally {
        clearTimeout(timeout);
      }
    };

    void fetchGalaxy();

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [id, retry]);

  if (status === "loading") {
    return <GalaxySkeleton />;
  }

  if (status === "error" || status === "not-found") {
    const notFound = status === "not-found";
    return (
      <section
        aria-labelledby="galaxy-state-title"
        className="mx-auto flex min-h-96 w-full max-w-7xl flex-col items-start justify-center px-4 py-12 sm:px-6"
      >
        <Link
          href="/galaxies"
          className="mb-8 inline-flex min-h-11 items-center rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Volver a las galaxias
        </Link>
        <h1 id="galaxy-state-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {notFound ? "No encontramos esta galaxia" : "No se pudieron cargar los detalles"}
        </h1>
        <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
          {notFound
            ? "Puede que el elemento ya no esté disponible en el archivo de la NASA."
            : "No hemos podido conectar con el archivo de la NASA. Comprueba tu conexión y vuelve a intentarlo."}
        </p>
        {!notFound && (
          <button
            type="button"
            onClick={() => {
              setGalaxyData(null);
              setGalaxyImage(null);
              setStatus("loading");
              setRetry((attempt) => attempt + 1);
            }}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Volver a intentar
          </button>
        )}
      </section>
    );
  }

  if (!galaxyData) {
    return null;
  }

  const keywords = galaxyData.keywords?.filter(Boolean) ?? [];

  return (
    <article className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/galaxies"
        className="mb-7 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:mb-9"
      >
        <ArrowLeft aria-hidden="true" size={16} />
        Volver a las galaxias
      </Link>

      <header className="mb-7 max-w-4xl sm:mb-9">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Archivo NASA <span aria-hidden="true">·</span> {id}
        </p>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {galaxyData.title}
        </h1>
      </header>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)] lg:gap-10">
        <figure className="min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-black">
            {galaxyImage ? (
              <Image
                src={galaxyImage}
                alt={galaxyData.title}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 60vw"
                className="object-contain"
                onError={() => setGalaxyImage(null)}
              />
            ) : (
              <div className="grid h-full place-items-center px-6 text-center text-sm text-muted-foreground">
                Imagen no disponible
              </div>
            )}
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Imagen del archivo público de la NASA
          </figcaption>
        </figure>

        <div className="min-w-0 space-y-8">
          {galaxyData.description && (
            <section aria-labelledby="galaxy-description-title">
              <h2
                id="galaxy-description-title"
                className="text-lg font-semibold text-foreground"
              >
                Sobre esta imagen
              </h2>
              <p className="mt-3 max-w-prose whitespace-pre-line text-base leading-7 text-muted-foreground">
                {galaxyData.description}
              </p>
            </section>
          )}

          {keywords.length > 0 && (
            <section aria-labelledby="galaxy-keywords-title">
              <h2
                id="galaxy-keywords-title"
                className="text-lg font-semibold text-foreground"
              >
                Temas
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {keywords.map((keyword, index) => (
                  <li
                    key={`${keyword}-${index}`}
                    className="max-w-full break-words rounded-md bg-muted px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}

export default GalaxyPage;
