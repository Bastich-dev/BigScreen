import ChartRadar from "@components/admin/ChartRadar";
import ChartPie from "@components/admin/ChartPie";
import ChartsContainer from "@components/admin/ChartsContainer";
import Loader from "@components/common/Loader";
import gsap from "gsap";
import { useEffect, useState } from "react";
import surveysSchema from "@utils/mock_surveys.json";
import answersSchema from "@utils/mock_answers.json";
import Select from "react-select";
import { useAdminContext } from "@providers/AdminProvider";

export default function DashboardPage() {
  const [chatsData, setChartsData] = useState();

  const { surveysList, selectedSurvey, setSelectedSurvey } = useAdminContext();
  useEffect(() => {
    gsap.set(".card", { opacity: 0, top: 20 });
    gsap.to(".card", { opacity: 1, top: 0, delay: 0.4, duration: 0.4 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setChartsData(answersSchema);
    }, 1000);
  }, []);

  return (
    <>
      <div className="card">
        <header>
          <h1>Statistiques</h1>
          <Select
            styles={customStyles}
            classNamePrefix="select"
            isSearchable={true}
            name="search"
            placeholder="Questionnaires"
            value={selectedSurvey ? { value: selectedSurvey.id, label: selectedSurvey.name } : null}
            onChange={e => {
              setSelectedSurvey(surveysList.find(k => k.id === e.value));
            }}
            options={surveysList?.map(e => ({
              value: e.id,
              label: e.name,
            }))}
          />
        </header>

        {chatsData ? (
          <>
            <h2>Équipement</h2>
            <ChartsContainer>
              {[selectedSurvey.questions[5], selectedSurvey.questions[6], selectedSurvey.questions[9]].map(el => (
                <div>
                  <span>{el.label}</span>
                  <ChartPie {...el} chatsData={chatsData} />
                </div>
              ))}
            </ChartsContainer>
            <h2>Qualité</h2>
            <ChartsContainer>
              {[selectedSurvey.questions[10], selectedSurvey.questions[11], selectedSurvey.questions[12], selectedSurvey.questions[13], selectedSurvey.questions[14]].map(el => (
                <div>
                  <span>{el.label}</span>
                  <ChartRadar {...el} chatsData={chatsData} />
                </div>
              ))}
            </ChartsContainer>
          </>
        ) : (
          <Loader full />
        )}
      </div>
    </>
  );
}

const customStyles = {
  control: provided => ({
    ...provided,
    width: 450,
    borderRadius: 12,
    backgroundColor: "transparent",
    border: "3px solid #777e90",
  }),
  option: provided => ({
    ...provided,
    color: "black",
  }),
  singleValue: provided => ({
    ...provided,
    color: "white",
    fontSize: 16,
    marginLeft: 15,
  }),
  input: provided => ({
    ...provided,
    color: "white",
    fontSize: 16,
    marginLeft: 15,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: 16,
    marginLeft: 15,
  }),
};
