import Chart from "chart.js";
const chartType = document.querySelector("#chart-type");
const context = document.querySelector("#app-chart").getContext("2d");

let chart = null;

const colors = {
  safari: "#25AEEE",
  chrome: "#FECD52",
  firefox: "#FD344B",
  edge: "#57D269",
};

const render = (type) => {
  if (chart) {
    chart.destroy();
  }
  chart = new Chart(context, {
    type: type,
    data: {
      labels: ["Safari", "Chrome", "Firefox", "Edge"],
      datasets: [
        {
          label: "Browser stats",
          data: [19.24, 63.54, 3.79, 3.41],
          backgroundColor: [
            colors.safari,
            colors.chrome,
            colors.firefox,
            colors.edge,
          ],
          borderWidth: 3,
        },
      ],
    },
  });
};

chartType.addEventListener("change", (event) => {
  render(event.currentTarget.value);
});

render(chartType.value);
