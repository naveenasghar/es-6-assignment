//////////template string/////
function generateGreeting(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
  }
  
  const personName = "Alice";
  const personAge = 30;
  
  const greetingMessage = generateGreeting(personName, personAge);
  console.log(greetingMessage);
/////////////
function calculateSumAndAverage(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
  
    return `Sum: ${sum}, Average: ${average.toFixed(2)}`;
  }
  
  const numberArray = [10, 20, 30, 40, 50];
  const resultString = calculateSumAndAverage(numberArray);
  
  console.log(resultString);
  