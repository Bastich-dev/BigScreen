import React, { createContext } from "react";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { useUserContext } from "@providers/AuthProvider";
import UserContextInterface from "@customTypes /UserContextInterface";

export default function RoutesProvider({ children }: any) {
  const { user } = useUserContext() as UserContextInterface;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={children}>
          {routes
            .filter(e => !e.auth || (e.auth && user?.id)) // Filter Authenticated routes
            .map((route, key) => (
              // Render routes
              <Route {...route} key={key}>
                {route.subPages
                  ?.filter(e => !e.auth || (e.auth && user?.id)) // Filter Authenticated subPages
                  ?.map((subPage, index) => (
                    <Route {...subPage} key={key + "-" + index} />
                  ))}
              </Route>
            ))}
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// List Routes
import SurveyPage from "@pages/index";
import AnswerPage from "@pages/answer";
import DashboardPage from "@pages/admin";
import QuestionsPage from "@pages/admin/questions";
import AnswersPage from "@pages/admin/answers";
import LoginPage from "@pages/admin/login";
import Error404Page from "@pages/Error404";

const routes = [
  {
    title: "Questionnaire BigScreen",
    index: true,
    auth: false,
    element: <SurveyPage />,
  },

  {
    title: "Réponse précédente :",
    path: "answer:id",
    auth: false,
    element: <AnswerPage />,
  },
  {
    path: "admin",
    subPages: [
      {
        title: "Dashboard",
        index: true,
        auth: false,
        element: <DashboardPage />,
      },
      {
        title: "Se connecter",
        path: "login",
        auth: false,
        element: <LoginPage />,
      },
      {
        title: "Réponses - Admin",
        path: "answers",
        auth: true,
        element: <AnswersPage />,
      },
      {
        title: "Questions - Admin",
        path: "surveys",
        auth: true,
        element: <QuestionsPage />,
      },
    ],
  },
];
