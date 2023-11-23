import {
  generateMetadata,
  generateImage,
} from "./controllers/openaiControllers.js";

import express from "express";
import cors from "cors";

const app = express();

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

//middelware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//routes

app.post("/openai/meta", generateMetadata);
app.post("/openai/image", generateImage);
