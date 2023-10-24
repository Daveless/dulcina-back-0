"use client";
import { loginUser } from "@/redux/features/user-slice";
import { CallButton, FormInput, Layout } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const Login = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.userReducer.role);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (role == "admin") {
      redirect("/admin/form");
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
    /*  setInput({
      email: "",
      password: "",
    }); */
    redir();
  };

  return (
    <Layout pageDescription={"Tienda online"} title={"Dulcina"}>
      <div className="min-h-[605px] flex justify-center items-center">
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
      </div>
    </Layout>
  );
};
export default Login;
