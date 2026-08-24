const statusAgora = document.getElementById("status-agora");
const avisoFechado = document.getElementById("aviso-fechado");

const agora = new Date();
const dia = agora.getDay(); 
const hora = agora.getHours();
const minuto = agora.getMinutes();

const horarioAtual = hora + minuto / 60;

let aberto = false;
let retorno = "";

const dias = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado"
];


if (dia >= 2 && dia <= 6) {
  aberto = horarioAtual >= 18 && horarioAtual < 23;
}

else if (dia === 0) {
  aberto = horarioAtual >= 18 && horarioAtual < 22;
}


if (aberto) {
  statusAgora.innerHTML = `
    <span class="status-badge aberto">
      <span class="status-dot"></span>
      Aberto agora
    </span>
  `;

  avisoFechado.classList.add("oculto");
} else {
  statusAgora.innerHTML = `
    <span class="status-badge fechado">
      <span class="status-dot"></span>
      Fechado no momento
    </span>
  `;

  if (
    (dia >= 2 && dia <= 6 && horarioAtual < 18) ||
    (dia === 0 && horarioAtual < 18)
  ) {
    retorno = "Voltamos hoje às 18h.";
  } else {
    let proxDia = dia;

    do {
      proxDia = (proxDia + 1) % 7;
    } while (proxDia === 1); 

    retorno = `Voltamos na próxima ${dias[proxDia]} às 18h.`;
  }

  avisoFechado.innerHTML = `
    🚫 O estabelecimento está fechado no momento.<br>
    ${retorno}
  `;

  avisoFechado.classList.remove("oculto");
}