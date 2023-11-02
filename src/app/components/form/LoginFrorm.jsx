"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { FormInput } from ".";
import { loginUser } from "@/redux/features/user-slice";
import { useRouter } from "next/navigation";

const LoginFrorm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const role = useSelector((state) => state.userReducer.role);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const redirect = useCallback(async () => {
    try {
      // you could call also call `router.replace`
      if (role !== "admin") console.log("no role specified");

      // handle any response errors here
    } catch (error) {
      console.log(error);
    }
  }, [role]);

  useEffect(() => {
    // you could also define the function here without `useCallback`,
    // this is only done when the function only needs to be called
    // inside the effect.
    redirect();
  }, []);

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
