import { v2 as cloudinary } from 'cloudinary';


const connectCloudinary = () => {
    return cloudinary.config({
        cloud_name: 'dfbibfwp2',
        api_key: '721164913791394',
        api_secret: 'VjacX7xBdbjTVOR7sb5KChXwEK0'
    })
}
export default connectCloudinary;

