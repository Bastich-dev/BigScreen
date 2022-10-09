import { Field } from "formik";
import React, { useEffect } from "react";

export default function NumericInput({ label, order }) {
  return (
    <>
      <label id={"survey-" + order} children={label} />
      <Field type="text" name={"survey-" + order} />
    </>
  );
}
