import express from "express";
import autenticador from "./auth.js";
const app = express();
app.use(express.json());
let ultimoId = 1;

app.use((req, res, next) => {
  console.log("Chamando API");
  next();
});

let usuarios = [
  {
    id: ultimoId,
    nome: "admin",
    email: "admin@admin"
  },
  {
    id: ++ultimoId,
    nome: "postman",
    email: "post@man.com.br"
  },
  {
    id: ++ultimoId,
    nome: "ana",
    email: "ana@email.com"
  },
  {
    id: ++ultimoId,
    nome: "carlos",
    email: "carlos@email.com"
  },
  {
    id: ++ultimoId,
    nome: "maria",
    email: "maria@email.com"
  },
  {
    id: ++ultimoId,
    nome: "joao",
    email: "joao@email.com"
  },
  {
    id: ++ultimoId,
    nome: "lucas",
    email: "lucas@email.com"
  },
  {
    id: ++ultimoId,
    nome: "beatriz",
    email: "bia@email.com"
  },
  {
    id: ++ultimoId,
    nome: "fernando",
    email: "fernando@email.com"
  },
  {
    id: ++ultimoId,
    nome: "juliana",
    email: "juliana@email.com"
  },
  {
    id: ++ultimoId,
    nome: "rafael",
    email: "rafa@email.com"
  },
  {
    id: ++ultimoId,
    nome: "lais",
    email: "lais@email.com"
  }
];
app.get("/usuarios", (req, res) => {
  return res.json({ mensagem: "Usuários enviados", usuarios });
});


app.post("/usuarios", autenticador, (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: "passa os ngc certo" });
  }

  const novoUsuario = { id: ++ultimoId, nome, email };
  usuarios.push(novoUsuario);

  return res.status(201).json({ mensagem: "Rota permitida", usuario: novoUsuario });
});

app.listen(3000)