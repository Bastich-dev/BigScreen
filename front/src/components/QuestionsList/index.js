import gsap from "gsap";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RadioInput from "./Fields/RadioInput";
import TextInput from "./Fields/TextInput";
import NumericInput from "./Fields/NumericInput";
import { Formik, Field, Form } from "formik";
import surveySchema from "@utils/mock_survey.json";
export default function QuestionsList() {
  useEffect(() => {
    const targets = "article";
    gsap.set(targets, { opacity: 0, top: 50 });
    ScrollTrigger.batch(targets, {
      onEnter: batch => {
        gsap.to(batch, {
          opacity: 1,
          top: 0,
          stagger: { each: 0.1 },
          duration: 0.4,
          delay: 0.4,
        });
      },
    });
  }, []);

  return (
    <Formik
      initialValues={{}}
      onSubmit={async values => {
        console.log(values);
      }}>
      <Form id="questions-form" className={styles["questions-list"] + " container"}>
        {surveySchema.map((question, key) => (
          <article key={key}>
            <b>
              Question {key + 1} / {surveySchema.length}
              <span className="material-symbols-outlined">help</span>
            </b>
            <GetAnswerType question={question} />
          </article>
        ))}
        <button className="btn btn-special">
          Envoyer le formulaire <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </Form>
    </Formik>
  );
}

function GetAnswerType({ question }) {
  switch (question.type) {
    case "RADIO": // Type A
      return (
        <div className={styles["radio-input"] + " card"}>
          <RadioInput {...question} />
        </div>
      );
    case "TEXT": // Type B
      return (
        <div className={styles["text-input"] + " card"}>
          <TextInput {...question} />
        </div>
      );
    case "NUMBER": // Type C
      return (
        <div className={styles["number-input"] + " card"}>
          <NumericInput {...question} />
        </div>
      );
    default:
      return <p>Error Type de question</p>;
  }
}
