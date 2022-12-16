


function parantezlerDengeliMi(metin) {
    const dizi = metin.split('');

    const sonuc = dizi.reduce(function (previous, karakter){
        if (previous < 0){
            return previous;
        }
        if (karakter === '(') {
            return ++previous;
        }
        if (karakter === ')') {
            return --previous;
        }
        return previous;
    },0);
    if (!sonuc){
        console.log(metin + "Dengeli bir yapıdadır.");

    }else{
        console.log(metin + "Dengeli bir yapıda değildir.");
    }
}
parantezlerDengeliMi(')(')