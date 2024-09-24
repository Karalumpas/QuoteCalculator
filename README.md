# Tilbudsberegner

Dette projekt er en webbaseret tilbudsberegner udviklet til Medegaard Grafisk, der gør det muligt at generere tilbud baseret på produktdata som størrelser, trykmetoder og antal. Beregneren inkluderer desuden muligheder for at kopiere tilbuddet til mail eller eksportere det som PDF.

## Funktioner
- Beregning af priser baseret på produktstørrelser, antal og trykmetoder.
- Støtte for forskellige produktionsmetoder: serigrafi, transfer, digital transfer og broderi.
- Dynamisk oprettelse og fjernelse af produktfarver, størrelser og tryksektioner.
- Mulighed for at indstille fortjenester på både produkter og tryk.
- Generering af tilbud med momsberegning.
- Kopiering af tilbud til mail i både tekst og HTML-format.
- Eksport af tilbud som PDF.
- Viser interne beregninger, inklusiv indkøbspriser og trykomkostninger.

## Teknologi Stack
- **HTML5**: Til opbygning af grænsefladen.
- **CSS3**: Til layout og styling af grænsefladen.
- **JavaScript**: Til dynamisk håndtering af produktdata, beregning af priser og generering af tilbud.
- **HTML2PDF.js**: Til eksportering af tilbud som PDF.

## Installation

Følg disse trin for at køre projektet lokalt:

1. **Klon repository**:
   ```bash
   git clone https://github.com/Karalumpas/tilbudsberegner.git
   cd tilbudsberegner
2. Åbn projektet i din foretrukne editor og sørg for, at alle filer (HTML, CSS og JS) er korrekt forbundet.
3. Installer nødvendige afhængigheder: Du skal have adgang til html2pdf.js, som allerede er linket i projektet. Ingen yderligere installation kræves.

## Brug
Åbn index.html i din browser for at interagere med tilbudsberegneren.
Udfyld formularen med kundens navn, produktinformation, pris, antal, ønsket fortjeneste, trykoplysninger og fragtomkostninger.
Klik på "Beregn Tilbud" for at generere et tilbud. Det vises i højre side af skærmen.
Brug knapperne "Kopiér Tilbud til Mail" eller "Eksporter til PDF" for at dele eller gemme tilbuddet.

## Struktur
Projektet er struktureret på følgende måde:
tilbudsberegner/
├── index.html         # Hovedfilen der indeholder grænsefladen
├── styles.css         # CSS filen der håndterer layout og styling
├── script.js          # JavaScript filen der håndterer beregninger og dynamisk opdatering
├── README.md          # Denne README-fil
├── LICENSE            # Licensfilen (MIT License)


## Bidrag
Hvis du ønsker at bidrage til dette projekt, kan du gøre følgende:

## Fork projektet.
Opret en ny branch (git checkout -b feature/ny-funktion).
Commit dine ændringer (git commit -am 'Tilføj en ny funktion').
Push til branchen (git push origin feature/ny-funktion).
Opret en Pull Request.
Licens
Dette projekt er ikke underlagt en offentlig licens og er udviklet specifikt til brug for Medegaard Grafisk.

## Licens
Dette projekt er licenseret under MIT License – se LICENSE filen for flere detaljer.

## Kontakt
Hvis du har spørgsmål eller feedback, er du velkommen til at kontakte Medegaard Grafisk via info@mede.dk.
