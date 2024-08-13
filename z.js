function arrayOfProducts(arr) {
  let products = [];

  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    let rest =1;
    for (let z = i + 1; z < arr.length; z++) {
      rest*= arr[z];
    }
    products.push(num*rest);
    num *= arr[i];
  }

  return products;
}

arrayOfProducts([5, 1, 4, 2]);
