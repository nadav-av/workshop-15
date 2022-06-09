const { calculateBalance } = require("./bank");

// run 'npm run bank' to test your implementation based on the following input:
const data = [
    { firstName: "Ziv", lastName: "Ventura", balance: "220" },
    { firstName: "Vlad", lastName: "Mystetskyi", balance: "54" },
    { firstName: "Yoni", lastName: "Levin", balance: "213" }
]

console.log(calculateBalance(data))