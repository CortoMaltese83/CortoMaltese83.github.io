# Codifica delle immagini raster

## Titolo per il registro

Codifica delle immagini bitmap: pixel, risoluzione e colori RGB

## Durata

Due ore, divisibili in due moduli da circa 55 minuti.

## Obiettivi

Al termine della lezione gli studenti dovranno saper:

- riconoscere il pixel come elemento minimo di un'immagine raster;
- rappresentare un'immagine monocromatica attraverso una matrice di 0 e 1;
- spiegare il significato dei tre canali RGB;
- leggere l'intestazione di un file PBM o PPM testuale;
- individuare un pixel mediante riga e colonna;
- modificare un singolo pixel e un gruppo di pixel;
- collegare risoluzione, profondità di colore e quantità di dati.

## Prima ora

### 1. Osservazione iniziale, 10 minuti

Mostrare la pixel art 16 × 16 presente nella cartella `risorsa_internet` e ingrandirla. Chiedere agli studenti che cosa diventa visibile aumentando lo zoom.

### 2. Immagine monocromatica, 15 minuti

Aprire `01_lettera_L.pbm` con un editor di testo. Spiegare:

- `P1`: formato PBM testuale;
- `8 8`: larghezza e altezza;
- `0`: pixel bianco;
- `1`: pixel nero.

Aprire poi lo stesso file con `visualizzatore_ppm.html` e confrontare la matrice con l'immagine.

### 3. Coordinate dei pixel, 15 minuti

Indicare alcuni pixel mediante la coppia riga e colonna. Chiamare uno studente alla lavagna e chiedergli di cambiare un valore della matrice della lettera L.

### 4. Introduzione al colore, 15 minuti

Aprire `06_palette_rgb.ppm`. Presentare le terne fondamentali:

```text
rosso  = 255 0 0
verde  = 0 255 0
blu    = 0 0 255
bianco = 255 255 255
nero   = 0 0 0
```

Precisare che una normale immagine RGB a 24 bit usa 8 bit per ogni canale, quindi 24 bit per pixel.

## Seconda ora

### 5. Lettura di un file PPM, 15 minuti

Aprire `02_bandiera_italiana.ppm` nell'editor di testo e poi nel visualizzatore. Collegare ogni sequenza di tre numeri a un pixel della fascia verde, bianca o rossa.

### 6. Dimostrazione guidata, 15 minuti

Aprire `03_faccina.ppm`. Modificare un occhio da nero a blu sostituendo:

```text
0 0 0
```

con:

```text
0 90 255
```

Confrontare il risultato con `04_faccina_modificata.ppm`.

### 7. Esercitazione, 20 minuti

Ogni studente apre `05_esercizio_vuoto_8x8.ppm` e realizza una piccola immagine usando almeno quattro colori. Deve poi:

1. modificare un solo pixel;
2. modificare almeno quattro pixel consecutivi;
3. salvare il file PPM;
4. esportare l'immagine in PNG;
5. annotare riga, colonna e valore RGB dell'ultimo pixel modificato.

### 8. Verifica finale, 10 minuti

Domande:

1. Che cos'è un pixel?
2. Che cosa rappresentano i tre numeri RGB?
3. Perché un'immagine ad alta risoluzione richiede più memoria?
4. Qual è la differenza tra PBM P1 e PPM P3?

## Nota tecnica

PBM e PPM sono stati scelti perché le versioni testuali permettono di vedere direttamente i dati dei pixel. Formati comuni come PNG e JPEG memorizzano i dati in modo meno leggibile e spesso applicano tecniche di compressione.
