let nama = ["Harimau", "Gajah", "Kuda", "Jerapah"];
let cari = "Jerapah";

function cariNama(nama, cari) {
    for (var i = 0; i < nama.length; i++){
        if (cari == nama[i]){
            console.log(`${nama[i]} ketemu`);
        }
        else {
            console.log("Gak ketemu");
        }
    }
}
cariNama(nama, cari);