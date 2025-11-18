"use client";

import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";

export default function GoogleSignIn() {
  const router = useRouter();

  const handleLoginSuccess = (res) => {
    const decoded = jwt_decode(res.credential);

    localStorage.setItem("user", JSON.stringify(decoded));

    if (decoded.email === "admin@gmail.com") {
      router.push("/admin");
    } else {
      router.push("/user");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={() => console.log("Login failed")}
    />
  );
}
