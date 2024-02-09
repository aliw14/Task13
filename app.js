const stocks = [
  { symbol: "APPLE", price: 100, sector: "Sec1" },
  { symbol: "GOOGLE", price: 150, sector: "Sec2" },
  { symbol: "Arc", price: 190, sector: "Sec3" },
];

let allStock = stocks.map((stock) => ({ ...stock }));

function getRandomPrice() {
  let randomStock = Math.floor(Math.random() * allStock.length);
  return allStock[randomStock].price;
}

const updatePrice = () => {
  setInterval(() => {
    let newPrice;
    allStock.forEach((stock) => {
      stock.price += Math.random() * 0.01;
      newPrice = getRandomPrice();
    });

    console.log(newPrice);
  }, 2000);
};

updatePrice();

const filterSector = () => {
  let filteredSectors = stocks.filter((stock) => stock.price > 120);
  console.log(filteredSectors);
};
filterSector();

const checkPrice = () => {
  let thresHold = 120;
  let diffPrice = getRandomPrice();
  setTimeout(() => {
    if (diffPrice > thresHold) {
      console.log("Above");
    } else {
      console.log("Below");
    }
  }, 1000);
};
checkPrice();
