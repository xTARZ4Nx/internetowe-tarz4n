# Wykonane prace

Przygotowano prostą aplikację internetową w HTML CSS i JavaScript, która zamienia system rezerwacji miejsc w kinie na system wypożyczania samochodów.

## Spełnione wymagania

- Zamiast miejsc kinowych przygotowano listę 10 samochodów do wypożyczenia.
- Samochody są generowane dynamicznie w JavaScript z tablicy obiektów.
- Każdy samochód ma numer, nazwę, stan, cenę, typ, rok produkcji, skrzynię biegów oraz dane techniczne silnika.
- Dla każdego samochodu dodano osobny podgląd ze zdjęciem z folderu `img_cars`.
- Dostępne są trzy główne stany samochodu: `wolny`, `wybrany`, `wypożyczony`.
- Kliknięcie wolnego samochodu zaznacza go do wypożyczenia.
- Ponowne kliknięcie wybranego samochodu odznacza go.
- Samochód wypożyczony nie może zostać ponownie wybrany do wypożyczenia.
- Stany samochodów są czytelnie rozróżnione wizualnie.
- Dodano formularz wypożyczenia z polem na imię lub nazwę rezerwacji.
- Dodano wybór rodzaju wypożyczenia: `Standard 1 dzień`, `Weekend 2 dni`, `Premium 3 dni`.
- Po zatwierdzeniu formularza wybrane samochody zmieniają stan na `wypożyczony`.
- Dodano anulowanie wypożyczenia po numerze samochodu.
- Po anulowaniu samochód wraca do stanu `wolny`.
- Na bieżąco wyświetlane są statystyki: liczba samochodów wolnych, liczba samochodów wybranych, liczba samochodów wypożyczonych oraz łączna cena aktualnie wybranych samochodów.
- Łączna cena zmienia się po wybraniu samochodów i zależy od rodzaju wypożyczenia.
- Dodano ograniczenie maksymalnie 5 samochodów w jednym wypożyczeniu.
- Dodano walidację formularza i czytelne komunikaty o błędach oraz powodzeniu operacji.
- Całość działa bez przeładowywania strony.
- Układ strony został zmieniony tak, aby podgląd samochodu, formularz, anulowanie i komunikat były po lewej stronie.
- Legenda została przeniesiona na sam dół aplikacji.

## Niespełnione wymagania

- W oryginalnym opisie zadania była sala kinowa z co najmniej 30 miejscami. W tej wersji nie ma 30 elementów, ponieważ zgodnie z Twoją prośbą aplikacja została zmieniona na system wypożyczania 10 samochodów.

## Uwagi

- Zmiana z kina na samochody jest zgodna z uwagą z opisu zadania, że można przygotować własną aplikację JavaScript o podobnym stopniu trudności.
- W danych samochodów podano rok produkcji, moc, moment obrotowy i pojemność silnika.
- Ceny samochodów zostały podzielone na niższą, średnią i luksusową półkę.

## Utworzone i użyte pliki

- `index.html`
- `style.css`
- `script.js`
- `wykonane_prace.md`
