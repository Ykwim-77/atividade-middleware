import express from "express";
import roteador from "./middleware-global";
const app = express();
app.use(express.json());

app.use('/usuarios', roteador)
