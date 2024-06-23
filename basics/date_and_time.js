let todayDate = new Date();
console.log("Date: " + todayDate);
console.log("toString: " + todayDate.toString());
console.log("toLocalStiring: " + todayDate.toLocaleString());
console.log("toDateString: " + todayDate.toDateString());
console.log("toLocaleDateString: " + todayDate.toLocaleDateString());
console.log("toISOString: " + todayDate.toISOString());
console.log("toJSON: " + todayDate.toJSON());
console.log("Type of Date: " + typeof todayDate);

let myDOB = new Date("2002-12-10");
console.log(myDOB.toDateString());
console.log(myDOB.getTime());

let myTimeStamp = Date.now();
console.log(myTimeStamp);