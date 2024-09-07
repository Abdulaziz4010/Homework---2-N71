// 1-masala
// let son = parseFloat(prompt(" son kiriting:"));

// if (son > 0) {
//   son++;
// }

// console.log(alert("Hosil bo'lgan son: " + son));

// 2-masala

// let son = parseFloat(prompt(" son kiriting:"));

// if (son > 0) {
//   son++;
// } else {
//   son--;
//   son--;
// }

// console.log(alert("Hosil bo'lgan son: " + son));

// 3-masala

// let son = parseInt(prompt(" butun son kiriting:"));

// if (son > 0) {
//     son++;
// } else if (son < 0) {
//     son -= 2;
// } else {
//     son = 10;
// }

// console.log(alert("Hosil bo'lgan son: " + son));

// 4-masala

// let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
// let son3 = parseInt(prompt("Uchinchi sonni kiriting:"));

// let musbat_sonlar_soni = 0;

// if (son1 > 0) {
//   musbat_sonlar_soni++;
// }
// if (son2 > 0) {
//   musbat_sonlar_soni++;
// }
// if (son3 > 0) {
//   musbat_sonlar_soni++;
// }

// console.log(alert("Musbat sonlar soni: " + musbat_sonlar_soni));

// 5-masala
// let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
// let son3 = parseInt(prompt("Uchinchi sonni kiriting:"));

// let musbat_sonlar_soni = 0;
// let manfiy_sonlar_soni = 0;

// if (son1 > 0) {
//     musbat_sonlar_soni++;
// } else if (son1 < 0) {
//     manfiy_sonlar_soni++;
// }

// if (son2 > 0) {
//     musbat_sonlar_soni++;
// } else if (son2 < 0) {
//     manfiy_sonlar_soni++;
// }

// if (son3 > 0) {
//     musbat_sonlar_soni++;
// } else if (son3 < 0) {
//     manfiy_sonlar_soni++;
// }

// console.log(alert("Musbat sonlar soni: " + musbat_sonlar_soni));
// console.log(alert("Manfiy sonlar soni: " + manfiy_sonlar_soni));

// 6-masala

// let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

// let kattasi;

// if (son1 > son2) {
//     kattasi = son1;
// } else if (son2 > son1) {
//     kattasi = son2;
// } else {
//     kattasi = "Sonlar teng";
// }

// console.log(alert("Katta son: " + kattasi));

// 7-masala

// let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

// let kichik_son_tartibi;

// if (son1 < son2) {
//   kichik_son_tartibi = "Birinchi son kichik";
// } else if (son2 < son1) {
//   kichik_son_tartibi = "Ikkinchi son kichik";
// } else {
//   kichik_son_tartibi = "Ikkala son teng";
// }

// console.log(kichik_son_tartibi);

// 8-masala

// let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

// let kattasi;

// let kichigi;

// if (son1 > son2) {
//   kattasi = son1;
//   kichigi = son2;
// } else {
//   kattasi = son2;
//   kichigi = son1;
// }

// console.log(alert("Katta son: " + kattasi));
// console.log(alert("Kichik son: " + kichigi));

// 9-masala

// let a = parseFloat(prompt("A sonini kiriting:"));
// let b = parseFloat(prompt("B sonini kiriting:"));

// if (A > B) {
//     let temp = a;
//     a = B;
//     b = temp;
// }

// console.log("A soni: " + a);
// console.log("B soni: " + b);

// 10 - masala

// let a = parseInt(prompt("a sonini kiriting:"));
// let b = parseInt(prompt("b sonini kiriting:"));

// if (a !== b) {
//   let yigindi = a + b;
//   a = yigindi;
//   b = yigindi;
// } else {
//   a = 0;
//   b = 0;
// }

// console.log("A soni: " + a);
// console.log("B soni: " + b);

// 12-masala

// let son1 = parseFloat(prompt("Birinchi sonni kiriting:"));
// let son2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// let son3 = parseFloat(prompt("Uchinchi sonni kiriting:"));

// let kichik_son = Math.min(son1, son2, son3);

// console.log("Eng kichik son: " + kichik_son);

// 13-masala

// let son1 = parseFloat(prompt("Birinchi sonni kiriting:"));
// let son2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// let son3 = parseFloat(prompt("Uchinchi sonni kiriting:"));

// let ortacha_son;

// if ((son1 > son2 && son1 < son3) || (son1 > son3 && son1 < son2)) {
//     ortacha_son = son1;
// } else if ((son2 > son1 && son2 < son3) || (son2 > son3 && son2 < son1)) {
//     ortacha_son = son2;
// } else {
//     ortacha_son = son3;
// }

// console.log("O'rtacha son: " + ortacha_son);

// 14-masala

// let son1 = parseFloat(prompt("Birinchi sonni kiriting:"));
// let son2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// let son3 = parseFloat(prompt("Uchinchi sonni kiriting:"));

// let kichik_son = Math.min(son1, son2, son3);
// let katta_son = Math.max(son1, son2, son3);

// console.log("Kichik son: " + kichik_son);
// console.log("Katta son: " + katta_son);

// 15-masala
// let son1 = parseFloat(prompt("Birinchi sonni kiriting:"));
// let son2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// let son3 = parseFloat(prompt("Uchinchi sonni kiriting:"));

// if (son1 + son2 >= son1 + son3 && son1 + son2 >= son2 + son3) {
//     console.log("Eng katta yig'indiga ega sonlar: " + son1 + " va " + son2);
// } else if (son1 + son3 >= son1 + son2 && son1 + son3 >= son2 + son3) {
//     console.log("Eng katta yig'indiga ega sonlar: " + son1 + " va " + son3);
// } else {
//     console.log("Eng katta yig'indiga ega sonlar: " + son2 + " va " + son3);
// }
