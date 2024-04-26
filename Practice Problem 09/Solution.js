let prices = [250,645,300,900,50];
let offer=0, finalPrices=[];
for(let i=0; i<prices.length; i++) {
    offer = (prices[i] * 10) / 100;
    finalPrices[i] = prices[i] - offer;
}

for(let i=0; i<finalPrices.length; i++) {
    console.log("Final prices after applying offer are:",finalPrices[i]);
}