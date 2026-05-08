import { gatunkiGier, opcjeSortowania, statusyGier } from "../utils/stale";

function PanelFiltrow({ filtry, ustawFiltry, wyczyscFiltry, liczbaWidocznychGier }) {
  function obsluzZmiane(event) {
    const { name, value, type, checked } = event.target;

    ustawFiltry((poprzednieFiltry) => {
      return {
        ...poprzednieFiltry,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <section className="karta-blok">
      <div className="naglowek-bloku">
        <div>
          <p className="etykieta-sekcji">Wyszukiwanie i filtry</p>
          <h2>Przegladaj kolekcje</h2>
        </div>
        <button className="przycisk przycisk--tekst" onClick={wyczyscFiltry}>
          Resetuj filtry
        </button>
      </div>

      <div className="formularz__siatka">
        <label className="etykieta-pola etykieta-pola--pelna">
          <span>Wyszukaj po nazwie, opisie lub platformie</span>
          <input
            type="text"
            name="tekst"
            value={filtry.tekst}
            onChange={obsluzZmiane}
            placeholder="Np. RPG, PC albo ulubiona gra"
          />
        </label>

        <label className="etykieta-pola">
          <span>Gatunek</span>
          <select name="gatunek" value={filtry.gatunek} onChange={obsluzZmiane}>
            <option value="wszystkie">Wszystkie</option>
            {gatunkiGier.map((gatunek) => (
              <option key={gatunek} value={gatunek}>
                {gatunek}
              </option>
            ))}
          </select>
        </label>

        <label className="etykieta-pola">
          <span>Status</span>
          <select name="status" value={filtry.status} onChange={obsluzZmiane}>
            <option value="wszystkie">Wszystkie</option>
            {statusyGier.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <label className="etykieta-pola etykieta-pola--pelna">
          <span>Sortowanie</span>
          <select
            name="sortowanie"
            value={filtry.sortowanie}
            onChange={obsluzZmiane}
          >
            {opcjeSortowania.map((opcja) => (
              <option key={opcja.wartosc} value={opcja.wartosc}>
                {opcja.etykieta}
              </option>
            ))}
          </select>
        </label>

        <label className="etykieta-pola etykieta-pola--pelna">
          <span>Pokaz tylko ulubione gry</span>
          <div className="pole-przelacznika">
            <span className={`przelacznik ${filtry.ulubione ? "przelacznik--aktywny" : ""}`}>
              <input
                type="checkbox"
                name="ulubione"
                checked={filtry.ulubione}
                onChange={obsluzZmiane}
              />
              <span className="przelacznik__suwak" />
            </span>
          </div>
        </label>
      </div>

      <p className="podsumowanie-filtra">
        Aktualnie widzisz <strong>{liczbaWidocznychGier}</strong> pozycji.
      </p>
    </section>
  );
}

export default PanelFiltrow;
