// tutaj trzymam dane wszystkich samochodow
const samochody = [
    {
        id: 1,
        nazwa: "Nissan Skyline GT-R R34",
        typ: "sportowy",
        rok: 1999,
        moc: "280 KM",
        moment: "392 Nm",
        silnik: "2.6 l twin turbo",
        skrzynia: "manualna",
        cena: 950,
        kolor: "#0057d9",
        opis: "Model z 1999 roku, który zasłynął z napędu 4x4 i bardzo dobrego prowadzenia. To jeden z najbardziej rozpoznawalnych japońskich samochodów sportowych.",
        zdjecie: "img_cars/nissan-r34-skyline.jpg",
        stan: "wolny",
        klient: "",
        pakiet: ""
    },
    {
        id: 2,
        nazwa: "Toyota Supra MK4",
        typ: "sportowy",
        rok: 1994,
        moc: "330 KM",
        moment: "441 Nm",
        silnik: "3.0 l twin turbo",
        skrzynia: "manualna",
        cena: 900,
        kolor: "#d9dee4",
        opis: "Model z 1994 roku z legendarnym silnikiem 2JZ i bardzo dużym potencjałem tuningowym. Supra MK4 do dziś jest jednym z symboli japońskiej motoryzacji.",
        zdjecie: "img_cars/supramk4.jpg",
        stan: "wolny",
        klient: "",
        pakiet: ""
    },
    {
        id: 3,
        nazwa: "Porsche 911 GT3 RS",
        typ: "torowy",
        rok: 2023,
        moc: "525 KM",
        moment: "465 Nm",
        silnik: "4.0 l boxer",
        skrzynia: "automatyczna",
        cena: 3600,
        kolor: "#21c55d",
        opis: "Model z 2023 roku stworzony głównie do szybkiej jazdy i pracy na torze. Samochód ma agresywny wygląd i bardzo precyzyjnie reaguje na ruchy kierownicą.",
        zdjecie: "img_cars/porche911rex.jpg",
        stan: "wolny",
        klient: "",
        pakiet: ""
    },
    {
        id: 4,
        nazwa: "Koenigsegg Gemera",
        typ: "hypercar",
        rok: 2024,
        moc: "1700 KM",
        moment: "3500 Nm",
        silnik: "2.0 l twin turbo hybryda",
        skrzynia: "automatyczna",
        cena: 11000,
        kolor: "#4b5563",
        opis: "Model z 2024 roku łączy ogromną moc z nowoczesnym napędem hybrydowym. Gemera wyróżnia się nietypowym nadwoziem i bardzo luksusowym wnętrzem.",
        zdjecie: "img_cars/gemera.jpg",
        stan: "wolny",
        klient: "",
        pakiet: ""
    },
    {
        id: 5,
        nazwa: "Nissan 200SX S14",
        typ: "drift",
        rok: 1998,
        moc: "200 KM",
        moment: "265 Nm",
        silnik: "2.0 l turbo",
        skrzynia: "manualna",
        cena: 750,
        kolor: "#6b2c7a",
        opis: "Model z 1998 roku jest często wybierany przez fanów driftu i japońskiej motoryzacji. Samochód ma lekką konstrukcję i prostą mechaniczną budowę.",
        zdjecie: "img_cars/silvias14jpg.jpg",
        stan: "wolny",
        klient: "",
        pakiet: ""
    },
    {
        id: 6,
        nazwa: "Mazda RX-7",
        typ: "sportowy",
        rok: 1997,
        moc: "255 KM",
        moment: "294 Nm",
        silnik: "1.3 l twin turbo rotary",
        skrzynia: "manualna",
        cena: 850,
        kolor: "#e5e7eb",
        opis: "Model z 1997 roku jest znany z silnika rotacyjnego i bardzo niskiej masy auta. RX-7 daje dużo frajdy z jazdy i ma wyjątkowy charakter na tle innych samochodów sportowych.",
        zdjecie: "img_cars/rx7mazda.jpg",
        stan: "wolny",
        klient: "",
        pakiet: ""
    },
    {
        id: 7,
        nazwa: "Ferrari F40",
        typ: "supercar",
        rok: 1992,
        moc: "478 KM",
        moment: "577 Nm",
        silnik: "2.9 l twin turbo V8",
        skrzynia: "manualna",
        cena: 7500,
        kolor: "#d62828",
        opis: "Model z 1992 roku to jedno z najbardziej legendarnych Ferrari w historii. Auto ma surowy charakter, bardzo wysoką wartość kolekcjonerską i rozpoznawalny design.",
        zdjecie: "img_cars/ferrarif40.jpg",
        stan: "wolny",
        klient: "",
        pakiet: ""
    },
    {
        id: 8,
        nazwa: "Nissan GT-R R35",
        typ: "sportowy",
        rok: 2020,
        moc: "570 KM",
        moment: "637 Nm",
        silnik: "3.8 l twin turbo V6",
        skrzynia: "automatyczna",
        cena: 2900,
        kolor: "#9ca3af",
        opis: "Model z 2020 roku oferuje bardzo szybkie przyspieszenie i dużo nowoczesnej technologii. GT-R R35 dobrze łączy wysoką moc z przyczepnością napędu na cztery koła.",
        zdjecie: "img_cars/Nissan-GTR-r35.jpg",
        stan: "wolny",
        klient: "",
        pakiet: ""
    },
    {
        id: 9,
        nazwa: "Toyota Supra MK5",
        typ: "sportowy",
        rok: 2021,
        moc: "382 KM",
        moment: "500 Nm",
        silnik: "3.0 l turbo",
        skrzynia: "automatyczna",
        cena: 2400,
        kolor: "#facc15",
        opis: "Model z 2021 roku ma mocny silnik turbo i bardziej nowoczesny charakter jazdy niż starsze generacje. Supra MK5 jest szybka, wygodna i dobrze sprawdza się na co dzień.",
        zdjecie: "img_cars/supramk5.jpg",
        stan: "wolny",
        klient: "",
        pakiet: ""
    },
    {
        id: 10,
        nazwa: "Pagani Huayra",
        typ: "hypercar",
        rok: 2012,
        moc: "720 KM",
        moment: "1000 Nm",
        silnik: "6.0 l twin turbo V12",
        skrzynia: "automatyczna",
        cena: 12000,
        kolor: "#0f6ab4",
        opis: "Model z 2012 roku to ekskluzywny hypercar z włókna węglowego i bardzo dopracowanymi detalami. Huayra wyróżnia się unikalnym wyglądem oraz luksusowym wykończeniem.",
        zdjecie: "img_cars/pagani-huayra-epitome.jpg",
        stan: "wolny",
        klient: "",
        pakiet: ""
    }
];

