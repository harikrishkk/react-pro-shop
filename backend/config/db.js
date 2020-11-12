import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected:: ${conn.connection.host}`.bgGreen.black);
  } catch (error) {
    console.error(`Error:: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};

export default connectDB;
