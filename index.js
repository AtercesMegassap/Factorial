const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//Recursive function that will multiply the number by its preceding number until it multiplies by 1.
const calculateFactorial = (number) =>{
  if(number === 0 || number === 1) {
    return 1;
  }
  else {
    return number * calculateFactorial(number - 1);
  }
}

app.get('/Factorial', (req, res) => {
  const {number} = req.body;

  if(!typeof number === "number") return res.json(`Please input a natural number.`);
  if(number < 0 ) return res.json(`Please input a natural number.`);

  const factorial = calculateFactorial(number);

  return res.json(`The factorial of the number ${number} is ${factorial}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});