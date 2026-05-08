function KartaGry({
  gra,
  rozpocznijEdycje,
  otworzPotwierdzenieUsuwania,
  zmienStatusGry,
  przelaczUlubiona,
}) {
  const sformatowanaData = new Date(gra.dataPremiery).toLocaleDateString("pl-PL");

  return (
    <article className="karta-gry">
      <div className="karta-gry__naglowek">
        <div>
          <h3>{gra.nazwa}</h3>
          <p className="opis-karty">{gra.opis}</p>
        </div>

        <button
          className={`przycisk-ikona ${gra.ulubiona ? "przycisk-ikona--aktywny" : ""}`}
          onClick={() => przelaczUlubiona(gra.id)}
          title="Przelacz ulubiona"
        >
          {gra.ulubiona ? "★" : "☆"}
        </button>
      </div>

      <div className="lista-znacznikow">
        <span className="znacznik">{gra.gatunek}</span>
        <span className="znacznik">{gra.platforma}</span>
        <span className="znacznik znacznik--status">{gra.status}</span>
      </div>

      <dl className="szczegoly-gry">
        <div>
          <dt>Data premiery</dt>
          <dd>{sformatowanaData}</dd>
        </div>
        <div>
          <dt>Cena</dt>
          <dd>{gra.cena.toFixed(2)} zl</dd>
        </div>
        <div>
          <dt>Ocena</dt>
          <dd>{gra.ocena} / 10</dd>
        </div>
      </dl>

      <div className="grupa-przyciskow grupa-przyciskow--karta">
        <button
          className="przycisk przycisk--glowny"
          onClick={() => zmienStatusGry(gra.id)}
        >
          Zmien status
        </button>
        <button
          className="przycisk przycisk--drugi"
          onClick={() => rozpocznijEdycje(gra.id)}
        >
          Edytuj
        </button>
        <button
          className="przycisk przycisk--niebezpieczny"
          onClick={() => otworzPotwierdzenieUsuwania(gra.id)}
        >
          Usun
        </button>
      </div>
    </article>
  );
}

export default KartaGry;
