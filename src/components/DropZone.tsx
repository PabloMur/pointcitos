"use client";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { pointImageBase64Atom } from "@/atoms";
import { useSetRecoilState } from "recoil";

const DropImage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const imageBase64Setter = useSetRecoilState(pointImageBase64Atom);

  const handleDrop = (acceptedFiles: any) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const previewURL = reader.result as string;
      setImagePreview(previewURL);
    };

    reader.readAsDataURL(file);

    // Convertir la imagen a base64
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        const base64String = reader.result.split(",")[1];
        if (base64String) {
          console.log(base64String);
          imageBase64Setter(base64String);
        }
      }
    };
  };

  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps }) => (
        <section className="w-full">
          <div
            {...getRootProps()}
            style={{ height: 170, border: "1px solid black" }}
            className="rounded-lg w-full p-4 mb-3 flex justify-center items-center"
          >
            <input {...getInputProps()} />
            {!imagePreview && <p>Agrega una Imagen del Point!</p>}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            )}
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export { DropImage };
