import KartaGry from "./KartaGry";

function ListaGier({
  gry,
  rozpocznijEdycje,
  otworzPotwierdzenieUsuwania,
  zmienStatusGry,
  przelaczUlubiona,
  czyFiltryAktywne,
  wyczyscFiltry,
}) {
  return (
    <section className="karta-blok">
      <div className="naglowek-bloku">
        <div>
          <p className="etykieta-sekcji">Lista gier</p>
          <h2>Twoja kolekcja</h2>
        </div>
      </div>

      {gry.length === 0 ? (
        <div className="pusty-stan">
          <h3>Brak wynikow do wyswietlenia</h3>
          <p>
            Sprobuj zmienic filtry albo dodaj nowa gre do swojej kolekcji.
          </p>
          {czyFiltryAktywne && (
            <button className="przycisk przycisk--drugi" onClick={wyczyscFiltry}>
              Wyczyść aktywne filtry
            </button>
          )}
        </div>
      ) : (
        <div className="lista-gier">
          {gry.map((gra) => (
            <KartaGry
              key={gra.id}
              gra={gra}
              rozpocznijEdycje={rozpocznijEdycje}
              otworzPotwierdzenieUsuwania={otworzPotwierdzenieUsuwania}
              zmienStatusGry={zmienStatusGry}
              przelaczUlubiona={przelaczUlubiona}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ListaGier;
