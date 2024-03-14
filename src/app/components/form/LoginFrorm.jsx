"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { FormContainer, FormInput } from ".";
import { loginUser } from "@/redux/features/user-slice";
import { useRouter } from "next/navigation";

const LoginFrorm = () => {
  const dispatch = useDispatch();
  const [logginState, setLogginState] = useState("login");

  const role = useSelector((state) => state.userReducer.role);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const redir = async () => {
    const dis = await dispatch(loginUser(input));
    if (dis.payload?.user?.role == "admin") {
      setLogginState("dashboard");
    } else if (dis.payload?.user?.role == undefined) {
      setLogginState("unlogged");
    }
  };
  const onChange = (e, inputName) => {
    setInput({
      ...input,
      [inputName]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setInput({
      email: "",
      password: "",
    });
    redir();
  };

  switch (logginState) {
    case "login":
      return (
        <form onSubmit={onSubmit} className="w-[50%]">
          <FormInput
            input={input}
            onChange={(e) => onChange(e, "email")}
            inputName="email"
            label={"Email"}
            type={"text"}
            placeholder={"ejemplo@ejemplo.com"}
          />
          <FormInput
            input={input}
            onChange={(e) => onChange(e, "password")}
            inputName="password"
            label={"Password"}
            type={"password"}
          />
          <button
            type="submit"
            className="bg-[#E60023] font-bold text-[#ffffff] w-[100%] h-[55px] rounded-xl"
          >
            Login
          </button>
        </form>
      );

    case "dashboard":
      return <FormContainer />;
    case "unlogged":
      return (
        <div>
          <p>Incorrect email or password</p>
          <button onClick={() => setLogginState("login")}>Ok</button>
        </div>
      );
  }
};

export default LoginFrorm;
