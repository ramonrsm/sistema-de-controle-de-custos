import express from "express";

const app = express();

const porta = 4000;

app.listen(porta, () => console.log(`Servidor rodando em http://localhost:${porta}`));
