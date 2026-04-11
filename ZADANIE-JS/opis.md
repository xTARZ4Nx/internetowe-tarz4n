Zadanie laboratorium 3 [5 pkt] (HTML+CSS+JavaScript) [22.03.2026 r.]

Stworzyć aplikację internetową symulującą system rezerwacji miejsc w kinie.

Aplikacja powinna pozwalać użytkownikowi na wybór miejsc, rezerwację, anulowanie rezerwacji oraz podgląd podstawowych statystyk.

Wymagane funkcje:
1) Sala i miejsca:
Na początku aplikacja powinna wyświetlać salę kinową zawierającą co najmniej 30 miejsc.
Miejsca powinny być wygenerowane dynamicznie w JavaScript na podstawie danych zapisanych w tablicy obiektów.
Każde miejsce powinno mieć numer i stan, np. wolne / wybrane / zarezerwowane.

2) Wybór miejsc:
Użytkownik może kliknąć wolne miejsce, aby je zaznaczyć.
Ponowne kliknięcie zaznaczonego miejsca powinno je odznaczyć.
Miejsca zarezerwowane nie mogą być ponownie wybierane.
Stany miejsc muszą być wyraźnie odróżnione wizualnie.

3) Formularz rezerwacji:
Użytkownik powinien mieć formularz umożliwiający podanie co najmniej:
- imienia lub nazwy rezerwacji,
- rodzaju biletu (np. normalny / ulgowy / studencki).
Po zatwierdzeniu formularza zaznaczone miejsca zmieniają stan na zarezerwowane.

4) Anulowanie rezerwacji:
Użytkownik może anulować rezerwację miejsca.
Można to zrealizować np. przez:
- podanie numeru miejsca,
albo
- kliknięcie zarezerwowanego miejsca i użycie przycisku „Anuluj”.
Po anulowaniu miejsce wraca do stanu wolnego.

5) Statystyki i cena:
Aplikacja powinna na bieżąco pokazywać:
- liczbę miejsc wolnych,
- liczbę miejsc wybranych,
- liczbę miejsc zarezerwowanych,
- łączną cenę aktualnie wybranych miejsc.
Cena powinna zależeć od wybranego rodzaju biletu.

6) Ograniczenia i walidacja:
- Jednorazowo można zarezerwować maksymalnie 5 miejsc.
- Nie można zatwierdzić rezerwacji bez wybrania miejsca.
- Nie można zatwierdzić rezerwacji bez wypełnienia wymaganych pól formularza.
- Aplikacja powinna wyświetlać czytelne komunikaty o błędach i powodzeniu operacji.
- Całość powinna działać bez przeładowywania strony.

Ćwiczymy:
a) Składnię języka JavaScript: zmienne, instrukcje warunkowe, pętle, funkcje.
b) Manipulację DOM (tworzenie, zmiana i usuwanie elementów oraz zmiana klas i treści).
c) Obsługę zdarzeń (kliknięcia, wysłanie formularza, reakcja na działania użytkownika).
d) Pracę na tablicach i obiektach.
e) Walidację formularzy i organizację logiki programu.

Uwagi:
- Aplikacja ma być wykonana samodzielnie, bez użycia frameworków i gotowych bibliotek do budowy interfejsu.
- Kod HTML, CSS i JavaScript ma być czytelny i uporządkowany.
- Interfejs powinien jasno pokazywać aktualny stan miejsc.
- Dopuszczalne jest rozszerzenie aplikacji o dodatkowe funkcje, np. reset sali, filtrowanie rzędów, wyróżnienie miejsc VIP, zapis danych w localStorage.
- Alternatywnie można wymyślić własną aplikację JavaScript podobnego stopnia trudności.
- Wymagana nazwa pliku z archiwum: zad3_javascript_nazwisko_nrindeksu.zip
- Termin realizacji: 13 dni,ostatni dzień godz. 23:59.