

function sepetiBosalt() {
    localStorage.clear();
    alert("Sepet boşaltıldı!");
    document.getElementById("sepet-icerik").innerHTML = "";
    location.href = "3.html";
}

function sepeteEkle(item) {



    if (item == "kahve1") {
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
    else if (item == "cay1") {
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
    var datacay = JSON.parse(localStorage.getItem("cay1")) === null ? 0 : JSON.parse(localStorage.getItem("cay1")).miktar;
    var datakahve = JSON.parse(localStorage.getItem("kahve1")) === null ? 0 : JSON.parse(localStorage.getItem("kahve1")).miktar;
    var count = datacay + datakahve;
    document.getElementById("sepetiGoster").innerText = "Sepeti Göster " + count;
    Swal.fire({
        position: "center",
        icon: "success",
        title: sepeteEkleUrun.isim + " sepete eklendi! Toplam miktar: " + sepeteEkleUrun.miktar,
        showConfirmButton: false,
        timer: 1500
    });
}

// Call sepetiYukle if on sepet.html
if (window.location.pathname.includes("sepet.html")) {
    sepetiYukle();
}

function sepetiYukle() {

    
}

function urunArtir(item) {
    var urunBilgi = localStorage.getItem(item);
    if (urunBilgi) {
        urunBilgi = JSON.parse(urunBilgi);
        urunBilgi.miktar += 1;
        urunBilgi.toplamFiyat = urunBilgi.fiyat * urunBilgi.miktar;

        localStorage.setItem(item, JSON.stringify(urunBilgi));
    } else {
        urunBilgi = { miktar: 1, toplamFiyat: 50 };
        localStorage.setItem(item, JSON.stringify(urunBilgi));
    }
    location.reload();
}

function urunAzalt(item) {
    var urunBilgi = localStorage.getItem(item);
    if (urunBilgi) {
        urunBilgi = JSON.parse(urunBilgi);
        urunBilgi.miktar -= 1;
        urunBilgi.toplamFiyat -= urunBilgi.fiyat;
        localStorage.setItem(item, JSON.stringify(urunBilgi));
    } else {
        urunBilgi = { miktar: 1, toplamFiyat: 50 };
        localStorage.setItem(item, JSON.stringify(urunBilgi));
    }
    if (urunBilgi.miktar < 0) {
        localStorage.removeItem(item);
    }
    location.reload();
}

