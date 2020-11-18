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
console.log(john.join("-"));

//concat
let all=john.concat(sport, color);
console.log(all.join("**"));

//slice
let data=["juan","peter","adalah","suku","banggai","minahasa"];
let saya=data.slice(0,5);
console.log(saya.toString());

//sort
let angka=[18,42,34,54,23,3,156,69,97];
let negara=["rusia","indonesia","bangladesh","uni emirat arab","amerika"];
angka.sort();
negara.sort();
console.log(angka.toString());
console.log(negara.toString());
let dariTerkecil=function(a,b){
    return a - b;
};
let dariTerbesar=function(a,b){
    return b - a;
};
console.log(angka.sort(dariTerkecil));
console.log(negara.sort(dariTerbesar));

//reverse
let sulawesi=["sulut","sulteng","gorontalo","sulbar","sultra","sulsel"];
sulawesi.reverse();
negara.reverse();
console.log(sulawesi.toString());
console.log(negara.toString());
