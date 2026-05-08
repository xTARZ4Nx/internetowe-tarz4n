import { useEffect, useState } from "react";

export function useLocalStorage(klucz, wartoscStartowa) {
  // Tutaj przy pierwszym uruchomieniu probuje pobrac dane z localStorage
  const [wartosc, setWartosc] = useState(() => {
    try {
      const zapisanaWartosc = localStorage.getItem(klucz);

      if (zapisanaWartosc) {
        // Tutaj zamieniam tekst z localStorage z powrotem na obiekt lub tablice
        return JSON.parse(zapisanaWartosc);
      }

      return wartoscStartowa;
    } catch (blad) {
      console.error("Nie udalo sie odczytac danych z localStorage.", blad);
      return wartoscStartowa;
    }
  });

  useEffect(() => {
    try {
      // Tutaj zapisuje kazda zmiane pod wskazanym kluczem
      localStorage.setItem(klucz, JSON.stringify(wartosc));
    } catch (blad) {
      console.error("Nie udalo sie zapisac danych do localStorage.", blad);
    }
  }, [klucz, wartosc]);

  return [wartosc, setWartosc];
}
