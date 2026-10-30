// Part 1:  Array Higher-Order Methods //

// 1. forEach() — Print 10 numbers
{
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numbers.forEach(num => {
    console.log(num); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
});
}

// 2. map() — Multiply every number by 5
{
  let numbers = [1, 2, 3, 4, 5];
  let result = numbers.map(num => num * 5);
  console.log(result); // [5, 10, 15, 20, 25]
}

// 3. filter() — Numbers greater than 20
{
let numbers = [10, 25, 15, 30, 40, 5];
let result = numbers.filter(num => num > 20);
console.log(result); // [25, 30, 40]
}

// 4.  filter() — Employees earning ₹300,000 or less
{
  let employees = [
    { name: "Pradeep", salary: 400000 },
    { name: "Ragul", salary: 250000 },
    { name: "Kumar", salary: 350000 },
    { name: "David", salary: 150000 }
  ];
  let result = employees.filter(emp => emp.salary <= 300000);
  console.log(result); // [{ name: "Ragul", salary: 250000 }, { name: "David", salary: 150000 }]
}

// 5. find() — First employee earning more than ₹200,000
{
  let employees = [
    { name: "Pradeep", salary: 400000 },
    { name: "Ragul", salary: 250000 },
    { name: "Kumar", salary: 350000 },
    { name: "David", salary: 150000 }
  ];
  let result = employees.find(emp => emp.salary > 200000);
  console.log(result); // { name: "Pradeep", salary: 400000 }
}

// 6. reduce() — Calculate the total of all numbers in an array.
{
  let numbers = [10, 20, 30, 40, 50];
  let total = numbers.reduce((sum, num) => sum + num, 0);
  console.log(total); // 150
}

// 7. some() — Check whether at least one number is even
{
  let numbers = [1, 3, 5, 7, 9];
  let Even = numbers.some(num => num % 2 === 0);
  console.log(Even); // false
}

// 8. every() — Check whether all numbers are positive
{
  let numbers = [1, 2, 3, 4, 5];
  let Positive = numbers.every(num => num > 0);
  console.log(Positive); // true
}

// 9. sort() — Ascending order
{
  let numbers = [5, 2, 8, 1, 9];
  numbers.sort((a, b) => a - b);
  console.log(numbers); // [1, 2, 5, 8, 9]
}

// 10. sort() — Descending order
{
  let numbers = [5, 2, 8, 1, 9];
  numbers.sort((a, b) => b - a);
  console.log(numbers); // [9, 8, 5, 2, 1]
}

// Part 2: String Methods //

// 11. charAt() — Character at index 4
{
  let str = "Javascript";
  let char = str.charAt(4);
  console.log(char); // "s"
}

// 12. charCodeAt() — Character code at index 2
{
  let str = "Javascript";
  let charCode = str.charCodeAt(2);
  console.log(charCode); // 108 
}

// 13. trim() — Remove extra spaces
{
   let str = "Hello JavaScript";
   console.log(str.trim()); // "Hello JavaScript"
}

// 14. toUpperCase() and toLowerCase()
{
    let str = "JavaScript";
    console.log(str.toUpperCase()); // "JAVASCRIPT"
    console.log(str.toLowerCase()); // "javascript"
}

// 15. includes() — Check for "script"
{
    let str = "JavaScript";
    console.log(str.includes("script")); // true
}

// 16. startsWith() and endsWith()
{
    let str = "JavaScript";
    console.log(str.startsWith("Java")); // true
    console.log(str.endsWith("Script")); // true
}

// 17. replaceAll() — Replace "java" with "python"
{
    let str = "java is easy, java is popular";
    let result = str.replaceAll("java", "python");
    console.log(result); // "python is easy, python is popular"
}


// 18. split() — Convert a string into an array
{
    let str = "html-css-javascript-react";
    let result = str.split("-");
    console.log(result); // ["html", "css", "javascript", "react"]
}

// 19. join() — Convert an array into a string
{
    let names = ["Arun", "Priya", "Kumar"];
    let result = names.join(",");
    console.log(result); // "Arun,Priya,Kumar"
}

// 20. slice() — Extract a portion of a string
{
    let str = "JavaScript";
    let result = str.slice(0, 4);
    console.log(result); // "Java"
}

// Part 3: Date Methods //

// 21. Display the current year, month, date, and day
{
    let today = new Date();
    console.log("Year:", today.getFullYear()); // 2026
    console.log("Month:", today.getMonth() + 1); // 10
    console.log("Date:", today.getDate()); // 30
    console.log("Day:", today.getDay()); // 5
}

// 22. Display the current month name using getMonth()
{
    let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"];
    let today = new Date();
    console.log(months[today.getMonth()]); // "October"
}

