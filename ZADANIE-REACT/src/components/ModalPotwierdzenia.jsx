function ModalPotwierdzenia({ czyWidoczny, anuluj, potwierdz }) {
  if (!czyWidoczny) {
    return null;
  }

  return (
    <div className="tlo-modala">
      <div className="modal-potwierdzenia">
        <p className="etykieta-sekcji">Potwierdzenie</p>
        <h2>Czy na pewno chcesz usunac te gre?</h2>
        <p className="opis-bloku">
          Ta operacja usunie element z listy oraz z localStorage.
        </p>

        <div className="grupa-przyciskow">
          <button className="przycisk przycisk--drugi" onClick={anuluj}>
            Anuluj
          </button>
          <button className="przycisk przycisk--niebezpieczny" onClick={potwierdz}>
            Tak, usun gre
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPotwierdzenia;
