function* gen() {
  
}

function generatorToAsync(generatorFn) {
  return function () {
    return new Promise((resolve, reject) => {})
  }
}

const asnycFn = generatorToAsync(gen)

console.log(asnycFn())