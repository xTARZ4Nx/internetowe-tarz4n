import { useEffect, useState } from "react";
import { gatunkiGier, platformyGier, statusyGier } from "../utils/stale";

const pustyFormularz = {
  nazwa: "",
  gatunek: gatunkiGier[0],
  platforma: platformyGier[0],
  status: statusyGier[0],
  dataPremiery: "",
  cena: "",
  ocena: 5,
  ulubiona: false,
  opis: "",
};

function FormularzGry({ zapiszGre, edytowanaGra, anulujEdycje }) {
  // Tutaj trzymam wszystkie pola kontrolowanego formularza
  const [formularz, setFormularz] = useState(pustyFormularz);

  // Tutaj trzymam bledy walidacji, zebym mogl je pokazac pod polami
  const [bledy, setBledy] = useState({});

  useEffect(() => {
    // Tutaj uzupelniam formularz danymi gry, jesli wlaczylem edycje
    if (edytowanaGra) {
      setFormularz({
        nazwa: edytowanaGra.nazwa,
        gatunek: edytowanaGra.gatunek,
        platforma: edytowanaGra.platforma,
        status: edytowanaGra.status,
        dataPremiery: edytowanaGra.dataPremiery,
        cena: String(edytowanaGra.cena),
        ocena: edytowanaGra.ocena,
        ulubiona: edytowanaGra.ulubiona,
        opis: edytowanaGra.opis,
      });
    } else {
      setFormularz(pustyFormularz);
    }

    setBledy({});
  }, [edytowanaGra]);

  function obsluzZmiane(event) {
    const { name, value, type, checked } = event.target;

    setFormularz((poprzedniFormularz) => {
      return {
        ...poprzedniFormularz,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function walidujFormularz() {
    // Tutaj sprawdzam, czy wszystkie najwazniejsze pola maja poprawne wartosci
    const noweBledy = {};

    if (formularz.nazwa.trim().length < 2) {
      noweBledy.nazwa = "Nazwa gry musi miec przynajmniej 2 znaki.";
    }

    if (!formularz.dataPremiery) {
      noweBledy.dataPremiery = "Podaj date premiery.";
    }

    if (formularz.cena === "" || Number(formularz.cena) < 0) {
      noweBledy.cena = "Cena nie moze byc pusta ani ujemna.";
    }

    if (Number(formularz.ocena) < 1 || Number(formularz.ocena) > 10) {
      noweBledy.ocena = "Ocena musi byc z zakresu od 1 do 10.";
    }

    if (formularz.opis.trim().length < 10) {
      noweBledy.opis = "Opis musi miec przynajmniej 10 znakow.";
    }

    return noweBledy;
  }

  function obsluzWyslanie(event) {
    // Tutaj blokuje domyslne przeladowanie strony po wyslaniu formularza
    event.preventDefault();

    const noweBledy = walidujFormularz();

    if (Object.keys(noweBledy).length > 0) {
      // Tutaj zapisuje znalezione bledy i zatrzymuje dalszy zapis
      setBledy(noweBledy);
      return;
    }

    // Tutaj przekazuje gotowe dane do komponentu App
    zapiszGre({
      ...formularz,
      cena: Number(formularz.cena),
      ocena: Number(formularz.ocena),
      nazwa: formularz.nazwa.trim(),
      opis: formularz.opis.trim(),
    });

    // Tutaj czyszcze formularz po dodaniu nowej gry, zebym mogl od razu wpisac kolejna
    if (!edytowanaGra) {
      setFormularz(pustyFormularz);
      setBledy({});
    }
  }

  function wyczyscFormularz() {
    // Tutaj przywracam poczatkowe wartosci wszystkich pol
    setFormularz(pustyFormularz);
    setBledy({});

    if (edytowanaGra) {
      // Tutaj wychodze tez z trybu edycji, jesli czyszcze formularz podczas edycji
      anulujEdycje();
    }
  }

  return (
    <section className="karta-blok">
      <div className="naglowek-bloku">
        <div>
          <p className="etykieta-sekcji">
            {edytowanaGra ? "Tryb edycji" : "Nowa gra"}
          </p>
          <h2>{edytowanaGra ? "Edytuj gre" : "Dodaj nowa gre"}</h2>
        </div>
        {edytowanaGra && (
          <button className="przycisk przycisk--tekst" onClick={anulujEdycje}>
            Anuluj edycje
          </button>
        )}
      </div>

      <form className="formularz" onSubmit={obsluzWyslanie}>
        <div className="formularz__siatka">
          <label className="etykieta-pola">
            <span>Nazwa gry</span>
            <input
              type="text"
              name="nazwa"
              value={formularz.nazwa}
              onChange={obsluzZmiane}
              placeholder="Np. Hollow Knight"
            />
            {bledy.nazwa && <small className="blad-pola">{bledy.nazwa}</small>}
          </label>

          <label className="etykieta-pola">
            <span>Gatunek</span>
            <select
              name="gatunek"
              value={formularz.gatunek}
              onChange={obsluzZmiane}
            >
              {gatunkiGier.map((gatunek) => (
                <option key={gatunek} value={gatunek}>
                  {gatunek}
                </option>
              ))}
            </select>
          </label>

          <label className="etykieta-pola">
            <span>Platforma</span>
            <select
              name="platforma"
              value={formularz.platforma}
              onChange={obsluzZmiane}
            >
              {platformyGier.map((platforma) => (
                <option key={platforma} value={platforma}>
                  {platforma}
                </option>
              ))}
            </select>
          </label>

          <label className="etykieta-pola">
            <span>Status</span>
            <select
              name="status"
              value={formularz.status}
              onChange={obsluzZmiane}
            >
              {statusyGier.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>

          <label className="etykieta-pola">
            <span>Data premiery</span>
            <input
              type="date"
              name="dataPremiery"
              value={formularz.dataPremiery}
              onChange={obsluzZmiane}
            />
            {bledy.dataPremiery && (
              <small className="blad-pola">{bledy.dataPremiery}</small>
            )}
          </label>

          <label className="etykieta-pola">
            <span>Cena w PLN</span>
            <input
              type="number"
              name="cena"
              value={formularz.cena}
              onChange={obsluzZmiane}
              min="0"
              step="0.01"
            />
            {bledy.cena && <small className="blad-pola">{bledy.cena}</small>}
          </label>

          <label className="etykieta-pola">
            <span>Ocena od 1 do 10</span>
            <input
              type="number"
              name="ocena"
              value={formularz.ocena}
              onChange={obsluzZmiane}
              min="1"
              max="10"
            />
            {bledy.ocena && <small className="blad-pola">{bledy.ocena}</small>}
          </label>

          <label className="etykieta-pola">
            <span>Oznacz jako ulubiona</span>
            <div className="pole-przelacznika">
              <span
                className={`przelacznik ${formularz.ulubiona ? "przelacznik--aktywny" : ""}`}
              >
                <input
                  type="checkbox"
                  name="ulubiona"
                  checked={formularz.ulubiona}
                  onChange={obsluzZmiane}
                />
                <span className="przelacznik__suwak" />
              </span>
            </div>
          </label>

          <label className="etykieta-pola etykieta-pola--pelna">
            <span>Krotki opis</span>
            <textarea
              name="opis"
              value={formularz.opis}
              onChange={obsluzZmiane}
              rows="4"
              placeholder="Napisz kilka zdan o grze."
            />
            {bledy.opis && <small className="blad-pola">{bledy.opis}</small>}
          </label>
        </div>

        <div className="grupa-przyciskow">
          <button className="przycisk przycisk--glowny" type="submit">
            {edytowanaGra ? "Zapisz zmiany" : "Dodaj gre"}
          </button>
          <button
            className="przycisk przycisk--drugi"
            type="button"
            onClick={wyczyscFormularz}
          >
            Wyczyść formularz
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormularzGry;
