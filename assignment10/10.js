let Company = {
    "companyName" : "Tech Stars",
    "website" : " www.techstars.site",
    "employees" : [Sam, Mary, Bill, Anna]
}
let Sam = {
    "department" : "Tech",
    "designation" : "Manager",
    "salary" : "40000",
    "raise" : "true"
}
let Mary = {
    "department" : "Finance",
    "designation" : "Trainee",
    "salary" : "18500",
    "raise" : "true"
}
let Bill = {
    "department" : "HR",
    "designation" : "Executive",
    "salary" : "21200",
    "raise" : "false"
}
let Anna = {
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : "25600",
    "raise" : "false"
}


function sumSal(sals) {
    let total = 0;
    let nmm = 5; 

    for (let i = 0; i < emp.length; i++){

        for(const k of emp[i].employees){
            total += Company.employees[i].salary
        }
    }
    
}
