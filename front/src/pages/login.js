import LoginForm from "@components/public/LoginForm";
import { useUserContext } from "@providers/AuthProvider";
import { getUser } from "@utils/api";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin");
    } else setUser(false);
  }, []);

  return (
    <>
      <LoginForm />
    </>
  );
}
