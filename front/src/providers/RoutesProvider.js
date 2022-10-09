import React, { createContext } from "react";
import { BrowserRouter, Routes, Route, RouterProvider, useLocation, Navigate } from "react-router-dom";
import { useUserContext } from "@providers/AuthProvider";

export default function RoutesProvider({ children }) {
  return (
    <BrowserRouter>
      <ProtectedRoutes>{children}</ProtectedRoutes>
    </BrowserRouter>
  );
}

function ProtectedRoutes({ children }) {
  const { user } = useUserContext();
  const { pathname } = useLocation();
  if (pathname.includes("/admin") && !user?.id) {
    return <Navigate to="/login" replace />;
  }

  return (
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
  );
}

// List Routes
import SurveyPage from "@pages/index";
import AnswerPage from "@pages/old-answers";
import DashboardPage from "@pages/admin";
import QuestionsPage from "@pages/admin/questions";
import AnswersPage from "@pages/admin/answers";
import LoginPage from "@pages/login";
import Error404Page from "@pages/404";
import ThanksPage from "@pages/thanks";
import ForgotPasswordPage from "@pages/forgot-password";

export const routes = [
  {
    title: "Questionnaire BigScreen",
    index: true,
    auth: false,
    element: <SurveyPage />,
  },

  {
    title: "Réponse précédente :",
    path: "old-answers",
    auth: false,
    element: <AnswerPage />,
  },
  {
    title: "Se connecter",
    path: "login",
    auth: false,
    element: <LoginPage />,
  },
  {
    title: "Mot de passe oublié",
    path: "forgot-password",
    auth: false,
    element: <ForgotPasswordPage />,
  },
  {
    title: "Merci",
    path: "thanks",
    auth: false,
    element: <ThanksPage />,
  },
  {
    path: "admin",
    subPages: [
      {
        title: "Dashboard",
        index: true,
        auth: true,
        element: <DashboardPage />,
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
