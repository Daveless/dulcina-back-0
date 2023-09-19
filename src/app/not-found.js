import Link from "next/link";
import { CallButton, Layout } from "./components";

const NotFound = () => {
  return (
    <Layout
      padding={false}
      pageDescription={"No se encontro pagina"}
      title={"Dulcina"}
    >
      <div className="flex items-center justify-center md:h-[690px] h-[550px]">
        <div className="flex flex-col items-center justify-between  h-[250px]">
          <div className="md:w-[600px] w-[290px] flex flex-col text-center">
            <h2 className="md:text-8xl text-4xl font-black">ERROR 404 </h2>
            <p>
              Se produjo un error, no encontramos la pagina que estas buscando.
            </p>
          </div>
          <div className="flex md:flex-row flex-col w-[200px] md:w-[425px] md:h-auto h-[130px] items-center justify-between ">
            <Link href="/">
              <button className="w-[180px] h-[55px] border-solid border-2 rounded-xl font-semibold border-[#222222]">
                Pagina de incio
              </button>
            </Link>
            <Link href="/products">
              <div className="w-[180px]">
                <CallButton content={"Ver productos"} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
