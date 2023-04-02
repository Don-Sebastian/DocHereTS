import mongoose from 'mongoose';
import configKeys from '../../../config';
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        await mongoose.connect(configKeys.mongoDbUrl)
        console.log(`Database connected Successfully`.bg_green);
    } catch (error) {
        console.error(`Database failed to connect! `,error);
        process.exit(1);
    }
}

export default connectDB;