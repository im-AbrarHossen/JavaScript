let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
let qs = prompt("Enter the number of question (a,b,c):");
//a
if(qs == "a") {
    companies.shift();
    console.log(companies);
}

//b
else if(qs == "b") {
    companies.splice(2, 1 , "Ola");
    console.log(companies);
}

//c
else if(qs == "c") {
    companies.push("Amazon");
    console.log(companies);
}