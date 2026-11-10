import Link from "next/link";
import type { ReactNode } from "react";

const legalDocuments = [
  { href: "/proteccion-datos/aviso-legal", label: "Aviso legal" },
  { href: "/proteccion-datos/privacy-policy", label: "Privacidad" },
  { href: "/proteccion-datos/politica-cookies", label: "Cookies" },
] as const;

type LegalDocumentProps = {
  title: string;
  currentPath: (typeof legalDocuments)[number]["href"];
  sections: { id: string; title: string }[];
  children: ReactNode;
};

export function LegalDocument({
  title,
  currentPath,
  sections,
  children,
}: LegalDocumentProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-9 sm:px-8 sm:pt-12">
      <nav
        aria-label="Documentos legales"
        className="flex flex-wrap gap-2 border-b border-border pb-5"
      >
        {legalDocuments.map(({ href, label }) => {
          const isCurrent = href === currentPath;

          return (
            <Link
              key={href}
              href={href}
              aria-current={isCurrent ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-offset-4 ${
                isCurrent
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <header className="border-b border-border py-8 sm:py-10">
        <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
      </header>

      <div className="grid gap-8 pt-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14 lg:pt-10">
        <nav
          aria-label="En este documento"
          className="border-b border-border pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-7"
        >
          <h2 className="mb-3 text-sm font-semibold text-foreground">
            En este documento
          </h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-2">
            {sections.map(({ id, title: sectionTitle }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm leading-6 text-muted-foreground underline decoration-transparent underline-offset-4 transition-colors hover:text-primary hover:decoration-current focus-visible:text-primary"
                >
                  {sectionTitle}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="min-w-0 max-w-[72ch] space-y-8 text-base leading-7 text-muted-foreground sm:space-y-10">
          {children}
        </article>
      </div>
    </main>
  );
}

export function LegalEntityDetails() {
  const details = [
    ["Responsable", "ESOMA S.L"],
    ["NIF", "B46134128"],
    ["Dirección", "C/ SANT FRANCESC DE BORJA, 50"],
    ["Teléfono", "690029812"],
    ["Mail", "PARKINGESOMA@GMAIL.COM"],
  ];

  return (
    <dl className="grid gap-x-8 gap-y-4 rounded-2xl border border-border bg-card/70 p-5 sm:grid-cols-2 sm:p-6">
      {details.map(([label, value]) => (
        <div key={label} className="min-w-0">
          <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
          <dd className="mt-1 break-words font-medium text-foreground">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
