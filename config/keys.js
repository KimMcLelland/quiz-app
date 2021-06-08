import dotenv from "dotenv";
import dev from "./dev.js";
import prod from "./prod.js";

dotenv.config();

let module = undefined;

if (process.env.NODE_ENV === "production") {
  module = prod;
} else {
  module = dev;
}

export default module;
