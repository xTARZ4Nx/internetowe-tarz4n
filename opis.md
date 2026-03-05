Zadanie 1 — HTML5 (semantyka + tabele + formularze + a11y)

Proszę przygotować walidującą się stronę internetową w standardzie HTML5 (bez CSS i bez JavaScript), której tematem będzie:

„Moje zainteresowanie / hobby — mini przewodnik”
Strona ma być wykonana jako jedna strona (single-page) i powinna zawierać menu z odwołaniami do sekcji strony (linki do fragmentów dokumentu, nie podstrony).

CEL ZADANIA:
Celem jest pokazanie, że student potrafi:
- zbudować poprawny dokument HTML5,
- zastosować semantyczne znaczniki,
- opisać treść w sposób czytelny i logiczny,
- użyć różnych elementów HTML (tekst, listy, tabele, formularze),
- zadbać o podstawową dostępność (a11y) w samym HTML.

WYMAGANIA OBOWIĄZKOWE (MINIMUM)

1) Struktura i semantyka HTML5
Użyj co najmniej:
- <header>
- <nav>
- <main>
- <section>
- <article>
- <footer>

Dodatkowo mile widziane (wpływa na ocenę): <aside>, <figure>, <figcaption>, <details>, <summary>.

2) Menu nawigacyjne (wewnętrzne)
Strona musi zawierać menu z linkami do sekcji tej samej strony (np.: #o-mnie, #sprzet, #plan, #galeria, #formularz).

Nie tworzymy podstron.

3) Treść i źródła
Temat: Twoje zainteresowania / hobby (np. sport, muzyka, fotografia, podróże, gry planszowe, gotowanie, modelarstwo, itp.).

Obowiązkowo oznacz źródła:
- źródło obrazów,
- źródło cytatów / danych / informacji (jeśli użyte).

Brak oznaczenia źródeł = obniżenie oceny.

4) Elementy HTML, które muszą się pojawić
Proszę „pochwalić się”, że potrafią Państwo użyć:

a) obrazka (<img>)
- z poprawnym alt

b) obramowanego tekstu z nazwą obramowania
- użyj: <fieldset> + <legend>
  (np. ramka „Najważniejsze informacje”)

c) hiperłącza (<a>)
- co najmniej 1 link zewnętrzny + linki wewnętrzne w menu

d) listy definicji (<dl>, <dt>, <dd>)

e) listy zagnieżdżonej (<ul>/<ol> z listą w liście)

f) tabeli danych (<table>)
- z połączeniem co najmniej dwóch komórek (rowspan lub colspan)
- zalecane: caption, th, scope

g) formularza z co najmniej 8 polami różnych typów
- formularz ma zawierać różne kontrolki (np. text, email, date, number, radio, checkbox, select, textarea, file, tel, url, range, itp.)
- użyj label dla pól
- użyj fieldset + legend do grupowania przynajmniej jednej części formularza
- formularz ma mieć method="post"
- jeśli nie ma backendu: można użyć demonstracyjnie action="#"
  (opcjonalnie: mailto: jako wariant demonstracyjny, ale nie jest wymagane)

h) znacznika <pre>
- proszę dobrać sensowny przykład (np. plan treningu, fragment notatki, ASCII-art, skrót komend, rozpiska)

DODATKOWE WYMAGANIA A11Y (OBOWIĄZKOWE, ALE PROSTE)
Bez CSS i JS da się już zrobić sporo dobrze. Proszę pamiętać o:
- lang="pl" w <html>
- meta charset="utf-8"
- sensownym <title>
- alt dla obrazów
- nie używać placeholdera zamiast labela
- czytelnych tekstach linków (nie samo „kliknij tutaj”)
- logicznej hierarchii nagłówków (h1 → h2 → h3)

KRYTERIA OCENY

Ocena podstawowa (50% oceny za zadanie 1):
- strona się waliduje (HTML5),
- zawiera wymagane elementy,
- działa menu wewnętrzne,
- jest jedna strona (single-page),
- są oznaczone źródła.

Wyższa ocena:
Wpływa na nią:
- poprawna semantyka (sensowny dobór section/article/aside/...),
- jakość treści (nie „wypełniacz”),
- poprawność tabeli i formularza,
- podstawy a11y (label, alt, nagłówki, opisy),
- różnorodność użytych elementów HTML,
- estetyka kodu (czytelne wcięcia, komentarze).

Mile widziane:
- użycie <figure>/<figcaption>
- użycie <details>/<summary>
- formularz z sensownymi atrybutami walidacji (required, minlength, min, max, itp.)
- tabela z caption i scope
- komentarze w kodzie wyjaśniające sekcje

WYMAGANIA TECHNICZNE
- Bez CSS i bez JavaScript
- HTML5, walidujący się dokument
- rozwiązanie jako archiwum .zip < 5 MB
- plik główny: index.html
- zasoby (np. obrazy) w osobnym folderze, np. img/

NAZWA ARCHIWUM
zad1_html5_nazwisko_nrindeksu.zip

ZASADY
- Łamanie praw autorskich = -5 pkt
- Praca samodzielna
- Termin: dzień przed najbliższymi laboratoriami godz. 23:59


KRÓTKA WERSJA zadania 1 (jedno zdanie):
Przygotuj jedną walidującą się stronę HTML5 o swoim hobby, z semantyczną strukturą, tabelą, formularzem i podstawami dostępności (a11y), bez CSS i JS.