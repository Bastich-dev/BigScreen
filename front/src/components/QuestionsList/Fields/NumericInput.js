import { Field } from "formik";
import React, { useEffect } from "react";

export default function NumericInput({ label, order }) {
  console.log(label);
  return (
    <>
      <label children={label} />
      <Field type="text" name={"survey-" + order} />
    </>
  );
}
