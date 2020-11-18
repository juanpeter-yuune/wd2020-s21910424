//variabel

//let & cons

// let _umur = 25;
// _umur = 26;
// // let nilai = 95.5;
// // let sudahMenikah = false;
// // let $nama = "John Doe";
// // console.log(_umur);
// // console.log($nama);

//     let alamat;
//     console.log(alamat);

// // const tahunLahir = 2010;
// // console.log(tahunLahir);

// let angka1 = 10;
// let angka2 = 20;
// console.log(angka1+angka2);

// let umur = 30;
// let namaDepan = "John";
// let namaBelakang = "Doe";
// console.log("Nama Saya" + namaDepan + " " namaBelakang " " + umur " ");

//ternary operator
// let angka1 = 10;
// let angka2 = 9;

// console.log(angka1 <= angka2);

// //operator logika
// let kondisi1 = 1<2;
// let kondisi2 = true;

// console.log(kondisi1 || kondisi2);
// console.log(!log)

//let angka = prompt("Masukan angka :");
//console.log("angka yang dimasukan adalah " + angka);

let berat=prompt ("Masukan berat :") ;
let tinggi=prompt ("Masukan tinggi :");
let bmi=berat/(tinggi*tinggi);
classification();
function classification(){
    if (bmi < 18.5){
        console.log("BMI = "+ bmi + ". Your in underweight classification");
    }else if (bmi > 18.5 && bmi < 24.9){
        console.log("BMI = "+ bmi + ". Your in normal range classification");
    }else if (bmi > 25.0 && bmi < 29.9){
        console.log("BMI = "+ bmi + ". Your in overweight (preobese) classification");
    }else if (bmi >= 30){
        console.log("BMI = "+ bmi + ". Your in obese classification");
    }else if (bmi > 30.0 && bmi < 34.9){
        console.log("BMI = "+ bmi + ". Your in class I classification");
    }else if (bmi > 35.0 && bmi < 39.9){
        console.log("BMI = "+ bmi + ". Your in class II classification");
    }else if (bmi >= 40.0){
        console.log("BMI = "+ bmi + ". Your in class III classification");
    }
}

