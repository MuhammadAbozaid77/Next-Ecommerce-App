"use client";
import Button from "@/components/ui/Button";
import SmallSpinner from "@/components/ui/SmallSpinner";
import Wrapper from "@/components/ui/Wrapper";
import { useState } from "react";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}
export default function LoginPage() {
  const [mode, setMode] = useState<boolean | string>(MODE.LOGIN);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailCode, setEmailCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const formTitle =
    mode === MODE.LOGIN
      ? "Log In"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset Password"
      : "Verify Your Email";
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
        <form
          action=""
          className="flex flex-col gap-4 px-8 py-[50px] rounded-md md:w-[400px] w-[100%] border shadow-md"
        >
          <h1 className="text-2xl font-semibold"> {formTitle} </h1>

          {mode === MODE.REGISTER ? (
            <>
              <div className="flex flex-col gap-1">
                <label htmlFor="text-sm text-gray-700"> UserName</label>
                <input
                  disabled={isLoading}
                  className="ring-1 ring-gray-300 rounded-md p-2 disabled:bg-gray-100"
                  type="text"
                  name="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </>
          ) : null}

          {mode !== MODE.EMAIL_VERIFICATION ? (
            <div className="flex flex-col gap-1">
              <label htmlFor="text-sm text-gray-700"> UserEmail</label>
              <input
                className="ring-1 ring-gray-300 rounded-md p-2 disabled:bg-gray-100"
                type="email"
                name="userEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <label htmlFor="text-sm text-gray-700"> EmailCode </label>
              <input
                disabled={isLoading}
                className="ring-1 ring-gray-300 rounded-md p-2 disabled:bg-gray-100"
                type="text"
                name="emailCode"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
              />
            </div>
          )}

          {mode === MODE.REGISTER || mode === MODE.LOGIN ? (
            <div className="flex flex-col gap-1">
              <label htmlFor="text-sm text-gray-700"> password </label>
              <input
                disabled={isLoading}
                className="ring-1 ring-gray-300 rounded-md p-2 disabled:bg-gray-100"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {mode === MODE.LOGIN && (
                <div
                  className=" text-gray-500 underline cursor-pointer"
                  onClick={() => setMode(MODE.RESET_PASSWORD)}
                >
                  Forget Password?
                </div>
              )}
            </div>
          ) : null}

          <Button
            disabled={isLoading}
            type="submit"
            classesName="bg-red-500 hover:bg-red-400 duration-150 cursor-pointer disabled:bg-gray-100 text-white cursor-not-allowed"
          >
            {isLoading ? <SmallSpinner /> : buttonTitle}
          </Button>
          {mode === MODE.REGISTER ? (
            <div
              className=" text-gray-500 underline cursor-pointer"
              onClick={() => setMode(MODE.LOGIN)}
            >
              Login Now
            </div>
          ) : mode === MODE.LOGIN ? (
            <div
              className=" text-gray-500 underline cursor-pointer"
              onClick={() => setMode(MODE.REGISTER)}
            >
              Register Now
            </div>
          ) : mode === MODE.RESET_PASSWORD ? (
            <div
              className=" text-gray-500 underline cursor-pointer"
              onClick={() => setMode(MODE.LOGIN)}
            >
              Back To Login.
            </div>
          ) : (
            ""
          )}
          {error && <span className="text-red-500"> {error} </span>}
          {message && <span className="text-green-500"> {message} </span>}
        </form>
      </Wrapper>
    </>
  );
}
