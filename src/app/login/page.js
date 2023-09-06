import { Button, CallButton, FormInput, Layout } from "../components";

const Login = () => {
  return (
    <Layout pageDescription={"Tienda online"} title={"Dulcina"}>
      <div className="min-h-[605px] flex justify-center items-center">
        <form className="w-[50%]">
          <FormInput label={"Email"} type={"text"} placeholder={"ejemplo@ejemplo.com"}/>
          <FormInput label={"Password"} type={"password"} />
          <CallButton content={"login"}/>
        </form>
      </div>
      
    </Layout>
  );
};
export default Login;
