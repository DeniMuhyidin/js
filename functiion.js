var uang = 29000;
var harga = 25000;
var diskon = 5000;

if (uang == harga){
    console.log(`Uang pas`);
}
else if (uang + diskon == harga){
    console.log(`Anda mendapatkan diskon sebesar Rp.${diskon}`);
}
else if (uang > harga){
    console.log(`Kembalian`);
}
else if (uang > 20000 && uang < 25000){
    console.log(`Yakin tidak akan memakai diskon?`);
}
else if (uang < harga){
    console.log(`Uang kurang`);
}