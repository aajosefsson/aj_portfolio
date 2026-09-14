# Anthony Josefsson — Portfolio

Statisk webbplats. Ingen build, inga npm-paket, inget ramverk — bara HTML, CSS och lite vanilla JavaScript. Det gör den snabb, gratis att hosta och lätt att underhålla.

---

## Filstruktur

```
site/
├── index.html          ← all sidstruktur (nav, hero, about, work, resume, footer)
├── css/
│   └── styles.css      ← all styling. Färger och typsnitt ligger som tokens högst upp
├── js/
│   ├── content.js      ← ALLT innehåll: projekt, CV, skills.  ← redigera här
│   └── main.js         ← renderar innehållet. Behöver du sällan röra
├── assets/             ← bilder (avatar, favicon, projektbilder, CV-PDF)
└── fonts/              ← Akony webfont
```

**Tumregel:** text och bilder → `js/content.js` · färg och typografi → toppen av `css/styles.css` · struktur → `index.html`.

---

## Steg för steg: från VS Code till publicerad sida

### 1. Förberedelser (engångs)
1. Installera **[Visual Studio Code](https://code.visualstudio.com/)**.
2. Installera **[Git](https://git-scm.com/downloads)**.
3. Skapa ett gratis konto på **[github.com](https://github.com)**.
4. I VS Code, öppna Extensions (`Cmd/Ctrl + Shift + X`) och installera:
   - **Live Server** — förhandsvisar sidan lokalt medan du jobbar.
   - **Prettier** — formaterar kod så den håller sig läsbar.

### 2. Öppna projektet
1. Ladda ner projektet och lägg mappen `site` någonstans du hittar, t.ex. `Documents/portfolio`.
2. VS Code → **File → Open Folder** → välj mappen.
3. Högerklicka på `index.html` → **Open with Live Server**. Sidan öppnas i webbläsaren och uppdateras automatiskt när du sparar.

### 3. Fyll på med ditt innehåll
1. Lägg dina projektbilder i `assets/` (t.ex. `helpy-cover.jpg`).
2. Öppna `js/content.js` och peka ut dem:
   ```js
   cover: 'assets/helpy-cover.jpg',
   ```
   och i galleriet:
   ```js
   gallery: [
     { src: 'assets/helpy-1.jpg', alt: 'Startskärm' },
     …
   ]
   ```
3. Lägg din CV som `assets/anthony-josefsson-cv.pdf` — knappen i Resume-sektionen pekar redan dit.
4. Byt LinkedIn-länken i `index.html` (sök på `linkedin.com`) till din egen profil.
5. Spara och kontrollera i Live Server-fönstret.

> **Bildtips:** exportera som WebP eller JPG, max ~1600px bred och under 300 kB per bild. Stora PNG:er är den vanligaste orsaken till en långsam portfolio.

### 4. Lägg upp koden på GitHub
1. På github.com → **New repository**. Namn: `portfolio`. Sätt den till **Public**. Skapa utan README.
2. I VS Code, öppna terminalen (`Ctrl + ~`) och kör rad för rad:
   ```bash
   git init
   git add .
   git commit -m "Första versionen av portfolion"
   git branch -M main
   git remote add origin https://github.com/DITT-ANVÄNDARNAMN/portfolio.git
   git push -u origin main
   ```

### 5. Publicera
**Alternativ A — GitHub Pages** (enklast, gratis)
1. I ditt repo: **Settings → Pages**.
2. Source: **Deploy from a branch**, Branch: `main`, mapp: `/ (root)`. Spara.
3. Efter ~1 minut ligger sidan på `https://dittanvändarnamn.github.io/portfolio/`.

**Alternativ B — Netlify** (rekommenderas: snabbare, egen domän på minuter)
1. Logga in på [netlify.com](https://netlify.com) med GitHub.
2. **Add new site → Import an existing project** → välj ditt repo.
3. Lämna build-fälten tomma, Publish directory: `/`. Deploy.
4. **Domain settings** → byt till t.ex. `anthonyjosefsson.netlify.app`, eller koppla en egen domän.

### 6. Uppdatera sidan i framtiden
Varje gång du ändrat något:
```bash
git add .
git commit -m "Lade till THNDR-bilder"
git push
```
Sidan uppdateras automatiskt inom en minut. Inget mer.

---

## Innan du delar länken — checklista

- [ ] Alla projektbilder på plats (inga tomma rutor kvar)
- [ ] CV-PDF:en laddas när du klickar "Download PDF"
- [ ] LinkedIn-länken går till din profil
- [ ] Testa på mobil (i webbläsaren: högerklick → Inspect → växla till mobilvy)
- [ ] Klicka runt: varje projektkort ska öppna sin case-sida, "All projects" tillbaka
- [ ] Läs igenom texten en sista gång högt — stavfel syns direkt då

---

## Bra att veta

**Egen domän.** Köp hos t.ex. Loopia eller Namecheap, peka den mot Netlify under Domain settings. Kostar ~100–150 kr/år och höjer intrycket direkt.

**Länka ett enskilt case.** Varje projekt har en egen adress: `…/#project=helpy`. Praktiskt när du söker jobb och vill länka rakt till ett specifikt case.

**Lägga till ett nytt projekt.** Kopiera ett helt block i `projects`-listan i `content.js`, ge det ett nytt unikt `id` och byt ut texterna. Kortet dyker upp automatiskt.

**Typsnittet.** Akony ligger som lokal webfont i `fonts/`. Se till att du har licens för webbanvändning innan sidan går live.
