import axios from "axios";

// Config
// --------------------------------------------------------------------------------------------------------------
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000/api" : process.env.NEXT_PUBLIC_API_URL + "/api";

const withAuth = () => {
  return {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    // "Content-Type": "application/json",
    // Accept: "application/json",
  };
};

// Auth Actions
// --------------------------------------------------------------------------------------------------------------

export const login = async data => {
  const response = await axios.post("/login", data);
  const token = response?.data?.access_token;
  if (token) {
    localStorage.setItem("token", token);
  }
  return response?.data?.user || false;
};

export const logout = async () => {
  const response = await axios.post("/logout", {}, withAuth());
  if (response.data) localStorage.removeItem("token");
  return response.data || false;
};

export const getUser = async () => {
  const response = await axios.get("/user", withAuth());
  return response.data || false;
};

// CRUD
// --------------------------------------------------------------------------------------------------------------
// export const listCurrency = async () => {
//   const response = await axios.get("/currencies", withAuth());
//   return response?.data?.data || [];
// };
