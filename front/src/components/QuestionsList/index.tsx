import gsap from "gsap";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function QuestionsList() {
  useEffect(() => {
    const targets = "article";
    gsap.set(targets, { opacity: 0, top: 50 });
    ScrollTrigger.batch(targets, {
      onEnter: batch => {
        gsap.to(batch, { opacity: 1, top: 0, stagger: { each: 0.1 }, duration: 0.4, delay: 0.4 });
      },
    });
  }, []);

  return (
    <form className={styles["questions-list"] + " container"}>
      {questions.map((question, key) => (
        <article key={key}>
          <b>
            Question {key + 1} / {questions.length} <span className="material-symbols-outlined">help</span>
          </b>
          <div className="card">
            <GetAnswerType question={question} />
          </div>
        </article>
      ))}
      <button className="btn btn-special">
        Envoyer le formulaire <span className="material-symbols-outlined">arrow_right_alt</span>
      </button>
    </form>
  );
}

function GetAnswerType({ question }: any) {
  switch (question.type) {
    case "A":
      return (
        <>
          <label>{question.label} A</label>
          <input />
        </>
      );
    case "B":
      return (
        <>
          <label>{question.label} B</label>
          <input />
        </>
      );
    case "C":
      return (
        <>
          <label>{question.label} C</label>
          <input />
        </>
      );
    default:
      return <></>;
      break;
  }
}

const questions = [
  //
  { label: "Votre adresse e-mail", type: "A", order: 0 },
  { label: "Votre âge", type: "B", order: 1 },
  { label: "Votre âge", type: "C", order: 2 },
  { label: "Votre âge", type: "B", order: 3 },
  { label: "Votre âge", type: "B", order: 4 },
  { label: "Votre âge", type: "B", order: 5 },
  { label: "Votre âge", type: "B", order: 6 },
  { label: "Votre âge", type: "B", order: 7 },
];