// 23. Display current hours, minutes, and seconds
{
    let today = new Date();
    console.log("Hours:", today.getHours()); // 10
    console.log("Minutes:", today.getMinutes()); // 43
    console.log("Seconds:", today.getSeconds()); // 25
}

// 24. Set the date to January 30, 2003 using the setter methods
{
    let date = new Date();
    date.setFullYear(2003);
    date.setMonth(0);
    date.setDate(30);
    console.log(date.toDateString()); // Thu Jan 30 2003
}

// Part 4: Asynchronous JavaScript //

// 25. setTimeout() — Print after 3 seconds
{
    setTimeout(() => {
    console.log("Welcome to JavaScript");
    }, 3000); // Welcome to JavaScript
}

// 26. setInterval() — Print every 2 seconds
{
    setInterval(() => {
    console.log("Learning JavaScript");
    }, 2000); // Learning JavaScript
}

// 27. Stop the interval after 8 seconds
{
    let interval = setInterval(() => {
    console.log("Learning JavaScript");
     }, 2000); //  Learning JavaScript Learning JavaScript Learning JavaScript

 setTimeout(() => {
    clearInterval(interval);
    console.log("Interval stopped");
  }, 8000); // Interval stopped
}

// 28. Observe asynchronous execution order
{
    function one() {
    console.log("One");
}
function two() {
    console.log("Two");
}
function three() {
    console.log("Three");
}
one();
setTimeout(two, 0);
three();
}   // One Three Two

// Part 5: Promises and API Fetching

// 29. Promise resolve — Login successful
{
    let login = new Promise((resolve, reject) => {
    resolve("Login successful");
});
    login.then(message => {
    console.log(message); // Login successful
});
}

// 30. Promise reject — Invalid password
{
    let login = new Promise((resolve, reject) => {
    reject("Invalid password");
});
    login.catch(error => {
    console.log(error); // Invalid password
});
}

// 31. Use finally() with a Promise
{
    let process = new Promise((resolve, reject) => {
    resolve("Data received"); 
});
process
    .then(message => console.log(message))
    .catch(error => console.warn(error))
    .finally(() => console.log("Process completed")); // Data received Process completed
}

// 32. Fetch product titles using forEach()
{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log(product.title);
        });
    })
    .catch(error => console.warn(error));
}

// 33. Print product title, price, and category
{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("----------------");
        });
    })
    .catch(error => console.warn(error));
}

// 34. Handle API errors using console.warn()
{
    fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.warn("Error:", error.message);
    }); // Error: Failed to fetch products
}

// 35. Use finally() after fetching products
{
    fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("API request failed");
        }
        return response.json();
    })
    .then(products => {
        console.log(products); // [Product1, Product2, ...]
    })
    .catch(error => {
        console.warn("Error:", error.message); // Error: API request failed
    })
    .finally(() => {
        console.log("API call completed");
    }); // API call completed
}

// Part 6: Real-Time Mini Tasks //

// 36. Employee salary report
{
   let employees = [
    { name: "Arun", salary: 250000 },
    { name: "Priya", salary: 400000 },
    { name: "Kumar", salary: 280000 },
    { name: "Divya", salary: 200000 }
];

employees
    .filter(emp => emp.salary < 300000)
    .forEach(emp => {
        console.log(emp.name + " - ₹" + emp.salary);
    }); // Arun - ₹250000, Kumar - ₹280000, Divya - ₹200000
}

// 37. Product price calculator using map()
{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        let result = products.map(product => ({
            title: product.title,
            price: product.price
        }));

        console.log(result);
    })
    .catch(error => console.warn(error));
}

// 38. Product search by category
{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        let result = products.filter(
            product => product.category === "electronics"
        );

        console.log(result);
    })
    .catch(error => console.warn(error));
}

// 39. Number analysis using five array methods
{
    let numbers = [10, 15, 20, 25, 30];

    // map(): Multiply each number by 2
    let doubled = numbers.map(num => num * 2);
    console.log("Doubled:", doubled); // [20, 30, 40, 50, 60]

    // filter(): Get numbers greater than 20     
    let filtered = numbers.filter(num => num > 20);
    console.log("Greater than 20:", filtered); // [25, 30]

    // reduce(): Calculate the sum
    let total = numbers.reduce((sum, num) => sum + num, 0);
    console.log("Total:", total); // 100

    // some(): Check for an even number
    let Even = numbers.some(num => num % 2 === 0);
    console.log("Has even number:", Even); // true

    // every(): Check whether all are positive
    let Positive = numbers.every(num => num > 0);
    console.log("All positive:", Positive); // true
}

// 40. Complete product listing with error handling
{
    fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load products");
        }

        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("------------------------");
        });
    })
    .catch(error => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("Product listing completed");
    });
} 