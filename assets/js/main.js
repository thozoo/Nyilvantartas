console.log("Hello")

var emberek = [
    {
        nev: "Tóth Zoltán",
        eletkor: 43,
        magassag: 180,
        hazas: true
    },

    {
        nev: "Kiss Tamás",
        eletkor: 23,
        magassag: 190,
        hazas: false
    },

    {
        nev: "Bognár Valéria",
        eletkor: 65,
        magassag: 165,
        hazas: true
    },
];

var hazasokSzama = 0;
for (var i=0; i<emberek.length; i++)
{
    if (emberek[i].hazas == true)
    {
        hazasokSzama++;
    }
}

console.log("Házasok: "+hazasokSzama)

function Hozzaad()
{
    var obj = 
    {
        nev: document.getElementById("nev").value,
        eletkor: parseInt(document.getElementById("eletkor").value),
        magassag: parseInt(document.getElementById("magassag").value),
        hazas: document.getElementById("hazas").checked
    }
    emberek.push(obj);
    TablazatKirajzol();
}

function TablazatKirajzol()
{
    var s = "<table><tr><th>Név</th><th>Kor</th><th>Magasság</th><th>Házas</th></tr>";

    for (var i=0; i<emberek.length; i++)
    {
        s += "<tr><td>"+emberek[i].nev+"</td><td>"+emberek[i].eletkor+"</td><td>"+emberek[i].magassag+"</td><td>";
        if (emberek[i].hazas) s+="Igen</td></tr>";
        else s+="Nem</td></tr>";
    }

    s += "</table>";
    document.getElementById("tablazat").innerHTML = s;
}

TablazatKirajzol();