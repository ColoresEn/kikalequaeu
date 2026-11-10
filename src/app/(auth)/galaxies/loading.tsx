export default function GalaxiesLoading() {
  return (
    <section
      aria-busy="true"
      aria-label="Cargando galaxias"
      className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14"
    >
      <div className="mb-8 max-w-3xl space-y-3 sm:mb-10">
        <div className="h-9 w-3/4 animate-pulse rounded-md bg-muted sm:w-2/3" />
        <div className="h-5 w-full max-w-xl animate-pulse rounded-md bg-muted" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="aspect-[4/3] animate-pulse bg-muted" />
            <div className="space-y-3 p-4">
              <div className="h-5 w-4/5 animate-pulse rounded bg-muted" />
              <div className="h-4 w-2/5 animate-pulse rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
