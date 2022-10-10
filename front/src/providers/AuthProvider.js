import React, { createContext, useContext, useState, useEffect } from "react";
import api, { getUser } from "@utils/api";
import Loader from "@components/common/Loader";

const UserContext = createContext(null);
export function useUserContext() {
  return useContext(UserContext);
}

export default function AuthProvider({ children }) {
  // - States
  const [user, setUser] = useState();

  // - Lifecyle
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser()
        .then(e => setUser(e))
        .catch(() => {
          setUser(false);
        });
    } else setUser(false);
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
