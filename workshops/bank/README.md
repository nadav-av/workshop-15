# Setup and installation
```
nvm use  
npm i  
read the instructions below
```

# The task
You just got a call from your bank!  
They need your help in analysing their client’s data.  
The bank will send you a list of clients, each with the following information:  
      1.The Client’s name  
      2.The Client’s current account balance  

For example:  
```javascript
[
      { firstName: "Ziv", lastName: "Ventura", balance: "220" },
      { firstName: "Vlad", lastName: "Mystetskyi", balance: "54" },
      { firstName: "Yoni", lastName: "Levin", balance: "213" }
]
```

**The output should be the average balance.**  
In the example above, the balance will be 162.33, because: (220 + 54 + 213) / 3 = "162.33"  
**What you need to do: open bank.js and implement the function `calculateBalance`**
In order to run your code, simply run `npm run bank`.  
This will execute the file `index.js` (that imports the function you will implement).  