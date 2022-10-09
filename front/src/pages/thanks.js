import BannerHome from "@components/public/BannerHome";
import TextSection from "@components/public/TextSection";
import { Link } from "react-router-dom";

export default function ThanksPage() {
  return (
    <>
      <TextSection
        title="Merci d'avoir pris le temps de nous répondre !"
        body={
          <>
            <br />
            <br />
            <br />
            <p>
              Toute l’équipe de Bigscreen vous remercie pour votre engagement. Grâce à votre investissement, nous vous préparons une application toujours plus facile à utiliser,
              seul ou en famille.
            </p>
            <p>
              Si vous désirez consulter vos réponses ultérieurement, vous pouvez consultez
              <Link style={{ color: "white", marginLeft: 5 }} to="/old-answers">
                cette adresse
              </Link>
            </p>
          </>
        }
      />
    </>
  );
}
