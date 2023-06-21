function createChartType(type) {
  let divPai = document.getElementById("chartDiv"); // Referencia a div do gráfico
  let canvas = document.getElementById("myChart"); // Referencia o canvas dentro da div

  divPai.removeChild(canvas); // Remover a tag canvas dentro da div

  let newCanvas = document.createElement("canvas"); // Criando uma nova tag canvas
  newCanvas.id = "myChart"; // Definindo o id da tag canvas
  divPai.appendChild(newCanvas); // Coloca o canvas dentro da div pai

  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: type,
    data: {
      labels: [
        "África",
        "América Latina e Caribe",
        "Média Mundial",
        "Ásia",
        "Oceania",
        "América do Norte e Europa",
      ],
      datasets: [
        {
          label: "% de Fome",
          data: [57.9, 40.6, 29.3, 24.6, 13, 8],
          borderWidth: 1,
        },
        {
          label: "% de Fome Grave",
          data: [23.4, 14.2, 9.8, 10.5, 4.5, 1.5],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

createChartType("polarArea");
