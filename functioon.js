function KTP(umur) {
    if (umur < 17){
        console.log("Anda tidak bisa membuat KTP");
    }
    else if (umur >= 17 && umur <= 20){
    console.log("Secepatnya membuat KTP");
    }
    else if (umur > 20){
        console.log("Wajib memiliki KTP");
    }
}
KTP(30)
