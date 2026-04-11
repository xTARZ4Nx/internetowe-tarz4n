# Opis zadania LaTeX - przygotowanie do obrony

Ten dokument ma Ci pomoc wyjasnic projekt wykladowcy: co robi aplikacja, jak dziala kod i dlaczego dane rozwiazania sa poprawne.

## 1. O co chodzi w zadaniu

Celem laboratorium jest pokazanie, ze umiesz:
- pobierac dane matematyczne z formularzy HTML,
- dynamicznie liczyc wyniki po kazdej zmianie danych,
- pokazywac **pelny tok obliczen** krok po kroku,
- wyswietlac wzory matematyczne przez LaTeX (MathJax),
- obsluzyc bledne dane i przypadki szczegolne.

W projekcie sa zrobione **3 typy zadan**:
1. Uklad rownan liniowych 2x2 i 3x3 metoda Gaussa
2. Wyznacznik macierzy 2x2 i 3x3
3. Macierz odwrotna 2x2 i 3x3

## 2. Struktura plikow

- `index.html` - interfejs (sekcje, formularze, miejsca na wyniki)
- `style.css` - wyglad i responsywnosc
- `script.js` - cala logika matematyczna i dynamiczna aktualizacja

## 3. Jak dziala aplikacja (high-level)

Po zaladowaniu strony wywoluje sie `init()`:
- budowane sa pola dla wyznacznika (`2x2` albo `3x3`),
- budowane sa pola dla macierzy odwrotnej (`2x2` albo `3x3`),
- podpiete sa eventy `input` i `change`,
- od razu liczone sa wszystkie trzy zadania (`updateAll()`).

To znaczy, ze uzytkownik nie musi klikac "Oblicz".
Kazda zmiana liczby od razu odswieza wynik i kroki.

## 4. Opis kodu JavaScript

### 4.1 Funkcje organizacyjne

- `init()` - start aplikacji
- `addListeners()` - podpiecie zdarzen:
  - `gaussForm -> updateGauss`
  - `detForm -> updateDeterminant`
  - `invForm -> updateInverse`
  - `detSize -> przebudowanie formularza i ponowne liczenie`
- `updateAll()` - uruchamia wszystkie trzy obliczenia

### 4.2 Zadanie 1 - Gauss 2x2 i 3x3 (`updateGauss`)

Algorytm 2x2:
1. Pobranie 6 liczb: `a11, a12, b1, a21, a22, b2`
2. Wyswietlenie ukladu startowego
3. Sprawdzenie pivota (`a11`):
   - jesli `a11=0`, probujemy zamienic wiersze R1 <-> R2
   - jesli nadal pivot zerowy (i `a21=0`), nie da sie zaczac eliminacji
4. Eliminacja x z drugiego wiersza:
   - mnoznik `m = a21/a11`
   - `R2 <- R2 - m*R1`
5. Sprawdzenie przypadkow szczegolnych:
   - `a22=0` i `b2=0` -> nieskonczenie wiele rozwiazan
   - `a22=0` i `b2!=0` -> uklad sprzeczny, brak rozwiazan
6. Gdy uklad normalny:
   - `y = b2/a22`
   - `x = (b1 - a12*y)/a11`
7. Wyswietlenie wyniku i komentarza

Algorytm 3x3:
1. Budujemy macierz rozszerzona 3x4 z formularza.
2. Robimy eliminacje Gaussa kolumna po kolumnie (z zamiana wierszy, gdy pivot=0).
3. Po postaci schodkowej sprawdzamy rangi:
   - rank(A) < rank([A|b]) -> brak rozwiazan
   - rank(A) < 3 i rank(A)=rank([A|b]) -> nieskonczenie wiele rozwiazan
   - rank(A)=3 -> jedno rozwiazanie
4. Dla przypadku jednoznacznego liczymy `x,y,z` podstawianiem wstecznym.

### 4.3 Zadanie 2 - Wyznacznik (`updateDeterminant`)

#### Dla 2x2:
- wzor: `det(A)=ad-bc`
- wyswietlane sa wszystkie kroki i podstawienie wartosci

#### Dla 3x3:
- metoda Sarrusa:
  - liczona suma przekatnych "w dol" = `S1`
  - liczona suma przekatnych "w gore" = `S2`
  - wynik: `det(A)=S1-S2`
- kroki sa opisane slownie i wzorami LaTeX

### 4.4 Zadanie 3 - Macierz odwrotna 2x2 i 3x3 (`updateInverse`)

