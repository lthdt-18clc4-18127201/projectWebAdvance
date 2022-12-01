import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL ||
        "mongodb+srv://phamtansu2000:maxtiny746539@cluster0.aoj0kvh.mongodb.net/AdvanceWebProject?retryWrites=true&w=majority",
      {}
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Connect to database failed");
  }
}

export default { connect };
