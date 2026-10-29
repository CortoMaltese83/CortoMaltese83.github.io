# Parser XML con JavaScript

L'esempio utilizza esclusivamente funzionalità native del browser:

- `fetch()` recupera il file `catalogo.xml`;
- `response.text()` legge la risposta come testo;
- `DOMParser` converte la stringa in un documento XML;
- `querySelectorAll()` e `querySelector()` recuperano nodi e dati;
- `innerHTML` inserisce la tabella nella pagina.

## Avvio

La pagina deve essere servita tramite HTTP: il caricamento con `fetch()` può essere
bloccato se `index.html` viene aperto direttamente con il protocollo `file://`.

È possibile usare Live Server in Visual Studio Code oppure, da questa cartella:

```bash
python3 -m http.server 8000
```

Aprire quindi `http://localhost:8000` nel browser.

Caricando entrambi i file su GitHub Pages nella stessa cartella, l'esempio funziona
senza modifiche.

## Nota su innerHTML

`innerHTML` è adatto all'esercizio perché l'XML è controllato. Con contenuti ricevuti
da utenti o sorgenti non affidabili è preferibile creare gli elementi e assegnare i
testi con `textContent`, per evitare l'inserimento di codice HTML indesiderato.
