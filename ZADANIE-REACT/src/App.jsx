import { useState } from "react";
import FormularzGry from "./components/FormularzGry";
import ListaGier from "./components/ListaGier";
import ModalPotwierdzenia from "./components/ModalPotwierdzenia";
import Naglowek from "./components/Naglowek";
import PanelFiltrow from "./components/PanelFiltrow";
import StatystykiGier from "./components/StatystykiGier";
import { poczatkoweGry } from "./data/poczatkoweGry";
import { useLocalStorage } from "./hooks/useLocalStorage";
import {
  czyFiltrySaAktywne,
  filtrujISortujGry,
  obliczStatystyki,
  pobierzNastepnyStatus,
} from "./utils/operacjeNaGrach";

const poczatkoweFiltry = {
  tekst: "",
  gatunek: "wszystkie",
  status: "wszystkie",
  ulubione: false,
  sortowanie: "nazwa-rosnaco",
};

function generujId() {
  // Tutaj tworze unikalne id dla nowej gry
  return window.crypto?.randomUUID?.() || `gra-${Date.now()}`;
}

function App() {
  // Tutaj trzymam wszystkie gry i od razu zapisuje je w localStorage
  const [gry, ustawGry] = useLocalStorage("gry-kolekcja", poczatkoweGry);

  // Tutaj pamietam ostatnio wybrane filtry
  const [filtry, ustawFiltry] = useLocalStorage("gry-filtry", poczatkoweFiltry);

  // Tutaj zapamietuje wybrany motyw aplikacji
  const [trybCiemny, ustawTrybCiemny] = useLocalStorage("gry-motyw", true);

  // Tutaj przechowuje gre, ktora w danym momencie edytuje
  const [edytowanaGra, ustawEdytowanaGre] = useState(null);

  // Tutaj zapamietuje id gry, ktora chce usunac po potwierdzeniu
  const [idGryDoUsuniecia, ustawIdGryDoUsuniecia] = useState(null);

  // Tutaj tworze liste widocznych gier po wyszukiwaniu, filtrowaniu i sortowaniu
  const widoczneGry = filtrujISortujGry(gry, filtry);

  // Tutaj licze statystyki dla calej kolekcji
  const statystyki = obliczStatystyki(gry);

  // Tutaj sprawdzam, czy uzytkownik ma wlaczony jakis filtr
  const filtryAktywne = czyFiltrySaAktywne(filtry);

  function zapiszGre(daneGry) {
    // Tutaj rozrozniam zapis edytowanej gry od dodawania nowej
    if (edytowanaGra) {
      ustawGry((poprzednieGry) => {
        return poprzednieGry.map((gra) => {
          if (gra.id === edytowanaGra.id) {
            // Tutaj podmieniam tylko gre, ktora aktualnie edytuje
            return {
              ...gra,
              ...daneGry,
            };
          }

          return gra;
        });
      });

      ustawEdytowanaGre(null);
      return;
    }

    // Tutaj skladam nowy obiekt gry przed dodaniem go do listy
    const nowaGra = {
      id: generujId(),
      ...daneGry,
    };

    ustawGry((poprzednieGry) => [nowaGra, ...poprzednieGry]);
  }

  function rozpocznijEdycje(idGry) {
    // Tutaj wyszukuje gre po id, zeby wstawic jej dane do formularza
    const znalezionaGra = gry.find((gra) => gra.id === idGry);

    if (!znalezionaGra) {
      return;
    }

    ustawEdytowanaGre(znalezionaGra);

    // Tutaj przewijam strone do formularza edycji
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function anulujEdycje() {
    ustawEdytowanaGre(null);
  }

  function otworzPotwierdzenieUsuwania(idGry) {
    ustawIdGryDoUsuniecia(idGry);
  }

  function anulujUsuwanie() {
    ustawIdGryDoUsuniecia(null);
  }

  function potwierdzUsuniecie() {
    // Tutaj usuwam z listy tylko gre o zapamietanym id
    ustawGry((poprzednieGry) => {
      return poprzednieGry.filter((gra) => gra.id !== idGryDoUsuniecia);
    });

    if (edytowanaGra?.id === idGryDoUsuniecia) {
      // Tutaj zamykam tez edycje, jesli usunalem aktualnie edytowana gre
      ustawEdytowanaGre(null);
    }

    ustawIdGryDoUsuniecia(null);
  }

  function zmienStatusGry(idGry) {
    // Tutaj zmieniam status tylko wybranej gry
    ustawGry((poprzednieGry) => {
      return poprzednieGry.map((gra) => {
        if (gra.id === idGry) {
          return {
            ...gra,
            status: pobierzNastepnyStatus(gra.status),
          };
        }

        return gra;
      });
    });
  }

  function przelaczUlubiona(idGry) {
    // Tutaj przelaczam wartosc ulubionej gry na przeciwna
    ustawGry((poprzednieGry) => {
      return poprzednieGry.map((gra) => {
        if (gra.id === idGry) {
          return {
            ...gra,
            ulubiona: !gra.ulubiona,
          };
        }

        return gra;
      });
    });
  }

  function wyczyscFiltry() {
    ustawFiltry(poczatkoweFiltry);
  }

  function przywrocDaneStartowe() {
    // Tutaj przywracam startowe gry, filtry i zamykam aktywne akcje
    ustawGry(poczatkoweGry);
    ustawFiltry(poczatkoweFiltry);
    ustawEdytowanaGre(null);
    ustawIdGryDoUsuniecia(null);
  }

  function przelaczTryb() {
    ustawTrybCiemny((poprzedniTryb) => !poprzedniTryb);
  }

  return (
    <div className={trybCiemny ? "aplikacja" : "aplikacja aplikacja--jasna"}>
      <div className="kontener">
        <Naglowek
          trybCiemny={trybCiemny}
          przelaczTryb={przelaczTryb}
          przywrocDaneStartowe={przywrocDaneStartowe}
          liczbaWszystkichGier={gry.length}
          liczbaWidocznychGier={widoczneGry.length}
        />

        <main className="siatka-aplikacji">
          <section className="kolumna-boczna">
            <FormularzGry
              zapiszGre={zapiszGre}
              edytowanaGra={edytowanaGra}
              anulujEdycje={anulujEdycje}
            />
            <StatystykiGier statystyki={statystyki} />
          </section>

          <section className="kolumna-glowna">
            <PanelFiltrow
              filtry={filtry}
              ustawFiltry={ustawFiltry}
              wyczyscFiltry={wyczyscFiltry}
              liczbaWidocznychGier={widoczneGry.length}
            />

            <ListaGier
              gry={widoczneGry}
              rozpocznijEdycje={rozpocznijEdycje}
              otworzPotwierdzenieUsuwania={otworzPotwierdzenieUsuwania}
              zmienStatusGry={zmienStatusGry}
              przelaczUlubiona={przelaczUlubiona}
              czyFiltryAktywne={filtryAktywne}
              wyczyscFiltry={wyczyscFiltry}
            />
          </section>
        </main>
      </div>

      <ModalPotwierdzenia
        czyWidoczny={Boolean(idGryDoUsuniecia)}
        anuluj={anulujUsuwanie}
        potwierdz={potwierdzUsuniecie}
      />
    </div>
  );
}

export default App;
