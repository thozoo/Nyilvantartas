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
}