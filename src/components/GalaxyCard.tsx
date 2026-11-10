import type { GalaxyData } from "@/models/types";
import Image from "next/image";
import Link from "next/link";

interface GalaxyCardProps {
  galaxy: GalaxyData;
  priority?: boolean;
}

export const GalaxyCard = ({ galaxy, priority = false }: GalaxyCardProps) => {
  const galaxyData = galaxy.data[0];
  const galaxyImage = galaxy.links?.[0]?.href;
  const keywords = galaxyData.keywords?.filter(Boolean) ?? [];
  const visibleKeywords = keywords.slice(0, 3);

  return (
    <Link
      href={`/galaxies/${encodeURIComponent(galaxyData.nasa_id)}`}
      aria-label={`Ver detalles de ${galaxyData.title}`}
      className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {galaxyImage ? (
          <Image
            src={galaxyImage}
            alt={galaxyData.title}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
            priority={priority}
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="grid h-full place-items-center px-6 text-center text-sm text-muted-foreground"
            aria-label="Imagen no disponible"
          >
            Imagen no disponible
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-foreground transition-colors group-hover:text-primary">
          {galaxyData.title}
        </h2>
        {visibleKeywords.length > 0 && (
          <ul
            aria-label="Temas"
            className="mt-3 flex flex-wrap gap-2"
          >
            {visibleKeywords.map((keyword) => (
              <li
                key={keyword}
                className="max-w-full truncate rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
              >
                {keyword}
              </li>
            ))}
            {keywords.length > visibleKeywords.length && (
              <li className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                +{keywords.length - visibleKeywords.length}
              </li>
            )}
          </ul>
        )}
        <span className="mt-auto pt-4 text-sm font-medium text-primary">
          Explorar detalles
        </span>
      </div>
    </Link>
  );
};
