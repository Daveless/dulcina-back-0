"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FormInput } from ".";
import { loginUser } from "@/redux/features/user-slice";

const LoginFrorm = () => {
  const dispatch = useDispatch();
  const rout = useRouter();
  const role = useSelector((state) => state.userReducer.role);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (role == "admin") {
      rout.push("admin/form");
    }
  }, [role]);

  const redir = async () => {
    const dis = await dispatch(loginUser(input));
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
};

export default LoginFrorm;
