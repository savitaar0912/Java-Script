function* simpleGenerator() {
    yield 1;       // Pauses and returns the value 1
    yield 2;       // Pauses and returns the value 2
    yield 3;       // Pauses and returns the value 3
  }
  
  const gen = simpleGenerator(); // Initialize the generator
  
  console.log(gen.next().value); // Output: 1
  console.log(gen.next().value); // Output: 2
  console.log(gen.next().value); // Output: 3
  console.log(gen.next().value); // Output: undefined (since the generator is done)
  