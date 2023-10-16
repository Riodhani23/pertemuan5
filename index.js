function GanjildanGenap(){
    let angka = prompt("Masukkan Bilangan : ");
    
    if (angka % 2 === 0){
        alert( angka + " " + "ini adalah Bilangan Genap");
    }
    else {
        alert (angka + " " + "ini Adalah Bilangan Ganjil");
    }
    }
    
    const tombol = document.getElementById("Masuk")
    tombol.addEventListener("click", GanjildanGenap)