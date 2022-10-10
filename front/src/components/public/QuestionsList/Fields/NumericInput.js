import { Field } from "formik";
import React, { useEffect } from "react";

export default function NumericInput({ options, label, order }) {
  const scrollToNextQuestion = () => {
    const height = document.querySelector("#survey-" + (order + 1)).getBoundingClientRect().top + document.documentElement.scrollTop;
    window.scrollTo({
      top: height - 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      <label id={"survey-" + order} children={label} />
      <div className="radio-group" role="group" aria-labelledby={"question-" + order}>
        {["1", "2", "3", "4", "5"]?.map((option, key) => (
          <label key={key} onClick={scrollToNextQuestion}>
            <Field type="radio" name={"survey-" + order} value={option} />
            <div>{option}</div>
          </label>
        ))}
      </div>
    </>
  );
}
