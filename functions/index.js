import { onRequest } from "firebase-functions/v2/https"; //used to create an http request handler for cloud functions
import express from "express";
import cors from "cors";
import { addAnimalForms, getAnimalForms } from "./src/animals.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/animalForms", getAnimalForms);
app.post("/animalForms", addAnimalForms);
// app.delete("/animalForms", deleteAnimal);

export const api = onRequest({ maxInstances: 10 }, app);
