/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Common/Button";
import CommonInput from "../components/ui/Common/CommonInput";
import Error from "../components/ui/Error";
import Logo from "../components/ui/Logo";
import {
  useGetProfileQuery,
  useLoginMutation,
} from "../redux/Features/Auth/authSlice";
import { IErrorResponse, ILoginResponse } from "../types/Common";

export const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [login, { isSuccess, isError, error, data }] = useLoginMutation();
  const fullToken = localStorage.getItem("accessToken");
  const { data: profile } = useGetProfileQuery(fullToken as string);
  console.log(profile);

  const loginResponse: ILoginResponse = data;
  const errorResponse = error as IErrorResponse;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({
      data: {
        email,
        password,
      },
    });
  };
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("accessToken", loginResponse.data.accessToken);
      navigate("/");
    }
  }, [loginResponse, isSuccess, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md">
        {isError ? <Error message={errorResponse?.data?.message} /> : null}
        <div className="mb-6 flex flex-col items-center">
          <Logo />
          <h2 className="mt-4 text-3xl text-center font-bold">Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <CommonInput
            label="Email Address"
            placeholder="Enter your email address"
            type="email"
            key={1}
            value={email}
            handleOnChange={setEmail}
          />
          <CommonInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            key={2}
            value={password}
            handleOnChange={setPassword}
          />

          <div className="w-full bg-blue-700 hover:bg-blue-500 rounded-md flex flex-col items-center mb-12">
            <Button label="Sign In" />
          </div>
        </form>
        <Link to="/register" className="text-sm flex gap-2 justify-center mb-6">
          Don't have an account?{" "}
          <span className="text-blue-500 hover:text-blue-800"> Register</span>
        </Link>
        <div className="flex justify-between">
          <a href="/" className="text-sm text-blue-500 hover:text-blue-800">
            Back to home
          </a>
          <a href="#" className="text-sm text-blue-500 hover:text-blue-800">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};
