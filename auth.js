
console.log("chamando API")

export default function autenticador(req, res, next) {
  const { tipoUsuario } = req.body;

  if (tipoUsuario && tipoUsuario === "ADM") {
    return next();
  }

  return res.status(401).json({ mensagem: "Funcao nao permitida para esse usuario" });
}