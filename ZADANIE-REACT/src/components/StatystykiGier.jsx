function StatystykiGier({ statystyki }) {
  const kafelki = [
    {
      etykieta: "Liczba wszystkich gier",
      wartosc: statystyki.liczbaWszystkichGier,
    },
    {
      etykieta: "Ulubione gry",
      wartosc: statystyki.liczbaUlubionych,
    },
    {
      etykieta: "Gry ukonczone",
      wartosc: statystyki.liczbaUkonczonych,
    },
    {
      etykieta: "Gry w trakcie",
      wartosc: statystyki.liczbaWToku,
    },
    {
      etykieta: "Srednia cena",
      wartosc: `${statystyki.sredniaCena.toFixed(2)} zl`,
    },
    {
      etykieta: "Srednia ocena",
      wartosc: `${statystyki.sredniaOcena.toFixed(1)} / 10`,
    },
    {
      etykieta: "Najczestszy gatunek",
      wartosc: statystyki.najczestszyGatunek,
    },
  ];

  return (
    <section className="karta-blok">
      <div className="naglowek-bloku">
        <div>
          <p className="etykieta-sekcji">Statystyki</p>
          <h2>Szybki podglad danych</h2>
        </div>
      </div>

      <div className="siatka-statystyk">
        {kafelki.map((kafelek) => (
          <article className="mini-kafelek mini-kafelek--duzy" key={kafelek.etykieta}>
            <span>{kafelek.etykieta}</span>
            <strong>{kafelek.wartosc}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatystykiGier;
