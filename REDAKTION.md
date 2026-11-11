# Redaktionsanleitung: Borderline für alle

Technik: `node gen.cjs` erzeugt die statische Seite. Veröffentlichung Mo/Mi/Fr 9 Uhr per GitHub Actions (`.github/workflows/publish.yml`).

## Neuer Artikel
1. Vorher Keyword- und Suchfragen-Recherche, dann Fakten aus Quellen prüfen (S3-Leitlinie, Krankenkassen, Fachgesellschaften, Behörden). Keine Diagnosen, keine Heilversprechen, keine Methodendetails zu Selbstverletzung oder Suizid.
2. Artikel als Objekt in `content/articles*.cjs` anlegen (slug, cat, title, readMin, desc, short, sections, faq, sources, related). Für Terminierung `publishedAt: 'JJJJ-MM-TT'`.
3. `node gen.cjs`, lokal prüfen, mit gezielten `git add`-Pfaden committen und pushen.

## Netzwerk-Links ("Im Netzwerk weiterlesen")
- Link-Map: `content/linkmap.cjs`. Ziele nur mit HTTP 200 und thematisch passend. Allgemeine Beiträge (Observatory, Selbstfokus, Ziele umsetzen) als "allgemein, nicht borderline-spezifisch" beschriften, keine fachlichen Gleichsetzungen.
- **Automatischer Fallback:** Hat ein Artikel keinen Eintrag in `MAP`, setzt der Generator 2 bis 3 Standardlinks je Kategorie (cogether.de/wissen passend zur Kategorie, ein Observatory-Beitrag, Podcast Border Allein). So erscheint kein Artikel ohne Links.
- **CoGether zuerst:** Jeder Artikel bekommt mindestens einen Link auf cogether.de (Wissen-Artikel oder Themenseite). Fehlt er in der Map, ergänzt der Generator ihn. Der Autorenkasten verlinkt auf die CoGether-Landingpage.
- Bessere, artikelspezifische Links als Eintrag in `MAP` ergänzen und vorher per HTTP prüfen.
