import AnswerCollapse from "@components/common/AnswerCollapse";

export default function AnswerPage() {
  const localStorageData = localStorage.getItem("old-answers") || "[]";
  const listSurveys = JSON.parse(localStorageData);

  return (
    <div className="card container">
      {listSurveys?.map((el, key) => (
        <AnswerCollapse key={key} {...el} />
      ))}
    </div>
  );
}
