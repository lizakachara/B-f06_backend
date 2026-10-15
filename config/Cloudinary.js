import{v2 as Cloudinary} from 'Cloudinary'
import {HttpsProxyAgent} from "https-proxy-agent"
import 'dotenv/config'

Cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUDNAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})
export const proxyAgent=process.env.PROXY_URL ? new HttpsProxyAgent(process.env.PROXY_URL):undefined
export default Cloudinary