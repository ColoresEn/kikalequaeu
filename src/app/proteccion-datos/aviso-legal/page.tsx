import {
  LegalDocument,
  LegalEntityDetails,
} from "@/components/legal/LegalDocument";

export default function AvisoLegalPage() {
  return (
    <LegalDocument
      title="Aviso legal"
      currentPath="/proteccion-datos/aviso-legal"
      sections={[
        { id: "legislacion", title: "Legislación" },
        { id: "contenido-uso", title: "Contenido y uso" },
        {
          id: "propiedad-intelectual",
          title: "Propiedad intelectual e industrial",
        },
        { id: "enlaces", title: "Enlaces" },
      ]}
    >
      <p>
        El presente Aviso Legal regula el uso del servicio del portal de Internet
        con dirección{" "}
        <span className="font-semibold text-foreground">
          WWW.PARKINGESOMA.COM
        </span>
        , cuyo responsable a efectos identificativos es:
      </p>
      <LegalEntityDetails />

      <section id="legislacion" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Legislación
        </h2>
        <p>
          Con carácter general las relaciones entre ESOMA S.L con los Usuarios
          de sus servicios telemáticos, presentes en la web, se encuentran
          sometidas a la legislación y jurisdicción españolas.
        </p>
        <p>
          Las partes renuncian expresamente al fuero que les pudiera
          corresponder y someten expresamente a los Juzgados y Tribunales de
          VALÈNCIA para resolver cualquier controversia que pudiera surgir en
          la interpretación o ejecución de las presentes condiciones
          contractuales.
        </p>
      </section>

      <section id="contenido-uso" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Contenido y Uso
        </h2>
        <p>
          El Usuario queda informado, y acepta, que el acceso a la presente web
          no supone, en modo alguno, el inicio de una relación comercial con
          ESOMA S.L.
        </p>
        <p>
          El titular del web no se identifica con las opiniones vertidas en el
          mismo por sus colaboradores. La Empresa se reserva el derecho de
          efectuar sin previo aviso las modificaciones que considere oportunas
          en su Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y
          servicios que se presten a través de la misma como la forma en la que
          éstos aparezcan presentados o localizados en sus servidores.
        </p>
      </section>

      <section id="propiedad-intelectual" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Propiedad intelectual e industrial
        </h2>
        <p>
          Los derechos de propiedad intelectual del contenido de las páginas
          web, su diseño gráfico y códigos son titularidad de ESOMA S.L y, por
          tanto, queda prohibida su reproducción, distribución, comunicación
          pública, transformación o cualquier otra actividad que se pueda
          realizar con los contenidos de sus páginas web ni aun citando las
          fuentes, salvo consentimiento por escrito de ESOMA S.L.
        </p>
        <p>
          Todos los nombres comerciales, marcas o signos distintos de cualquier
          clase contenidos en las páginas web de la Empresa son propiedad de
          sus dueños y están protegidos por ley.
        </p>
      </section>

      <section id="enlaces" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Enlaces (Links)
        </h2>
        <p>
          La presencia de enlaces (links) en las páginas web de ESOMA S.L tiene
          finalidad meramente informativa y en ningún caso supone sugerencia,
          invitación o recomendación sobre los mismos.
        </p>
      </section>
    </LegalDocument>
  );
}
