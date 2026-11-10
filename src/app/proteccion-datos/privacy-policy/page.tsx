import {
  LegalDocument,
  LegalEntityDetails,
} from "@/components/legal/LegalDocument";

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Política de privacidad"
      currentPath="/proteccion-datos/privacy-policy"
      sections={[
        { id: "finalidad", title: "Finalidad" },
        { id: "legitimacion", title: "Legitimación" },
        { id: "destinatarios", title: "Destinatarios" },
        { id: "conservacion", title: "Conservación" },
        { id: "derechos", title: "Derechos" },
      ]}
    >
      <p>
        La presente Política de Privacidad regula el uso del servicio del portal
        de Internet con dirección{" "}
        <span className="font-semibold text-foreground">
          WWW.PARKINGESOMA.COM
        </span>
        , cuyo responsable a efectos identificativos es:
      </p>
      <LegalEntityDetails />

      <section id="finalidad" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Finalidad, ¿Para qué tratamos sus datos?
        </h2>
        <p>
          A efecto de lo previsto en el RGPD de 27 de abril de 2016 y la LO
          3/2018, trataremos los datos que recojamos para las siguientes
          finalidades:
        </p>
        <ul className="list-disc space-y-2 pl-6 marker:text-primary">
          <li>Contactar con usted en caso de que así nos lo pida.</li>
          <li>Gestionar su navegación en la web, en su caso.</li>
          <li>
            Remitirle comunicaciones comerciales acerca de nuestros productos y
            servicios.
          </li>
          <li>
            (*) Gestionar las compras de productos ofertados en la web añadidos
            en la cesta.
          </li>
        </ul>
        <p>
          Para ello el usuario dispondrá de un formulario de registro cuya
          cumplimentación legitimará el acceso a determinados servicios
          ofrecidos en la web.
        </p>
        <p>
          En todo formulario de contacto el usuario será informado del uso que
          se hará de los datos obtenidos y, si se utilizan para un fin distinto,
          se solicitará consentimiento previo y expreso.
        </p>
        <p>
          Si el consentimiento se da dentro de una declaración escrita que
          incluya otros asuntos, se presentará de forma claramente diferenciada,
          inteligible y accesible, conforme al artículo 7.2 del RGPD.
        </p>
      </section>

      <section id="legitimacion" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Legitimación, ¿Cuál es la legitimación para el tratamiento?
        </h2>
        <ul className="list-disc space-y-2 pl-6 marker:text-primary">
          <li>
            El consentimiento del interesado, conforme al artículo 6.1.a) del
            Reglamento General Europeo de Protección de Datos.
          </li>
          <li>
            La ejecución de un contrato en el que el interesado es parte o la
            aplicación de medidas precontractuales, conforme al artículo
            6.1.b).
          </li>
        </ul>
      </section>

      <section id="destinatarios" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Destinatarios, ¿A quién comunicamos tus datos?
        </h2>
        <p>
          Los datos personales no serán cedidos salvo obligación legal o para
          dar soporte a los servicios vinculados al tratamiento.
        </p>
      </section>

      <section id="conservacion" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Conservación, ¿Durante cuánto tiempo conservamos tus datos?
        </h2>
        <p>
          Conservaremos sus datos personales durante al menos 5 años si es
          cliente, para el cumplimiento de obligaciones legales.
        </p>
        <p>
          Si no es cliente, conservaremos los datos el tiempo mínimo necesario
          para gestionar la relación.
        </p>
      </section>

      <section id="derechos" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Derechos, ¿Cuáles son tus derechos?
        </h2>
        <ul className="list-disc space-y-2 pl-6 marker:text-primary">
          <li>Acceder a sus datos personales.</li>
          <li>Solicitar la rectificación de datos inexactos.</li>
          <li>Solicitar la supresión de los datos cuando ya no sean necesarios.</li>
          <li>Solicitar la limitación del tratamiento.</li>
          <li>
            Oponerse al tratamiento por motivos relacionados con su situación
            particular.
          </li>
          <li>Solicitar la portabilidad</li>
        </ul>
      </section>
    </LegalDocument>
  );
}
