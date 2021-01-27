function discountPrices (prices, discount) {
  const discounted = [];
  const finalPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    const discountedPrice = prices[i] * (1 - discount);
    finalPrice = Math.round(discountedPrice * 100) / 100;  // TypeError: Assignment to const variable
    discounted.push(finalPrice);
  }

  console.log(i);                // ReferenceError: not defined
  console.log(discountedPrice);  // ReferenceError: not defined 
  console.log(finalPrice);       // 150 (function-scoped, no error)

  return discounted;
}

discountPrices([100, 200, 300], .5);
