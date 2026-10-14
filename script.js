// EDIT MENU HERE: change names, prices or add rows. Prices are in rupees.
const MENU = [
  { title: "Ahuna handi mutton", items: [
    ["1 kg (20 pcs)", 1575], ["500 g (10 pcs)", 893], ["250 g (5 pcs)", 473], ["Full plate (4 pcs)", 399] ] },
  { title: "Ahuna handi chicken", items: [
    ["1 kg (20 pcs)", 840], ["500 g (10 pcs)", 525], ["250 g (5 pcs)", 315], ["Full plate (4 pcs)", 263] ] },
  { title: "Ahuna handi drumstick", items: [ ["1 pc", 126] ] },
  { title: "Champaran special thali", items: [
    ["Mutton (2 pcs) + rice + 2 roti", 368], ["Chicken (2 pcs) + rice + 2 roti", 263] ] },
  { title: "Roti & paratha", items: [
    ["Tawa plain roti", 11], ["Tawa ghee roti", 16], ["Ghee paratha", 63], ["Ghee litti (4 pcs)", 147] ] },
  { title: "Rice & salad", items: [
    ["Rice, full plate", 105], ["Rice, half plate", 63], ["Jeera rice, full plate", 147], ["Salad (1 plate)", 105] ] },
  { title: "Drinks", items: [
    ["Packaged drinking water", 20], ["Cold drink 250 ml", 25], ["Cold drink 500 ml", 40], ["Cold drink 750 ml", 50] ] }
];

const fmt = n => "₹" + n.toLocaleString("en-IN");
const root = document.getElementById("menu-root");
root.innerHTML = MENU.map(g => `
  <section class="menu-group">
    <h3>${g.title}</h3>
    <ul>${g.items.map(([name, price]) =>
      `<li><span>${name}</span><span class="dots" aria-hidden="true"></span><strong>${fmt(price)}</strong></li>`).join("")}
    </ul>
  </section>`).join("");
