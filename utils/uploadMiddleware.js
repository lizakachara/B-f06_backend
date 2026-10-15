import multer from "multer";
import Cloudinary from "../config/Cloudinary";
const storage=multer.memoryStorage()

const fileFilter=(req,file,cb)=>{
    if(file.mimetype.startsWith('image/')){
        cb(null,true)
    }else{
        cb(new Error('only image file are allowed'),false)
    }
}
const upload=multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{fileSize:5 * 1024 * 1024}//5 MB
})
export default Cloudinary