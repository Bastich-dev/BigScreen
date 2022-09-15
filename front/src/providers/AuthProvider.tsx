import React, { createContext, useContext, useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import api from "@utils/api";
import UserPropsType from "@customTypes /UserPropsType";
import UserContextInterface from "@customTypes /UserContextInterface";

const UserContext = createContext<UserContextInterface | null>(null);
export function useUserContext() {
  return useContext(UserContext);
}

export default function AuthProvider({ children }: any) {
  // - States
  const [user, setUser] = useState<UserPropsType | undefined | null>();

  // - Lifecyle
  useEffect(() => {
    api
      .getUser()
      .then(() => {
        //  ---------------------------------------------------------------------------------------------------------------------------------------- TODO
        // setUser()
        setUser({ name: "John Doe", id: "eeeeee" }); // Exemple
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  // - Render
  if (user === undefined) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
