function discountPrices (prices, discount) {
  let discounted = [];
  let finalPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount);
    finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  console.log(i);                // ReferenceError: not defined
  console.log(discountedPrice);  // ReferenceError: not defined 
  console.log(finalPrice);       // 150 (function-scoped, no error)

  return discounted;
}

discountPrices([100, 200, 300], .5);
