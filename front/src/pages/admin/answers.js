import AnswerCollapse from "@components/AnswerCollapse";
import Loader from "@components/Loader";
import gsap from "gsap";
import { useEffect, useState } from "react";
export default function AnswersPage() {
  const [answerList, setAnswerList] = useState();

  useEffect(() => {
    gsap.set(".card", { opacity: 0, top: 20, minHeight: "60vh" });
    gsap.to(".card", { opacity: 1, top: 0, delay: 0.4, duration: 0.4 });

    setTimeout(() => {
      setAnswerList(dataContent);
    }, 1000);
  }, []);

  return (
    <>
      <div className="card">
        <header>
          <h1>Réponses</h1>
        </header>
        {answerList ? answerList.map((answer, key) => <AnswerCollapse {...answer} key={key} />) : <Loader />}
      </div>
    </>
  );
}

const dataContent = [
  {
    surveyName: "Questionnaire 1",
    answersList: [],
    user: {
      username: "Berthrand",
      email: "baba.shantrel@hotmail.com",
    },
  },
];
