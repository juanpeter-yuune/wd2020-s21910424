console.log("Basic JavaScript");
//conditional javascript tag

/* let firstName = "Juan";
let isMarried = true;

if (isMarried === true){
    console.log (firstName +" is Married");
}else{
    console.log(firstName + " not Married");
}
 */

/*
    jika umur < 13 maka tampilkan kategori anak-anak
    jika umur > 13 sampai <16 maka tampilkan kategori remaja
    jika umur > 17 sampai <25 maka tampilkan kategori anak muda
    jika umur >25 sampai <50 maka tampilkan kategori dewasa
*/

/* let firstname = "juan";
let job="teacher";

switch(job){
    case "teacher" : 
        console.log(firstname + " is a teacher");
        break;
    case "driver" :
        console.log(firstname + " is a driver");
        break;
    case "instructor":
        console.log(firstname + " is a insturctor");
        break;
    default:
        console.log(firstname + " does something else");
        break;
} */

//let umur =25;
/* 
if (umur<13){
    console.log("Kategori anak-anak");
}else if (umur >13 && umur<17){
    console.log("Kategori remaja");
}else if (umur>16 && umur < 25){
    console.log("Kategori anak muda");
}else if (umur>24 && umur <50){
    console.log("Kategori dewasa");
}   */

/* switch(true){
    case umur <13:
        console.log("Kategori anak-anak");
        break;
    case umur >12 && umur <17:
        console.log ("Kategori remaja");
        break;
    case umur >16 && umur <25:
        console.log ("Kategori anak muda");
        break;
    case umur >24 && umur < 50:
        console.log ("Kategori dewasa");
        break;
    default :
        console.log ("Kategori lain ");
        break;
} */

//Function to javascript
/* function halloworld(){
    console.log("Hallo World Function declaration");
} */
let age=17;
let halloworld=function(nama){
    console.log("Hallo nama saya " + nama + ". Umur saya " + age + " tahun.");
}
halloworld("Juan Petert");