import { uploadImageOnCloudinary } from "./CloundinaryConnection";

export function generarNumeroAleatorio() {
  var numero = Math.floor(Math.random() * 90000) + 10000;
  return numero;
}

export async function uploadoImageOnCloudinary(
  longUrl: string,
  folder: string
) {
  try {
    const imageUrl = await uploadImageOnCloudinary(longUrl, folder);
    return imageUrl;
  } catch (error) {
    console.error("Error al subir la imagen a Cloudinary:", error);
    throw new Error("Error al subir la imagen a Cloudinary");
  }
}
