import gsap from "gsap";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RadioInput from "./Fields/RadioInput";
import TextInput from "./Fields/TextInput";
import NumericInput from "./Fields/NumericInput";
import { Formik, Field, Form } from "formik";
import surveysSchema from "@utils/mock_surveys.json";
import { useLoadingContext } from "@providers/LoadingProvider";
import { useNavigate } from "react-router-dom";

export default function QuestionsList() {
  const [survey, setSurvey] = useState(surveysSchema[0]);
  const { setLoading } = useLoadingContext();
  const navigate = useNavigate();

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

  const onSubmit = async values => {
    // setLoading(true);
    console.log(values);

    // Set New Answer
    const newAnswer = {
      surveyName: survey.name,
      answersList: Object.keys(values).map((el, key) => ({ question: survey.questions[key].label, answer: values[el] })),
    };

    // Save to localStorage
    const localStorageData = localStorage.getItem("old-answers") || "[]";
    localStorage.setItem("old-answers", JSON.stringify([...JSON.parse(localStorageData), newAnswer]));

    // setTimeout(() => {
    //   setLoading(false);
    //   navigate("/thanks");
    // }, 1000);
  };

  return (
    <Formik initialValues={{}} onSubmit={onSubmit}>
      <Form id="questions-form" className={styles["questions-list"] + " container"}>
        {survey?.questions.map((question, key) => (
          <article key={key}>
            <b>
              Question {key + 1} / {survey.questions.length}
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
