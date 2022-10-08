import { Field } from "formik";
import React, { useEffect } from "react";

export default function RadioInput({ options, label, order }) {
  console.log(label);
  return (
    <>
      <label children={label} />
      <div className="radio-group" role="group" aria-labelledby={"question-" + order}>
        {options?.map((option, key) => (
          <label key={key}>
            <Field type="radio" name="picked" value={option} />
            {option}
          </label>
        ))}
      </div>
    </>
  );
}
