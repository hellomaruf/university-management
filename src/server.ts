import { Server } from "http";
import app from "./app";
import config from "./app/config";
const mongoose = require("mongoose");

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.MONGODB_URL);

    if (mongoose.connection.readyState === 1) {
      console.log("✅ Database connected successfully");
    }

    server = app.listen(config.PORT, () => {
      console.log(`Example app listening port ${config.PORT}`);
    });
  } catch (error) {
    console.log("❌ Database connection failed:", error);
  }
}

main();
