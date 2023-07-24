import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import cors from "cors";
import { getAnimalForms } from "./src/animals.js";

const app = express();

app.use(cors());


app.use(express.json());

app.get("/animalForms", getAnimalForms);

export const api = onRequest({ maxInstances: 10 }, app);
