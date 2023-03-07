var citati = [];
citati[0] = "Nikad nemoj odustati, jer uvek postoji vreme i mesto kada će se plima promeniti.";
citati[1] = "Kreativan čovek motivisan je željom da postigne, a ne željom da pobedi druge.";
citati[2] = "Neka ti udica bude uvek bačena. U jezeru u kojem je najmanje očekuješ, pojaviće se riba.";
citati[3] = "Preko noći postaje slavan samo onaj ko je danima neumorno radio.";
citati[4] = "Velika je nesreća kad čovek ne zna šta hoće, a prava katastrofa kad ne zna šta može.";

var citiraj = x => {
    document.write(citati[x])
};

var citatFunkcija = () => {

    var a = prompt("Unesite broj od 1 do 5", 0)

    if (a != null && !isNaN(a)) {
        var a1 = parseInt(a);
        if (!isNaN(a1)) {
            if (a1 > 0 && a1 < 6) {
                citiraj(a1 - 1);
            }
            else {
                alert("Unesen broj mora biti izmedju 1 i 5!"); 1
            }
        }
    }
    else {
        alert("Niste uneli broj!");
    }
}

var mojaFunkcija = x => {
    switch (x) {
        case 1:
            alert(Math.sqrt(myParse()));
            break;
        case 2:
            alert(Math.sin(myParse()));
            break;
        case 3:
            alert(Math.cos(myParse()));
            break;
        case 4:
            alert(Math.round(myParse()));
            break;
    }

}

var myParse = () => {

    var a = prompt("Insert number between 1 and 999", 0)

    if (a != null && !isNaN(a)) {
        var a1 = parseFloat(a);
        if (!isNaN(a1)) {
            if (a1 > 0 && a1 < 1000) {
                return a1;
            }
            else {
                alert("Number must be between 1 and 999");
            }
        }
    }
    else {
        alert("This is not a number");
    }
}