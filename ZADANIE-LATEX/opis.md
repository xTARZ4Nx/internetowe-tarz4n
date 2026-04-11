Stworzyć aplikację internetową prezentującą krok po kroku rozwiązanie wybranych zadań matematycznych, z pełnym zapisem wzorów matematycznych w systemie LaTeX.

Cel ćwiczenia:
Celem ćwiczenia jest nauczenie się dynamicznego generowania treści matematycznych na stronie internetowej oraz poprawnego wyświetlania wzorów zapisanych w postaci tekstu w systemie LaTeX.

Wymagania:
Aplikacja powinna umożliwiać wybór co najmniej 2 spośród 3 poniższych typów zadań:

1) Rozwiązywanie układu równań liniowych 2x2 lub 3x3 metodą Gaussa
   - wprowadzanie współczynników przez użytkownika
   - pokazanie kolejnych operacji na wierszach
   - prezentacja rozwiązania końcowego lub informacji o braku/jednoznaczności rozwiązań

2) Obliczanie wyznacznika macierzy 2x2 lub 3x3
   - wprowadzanie elementów macierzy
   - prezentacja kolejnych etapów obliczeń
   - wyświetlenie wyniku końcowego

3) Wyznaczanie macierzy odwrotnej 2x2 lub 3x3
   - sprawdzenie, czy macierz jest odwracalna
   - obliczenie wyznacznika
   - pokazanie kolejnych kroków prowadzących do wyznaczenia macierzy odwrotnej

Wymagania techniczne:
- dane wejściowe muszą być wprowadzane przez formularz HTML
- po zmianie danych wynik i rozwiązanie mają się aktualizować dynamicznie
- rozwiązanie ma zawierać:
  * komentarze słowne
  * pełne obliczenia
  * wzory zapisane w LaTeX
- należy wyświetlać nie tylko wynik końcowy, ale także tok rozwiązania
- należy obsłużyć błędne dane wejściowe
- interfejs powinien być czytelny i estetyczny

Uwagi:
- zalecane jest, aby wybrane zadania były z zakresu uczelni wyższej
- stopień trudności zadania ma wpływ na ocenę
- mile widziane jest dodanie trzeciego typu zadania
- można użyć biblioteki do renderowania LaTeX, np. MathJax lub KaTeX
- wymagana nazwa pliku z archiwum: zad4_latex_nazwisko_nrindeksu.zip