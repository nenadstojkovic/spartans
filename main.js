const doSomething = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n + 17;
      cache[n] = result;
      return result;
    }
  }
}

const newFunction = doSomething();
console.log(newFunction(9));
console.log(newFunction(9));