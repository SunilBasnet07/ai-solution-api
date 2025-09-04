import { v2 as cloudinary } from 'cloudinary';

const uploadCloudinaryFile = async (file) => {
  try {
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "Home" }, // save uploads inside "Home" folder
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      stream.end(file.buffer); // send buffer to Cloudinary
    });

    return uploadResult;
  } catch (err) {
    console.error("Cloudinary upload failed:", err);
    throw err;
  }
};
export default uploadCloudinaryFile