// tu zapisuje rodzaje wypozyczenia i ich cene
const rodzajeWypozyczenia = {
    standard: {
        nazwa: "Standard 1 dzień",
        mnoznik: 1
    },
    weekend: {
        nazwa: "Weekend 2 dni",
        mnoznik: 1.8
    },
    premium: {
        nazwa: "Premium 3 dni",
        mnoznik: 2.6
    }
};

// sa potrzebne do dzialania aplikacji
const listaSamochodow = document.getElementById("lista-samochodow");
const podgladSamochodu = document.getElementById("podglad-samochodu");
const formularzWypozyczenia = document.getElementById("formularz-wypozyczenia");
const nazwaKlienta = document.getElementById("nazwa-klienta");
const rodzajWypozyczenia = document.getElementById("rodzaj-wypozyczenia");
const liczbaWolnych = document.getElementById("liczba-wolnych");
const liczbaWybranych = document.getElementById("liczba-wybranych");
const liczbaWypozyczonych = document.getElementById("liczba-wypozyczonych");
const lacznaCena = document.getElementById("laczna-cena");
const komunikat = document.getElementById("komunikat");
const numerAnulowania = document.getElementById("numer-anulowania");
const przyciskAnulujPoNumerze = document.getElementById("anuluj-po-numerze");
const informacjaOAnulowaniu = document.getElementById("informacja-o-anulowaniu");

