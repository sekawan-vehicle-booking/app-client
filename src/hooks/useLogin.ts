import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string | null>();

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      setToken(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const authorizeUser = async () => {
      try {
        if (token) {
          const response = await fetch(
            "http://localhost:5000/api/v1/auth/authorize-jwt",
            {
              method: "GET",
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          const data = await response.json();
          console.log(data);
          alert(`Hi, ${data.data.name}/${data.data.role}!`);

          if (data.data.role === "Admin") {
            navigate("/admin/rents");
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    authorizeUser();
  }, [token]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
}
