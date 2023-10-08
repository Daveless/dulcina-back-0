"use client";
import axios from "axios";
import { useState } from "react";
import "dotenv/config";

const { CLOUDINARY_NAME } = process.env;

const FileInput = ({image,setImage}) => {

  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "dulcina");
    setLoading(true);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dccvupp4x/image/upload`,
      {
        method: "POST",
        body: data,
      }
    ).then((r) => r.json())
    .catch(err=> console.log(err))
    setImage(res.secure_url);
    setLoading(false);
  };

  return (
    <div className="flex flex-col">
      <label className="text-[22px] text-[#696969]">Imagen</label>
      <input
        type="file"
        name="file"
        onChange={uploadImage}
        placeholder="Sube tu imagen aqui!"
      />
    </div>
  );
};

export default FileInput;
