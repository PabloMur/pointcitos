//const cloudinary = require("cloudinary").v2;
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadImageOnCloudinary(base64Image: string) {
  try {
    // Decodificar la imagen base64
    const imageBuffer = Buffer.from(base64Image, "base64");

    // Subir la imagen a Cloudinary
    const result = await cloudinary.uploader.upload(base64Image, {
      folder: "pointcitos",
    });

    // Obtener la URL resultante de Cloudinary
    const imageUrl = result.secure_url;

    return imageUrl;
  } catch (error) {
    console.error("Error al subir la imagen a Cloudinary:", error);
    throw new Error("Error al subir la imagen a Cloudinary");
  }
}

export { uploadImageOnCloudinary, cloudinary };
