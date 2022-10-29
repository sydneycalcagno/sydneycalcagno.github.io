

// #1
let Sam = {
    "name" : "Sam",
    "department" : "Tech",
    "designation" : "Manager",
    "salary" : 40000,
    "raise" : "true"
}
let Mary = {
    "name" : "Mary",
    "department" : "Finance",
    "designation" : "Trainee",
    "salary" : 18500,
    "raise" : "true"
}
let Bill = {
    "name" : "Bill",
    "department" : "HR",
    "designation" : "Executive",
    "salary" : 21200,
    "raise" : "false"
}
console.log("#1", Sam, Mary, Bill);
console.log("------------------------");

// #3
let Anna = {
    "name" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "raise" : "false"
}
console.log("#3", Anna);
console.log("------------------------");

// #2
let Company = {
    "companyName" : "Tech Stars",
    "website" : " www.techstars.site",
    "employees" : [Sam, Mary, Bill, Anna]
}
console.log("#2", Company);
console.log("------------------------");



let total = 0; 
let upped = 0; 
let raise_total = 0; 
let wfh = false;
let noob = true; 

for(let i = 0; i < Company.employees.length; i++){

    // #4
    total += Company.employees[i].salary;

    // #5
    if(Company.employees[i].raise == "true"){
        upped = Company.employees[i].salary * 0.1;
        Company.employees[i].salary = Company.employees[i].salary + upped; 
    }
    raise_total += Company.employees[i].salary;
    //6
    if(Company.employees[i].name === "Sam" || Company.employees[i].name === "Anna"){
        Company.employees[i].wfh = true;
    }
    else{
        Company.employees[i].wfh = false;
    }
    
}

console.log("#4", total);
console.log("------------------------");
console.log("#5", raise_total);
console.log("------------------------");
console.log("#6", Sam, Mary, Bill, Anna);
console.log("------------------------");
console.log("ALL OF EVERYONES INFO");
console.log("------------------------");
console.log("Sam's Info", Sam);
console.log("Mary's Info", Mary);
console.log("Bill's Info", Bill);
console.log("Anna's Info", Anna);
console.log("Company Info", Company);
