const jogador = document.querySelector(".jogador");

let selecao;
let time = "X";

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function inicio() {
  selecao = [];

  jogador.innerHTML = `Agora é tua vez: ${time}`;

  document.querySelectorAll(".jogoDaVelha .btn").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

inicio();

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = time;
  e.target.removeEventListener("click", newMove);
  selecao[index] = time;

  setTimeout(() => {
    check();
  }, [100]);

  time = time === "X" ? "O" : "X";
  jogador.innerHTML = `Agora é você: ${time}`;
}

function check() {
  let timeMov = time === "X" ? "O" : "X";

  const items = selecao
    .map((item, i) => [item, i])
    .filter((item) => item[0] === timeMov)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("e o vencedor é: '" + timeMov);
      inicio();
      return;
    }
  }

  if (selecao.filter((item) => item).length === 9) {
    alert("azedou!!!! bóra mais uma vez?");
    inicio();
    return;
  }
}
