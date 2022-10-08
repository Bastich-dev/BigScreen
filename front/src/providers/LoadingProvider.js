import LoadingScreen from "@components/LoadingScreen";
import React, { createContext, useContext, useState, useEffect } from "react";

const LoadingContext = createContext(null);
export function useLoadingContext() {
  return useContext(LoadingContext);
}

export default function LoadingProvider({ children }) {
  // - States
  const [loading, setLoading] = useState();

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <LoadingScreen />}
      {children}
    </LoadingContext.Provider>
  );
}
