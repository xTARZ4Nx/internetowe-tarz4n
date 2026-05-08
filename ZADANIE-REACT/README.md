# Menedżer gier - projekt zaliczeniowy React

## Opis projektu

Projekt przedstawia jednostronicową aplikację internetową napisaną w bibliotece React. Aplikacja służy do zarządzania kolekcją gier i została przygotowana jako SPA, czyli działa bez przeładowywania strony.

Użytkownik może dodawać nowe gry, edytować istniejące wpisy, usuwać elementy, zmieniać status gry, oznaczać gry jako ulubione oraz korzystać z wyszukiwania, filtrowania, sortowania i statystyk. Dane są zapisywane w `localStorage`, dzięki czemu nie znikają po odświeżeniu strony.

## Zakres funkcjonalny

Aplikacja umożliwia:

- wyświetlanie listy gier zapisanej w tablicy obiektów
- start z 8 przykładowymi elementami
- dodawanie nowych gier przez formularz kontrolowany
- walidację formularza i wyświetlanie komunikatów błędów
- edycję istniejących gier
- usuwanie gry z potwierdzeniem
- zmianę statusu gry
- oznaczanie gry jako ulubionej
- wyszukiwanie po nazwie, opisie lub platformie
- filtrowanie po gatunku, statusie i ulubionych
- sortowanie danych według nazwy, ceny, daty premiery i oceny
- wyświetlanie podstawowych statystyk kolekcji
- zapis danych w `localStorage`
- zapis filtrów i motywu w `localStorage`
- przełączanie motywu jasny/ciemny
- przywracanie danych startowych
- responsywny interfejs

## Technologie wykorzystane w projekcie:

- React
- Vite
- JavaScript
- CSS
- `localStorage`

## Struktura projektu

W projekcie zostały wydzielone następujące katalogi:

- `src/components` - komponenty interfejsu
- `src/data` - dane startowe aplikacji
- `src/hooks` - własny hook `useLocalStorage`
- `src/utils` - stałe i funkcje pomocnicze

## Najważniejsze pliki projektu

- `package.json` - konfiguracja projektu oraz skrypty uruchamiania
- `package-lock.json` - zapis zainstalowanych zależności
- `README.md` - opis projektu i instrukcja uruchomienia
- `index.html` - główny plik HTML
- `vite.config.js` - konfiguracja środowiska Vite
- `src/main.jsx` - punkt wejścia aplikacji
- `src/App.jsx` - główny komponent aplikacji
- `src/components/*` - komponenty widoku
- `src/data/poczatkoweGry.js` - przykładowe dane startowe
- `src/hooks/useLocalStorage.js` - własny hook do zapisu danych
- `src/utils/stale.js` - stałe wykorzystywane w aplikacji
- `src/utils/operacjeNaGrach.js` - funkcje do filtrowania, sortowania i obliczania statystyk
- `src/index.css` - style aplikacji

## Jak uruchomić projekt

1. Otworzyć terminal w folderze projektu
2. Zainstalować zależności:

```bash
npm install
```

3. Uruchomić projekt w trybie developerskim:

```bash
npm run dev
```

4. Otworzyć adres wyświetlony w terminalu, najczęściej:

```text
http://localhost:5173
```

## Jak zbudować projekt

Aby zbudować wersję produkcyjną, należy wykonać komendę:

```bash
npm run build
```

Po wykonaniu tej komendy gotowe pliki zostaną zapisane w folderze `dist`.

## Dane pojedynczego obiektu

Każda gra w aplikacji zawiera następujące pola:

- `id`
- `nazwa`
- `gatunek`
- `platforma`
- `status`
- `dataPremiery`
- `cena`
- `ocena`
- `ulubiona`
- `opis`

## Spełnienie wymagań zadania

Projekt spełnia wymagania z treści zadania, w tym:

- podział aplikacji na więcej niż 5 sensownych komponentów
- przechowywanie danych w tablicy obiektów
- co najmniej 8 elementów startowych
- formularz kontrolowany
- walidację formularza
- dodawanie, edycję, usuwanie i zmianę statusu
- wyszukiwanie, filtrowanie i sortowanie
- statystyki
- zapis danych w `localStorage`
- wykorzystanie `useState` oraz `useEffect`
- responsywny i estetyczny interfejs

Dodatkowo zostały zrealizowane elementy mile widziane:

- potwierdzenie usuwania
- pełna edycja elementów
- tryb jasny i ciemny
- zapis ustawień filtrów
- własny hook
- czytelny podział plików na katalogi