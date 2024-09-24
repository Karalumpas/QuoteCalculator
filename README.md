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
