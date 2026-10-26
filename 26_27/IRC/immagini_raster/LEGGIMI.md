# Lezione sulla codifica delle immagini raster

## Apertura dei file

Il modo più semplice per svolgere la dimostrazione è aprire `visualizzatore_ppm.html` con Chrome, Edge o Safari. Il visualizzatore funziona senza collegamento a Internet.

1. Aprire il file HTML nel browser.
2. Premere **Scegli file**.
3. Selezionare un file nella cartella `file_sorgente`.
4. Fare clic su un pixel per modificarlo.
5. Usare **Salva PBM/PPM** per conservare la matrice modificata oppure **Esporta PNG** per ottenere un formato comune.

Per osservare direttamente la codifica numerica, aprire i file `.pbm` e `.ppm` anche con un editor di testo. I normali browser non visualizzano direttamente questi formati in modo uniforme: il visualizzatore allegato serve proprio a rendere l'esercitazione indipendente dai programmi installati.

## Sequenza consigliata

- `01_lettera_L.pbm`: immagine monocromatica, un bit logico per pixel.
- `02_bandiera_italiana.ppm`: immagine a colori organizzata per righe.
- `03_faccina.ppm`: immagine iniziale per modificare un solo pixel.
- `04_faccina_modificata.ppm`: esempio con un occhio blu e un gruppo di quattro pixel verdi.
- `05_esercizio_vuoto_8x8.ppm`: tela bianca per l'attività autonoma.
- `07_super_mario_16x16.ppm`: esempio di personaggio costruito con 256 pixel.
- `08_super_mario_dettagliato_32x32.ppm`: versione con ombre, riflessi e una palette più ampia.

La cartella `esempi_testo` contiene le stesse due immagini con estensione `.txt`, pronte per essere aperte, copiate e incollate nell'editor durante la spiegazione.

## Struttura essenziale del formato PPM P3

```text
P3          tipo di file
8 8         larghezza e altezza in pixel
255         valore massimo dei canali
255 0 0     un pixel rosso, espresso come R G B
```

Il formato PPM P3 memorizza ogni pixel con tre numeri. Un'immagine 8 × 8 contiene 64 pixel e quindi 192 valori RGB.

## Attività proposta

1. Aprire `03_faccina.ppm`.
2. Individuare un occhio attraverso riga e colonna.
3. Cambiare quel pixel in blu.
4. Colorare di verde un quadrato formato da quattro pixel.
5. Salvare il nuovo PPM ed esportare anche il PNG.

## Risorsa Internet

La cartella `risorsa_internet` contiene una pixel art 16 × 16 distribuita con licenza CC0, scaricata da Pixnote Pixels: <https://pixnote.net/en/pixels/grid/>.

Riferimenti tecnici:

- PBM: <https://netpbm.sourceforge.net/doc/pbm.html>
- PPM: <https://netpbm.sourceforge.net/doc/ppm.html>
