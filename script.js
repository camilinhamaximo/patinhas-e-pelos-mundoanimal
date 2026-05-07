const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    msg.textContent = "Preencha todos os campos!";
    msg.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    msg.textContent = "Email inválido!";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Mensagem enviada com sucesso!";
  msg.style.color = "green";

  form.reset();
});