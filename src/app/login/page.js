"use client";
import { loginUser } from "@/redux/features/user-slice";
import { CallButton, FormInput, Layout, LoginFrorm } from "../components";
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
    console.log(role);
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
        <LoginFrorm />
      </div>
    </Layout>
  );
};
export default Login;
