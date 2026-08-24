
const LAT = -18.563542184332807;
const LNG = -46.53639334659124;

const map = L.map('map').setView([LAT, LNG], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marcador = L.marker([LAT, LNG]).addTo(map);

marcador.bindPopup(`
  <strong>Saborosa Pizzas</strong>
  <br>
  Rua Antônio Amâncio Filho, 619
  <br>
  Sorriso - Patos de Minas
`).openPopup();

map.whenReady(() => {
  document.getElementById('mapa-loading').classList.add('oculto');
});