import React from "react";
import FileInput from "./FileInput";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";

const FormContainer = () => {
  return (
    <>
      <div className="grid grid-cols-2 pl-[110px] pr-[110px] gap-10">
        <div>
          <FormInput type={"text"} placeholder={"Arreglo 1"} label={"Nombre"} />
          <FormInput type={"text"} placeholder={"$80"} label={"Precio"} />
          <FileInput />
        </div>
        <div>
          <SelectInput firstOption={"Seleccionar"} label={"Festividad"} />
          <SelectInput firstOption={"Seleccionar"} label={"Categoría"} />
          <FormInput className={"h-[150px] "} size={"paragraph"} type={"text"} placeholder={"Lorem ipsum dolor sit amet"} label={"Descripción"} />
        </div>
      </div>
    </>
  );
};

export default FormContainer;
