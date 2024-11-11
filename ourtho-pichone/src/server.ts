import app from "./app";
import config from "./../src/app/config";
import mongoose from "mongoose"; 

const port = process.env.PORT || 3000;

async function main() {
  try {
    // Connecting to MongoDB using Mongoose
    await mongoose.connect(config.database_url as string);

    console.log("Connected to MongoDB!");

    // Start the Express app
    app.listen(config, () => {
      console.log(`Server is running on port ${5000}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

main();
