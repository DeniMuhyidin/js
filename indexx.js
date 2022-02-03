function tampilGaji(gaji) {
    if (gaji <= 2100000){
        gaji = gaji + 1000000;
    }
    console.log(`Uang gaji saat ini: ${gaji}`);
}
tampilGaji(2000000);