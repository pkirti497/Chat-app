import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB Connected Successfully");
  } catch (error) {
    console.log(" MongoDB connection error:", error.message);
  }
};
