import { Field } from "formik";
import React, { useEffect } from "react";

export default function TextInput({ label, order }) {
  return (
    <>
      <label children={label} />
      <Field
        type="text"
        name={"survey-" + order}
        //
      />
    </>
  );
}
