let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
}

for (x in statistics) {
  if (x[0] == 'r' || statistics[x] % 2 == 1) {
    console.log(statistics[x])
  }
}

/*
 * Expected output:
 * 21
 * 45
 * 5
 * 2
 */
