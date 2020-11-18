//Array

let nilai = [80,90,75,100,85];
for (let i=0;i<nilai.length ;i++){
    console.log("Nilai =",nilai[i] + 5);
}

console.log(nilai[nilai.length - 1]);

let john = ["John", "Juan", 33, true];
let sport =["badminton",];
let color =["black"];
console.log(john[john.length - 1]);
console.log (john);

//toString
console.log(nilai.toString());
console.log(john.toString());
//join
console.log(john.join(" - "));
//pop()
john.pop();
console.log(john.join(" - "));
//push()
john.push("true");
john.push("Hallo");
console.log(john.join(" - "));
//shift()
john.shift();
console.log(john.join(" - "));
//unshift()
john.unshift("Juan");
john.unshift("Basosol");
console.log(john.join(" ... "));
//splice
john.splice(2, 0, "Peter", "Tim");
console.log(john);
//concat
let all=john.concat(sport, color);
console.log(all);