let idPodgladu = 1;

// ta funkcja odswieza caly widok po zmianach
function odswiezWidok() {
    rysujSamochody();
    pokazPodgladSamochodu();
    aktualizujStatystyki();
    aktualizujInformacjeOAnulowaniu();
}

function rysujSamochody() {
    listaSamochodow.innerHTML = "";

    for (let i = 0; i < samochody.length; i = i + 1) {
        const samochod = samochody[i];
        const karta = document.createElement("button");
        let dodatkoweKlasy = "karta-samochodu " + pobierzKlaseKarty(samochod.stan);
        let dodatkowaInformacja = "";

        if (samochod.id === idPodgladu) {
            dodatkoweKlasy = dodatkoweKlasy + " aktywny-podglad";
        }

        if (samochod.stan === "wypozyczony") {
            dodatkowaInformacja =
                "<div>Wypożycza: " + samochod.klient + "</div>" +
                "<div>Pakiet: " + pobierzNazwePakietu(samochod.pakiet) + "</div>";
        }

        karta.type = "button"; //`button`, aby nie wysyłał formularza tylko wywołał funkcje obsluzKlikniecieSamochodu
        karta.className = dodatkoweKlasy;
        karta.innerHTML =
            '<div class="mini-belka" style="background: linear-gradient(90deg, ' + samochod.kolor + ',rgb(53, 30, 30));"></div>' +
            '<p class="numer-samochodu">Samochód ' + samochod.id + "</p>" +
            '<h3 class="nazwa-samochodu">' + samochod.nazwa + "</h3>" +
            '<div class="szczegoly-karty">' +
            "<div>Typ: " + samochod.typ + "</div>" +
            "<div>Rok produkcji: " + samochod.rok + "</div>" +
            "<div>Moc: " + samochod.moc + "</div>" +
            "<div>Moment: " + samochod.moment + "</div>" +
            "<div>Silnik: " + samochod.silnik + "</div>" +
            "<div>Skrzynia: " + samochod.skrzynia + "</div>" +
            "<div>Cena bazowa: " + formatujCene(samochod.cena) + "</div>" +
            dodatkowaInformacja +
            "</div>" +
            '<span class="status-etykieta ' + pobierzKlaseStatusu(samochod.stan) + '">' + pobierzTekstStanu(samochod.stan) + "</span>";

        karta.addEventListener("click", function () {
            obsluzKlikniecieSamochodu(samochod.id);
        });

        listaSamochodow.appendChild(karta);
    }
}

// klikniecie zmienia stan auta albo zaznacza je do anulowania
function obsluzKlikniecieSamochodu(idSamochodu) {
    const samochod = pobierzSamochodPoId(idSamochodu);

    if (samochod === null) {
        return;
    }

    idPodgladu = samochod.id;

    if (samochod.stan === "wolny") {
        if (policzSamochodyZeStanem("wybrany") >= 5) {
            pokazKomunikat("Możesz wybrać maksymalnie 5 samochodów.", "blad");
            odswiezWidok();
            return;
        }

        samochod.stan = "wybrany";
        pokazKomunikat("Samochód został dodany do wypożyczenia.", "sukces");
    } else if (samochod.stan === "wybrany") {
        samochod.stan = "wolny";
        pokazKomunikat("Samochód został odznaczony.", "info");
    } else if (samochod.stan === "wypozyczony") {
        pokazKomunikat("Ten samochód jest już wypożyczony. Aby anulować wypożyczenie, użyj numeru samochodu.", "info");
    }

    odswiezWidok();
}

function pobierzSamochodPoId(idSamochodu) {
    for (let i = 0; i < samochody.length; i = i + 1) {
        if (samochody[i].id === idSamochodu) {
            return samochody[i];
        }
    }

    return null;
}

