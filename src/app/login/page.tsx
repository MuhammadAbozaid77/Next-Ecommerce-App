"use client";
import Wrapper from "@/components/ui/Wrapper";
import { useState } from "react";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}
export default function LoginPage() {
  const [mode, setMode] = useState(MODE.LOGIN);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const formTitle =
    mode === MODE.LOGIN
      ? "Log In"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset Password"
      : "Verify Tur Email";
  const buttonTitle =
    mode === MODE.LOGIN
      ? "LogIn"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset"
      : "Verify";

  return (
    <>
      <Wrapper classesName="flex justify-center items-center h-[calc(100vh-80px)]">
        <form action="" className="flex flex-col gap-8">
<h1 className="text-2xl font-semibold"> formTitle </h1>
        </form>
      </Wrapper>
    </>
  );
}
