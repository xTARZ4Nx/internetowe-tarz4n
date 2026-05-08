function Naglowek({
  trybCiemny,
  przelaczTryb,
  przywrocDaneStartowe,
  liczbaWszystkichGier,
  liczbaWidocznychGier,
}) {
  return (
    <header className="karta-blok naglowek">
      <div className="naglowek__gora">
        <div>
          <p className="etykieta-sekcji">React + Vite</p>
          <h1>Menedżer gier</h1>
          <p className="opis-bloku">
            Aplikacja do zarzadzania kolekcja gier z formularzem, filtrowaniem,
            statystykami i zapisem danych w localStorage.
          </p>
        </div>

        <div className="naglowek__akcje">
          <button className="przycisk przycisk--drugi" onClick={przywrocDaneStartowe}>
            Przywroc dane startowe
          </button>
          <button className="przycisk przycisk--drugi" onClick={przelaczTryb}>
            {trybCiemny ? "Przelacz na jasny motyw" : "Przelacz na ciemny motyw"}
          </button>
        </div>
      </div>

      <div className="naglowek__statystyki">
        <div className="mini-kafelek">
          <span>Wszystkie gry</span>
          <strong>{liczbaWszystkichGier}</strong>
        </div>
        <div className="mini-kafelek">
          <span>Widoczne po filtrach</span>
          <strong>{liczbaWidocznychGier}</strong>
        </div>
      </div>
    </header>
  );
}

export default Naglowek;