function pobierzTekstStanu(stan) {
    if (stan === "wolny") {
        return "wolny";
    }

    if (stan === "wybrany") {
        return "wybrany";
    }

    return "wypożyczony";
}

function pobierzKlaseKarty(stan) {
    if (stan === "wolny") {
        return "stan-wolny";
    }

    if (stan === "wybrany") {
        return "stan-wybrany";
    }

    return "stan-wypozyczony";
}

function pobierzKlaseStatusu(stan) {
    if (stan === "wolny") {
        return "status-wolny";
    }

    if (stan === "wybrany") {
        return "status-wybrany";
    }

    return "status-wypozyczony";
}

function pobierzNazwePakietu(rodzaj) {
    if (rodzajeWypozyczenia[rodzaj]) {
        return rodzajeWypozyczenia[rodzaj].nazwa;
    }

    return "brak";
}

function formatujCene(kwota) {
    return kwota.toFixed(2) + " zł";
}

// ta funkcja pokazuje zdjecie i dane auta
function pokazPodgladSamochodu() {
    const samochod = pobierzSamochodPoId(idPodgladu);

    if (samochod === null) {
        podgladSamochodu.innerHTML = "<p>Brak danych samochodu.</p>";
        return;
    }

    let szczegolyWypozyczenia = '<p class="pakiet-info">Samochód nie jest teraz wypożyczony.</p>';

    if (samochod.stan === "wypozyczony") {
        szczegolyWypozyczenia =
            '<p class="pakiet-info">Wypożycza: ' + samochod.klient + "<br>Wybrany pakiet: " + pobierzNazwePakietu(samochod.pakiet) + "</p>";
    }

    podgladSamochodu.innerHTML =
        '<img class="obraz-podgladu" src="' + samochod.zdjecie + '" alt="' + samochod.nazwa + '">' +
        '<div class="szczegoly-podgladu">' +
        '<p class="wiersz-podgladu"><strong>Samochód:</strong> ' + samochod.id + "</p>" +
        '<p class="wiersz-podgladu"><strong>Nazwa:</strong> ' + samochod.nazwa + "</p>" +
        '<p class="wiersz-podgladu"><strong>Stan:</strong> ' + pobierzTekstStanu(samochod.stan) + "</p>" +
        '<p class="wiersz-podgladu"><strong>Typ:</strong> ' + samochod.typ + "</p>" +
        '<p class="wiersz-podgladu"><strong>Rok produkcji:</strong> ' + samochod.rok + "</p>" +
        '<p class="wiersz-podgladu"><strong>Moc:</strong> ' + samochod.moc + "</p>" +
        '<p class="wiersz-podgladu"><strong>Moment obrotowy:</strong> ' + samochod.moment + "</p>" +
        '<p class="wiersz-podgladu"><strong>Pojemność silnika:</strong> ' + samochod.silnik + "</p>" +
        '<p class="wiersz-podgladu"><strong>Skrzynia:</strong> ' + samochod.skrzynia + "</p>" +
        '<p class="wiersz-podgladu"><strong>Cena bazowa:</strong> ' + formatujCene(samochod.cena) + "</p>" +
        '<p class="wiersz-podgladu"><strong>Opis:</strong> ' + samochod.opis + "</p>" +
        szczegolyWypozyczenia +
        "</div>";
}

function aktualizujStatystyki() {
    const wolne = policzSamochodyZeStanem("wolny");
    const wybrane = policzSamochodyZeStanem("wybrany");
    const wypozyczone = policzSamochodyZeStanem("wypozyczony");
    const cenaWybranych = policzLacznaCeneWybranych();

    liczbaWolnych.textContent = wolne;
    liczbaWybranych.textContent = wybrane;
    liczbaWypozyczonych.textContent = wypozyczone;
    lacznaCena.textContent = formatujCene(cenaWybranych);
}

function policzSamochodyZeStanem(szukanyStan) {
    let licznik = 0;

    for (let i = 0; i < samochody.length; i = i + 1) {
        if (samochody[i].stan === szukanyStan) {
            licznik = licznik + 1;
        }
    }

    return licznik;
}

