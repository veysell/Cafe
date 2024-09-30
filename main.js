

function sepetiBosalt(){
    localStorage.clear();
    alert("Sepet boşaltıldı!");
    document.getElementById("sepet-icerik").innerHTML = "";
    sepetiYukle();
}

function sepeteEkle(item){

    

    if(item == "kahve1"){
        var sepeteEkleUrun = localStorage.getItem(item);
        if (sepeteEkleUrun) {
            sepeteEkleUrun = JSON.parse(sepeteEkleUrun);
            sepeteEkleUrun.miktar += 1;
            sepeteEkleUrun.toplamFiyat = sepeteEkleUrun.fiyat * sepeteEkleUrun.miktar;
        } else {
            sepeteEkleUrun = {
                isim: "Türk Kahvesi",
                fiyat: 50,
                miktar: 1,
                resim: "images/kahve2.jpg",
                toplamFiyat: 50
            };
        }    
    }
    else if(item == "cay1"){
        var sepeteEkleUrun = localStorage.getItem(item);
        if (sepeteEkleUrun) {
            sepeteEkleUrun = JSON.parse(sepeteEkleUrun);
            sepeteEkleUrun.miktar += 1;
            sepeteEkleUrun.toplamFiyat = sepeteEkleUrun.fiyat * sepeteEkleUrun.miktar;
        } else {
            sepeteEkleUrun = {
                isim: "Çay",
                fiyat: 20,
                miktar: 1,
                resim: "images/cay1.jpg",
                toplamFiyat: 20
            };
        }  
    }


    localStorage.setItem(item, JSON.stringify(sepeteEkleUrun));

    alert(sepeteEkleUrun.isim + " sepete eklendi! Toplam miktar: " + sepeteEkleUrun.miktar);
}

// Call sepetiYukle if on sepet.html
if (window.location.pathname.includes("sepet.html")) {
    sepetiYukle();
}

function sepetiYukle() {

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("kahve1")) {
            let value = localStorage.getItem(key);
            if (value) {
                value = JSON.parse(value);
        
                document.getElementById("kahve-isim").innerText = value.isim;
                document.getElementById("kahve-fiyat").innerText = value.toplamFiyat;
                document.getElementById("kahve-miktar").innerText = value.miktar;
                document.getElementById("kahve-resim").src = value.resim;
            } else {
                document.getElementById("sepet-icerik").innerHTML = "<p>Sepet boş!</p>";
            }
            document.getElementById("Cay").onclose();
        }
        else if(key.startsWith("cay1")) {
            let value = localStorage.getItem(key);
            if (value) {
                value = JSON.parse(value);
        
                document.getElementById("cay-isim").innerText = value.isim;
                document.getElementById("cay-fiyat").innerText = value.toplamFiyat;
                document.getElementById("cay-miktar").innerText = value.miktar;
                document.getElementById("cay-resim").src = value.resim;
            } else {
                document.getElementById("sepet-icerik").innerHTML = "<p>Sepet boş!</p>";
            }
        }
    }
}

function urunArtir(item) {
    var urunBilgi = localStorage.getItem(item);
    if (urunBilgi) {
        urunBilgi = JSON.parse(urunBilgi);
        urunBilgi.miktar += 1;
        urunBilgi.toplamFiyat = urunBilgi.fiyat * urunBilgi.miktar;
        
        localStorage.setItem(item, JSON.stringify(urunBilgi));
    } else { 
        urunBilgi = { miktar: 1, toplamFiyat:50 };
        localStorage.setItem(item, JSON.stringify(urunBilgi));
    }
    sepetiYukle();
}

function urunAzalt(item) {
    var urunBilgi = localStorage.getItem(item);
    if (urunBilgi) {
        urunBilgi = JSON.parse(urunBilgi);
        urunBilgi.miktar -= 1;
        urunBilgi.toplamFiyat -= urunBilgi.fiyat;
        localStorage.setItem(item, JSON.stringify(urunBilgi));
    } else { 
        urunBilgi = { miktar: 1, toplamFiyat:50 };
        localStorage.setItem(item, JSON.stringify(urunBilgi));
    }
    if(urunBilgi.miktar < 0){
        localStorage.removeItem(item);
    }
    sepetiYukle();
}

