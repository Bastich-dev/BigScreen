import BannerHome from "@components/BannerHome";
import QuestionsList from "@components/QuestionsList";
import TextSection from "@components/TextSection";

export default function SurveyPage() {
  return (
    <>
      <BannerHome />
      <TextSection
        title="Aidez nous à nous améliorer"
        body={
          <>
            <p>
              <span>Afin de vous fournir une meilleure expérience, nous recueillons votre retour sur notre performance lors de votre dernière interaction avec nous.</span>
            </p>
            <p>
              <span>Merci de répondre à toutes les questions et de valider le formulaire en bas de page.</span>
            </p>
          </>
        }
      />
      <QuestionsList />
    </>
  );
}
