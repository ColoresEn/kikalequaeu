import { LegalDocument } from "@/components/legal/LegalDocument";

export default function CookiesPolicy() {
  return (
    <LegalDocument
      title="Política de cookies"
      currentPath="/proteccion-datos/politica-cookies"
      sections={[
        { id: "entidad-responsable", title: "Entidad responsable" },
        { id: "que-son-cookies", title: "¿Qué son las cookies?" },
        { id: "tipos-cookies", title: "Tipos de cookies" },
        { id: "deshabilitar-cookies", title: "Cómo deshabilitarlas" },
      ]}
    >
      <p>
        En esta web se utilizan cookies de terceros y propias para conseguir
        que tengas una mejor experiencia de navegación, puedas compartir
        contenido en redes sociales y para que podamos obtener estadísticas de
        los usuarios.
      </p>
      <p>
        Puedes evitar la descarga de cookies a través de la configuración de tu
        navegador, evitando que las cookies se almacenen en su dispositivo.
      </p>
      <p>
        Como propietario de este sitio web, te comunico que no utilizamos
        ninguna información personal procedente de cookies, tan sólo realizamos
        estadísticas generales de visitas que no suponen ninguna información
        personal.
      </p>
      <p>
        Es muy importante que leas la presente política de cookies y comprendas
        que únicamente se almacenarán en tu dispositivo las cookies necesarias
        para la navegación. El resto de cookies se instalarán siempre y cuando
        lo consientas expresamente.
      </p>
      <p>
        Según los términos incluidos en el artículo 22.2 de la Ley 34/2002 de
        Servicios de la Sociedad de la Información y Comercio Electrónico, si
        continúas navegando, estarás prestando tu consentimiento para el empleo
        de los referidos mecanismos.
      </p>

      <section id="entidad-responsable" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Entidad Responsable
        </h2>
        <p>
          La entidad responsable es WWW.PARKINGESOMA.COM, propiedad de ESOMA
          S.L, con dirección en C/ SANT FRANCESC DE BORJA, 50.
        </p>
      </section>

      <section id="que-son-cookies" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          ¿Qué son las cookies?
        </h2>
        <p>
          Las cookies son un conjunto de datos que un servidor deposita en el
          navegador del usuario para recoger información de registro estándar
          de Internet y el comportamiento de los visitantes en un sitio web.
        </p>
      </section>

      <section id="tipos-cookies" className="scroll-mt-24 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            ¿Qué tipos de cookies existen?
          </h2>
          <p>
            Las cookies utilizadas en nuestro sitio web son de sesión y de
            terceros, y permiten almacenar información relativa al idioma, tipo
            de navegador y otras características generales, así como analizar
            la actividad del usuario.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Tabla de cookies
          </h3>
          <div
            aria-label="Tabla de cookies; desplázate horizontalmente para ver todas las columnas"
            className="overflow-x-auto rounded-xl border border-border"
            role="region"
            tabIndex={0}
          >
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">Listado de cookies</caption>
              <thead className="bg-muted text-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Nombre</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Tipo</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Caducidad</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Finalidad</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Clase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3">........</td>
                  <td className="px-4 py-3">........</td>
                  <td className="px-4 py-3">........</td>
                  <td className="px-4 py-3">........</td>
                  <td className="px-4 py-3">........</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-sm italic">
          (*) Nota: Tabla a rellenar por el proveedor.
        </p>

        <div className="space-y-6">
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Cookies de rendimiento
            </h3>
            <p>
              Recuerdan preferencias de herramientas como volumen, velocidad de
              vídeo o elementos del carrito.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Cookies de geo-localización
            </h3>
            <p>
              Determinan el país desde el que se accede para orientar el
              contenido.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Cookies de registro
            </h3>
            <p>
              Se generan al registrarse o iniciar sesión, permitiendo mantener
              al usuario identificado.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Cookies analíticas
            </h3>
            <p>
              Permiten identificar anónimamente navegadores y dispositivos,
              contabilizar visitantes y analizar contenidos más visitados.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Cookies de publicidad
            </h3>
            <p>
              Almacenan información sobre anuncios mostrados, interacción y
              patrones de navegación para ofrecer publicidad afín.
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Cookies publicitarias de terceros
            </h3>
            <p>
              Terceros pueden almacenar cookies enviadas desde los servicios de
              ESOMA S.L y acceder a los datos guardados.
            </p>
          </section>
        </div>
      </section>

      <section id="deshabilitar-cookies" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          ¿Cómo puedo deshabilitar las cookies?
        </h2>
        <p>
          Puedes configurar tu navegador para recibir avisos, impedir
          instalación o revisar y eliminar cookies.
        </p>
        <ul className="list-disc space-y-2 pl-6 marker:text-primary">
          <li>Google Chrome</li>
          <li>Internet Explorer</li>
          <li>Mozilla Firefox</li>
          <li>Safari</li>
          <li>Opera</li>
          <li>Desactivar seguimiento en Google Analytics</li>
        </ul>
      </section>
    </LegalDocument>
  );
}
