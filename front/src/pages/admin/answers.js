import AnswerCollapse from "@components/admin/AnswerCollapse";
import Loader from "@components/common/Loader";
import gsap from "gsap";
import { useEffect, useState } from "react";
import answersMock from "@utils/mock_answers.json";

export default function AnswersPage() {
  const [answerList, setAnswerList] = useState();
  const [answerFilteredList, setAnswerFilteredList] = useState();
  const [filterSearch, setFilterSearch] = useState("");

  useEffect(() => {
    gsap.set(".card", { opacity: 0, top: 20, minHeight: "60vh" });
    gsap.to(".card", { opacity: 1, top: 0, delay: 0.4, duration: 0.4 });

    setTimeout(() => {
      setAnswerList(answersMock);
    }, 1000);
  }, []);

  useEffect(() => {
    setAnswerFilteredList(
      answerList?.filter(
        e =>
          e.surveyName.includes(filterSearch) ||
          e.user.username.includes(filterSearch) ||
          e.user.email.includes(filterSearch) ||
          //
          e.user.email.includes(filterSearch)
      )
    );
  }, [filterSearch, answerList]);

  return (
    <>
      <div className="card">
        <header>
          <h1>Réponses</h1>
          <input
            value={filterSearch}
            onChange={e => setFilterSearch(e.target.value)}
            placeholder="Rechercher par titre, questionnaire, utilisateur ..."
            style={{ width: 400, height: 58, fontSize: 16 }}
          />
        </header>
        {answerFilteredList ? (
          answerFilteredList?.length === 0 ? (
            <p>Aucun résultat avec cette recherche</p>
          ) : (
            answerFilteredList.map((answer, key) => <AnswerCollapse {...answer} key={key} />)
          )
        ) : (
          <Loader full />
        )}
      </div>
    </>
  );
}
