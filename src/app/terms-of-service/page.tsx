// pages/terms-of-service.tsx
import { NextPage } from "next";

const TermsOfService: NextPage = () => {
  return (
    <div className="mx-auto mt-5 w-[calc(100%-2rem)] max-w-fit  p-6 shadow-md shadow-black">
    <div style={{ padding: "20px" }}>
      <h1>Condiciones del Servicio</h1>
      <p>
        De conformidad con lo establecido en el REGLAMENTO (UE) 2016/679 de
        protección de datos de carácter personal. Se procederá a
        tratar los datos de manera lícita, leal, transparente, adecuada,
        pertinente, limitada, exacta y actualizada. Mientras no nos comunique lo
        contrario, entenderemos que sus datos no han sido modificados y que
        usted se compromete a notificarnos cualquier variación. De acuerdo con
        los derechos que le confiere la normativa vigente podrá ejercer los
        derechos de acceso, rectificación, limitación de tratamiento, supresión,
        portabilidad y oposición al tratamiento de sus datos de carácter
        personal así como revocar el consentimiento prestado, dirigiendo su
        petición a la dirección postal indicada o al correo electrónico
        qepdevsafor@gmail.com y podrá dirigirse a la Autoridad de Control
        competente para presentar la reclamación que considere oportuna.
      </p>
    </div>
    </div>
  );
};

export default TermsOfService;
