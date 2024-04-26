let marks = [85,97,44,37,76,60];
let sum = 0, avg = 0, n = marks.length;
for(let i=0; i<n; i++) {
    sum = sum + marks[i];
}
avg = sum / n;
console.log("Average marks of the entire class:",avg);