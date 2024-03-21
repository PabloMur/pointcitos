//const cloudinary = require("cloudinary").v2;
import { v2 as cloudinary } from "cloudinary";
// cloudinary.config({
//   cloud_name: "fps-devs",
//   api_key: "586389221448689",
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// async function uploadImageOnCloudinary(
//   base64Image: string,
//   folderName: string
// ) {
//   try {
//     const result = await cloudinary.uploader.upload(base64Image, {
//       folder: folderName,
//     });
//     return result.secure_url;
//   } catch (error) {
//     console.error("Error al subir la imagen a Cloudinary:", error);
//     throw new Error("Error al subir la imagen a Cloudinary");
//   }
// }
export { cloudinary };
