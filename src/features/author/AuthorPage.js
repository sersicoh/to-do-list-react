import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Wojciech Szymczak"
            body={<>
                <p>
                    Urodziłem się na wsi gdzie spędziłem 16 lat po czym wyjechałem do Ostrowa Wlkp. w celu rozpoczęcia
                    szkoły średniej i pierwszej poważnej pracy w wieku 17 lat tj. <strong>skład DTP Gazety "Nasz Rynek"</strong>. Po zdaniu
                    matury przyszedł czas na większe miasto czyli Wrocław, w którym mieszkam obecnie. W 2013 wyjechałem na
                    emigrację do Anglii, ale wróciłem na dobre w 2017.
                </p>
                <p>
                    Aktualnie pracuję jako "mechanik / programista". Pokrótce jestem mechanikiem w dziale utrzymania ruchu w
                    firmie zajmującej się produkcją i dystrybucją dekoracji ściennych domowych. Jestem odpowiedzialny za
                    stan maszyn produkcyjnych, głównie są to drukarki "wielkoformatowe". Drugą częścią, tą istotniejszą jest
                    programowanie w JS w środowisku Adobe. Dla przykładu jest to dzielenie jednego dużego pliku graficznego
                    na paski tapety o szerokości 50cm. Mamy ponad 40 różnych produktów i wszystkie są zautomatyzowane. Dane
                    potrzebne do przygotowania danego zlecenia wpadają z wewnętrznego serwera naszej firmie w postaci JSONa.
                    Użytkownik (drukarz) jedyne co musi zrobić to kliknąć "drukuj". Całość przechodzi przez wiele filtrów w
                    zależności od maszyny na jakiej będzie drukowane zlecenie, czy też kraj wysyłki, rozmiar, technologię
                    druku i wiele innych. Dłuższy temat.
                </p>
            </>}
        />
    </Container>
);