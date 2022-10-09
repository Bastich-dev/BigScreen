import BannerHome from "@components/public/BannerHome";
import QuestionsList from "@components/public/QuestionsList";
import TextSection from "@components/public/TextSection";
import { useState } from "react";
import surveysSchema from "@utils/mock_surveys.json";

export default function SurveyPage() {
  const [survey, setSurvey] = useState(surveysSchema[0]);

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
      <QuestionsList survey={survey} />
    </>
  );
}
