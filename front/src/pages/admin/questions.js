import Table from "@components/Table";
import gsap from "gsap";
import { useEffect } from "react";
import surveySchema from "@utils/mock_survey.json";

const columns = [
  {
    title: "Ordre",
    key: "order",
  },
  {
    title: "Type",
    key: "type",
  },
  {
    title: "Question",
    key: "label",
  },
];

export default function QuestionsPage() {
  useEffect(() => {
    gsap.set(".card", { opacity: 0, top: 20 });
    gsap.to(".card", { opacity: 1, top: 0, delay: 0.4, duration: 0.4 });
  }, []);

  return (
    <>
      <div className="card">
        <header>
          <h1>Questionnaires</h1>
        </header>
        <Table columns={columns} data={surveySchema} />
      </div>
    </>
  );
}