function policzLacznaCeneWybranych() {
    let suma = 0;
    const mnoznik = rodzajeWypozyczenia[rodzajWypozyczenia.value].mnoznik;

    for (let i = 0; i < samochody.length; i = i + 1) {
        if (samochody[i].stan === "wybrany") {
            suma = suma + samochody[i].cena * mnoznik;
        }
    }

    return suma;
}

function aktualizujInformacjeOAnulowaniu() {
    informacjaOAnulowaniu.textContent = "Aby anulować wypożyczenie, podaj numer samochodu i kliknij przycisk.";
}

function pokazKomunikat(tekst, typ) {
    komunikat.textContent = tekst;
    komunikat.className = "komunikat";

    if (typ === "sukces") {
        komunikat.classList.add("komunikat-sukces");
    } else if (typ === "blad") {
        komunikat.classList.add("komunikat-blad");
    } else {
        komunikat.classList.add("komunikat-info");
    }
}

// formularz zmienia wybrane samochody na wypozyczone
function obsluzWyslanieFormularza(event) {
    event.preventDefault();

    const nazwa = nazwaKlienta.value.trim();
    const rodzaj = rodzajWypozyczenia.value;
    const liczbaWybranychSamochodow = policzSamochodyZeStanem("wybrany");
    let ostatniZmodyfikowanyId = idPodgladu;

    if (liczbaWybranychSamochodow === 0) {
        pokazKomunikat("Najpierw musisz wybrać przynajmniej jeden samochód.", "blad");
        return;
    }

    if (nazwa === "") {
        pokazKomunikat("Podaj imię lub nazwę rezerwacji.", "blad");
        return;
    }

    if (rodzaj === "") {
        pokazKomunikat("Wybierz rodzaj wypożyczenia.", "blad");
        return;
    }

    if (liczbaWybranychSamochodow > 5) {
        pokazKomunikat("Możesz wypożyczyć maksymalnie 5 samochodów naraz.", "blad");
        return;
    }

    for (let i = 0; i < samochody.length; i = i + 1) {
        if (samochody[i].stan === "wybrany") {
            samochody[i].stan = "wypozyczony";
            samochody[i].klient = nazwa;
            samochody[i].pakiet = rodzaj;
            ostatniZmodyfikowanyId = samochody[i].id;
        }
    }

    idPodgladu = ostatniZmodyfikowanyId;
    numerAnulowania.value = "";
    formularzWypozyczenia.reset();
    rodzajWypozyczenia.value = "standard";
    odswiezWidok();
    pokazKomunikat("Wypożyczenie zostało zapisane poprawnie.", "sukces");
}

function anulujWypozyczenieSamochodu(samochod) {
    samochod.stan = "wolny";
    samochod.klient = "";
    samochod.pakiet = "";
    idPodgladu = samochod.id;
}

// to anuluje wypozyczenie po podanym numerze
function obsluzAnulowaniePoNumerze() {
    const numer = Number(numerAnulowania.value);

    if (Number.isNaN(numer) || numer === 0) {
        pokazKomunikat("Podaj poprawny numer samochodu.", "blad");
        return;
    }

    const samochod = pobierzSamochodPoId(numer);

    if (samochod === null) {
        pokazKomunikat("Nie ma samochodu o takim numerze.", "blad");
        return;
    }

    if (samochod.stan !== "wypozyczony") {
        pokazKomunikat("Ten samochód nie jest teraz wypożyczony.", "blad");
        return;
    }

    anulujWypozyczenieSamochodu(samochod);
    numerAnulowania.value = "";
    odswiezWidok();
    pokazKomunikat("Wypożyczenie samochodu zostało anulowane.", "sukces");
}

formularzWypozyczenia.addEventListener("submit", obsluzWyslanieFormularza);
rodzajWypozyczenia.addEventListener("change", aktualizujStatystyki);
przyciskAnulujPoNumerze.addEventListener("click", obsluzAnulowaniePoNumerze);

odswiezWidok();
