# Redesigna Zooms hemsida

I dagens uppgift ska ni designa om förstasidan på [zoom.us](https://zoom.us/) för att göra den mer användarvänlig.

### Sätt upp projektet

1. Öppna en terminal och gå med `cd` där du vill skapa projektet.
2. Skriv `npm create vite@latest zoom-redesign`.
3. I följande frågor välj React och sen Javascript.
4. Installera tailwind genom att följa [dessa instruktioner](https://tailwindcss.com/docs/guides/vite).

## Hur du klarar uppgiften

Ni skapar en förenklad version av zooms hemsida så inga animationer krävs och endast dessa delar behöver vara med:

1. Navigering

- Navigeringen ska bara vara på en rad.
- Knapparna i navigeringen ska tonas ner så att dom inte konkurrerar med knappen i Main Lockup. Använd t.ex. en knapp som inte är ifylld utan har en border istället.

2. Hero-sektionen

- Behåll nuvarande Main Lockup men ersätt grafiken på höger sida med en passande bild. Använd t.ex. någon av [Zooms egna bilder](https://explore.zoom.us/en/media-kit/#:~:text=Zoom%20Webinars-,Product%20Photos,-Zoom%20Meetings). 
- Övriga delar kan tas bort från hero-sektionen.

3. "Make work less work"-sektionen

- Brödtexten ska ha en ljusblå färg för att minska kontrasten mot bakgrundsfärgen.
- "Discover the Possibilities" ska se ut som en länk och ändra färg på mouse over.

4. "Powering organizations across industries and geographies"-sektionen

- Brödtexten ska vara grå, inte svart.
- Korten på höger sida ska använda en React-komponent med props: `title` och `icon` för
  att inte behöva skriva om html-koden för varje kort.

5. Gör sajten responsiv så att den funkar både på mobil och desktop.

6. För att göra sidan tillgänglig använd landmarks och semantic html.

## Hur du lämnar in

1. Skapa ett repo på github.
2. Ladd up dina filer till github:

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <Adressen till ditt repo>
git push -u origin main
```

3. Klicka på uppgiften i canvas och ange länken till ditt repo.


---

### :boom: Success!

Efter denna uppgift ska ni kunna analysera en hemsida och komma med förslag på förbättringar.

---

### :runner: Extrauppgifter

Klar? Här är lite mer att göra:

1. Lägg till "Ready to get started?"-sektionen.
1. Lägg till en footer med valfritt innehåll.
1. Skapa sidor till alla länkar med valfritt innehåll.
