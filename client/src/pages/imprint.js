import HelmentMetaTags from "../components/helmetMetaTags";

export default function Imprint() {
  document.title = "JK - Imprint";
  return (
    <main className="m-4">
      <HelmentMetaTags />
      <h5>Impressum</h5>
      <h5>Seitenbetreiber</h5>
      <p>
        Jens Kock
        <br />
        Pestalozzistraße 28
        <br />
        48159 Münster
      </p>
      <h5>Kontakt</h5>
      <p>
        Telefon: +49 179 9032213
        <br />
        E-Mail: mail@jenskock.de
        <br />
        Webseite: https://www.jenskock.de
      </p>
      <h5>Verantwortlich für den Inhalt (gemäß § 55 Abs. 2 RStV):</h5>
      <p>Jens Kock</p>
      <h5>Haftungsausschluss</h5>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
        für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
        sind ausschließlich deren Betreiber verantwortlich. Die Inhalte unserer
        Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
        Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
        Gewähr übernehmen.
      </p>
      <h5>Urheberrechtshinweis</h5>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </p>
    </main>
  );
}