Algorytm 2x2:
1. Pobranie 4 liczb macierzy
2. Liczenie wyznacznika: `det(A)=ad-bc`
3. Warunek odwracalnosci:
   - jesli `det(A)=0`, macierz nie ma odwrotnej
4. Gdy `det(A)!=0`:
   - wzor:
     `A^{-1} = (1/det(A)) * [[d, -b],[-c, a]]`
5. Wyliczenie elementow wyniku i pokazanie finalnej macierzy odwrotnej

Algorytm 3x3:
1. Odczyt 9 elementow macierzy
2. Liczenie wyznacznika det(A)
3. Sprawdzenie odwracalnosci (`det(A) != 0`)
4. Obliczenie macierzy kofaktorow C
5. Transpozycja C do postaci `adj(A)`
6. Podzielenie `adj(A)` przez `det(A)`:
   `A^{-1} = (1/det(A)) * adj(A)`

## 5. Funkcje pomocnicze

- `readNumberFromForm(form, name)` - bezpieczny odczyt liczby z formularza
- `fmt(value)` - zaokraglanie do 4 miejsc po przecinku
- `isZero(v)` - porownanie z zerem przez epsilon `1e-10` (bezpieczniejsze dla float)
- `latexBlock(content)` - opakowanie wzoru do `\\[ ... \\]`
- `typesetMath()` - ponowne renderowanie MathJax po zmianie HTML

## 6. Dlaczego MathJax?

Wzory sa zapisywane jako tekst LaTeX, ale przegladarka sama ich nie narysuje.
MathJax zamienia te ciagi na czytelny zapis matematyczny (SVG), dlatego:
- obliczenia wygladaja profesjonalnie,
- latwiej przedstawic tok rozwiazania.

## 7. Obsluga bledow i przypadkow brzegowych

W projekcie obsluzono:
- puste/niepoprawne pola (komunikat o bledzie),
- brak mozliwosci rozpoczecia eliminacji w Gaussie,
- uklad sprzeczny i nieskonczenie wiele rozwiazan,
- macierz nieodwracalna (`det=0`).

## 8. Responsywnosc i UI

W CSS:
- `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` dla paneli
- media query:
  - do `920px` wszystko przechodzi ladnie na 1 kolumne
  - do `560px` formularz gaussa ma 2 kolumny

Dzieki temu aplikacja dziala i na desktopie, i na telefonie.

## 9. Potencjalne pytania od wykladowcy (i gotowe odpowiedzi)

1. **Czemu aktualizujesz po `input`, a nie po przycisku?**  
   Bo wymaganie mowi o dynamicznej aktualizacji po zmianie danych.

2. **Po co `typesetMath()` po kazdym liczeniu?**  
   Bo wynik jest wstawiany przez `innerHTML`, a MathJax musi ponownie przeliczyc wzory.

3. **Po co `isZero` z epsilonem?**  
   Zeby uniknac bledow porownania float (np. 0.0000000001 zamiast 0).

4. **Dlaczego dodales tez odwrotna 3x3?**  
   Zeby podniesc stopien trudnosci. Wymaganie dopuszcza 2x2 lub 3x3, a 3x3 jest trudniejsze i zwykle lepiej punktowane.

5. **Czy sa pokazane kroki, a nie sam wynik?**  
   Tak, kazda sekcja ma komentarze "krok 1, krok 2..." + wzory LaTeX.

6. **Jak obslugujesz bledne dane?**  
   Każdy modul sprawdza `Number.isNaN` i wyswietla czytelny komunikat, zamiast przerywac dzialanie.

7. **Skad metoda Sarrusa?**  
   To standardowa metoda wyznacznika 3x3, szybka do pokazania krok po kroku w aplikacji.

## 10. Co mozna rozbudowac (jesli zapyta)

- rozbudowa o uklad Gaussa 3x3,
- dodanie eksportu krokow do PDF,
- dodanie historii ostatnich obliczen,
- walidacja zakresu wartosci i lepsze komunikaty dydaktyczne.

---

## Krotkie podsumowanie "na obrone"

To jest aplikacja webowa z trzema typami zadan matematycznych.
Uzytkownik wpisuje dane w formularzu, a wynik i pelny tok rozwiazania aktualizuja sie dynamicznie.
Wzory sa renderowane przez MathJax z zapisu LaTeX.
Kod obsluguje przypadki szczegolne i bledne dane, a interfejs jest responsywny.
