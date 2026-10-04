var maxProfit = function (prices) {
  let min = Infinity;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
  }

  for (let i = min; i < prices.length; i++) {
    if (prices[i + 1] + min - 1 > profit) {
      profit = prices[i + 1] + min - 1;
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
