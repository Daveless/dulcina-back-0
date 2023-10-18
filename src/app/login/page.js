import {  Layout, LoginFrorm } from "../components";

const Login = () => {
  return (
    <Layout pageDescription={"Tienda online"} title={"Dulcina"}>
      <div className="min-h-[605px] flex justify-center items-center">
        <LoginFrorm/>
      </div>
    </Layout>
  );
};
export default Login;
