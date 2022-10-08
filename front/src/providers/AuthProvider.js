import React, { createContext, useContext, useState, useEffect } from "react";
import api from "@utils/api";
import Loader from "@components/Loader";

const UserContext = createContext(null);
export function useUserContext() {
  return useContext(UserContext);
}

export default function AuthProvider({ children }) {
  // - States
  const [user, setUser] = useState();

  // - Lifecyle
  useEffect(() => {
    api
      .getUser()
      .then(() => {
        //  ---------------------------------------------------------------------------------------------------------------------------------------- TODO
        // setUser()
        setUser({ name: "John Doe", id: "eeeeee" }); // Exemple
        // setUser(null);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  // - Render
  if (user === undefined) {
    return (
      <div style={{ width: "100%", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Loader />
      </div>
    );
  }
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
