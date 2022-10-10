// Imports
import Table from "@components/common/Table";
import gsap from "gsap";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Collapsible from "react-collapsible";
import surveySchema from "@utils/mock_surveys.json";

// Styles
import styles from "./styles.module.scss";

const columns = [
  {
    title: "Question",
    key: "question",
  },
  {
    title: "Réponse",
    key: "answer",
  },
];

export default function AnswerCollapse({ surveyName, answersList }) {
  // - Render
  return (
    <Collapsible
      transitionTime={200}
      classParentString={styles["answer-collapse"]}
      onOpening={() => {
        const target = document.querySelector(".collapse-arrow");
        if (target) gsap.to(target, { rotate: "-90deg", duration: 0.3 });
      }}
      onClosing={() => {
        const target = document.querySelector(".collapse-arrow");
        if (target) gsap.to(target, { rotate: "0deg", duration: 0.3 });
      }}
      trigger={
        <>
          <div>
            <b>
              {/* {user.username} - {user.email} */}
              {surveyName}
            </b>
            {/* <span>{surveyName}</span> */}
          </div>
          <span className="collapse-arrow material-symbols-outlined">chevron_left</span>
        </>
      }>
      <Table columns={columns} data={answersList.map(e => ({ ...e, question: surveySchema[0].questions.find(k => k.id == e.question).label }))} />
    </Collapsible>
  );
}
