import { statusyGier } from "./stale.js";

export function filtrujISortujGry(gry, filtry) {
  // Tutaj przygotowuje tekst do wyszukiwania, zeby latwiej porownywac dane
  const tekstWyszukiwania = filtry.tekst.trim().toLowerCase();

  const przefiltrowaneGry = gry.filter((gra) => {
    // Tutaj sprawdzam, czy gra pasuje do wpisanego tekstu
    const pasujeDoTekstu =
      gra.nazwa.toLowerCase().includes(tekstWyszukiwania) ||
      gra.opis.toLowerCase().includes(tekstWyszukiwania) ||
      gra.platforma.toLowerCase().includes(tekstWyszukiwania);

    // Tutaj sprawdzam, czy gra pasuje do wybranego gatunku
    const pasujeDoGatunku =
      filtry.gatunek === "wszystkie" || gra.gatunek === filtry.gatunek;

    // Tutaj sprawdzam, czy gra pasuje do wybranego statusu
    const pasujeDoStatusu =
      filtry.status === "wszystkie" || gra.status === filtry.status;

    // Tutaj przepuszczam tylko ulubione gry, jesli taki filtr jest wlaczony
    const pasujeDoUlubionych = !filtry.ulubione || gra.ulubiona;

    return (
      pasujeDoTekstu &&
      pasujeDoGatunku &&
      pasujeDoStatusu &&
      pasujeDoUlubionych
    );
  });

  return przefiltrowaneGry.sort((pierwszaGra, drugaGra) => {
    // Tutaj wybieram sposob sortowania zalezne od opcji wybranej przez uzytkownika
    switch (filtry.sortowanie) {
      case "nazwa-malejaco":
        return drugaGra.nazwa.localeCompare(pierwszaGra.nazwa, "pl");
      case "cena-rosnaco":
        return pierwszaGra.cena - drugaGra.cena;
      case "cena-malejaco":
        return drugaGra.cena - pierwszaGra.cena;
      case "data-najnowsze":
        return new Date(drugaGra.dataPremiery) - new Date(pierwszaGra.dataPremiery);
      case "ocena-najwyzsza":
        return drugaGra.ocena - pierwszaGra.ocena;
      case "nazwa-rosnaco":
      default:
        return pierwszaGra.nazwa.localeCompare(drugaGra.nazwa, "pl");
    }
  });
}

export function obliczStatystyki(gry) {
  // Tutaj licze podstawowe ilosci potrzebne do statystyk
  const liczbaWszystkichGier = gry.length;
  const liczbaUlubionych = gry.filter((gra) => gra.ulubiona).length;
  const liczbaUkonczonych = gry.filter((gra) => gra.status === "Ukonczona").length;
  const liczbaWToku = gry.filter((gra) => gra.status === "W trakcie").length;

  // Tutaj sumuje ceny i oceny, zeby potem policzyc srednie
  const sumaCen = gry.reduce((suma, gra) => suma + gra.cena, 0);
  const sumaOcen = gry.reduce((suma, gra) => suma + gra.ocena, 0);

  const licznikGatunkow = {};

  gry.forEach((gra) => {
    // Tutaj zliczam, ile razy pojawia sie kazdy gatunek
    licznikGatunkow[gra.gatunek] = (licznikGatunkow[gra.gatunek] || 0) + 1;
  });

  // Tutaj wybieram gatunek, ktory wystepuje najczesciej
  const najczestszyGatunek =
    Object.entries(licznikGatunkow).sort((pierwszyWpis, drugiWpis) => {
      return drugiWpis[1] - pierwszyWpis[1];
    })[0]?.[0] || "Brak danych";

  return {
    liczbaWszystkichGier,
    liczbaUlubionych,
    liczbaUkonczonych,
    liczbaWToku,
    sredniaCena: liczbaWszystkichGier ? sumaCen / liczbaWszystkichGier : 0,
    sredniaOcena: liczbaWszystkichGier ? sumaOcen / liczbaWszystkichGier : 0,
    najczestszyGatunek,
  };
}

export function pobierzNastepnyStatus(aktualnyStatus) {
  // Tutaj szukam pozycji aktualnego statusu na liscie wszystkich statusow
  const indeksAktualnegoStatusu = statusyGier.indexOf(aktualnyStatus);
  const indeksNastepnegoStatusu =
    (indeksAktualnegoStatusu + 1) % statusyGier.length;

  return statusyGier[indeksNastepnegoStatusu];
}

export function czyFiltrySaAktywne(filtry) {
  // Tutaj sprawdzam, czy chociaz jeden filtr rozni sie od startowego ustawienia
  return (
    filtry.tekst !== "" ||
    filtry.gatunek !== "wszystkie" ||
    filtry.status !== "wszystkie" ||
    filtry.ulubione ||
    filtry.sortowanie !== "nazwa-rosnaco"
  );
}
