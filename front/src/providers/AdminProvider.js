import React, { createContext, useContext, useState, useEffect } from "react";
import surveysSchema from "@utils/mock_surveys.json";
import Loader from "@components/common/Loader";

const AdminContext = createContext(null);
export function useAdminContext() {
  return useContext(AdminContext);
}

export default function AdminProvider({ children }) {
  // - States
  const [surveysList, setSurveysList] = useState();
  const [selectedSurvey, setSelectedSurvey] = useState();

  useEffect(() => {
    setTimeout(() => {
      setSurveysList(surveysSchema);
      setSelectedSurvey(surveysSchema[0]);
    }, 1000);
  }, []);

  return <AdminContext.Provider value={{ surveysList, selectedSurvey, setSelectedSurvey }}>{surveysList ? children : <Loader full />}</AdminContext.Provider>;
}
