# Factorial API

This is a simple Node.js API built with Express that calculates the factorial of a natural number. It listens for requests and calculates the factorial based on the provided number.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AtercesMegassap/Factorial.git
```
Navigate to the project directory:
```bash
cd Factorial
```
Install dependencies:
```bash
npm install
```

Usage
Start the server:
```bash
node index.js
```
The server will start running at http://localhost:3000.

Use an API client (e.g., Postman) to send a GET request to http://localhost:3000/Factorial with the following parameter in the request body, in JSON format:
```
{
  "number": 5
}
```

The API will respond with the factorial result if the provided number is valid. If the provided number is not a valid natural number, the API will return an error message.

Example Request:
```
GET http://localhost:3000/Factorial
Request Body:
{
  "number": 5
}
```
Example Response:
```The factorial of the number 5 is 120```

Please note that you need to use an API client (e.g., Postman) to make requests to the API, and the provided number should be a valid natural number.

Factorial Calculation
The API uses a recursive function to calculate the factorial of the provided number. The function calculates the factorial by multiplying the number by its predecessors until it multiplies by 1.