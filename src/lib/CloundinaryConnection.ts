//const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: "fps-devs",
//   api_key: "586389221448689",
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

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
// export { uploadImageOnCloudinary };
