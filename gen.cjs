// Statischer Generator für "Borderline für alle". Aufruf: node gen.cjs
const fs = require('fs');
const path = require('path');
const root = __dirname + '/';
const { CATS, A: A1 } = require('./content/articles.cjs');
const { A2, GLOSS } = require('./content/articles2.cjs');
const today = new Date().toISOString().slice(0, 10);
const { A3 } = require('./content/articles3.cjs');
const { A4 } = require('./content/articles4.cjs');
const A = A1.concat(A2, A3, A4).filter((a) => !a.publishedAt || a.publishedAt <= today).sort((x, y) => (x.publishedAt || '2026-11-09').localeCompare(y.publishedAt || '2026-11-09'));
const PUB = (a) => a.publishedAt || '2026-11-09';
const dDe = (d) => d.split('-').reverse().join('.');
const plain = (h) => h.replace(/<\/(p|li|tr|h2|h3|div)>/g, '\n').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
const NET = ['https://cogether.de/', 'https://cogether-software.de/', 'https://business.cogether.de/', 'https://adhsbegleitung.de/', 'https://guidanceobservatory.com/', 'https://borderallein.de/podcast/', 'https://gedankenkotze.de/'];
const HOWTO = {
  'therapieplatz-finden': ['Therapieplatz finden: von der Sprechstunde zur Therapie', [['Sprechstunde nutzen', 'Termin in einer psychotherapeutischen Sprechstunde vereinbaren, sie dient dem Kennenlernen und Abklären.'], ['Termin über 116117', 'Praxis online über psychotherapiesuche.116117.de suchen oder die Terminservicestelle unter 116117 anrufen.'], ['Akutbehandlung', 'Bei Bedarf bis zu 12 Gespräche ohne Antrag direkt nach der Sprechstunde.'], ['Probesitzungen und Antrag', 'In probatorischen Sitzungen kennenlernen, dann Antrag bei der Krankenkasse für Kurz- oder Langzeittherapie stellen.']]],
  'reha-borderline-antrag': ['Reha bei psychischer Erkrankung beantragen', [['Mit Ärztin oder Therapeutin sprechen', 'Reha-Bedarf besprechen, die Fachärztin oder der Facharzt empfiehlt die Maßnahme.'], ['Antrag und Befund vorbereiten', 'Sozialdienst oder Kranken- beziehungsweise Rentenversicherung unterstützen bei der Antragstellung.'], ['Antrag einreichen', 'Antrag bei Renten- oder Krankenversicherung einreichen, die Prüfung dauert mehrere Wochen.']]],
  'erwerbsminderungsrente-borderline': ['Erwerbsminderungsrente beantragen', [['Beratung einholen', 'Beratungstermin bei der Deutschen Rentenversicherung vereinbaren.'], ['Leistungsvermögen klären', 'Mit behandelnder Ärztin oder Therapeut Befunde und Leistungsvermögen besprechen.'], ['Antrag stellen', 'Antrag bei der Rentenversicherung stellen, die Reha-Möglichkeiten, ärztliche Unterlagen und gegebenenfalls Gutachten prüft.']]],
};
const wr = (f, t) => { fs.mkdirSync(path.dirname(root + f), { recursive: true }); fs.writeFileSync(root + f, t); };
const B = 'https://xn--borderlinefralle-tzb.de';
const BRAND = 'Borderline für alle';
const DATE = '2026-11-09';
const COACH = 'https://cogether.de/coach-sven/';
const esc = (s) => String(s).replace(/&(?!amp;)/g, '&amp;').replace(/"/g, '&quot;');
const catBy = Object.fromEntries(CATS.map((c) => [c.slug, c]));
const artsOf = (slug) => A.filter((a) => a.cat === slug);
const artBy = Object.fromEntries(A.map((a) => [a.slug, a]));
const SEARCH_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
const NAV = [['/thema/erkennen/', 'Erkennen'], ['/thema/diagnose/', 'Diagnose'], ['/thema/behandlung/', 'Behandlung'], ['/thema/beziehungen/', 'Angehörige'], ['/thema/hilfe/', 'Hilfe finden'], ['/test/', 'Selbsttest']];

function layout({ p, title, desc, schema = [], noindex = false, body, article = null }) {
  const url = B + p;
  const graph = [
    { '@type': 'Organization', '@id': B + '/#org', name: BRAND, url: B + '/', logo: { '@type': 'ImageObject', url: B + '/assets/og.png', width: 1200, height: 630 }, sameAs: NET, knowsAbout: ['Borderline-Persönlichkeitsstörung', 'emotional instabile Persönlichkeitsstörung', 'Dialektisch-behaviorale Therapie', 'Psychotherapie', 'Angehörige psychisch erkrankter Menschen'], parentOrganization: { '@type': 'Organization', name: 'BA Entertainment', address: { '@type': 'PostalAddress', streetAddress: 'Alleestraße 15', postalCode: '42781', addressLocality: 'Haan', addressCountry: 'DE' } } },
    { '@type': 'WebSite', '@id': B + '/#website', url: B + '/', name: BRAND, inLanguage: 'de-DE', publisher: { '@id': B + '/#org' }, potentialAction: { '@type': 'SearchAction', target: B + '/?q={q}', 'query-input': 'required name=q' } },
    ...schema,
  ];
  const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">\n' : '<meta name="robots" content="index, follow, max-image-preview:large">\n'}<meta name="author" content="Redaktion ${BRAND}"><meta property="og:locale" content="de_DE"><meta property="og:type" content="${article ? 'article' : 'website'}">${article ? `<meta property="article:published_time" content="${article.pub}"><meta property="article:modified_time" content="${article.mod}"><meta property="article:section" content="${esc(article.section)}">` : ''}<meta property="og:site_name" content="${BRAND}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${url}">
<meta property="og:image" content="${B}/assets/og.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${BRAND}: Wissen zur Borderline-Persönlichkeitsstörung"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0E2A47">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="canonical" href="${url}"><link rel="alternate" hreflang="de" href="${url}"><link rel="alternate" type="application/rss+xml" title="${BRAND}" href="${B}/feed.xml">
<link rel="preload" href="/assets/fonts/manrope-600-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/sourcesans3-400-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/fonts.css?v=1">
<link rel="stylesheet" href="/assets/site.css?v=4"><link rel="stylesheet" href="/assets/test.css?v=1">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
<script src="/assets/site.js?v=1" defer></script>
</head>
<body>
<a class="skip" href="#main">Zum Inhalt springen</a>
<div class="crisis" role="region" aria-label="Hilfe in der Krise"><div class="wrap"><span class="crisis__l">Hilfe in der Krise</span><span>Telefonseelsorge <b>116 123</b> (kostenfrei)</span><span>Notruf <b>112</b></span><span>Ärztlicher Bereitschaftsdienst <b>116 117</b></span><a href="/krise/">Alle Hilfen</a></div></div>
<header class="hd"><div class="wrap hd__in">
  <a class="logo" href="/" aria-label="${BRAND}, Startseite"><img src="/assets/logo.svg" width="44" height="44" alt=""><span><b>${BRAND}</b><small>Wissen zur Borderline-Persönlichkeitsstörung</small></span></a>
  <button class="burger" id="burger" aria-label="Menü" aria-expanded="false" aria-controls="nav"><i></i><i></i><i></i></button>
  <nav class="nav" id="nav" aria-label="Hauptnavigation">
    ${NAV.map(([h, l]) => `<a href="${h}"${p === h ? ' aria-current="page"' : ''}>${l}</a>`).join('\n    ')}
    <button class="srch-b" id="srch-b" type="button" aria-label="Suche">${SEARCH_ICON}</button>
    <a class="cta" href="/krise/">Hilfe in der Krise</a>
  </nav>
</div></header>
<main id="main">
${body}
</main>
<footer class="ft"><div class="wrap">
  <div class="ft__g">
    <div><div class="logo" style="margin-bottom:1rem"><img src="/assets/logo.svg" width="48" height="48" alt="" loading="lazy"><span><b>${BRAND}</b></span></div><p style="max-width:34ch">Verständliche, quellenbasierte Informationen zur Borderline-Persönlichkeitsstörung für Betroffene, Angehörige und Fachinteressierte.</p></div>
    <div><h4>Themen</h4>${CATS.slice(0, 4).map((c) => `<a href="/thema/${c.slug}/">${c.name}</a>`).join('')}</div>
    <div><h4>Mehr</h4>${CATS.slice(4).map((c) => `<a href="/thema/${c.slug}/">${c.name}</a>`).join('')}</div>
    <div><h4>Portal</h4><a href="/test/">Borderline-Selbsttest</a><a href="/team/">Team</a><a href="/krise/">Hilfe in der Krise</a><a href="/glossar/">Glossar</a><a href="/redaktion/">Redaktion und Quellen</a><a href="/netzwerk/">Weiterführende Seiten</a><a href="/kontakt/">Kontakt, Fehler melden</a><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a></div>
    <div><h4>Die CoGether-Welt</h4><a href="https://cogether.de/" rel="noopener">CoGether, Coaching</a><a href="https://cogether.de/themen/borderline/" rel="noopener">Borderline bei CoGether</a><a href="https://borderallein.de/podcast/" rel="noopener">Podcast Border Allein</a><a href="https://gedankenkotze.de/" rel="noopener">Podcast Gedankenkotze</a><a href="https://cogether-software.de/" rel="noopener">Software für Coaches</a><a href="https://business.cogether.de/" rel="noopener">Für Organisationen</a><a href="https://adhsbegleitung.de/" rel="noopener">ADHS Begleitung</a><a href="https://guidanceobservatory.com/" rel="noopener">Guidance Observatory</a></div>
  </div>
  <p class="ft__sos"><b>Wichtig:</b> Die Inhalte dienen der Information und ersetzen keine Diagnose, keine ärztliche und keine psychotherapeutische Behandlung. In der Krise: Telefonseelsorge <b>116 123</b> (kostenfrei), ärztlicher Bereitschaftsdienst <b>116 117</b>, bei akuter Gefahr Notruf <b>112</b>.</p>
  <div class="ft__b"><span>© <span id="y"></span> BA Entertainment · ${BRAND}</span><span>Stand: 09.11.2026</span></div>
</div></footer>
<script>document.getElementById('y').textContent=new Date().getFullYear();</script>
</body>
</html>
`;
  wr(p === '/' ? 'index.html' : p.slice(1) + 'index.html', html);
}
const crumbs = (arr) => `<nav class="crumbs" aria-label="Brotkrumen">${arr.map(([h, l], i) => (i < arr.length - 1 ? `<a href="${h}">${l}</a><span>/</span>` : esc(l))).join('')}</nav>`;
const bcSchema = (arr) => ({ '@type': 'BreadcrumbList', itemListElement: arr.map(([h, l], i) => ({ '@type': 'ListItem', position: i + 1, name: l, item: B + h })) });
const card = (a) => `<a class="art" href="/artikel/${a.slug}/"><span class="art__c">${catBy[a.cat].name}</span><h3>${esc(a.title)}</h3><p>${esc(a.short.split('. ')[0].replace(/\.$/, ''))}.</p><small>${a.readMin} Min. Lesezeit</small></a>`;
const faqHtml = (arr) => `<div class="faq">${arr.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
const band = (h, t, btn, href) => `<section class="sec"><div class="wrap"><div class="band"><div><h2>${h}</h2><p>${t}</p></div><a class="btn btn--s" href="${href}">${btn}</a></div></div></section>`;
const kbox = '<div class="kbox"><p><b>Wenn es Dir gerade nicht gut geht:</b> Telefonseelsorge <b>116 123</b> (kostenfrei) · Notruf <b>112</b> · Ärztlicher Bereitschaftsdienst <b>116 117</b>. <a href="/krise/">Weitere Hilfen</a></p></div>';

/* ---------- START ---------- */
const topQ = ['was-ist-borderline', 'borderline-symptome', 'borderline-verlauf-heilbar', 'borderline-angehoerige', 'therapieplatz-finden', 'gdb-schwerbehindertenausweis-borderline'].map((s) => artBy[s]).filter(Boolean);
layout({
  p: '/', title: 'Borderline verständlich erklärt: Wissen, Hilfe, Angehörige | Borderline für alle',
  desc: 'Quellenbasierte Informationen zur Borderline-Persönlichkeitsstörung: erkennen, Diagnose, Therapie, Alltag, Angehörige und Hilfe finden. Sachlich, ohne Stigma.',
  schema: [{ '@type': 'CollectionPage', '@id': B + '/#webpage', url: B + '/', name: BRAND, dateModified: DATE, inLanguage: 'de-DE' }],
  body: `<section class="hero"><div class="wrap hero__g"><div>
  <span class="eyebrow">Wissen zur Borderline-Persönlichkeitsstörung</span>
  <h1>Borderline verständlich erklärt. Sachlich, mit Quellen, ohne Stigma.</h1>
  <p class="lede">Für Menschen mit Borderline, für Angehörige und für alle, die mehr wissen möchten: Antworten aus der S3-Leitlinie und von Krankenkassen und Fachgesellschaften.</p>
  <div class="search" id="suche">${SEARCH_ICON}<input id="q" type="search" placeholder="Wonach suchst Du? Zum Beispiel Symptome, DBT, Angehörige" aria-label="Suche" autocomplete="off"><div class="search__res" id="qres"></div></div>
  <div class="trust"><span>Jede Aussage mit Quelle</span><span>Keine Werbung</span><span>Keine Diagnosen, keine Heilversprechen</span></div>
</div>
<aside class="sos" aria-label="Hilfe in der Krise"><h2>Wenn es gerade akut ist</h2><p>Du musst damit nicht allein bleiben. Diese Stellen helfen sofort.</p>
<ul><li>Telefonseelsorge <b>116 123</b></li><li>Notruf <b>112</b></li><li>Ärztlicher Bereitschaftsdienst <b>116 117</b></li></ul><a class="btn" href="/krise/">Alle Hilfen in der Krise</a></aside>
</div></section>

<section class="sec"><div class="wrap"><div class="cta-test"><div><h3>Ausführlicher Borderline-Selbsttest</h3><p>40 Aussagen zu den neun Kriterien, anonym im Browser ausgewertet, mit Ergebnis zum Mitnehmen. Eine erste Orientierung, keine Diagnose.</p></div><a class="btn" href="/test/">Test starten</a></div></div></section>
<section class="sec"><div class="wrap">
  <div class="sec__h"><div><h2>Themen</h2><p>Acht Bereiche, klar gegliedert. Wähle den, der zu Deiner Frage passt.</p></div></div>
  <div class="grid g4">${CATS.map((c) => { const n = artsOf(c.slug).length; return `<a class="cat" href="/thema/${c.slug}/"><span class="cat__i">${c.icon}</span><h3>${c.name}</h3><p>${c.desc}</p><small>${n} ${n === 1 ? 'Artikel' : 'Artikel'}</small></a>`; }).join('')}</div>
</div></section>

<section class="sec sec--soft"><div class="wrap">
  <div class="sec__h"><div><h2>Häufige Fragen</h2><p>Mit diesen Artikeln starten die meisten.</p></div></div>
  <ul class="qlist">${topQ.map((a) => `<li><a href="/artikel/${a.slug}/">${esc(a.title)}</a></li>`).join('')}</ul>
</div></section>

<section class="sec"><div class="wrap">
  <div class="sec__h"><div><h2>Zuletzt erschienen</h2></div></div>
  <div class="grid g3">${A.slice(-6).reverse().map(card).join('')}</div>
</div></section>

<section class="sec sec--soft"><div class="wrap grid g2" style="align-items:center;gap:3rem">
  <div class="prose"><span class="eyebrow">Unser Anspruch</span><h2 style="font-size:2rem;margin-bottom:1rem">Qualität vor Menge</h2><p>Jeder Artikel nennt seine Quellen. Zahlen übernehmen wir nur, wenn wir sie belegen können, und wo sich Quellen unterscheiden, sagen wir das. Wir nennen keine Methodendetails zu Selbstverletzung oder Suizid und verwenden eine Sprache, die nicht stigmatisiert.</p><p><a class="btn btn--o" href="/redaktion/">Redaktion und Quellen</a></p></div>
  <div class="cat" style="cursor:default"><span class="cat__i">Für Angehörige</span><h3>Du bist nicht allein damit</h3><p>Partner, Eltern und Freundinnen finden Rat, Entlastung und Anlaufstellen.</p><p style="margin-top:1.2rem"><a class="btn" href="/artikel/borderline-angehoerige/">Rat für Angehörige lesen</a></p></div>
</div></section>
<section class="sec sec--soft"><div class="wrap"><div class="band"><div><h2>Podcast Border Allein</h2><p>Sven, Gründer von CoGether, systemischer Coach und Mentor, spricht in seinem Podcast aus eigener Erfahrung zum Thema Borderline. Ein persönlicher Blick, der die Fachinformationen hier ergänzt und keine Behandlung ersetzt.</p></div><a class="btn btn--s" href="https://borderallein.de/podcast/" rel="noopener">Zum Podcast</a></div></div></section>
${band('Mehr als Wissen: Begleitung bei CoGether', 'Sven, Gründer von CoGether, systemischer Coach und Mentor, und Angie, Wegbegleiterin und Mentorin, begleiten Menschen im Alltag. Coaching ist keine Therapie und ersetzt keine Behandlung.', 'Zu CoGether', 'https://cogether.de/themen/borderline/')}`,
});

/* ---------- THEMEN-HUBS ---------- */
for (const c of CATS) {
  const list = artsOf(c.slug);
  const bc = [['/', 'Start'], [`/thema/${c.slug}/`, c.name]];
  layout({
    p: `/thema/${c.slug}/`, noindex: !list.length,
    title: `${c.name}: Artikel und Antworten | ${BRAND}`, desc: c.desc,
    schema: [bcSchema(bc), { '@type': 'CollectionPage', url: `${B}/thema/${c.slug}/`, name: c.name, inLanguage: 'de-DE' }],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<h1>${c.name}</h1><p class="lede">${c.desc}</p></div></section>
<section class="sec"><div class="wrap">${kbox}<div class="grid g3">${list.map(card).join('')}</div>
<h2 style="font-size:1.4rem;margin:3rem 0 1rem">Weitere Themen</h2><div class="grid g4">${CATS.filter((x) => x.slug !== c.slug).slice(0, 4).map((x) => `<a class="cat" href="/thema/${x.slug}/"><h3>${x.name}</h3><p>${x.desc}</p></a>`).join('')}</div></div></section>`,
  });
}

/* ---------- Weiterführende Links je Kategorie ---------- */
const CG = 'https://cogether.de';
const CG_EXTRA = {
  erkennen: [[CG + '/themen/borderline/', 'Borderline und emotionale Intensität bei CoGether']],
  diagnose: [[CG + '/themen/borderline/', 'Borderline bei CoGether']],
  ursachen: [[CG + '/themen/borderline/', 'Borderline bei CoGether']],
  behandlung: [['https://borderallein.de/podcast/', 'Podcast Border Allein']],
  alltag: [['https://borderallein.de/podcast/', 'Podcast Border Allein'], [CG + '/themen/borderline/', 'Borderline bei CoGether']],
  beziehungen: [[CG + '/themen/beziehungen/', 'Beziehungen und Grenzen bei CoGether']],
  'arbeit-recht': [['https://business.cogether.de/', 'Für Organisationen: Level You Up']],
  hilfe: [[CG + '/kontakt/', 'Kontakt bei CoGether']],
};
const cgBlock = (a) => {
  const ex = (CG_EXTRA[a.cat] || []).map(([u, l]) => `<a href="${u}" rel="noopener">${l}</a>`).join('');
  return `<section class="cgblock"><h2 style="margin-top:2rem">Wie es weitergehen kann</h2><p>Wissen ist ein Anfang. Wenn Du im Alltag begleitet werden möchtest: <b>Sven</b> (Gründer von CoGether, systemischer Coach und Mentor) und <b>Angie</b> (Wegbegleiterin und Mentorin) bieten bei CoGether Coaching und Mentoring an. Coaching ist keine Therapie und ersetzt keine ärztliche oder psychotherapeutische Behandlung.</p><div class="box"><b>Podcast Border Allein.</b> Sven spricht im Podcast <a href="https://borderallein.de/podcast/" rel="noopener">Border Allein</a> aus eigener Erfahrung zum Thema Borderline. Das ersetzt keine Behandlung.</div><div class="cgl"><a href="${CG}/" rel="noopener">CoGether</a><a href="${COACH}" rel="noopener">Sven bei CoGether</a><a href="https://borderallein.de/podcast/" rel="noopener">Podcast Border Allein</a>${ex}</div></section>`;
};

/* ---------- ARTIKEL ---------- */
for (const a of A) {
  const c = catBy[a.cat];
  const bc = [['/', 'Start'], [`/thema/${c.slug}/`, c.name], [`/artikel/${a.slug}/`, a.title]];
  const rel = a.related.map((s) => artBy[s]).filter(Boolean);
  layout({
    p: `/artikel/${a.slug}/`, title: `${a.title} | ${BRAND}`, desc: a.desc, article: { pub: PUB(a), mod: a.updated || PUB(a), section: c.name },
    schema: [bcSchema(bc),
      { '@type': 'Article', headline: a.title, description: a.desc, inLanguage: 'de-DE', datePublished: PUB(a), dateModified: a.updated || PUB(a), articleSection: c.name, image: B + '/assets/og.png', isAccessibleForFree: true, wordCount: plain(a.sections.map((x) => x[2]).join(' ')).split(/\s+/).length, keywords: [a.title, c.name, 'Borderline', 'Borderline-Persönlichkeitsstörung'].join(', '), speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.short p'] }, author: { '@id': B + '/#org' }, publisher: { '@id': B + '/#org' }, mainEntityOfPage: `${B}/artikel/${a.slug}/`, about: { '@type': 'MedicalCondition', name: 'Borderline-Persönlichkeitsstörung (emotional instabile Persönlichkeitsstörung)' }, citation: a.sources.map((s) => s.u) },
      { '@type': 'FAQPage', mainEntity: a.faq.map(([q, an]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: an } })) },
      ...(HOWTO[a.slug] ? [{ '@type': 'HowTo', name: HOWTO[a.slug][0], step: HOWTO[a.slug][1].map(([n, t], i) => ({ '@type': 'HowToStep', position: i + 1, name: n, text: t })) }] : [])],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<span class="eyebrow">${c.name}</span><h1>${esc(a.title)}</h1><div class="meta"><span><b>Redaktion</b> ${BRAND}</span><span>Veröffentlicht: <time datetime="${PUB(a)}">${dDe(PUB(a))}</time></span><span>Aktualisiert: <time datetime="${a.updated || PUB(a)}">${dDe(a.updated || PUB(a))}</time></span><span>${a.readMin} Min. Lesezeit</span></div></div></section>
<div class="wrap layout">
  <article class="prose">
    <div class="short"><b>Kurz gesagt</b><p>${esc(a.short)}</p></div>
    ${kbox}
    ${a.sections.map(([id, h, html]) => `<h2 id="${id}">${esc(h)}</h2>${html}`).join('\n')}
    <h2 id="fragen">Häufige Fragen</h2>
    ${faqHtml(a.faq)}
    <h2 id="quellen">Quellen</h2>
    <div class="src"><ol>${a.sources.map((s) => `<li><a href="${s.u}" rel="noopener" target="_blank">${esc(s.t)}</a></li>`).join('')}</ol><p>Alle Angaben beziehen sich auf den Stand der Quellen am ${dDe(a.updated || PUB(a))}. Fehler entdeckt? <a href="/kontakt/">Bitte melde ihn uns.</a></p></div>
    <div class="author"><img src="/assets/logo.svg" alt="" width="56" height="56" loading="lazy"><div><h4>Redaktion ${BRAND}</h4><p>Die Artikel werden aus den genannten Fachquellen erstellt. Wir stellen keine Diagnosen und geben keine Behandlungsempfehlungen für Einzelfälle. <a href="/redaktion/">So arbeiten wir</a>.</p></div></div>
    <p class="disc">Dieser Artikel dient der Information. Er ersetzt keine Diagnose, keine ärztliche und keine psychotherapeutische Behandlung. Bei akuter Krise: Telefonseelsorge 116 123 (kostenfrei), ärztlicher Bereitschaftsdienst 116 117, Notruf 112.</p>
    ${cgBlock(a)}
    ${rel.length ? `<h2 style="margin-top:3rem">Weiterlesen</h2><div class="grid g2" style="margin-top:1rem">${rel.map(card).join('')}</div>` : ''}
  </article>
  <aside><div class="toc"><b>Inhalt</b>${a.sections.map(([id, h]) => `<a href="#${id}">${esc(h)}</a>`).join('')}<a href="#fragen">Häufige Fragen</a><a href="#quellen">Quellen</a></div>
  <div class="side-cta"><h4>Hilfe in der Krise</h4><p>Telefonseelsorge 116 123 (kostenfrei), Notruf 112, ärztlicher Bereitschaftsdienst 116 117.</p><a class="btn" href="/krise/">Alle Hilfen</a></div></aside>
</div>`,
  });
}

/* ---------- TEST ---------- */
{
  const bc = [['/', 'Start'], ['/test/', 'Borderline-Selbsttest']];
  layout({ p: '/test/', title: 'Borderline-Selbsttest: ausführliche Orientierung, keine Diagnose | Borderline für alle',
    desc: 'Ausführlicher Borderline-Selbsttest mit 40 Aussagen zu den neun Kriterien: anonym, im Browser ausgewertet, mit Ergebnis zum Mitnehmen. Eine Orientierung, keine Diagnose.',
    schema: [bcSchema(bc), { '@type': 'WebApplication', name: 'Borderline-Selbsttest (Orientierung, keine Diagnose)', url: B + '/test/', applicationCategory: 'HealthApplication', operatingSystem: 'Web', inLanguage: 'de-DE', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, publisher: { '@id': B + '/#org' } }],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<h1>Borderline-Selbsttest</h1><p class="lede">Eine ausführliche erste Orientierung entlang der neun Kriterien. Keine Diagnose, kein validierter Fragebogen.</p></div></section>
<section class="sec"><div class="wrap">${kbox}<div class="tst">
<div class="box box--warn"><b>Bitte vorab lesen.</b> Dieser Test kann keine Diagnose stellen. Die Diagnose einer Borderline-Persönlichkeitsstörung erfordert nach der S3-Leitlinie eine sorgfältige klinische Diagnostik durch Fachleute, unterstützt durch ein validiertes, halbstrukturiertes Interview. Unsere Fragen sind selbst formuliert, orientieren sich an den neun Kriterien des DSM-5 und sind nicht wissenschaftlich validiert. Sie zeigen höchstens, ob ein fachliches Gespräch sinnvoll sein kann.</div>
<div class="prose"><h2 style="margin-top:0">So funktioniert der Test</h2><ul><li><b>Dauer:</b> etwa 10 bis 15 Minuten, 10 Schritte.</li><li><b>Wie antworten:</b> Denk an Deine Erfahrungen über längere Zeit und in verschiedenen Lebensbereichen, nicht an einen einzelnen schlechten Tag.</li><li><b>Datenschutz:</b> Die Auswertung läuft nur in Deinem Browser. Antworten werden nicht gesendet und nicht gespeichert.</li><li><b>Ergebnis:</b> Du siehst Deine Ausprägung in allen neun Bereichen und kannst sie ausdrucken oder als PDF speichern.</li></ul></div>
<div id="test-start" style="scroll-margin-top:100px"></div>
<div id="tst" aria-live="polite"><noscript>Für den Test wird JavaScript benötigt.</noscript></div>
<div class="prose"><h2>Hintergrund und Grenzen</h2><p>Die neun Bereiche entsprechen den Kriterien, die die S3-Leitlinie der AWMF aus dem DSM-5 aufführt (<a href="/artikel/borderline-symptome/">Borderline-Symptome: Die neun Kriterien</a>). Nach MSD Manual müssen mindestens fünf davon zutreffen. Die Leitlinie nennt außerdem, dass validierte Screeningverfahren eingesetzt werden können, die Diagnose aber durch eine sorgfältige klinische Diagnostik gestellt werden soll. Mehr dazu: <a href="/artikel/borderline-diagnose-ablauf/">Borderline-Diagnose: So läuft die Diagnostik ab</a>.</p><p>Ähnliche Beschwerden kommen auch bei anderen Erkrankungen vor, etwa Depression, posttraumatischer Belastungsstörung, ADHS oder bipolaren Störungen. Ein auffälliges Ergebnis heißt deshalb nicht „Borderline“, und ein unauffälliges schließt nichts aus.</p><p class="disc">Quellen: AWMF, S3-Leitlinie Borderline-Persönlichkeitsstörung (Reg.-Nr. 038-015, Version 2.0 vom 14.11.2022, Gültigkeit abgelaufen, in Überarbeitung); MSD Manual, Ausgabe für Patienten. Bei akuter Krise: Telefonseelsorge 116 123 (kostenfrei), Notruf 112, ärztlicher Bereitschaftsdienst 116 117.</p></div>
</div></div></section>
<script src="/assets/test.js?v=1"></script>` });
}

/* ---------- TEAM ---------- */
{
  const PEOPLE = {
    sven: { name: 'Sven', role: 'Gründer von CoGether, systemischer Coach und Mentor', link: 'https://cogether.de/coach-sven/', linkLabel: 'Sven bei CoGether',
      bio: ['Sven ist Gründer von CoGether, systemischer Coach und Mentor. In seinem Podcast <a href="https://borderallein.de/podcast/" rel="noopener">Border Allein</a> spricht er aus eigener Erfahrung zum Thema Borderline.', 'Auf diesem Portal steht er für die Haltung: ehrlich, ohne Stigma, mit klarer Abgrenzung zu Diagnose und Therapie. Coaching und Mentoring begleiten im Alltag und ersetzen keine ärztliche oder psychotherapeutische Behandlung.'],
      same: ['https://cogether.de/coach-sven/', 'https://borderallein.de/podcast/'] },
    angie: { name: 'Angie', role: 'Wegbegleiterin und Mentorin bei CoGether', link: 'https://cogether.de/coach-angie/', linkLabel: 'Angie bei CoGether',
      bio: ['Angie ist Wegbegleiterin und Mentorin bei CoGether und die Stimme des Podcasts <a href="https://gedankenkotze.de/" rel="noopener">Gedankenkotze</a>. Mit <a href="https://adhsbegleitung.de/" rel="noopener">ADHS Begleitung</a> gibt es ein Schwesterportal mit quellenbasierten Informationen zu ADHS.', 'Als Mentorin begleitet sie Menschen im Alltag. Sie stellt keine Diagnosen und behandelt keine psychischen Erkrankungen.'],
      same: ['https://cogether.de/coach-angie/', 'https://gedankenkotze.de/'] },
  };
  const bcT = [['/', 'Start'], ['/team/', 'Team']];
  layout({ p: '/team/', title: 'Team und Haltung: Wer hinter Borderline für alle steht | Borderline für alle',
    desc: 'Wer hinter Borderline für alle steht: Sven (Gründer von CoGether, systemischer Coach und Mentor) und Angie (Wegbegleiterin und Mentorin), die Redaktion und unsere Grundsätze.',
    schema: [bcSchema(bcT), { '@type': 'AboutPage', url: B + '/team/', name: 'Team und Haltung', about: { '@id': B + '/#org' } }],
    body: `<section class="ph"><div class="wrap">${crumbs(bcT)}<h1>Team und Haltung</h1><p class="lede">Wer hinter dem Portal steht und wie wir arbeiten.</p></div></section><section class="sec"><div class="wrap">${kbox}
<div class="grid g2">${Object.entries(PEOPLE).map(([k, p]) => '<a class="cat" href="/team/' + k + '/"><h3>' + p.name + '</h3><p>' + p.role + '</p><small>Profil ansehen</small></a>').join('')}</div>
<div class="prose" style="max-width:780px;margin-top:2.5rem"><h2>Die Redaktion</h2><p>Die Artikel entstehen redaktionell aus Fachquellen wie der S3-Leitlinie, Krankenkassen, Fachgesellschaften und Behörden. Jeder Artikel nennt seine Quellen. Wir stellen keine Diagnosen und geben keine Behandlungsempfehlungen für Einzelfälle. Unsere Regeln stehen auf der Seite <a href="/redaktion/">Redaktion und Quellen</a>.</p><p>Herausgeber ist BA Entertainment, Haan (<a href="/impressum/">Impressum</a>). Das Portal gehört zur <a href="/netzwerk/">CoGether-Welt</a>.</p><div class="box box--warn"><b>Wichtig:</b> Weder Sven noch Angie sind Ärzte oder Psychotherapeuten. Ihre Angebote sind Coaching und Mentoring und ersetzen keine Behandlung.</div></div></div></section>` });
  for (const [k, p] of Object.entries(PEOPLE)) {
    const bc = [['/', 'Start'], ['/team/', 'Team'], ['/team/' + k + '/', p.name]];
    layout({ p: '/team/' + k + '/', title: p.name + ': ' + p.role + ' | Borderline für alle', desc: p.name + ', ' + p.role + '. Rolle, Haltung und Abgrenzung auf Borderline für alle.',
      schema: [bcSchema(bc), { '@type': 'ProfilePage', url: B + '/team/' + k + '/', mainEntity: { '@type': 'Person', '@id': B + '/team/' + k + '/#person', name: p.name, jobTitle: p.role, worksFor: { '@type': 'Organization', name: 'CoGether', url: 'https://cogether.de/' }, url: p.link, sameAs: p.same } }],
      body: `<section class="ph"><div class="wrap">${crumbs(bc)}<span class="eyebrow">Team</span><h1>${p.name}</h1><p class="lede">${p.role}</p></div></section><section class="sec"><div class="wrap--n prose" style="margin:0 auto">${kbox}${p.bio.map((t) => '<p>' + t + '</p>').join('')}<p><a class="btn" href="${p.link}" rel="noopener">${p.linkLabel}</a> <a class="btn btn--o" href="/team/">Zum Team</a></p><div class="box"><b>Abgrenzung.</b> Coaching und Mentoring sind keine Therapie. Bei Beschwerden, die Dich belasten, ist eine psychotherapeutische Sprechstunde der richtige erste Schritt (<a href="/artikel/therapieplatz-finden/">so geht es</a>).</div></div></section>` });
  }
}

/* ---------- KRISE ---------- */
{
  const bc = [['/', 'Start'], ['/krise/', 'Hilfe in der Krise']];
  layout({ p: '/krise/', title: 'Hilfe in der Krise: Telefonseelsorge 116 123, Notruf 112 | Borderline für alle',
    desc: 'Akute Krise? Hier findest Du sofort erreichbare Hilfe: Telefonseelsorge 116 123, Notruf 112 und ärztlicher Bereitschaftsdienst 116 117. Für Betroffene und Angehörige.',
    schema: [bcSchema(bc)],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<h1>Hilfe in der Krise</h1><p class="lede">Wenn Du nicht mehr weiterweißt, bist Du nicht allein. Diese Stellen sind für Dich da.</p></div></section>
<section class="sec"><div class="wrap--n prose" style="margin:0 auto">
<div class="phones"><div><b>116 123</b><span>Telefonseelsorge, kostenfrei. Auch unter 0800 111 0 111 und 0800 111 0 222.</span></div><div><b>112</b><span>Notruf bei akuter Gefahr für Leben und Gesundheit.</span></div><div><b>116 117</b><span>Ärztlicher Bereitschaftsdienst, ohne Vorwahl.</span></div></div>
<h2 style="margin-top:2rem">Wenn Du akut in Gefahr bist</h2><p>Ruf den <b>Notruf 112</b> oder geh in die nächste Notaufnahme. Bleib nicht allein, und sprich eine Person an, der Du vertraust.</p>
<h2>Wenn Du reden möchtest</h2><p>Die <b>TelefonSeelsorge</b> ist unter <b>116 123</b> sowie unter 0800 111 0 111 und 0800 111 0 222 erreichbar. Die Anrufe sind kostenfrei.</p>
<h2>Für Angehörige</h2><p>Wenn Du Dir Sorgen um jemanden machst: Sprich es an, nimm Äußerungen über Suizid immer ernst und hol Dir Hilfe, bei Gefahr über den Notruf 112. Das <b>SeeleFon</b> des BApK (0228 71002424) berät Angehörige anonym. Es ist keine akute Krisenintervention. Mehr: <a href="/artikel/borderline-angehoerige/">Rat für Angehörige</a>.</p>
<h2>Langfristig</h2><p>Ein Krisenplan, den Du mit Deiner Therapeutin oder Deinem Therapeuten erarbeitest, gibt Sicherheit (<a href="/artikel/krisenplan-borderline/">Krisenplan</a>). Wie Du einen Therapieplatz findest, steht im Artikel <a href="/artikel/therapieplatz-finden/">Therapieplatz finden</a>.</p>
<div class="box"><b>Unser Umgang mit dem Thema.</b> Wir nennen auf diesem Portal keine Methoden und keine Einzelheiten zu Selbstverletzung oder Suizid und berichten nicht sensationsorientiert. Das entspricht den Grundsätzen einer sensiblen Berichterstattung.</div>
<p class="disc">Quellen: TelefonSeelsorge Deutschland (telefonseelsorge.de); BApK, SeeleFon (bapk.de); 116117.de der Kassenärztlichen Bundesvereinigung.</p>
</div></section>` });
}

/* ---------- GLOSSAR ---------- */
{
  const bc = [['/', 'Start'], ['/glossar/', 'Glossar']];
  layout({ p: '/glossar/', title: 'Borderline-Glossar: Begriffe von A bis Z | Borderline für alle', desc: 'Wichtige Begriffe rund um Borderline verständlich erklärt: von Affektregulation über DBT bis Terminservicestelle.', schema: [bcSchema(bc), { '@type': 'DefinedTermSet', name: 'Borderline-Glossar', hasDefinedTerm: GLOSS.map(([t, d]) => ({ '@type': 'DefinedTerm', name: t, description: d })) }],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<h1>Borderline-Glossar</h1><p class="lede">Die wichtigsten Begriffe, kurz und sachlich erklärt.</p></div></section><section class="sec"><div class="wrap">${kbox}<div class="gloss">${GLOSS.slice().sort((x, y) => x[0].localeCompare(y[0], 'de')).map(([t, d]) => `<div id="${t.toLowerCase().replace(/[^a-z]/g, '')}"><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div></div></section>` });
}

/* ---------- REDAKTION ---------- */
{
  const bc = [['/', 'Start'], ['/redaktion/', 'Redaktion und Quellen']];
  layout({ p: '/redaktion/', title: 'Redaktion und Quellen: So arbeiten wir | Borderline für alle', desc: 'Unsere Redaktionsgrundsätze: Quellenpflicht, sensible Sprache, keine Methodendetails, keine Heilversprechen, klare Abgrenzung von Diagnose und Therapie.', schema: [bcSchema(bc)],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<h1>Redaktion und Quellen</h1><p class="lede">So entstehen die Inhalte auf dieser Seite.</p></div></section><section class="sec"><div class="wrap--n prose" style="margin:0 auto">
<h2 style="margin-top:0">Unsere Grundsätze</h2>
<ul><li><b>Quellenpflicht:</b> Jede inhaltliche Aussage stützt sich auf genannte Fachquellen. Zahlen übernehmen wir nur mit Angabe der Quelle. Wo sich Quellen unterscheiden, sagen wir das.</li><li><b>Keine Diagnosen, keine Heilversprechen:</b> Wir erklären. Wir diagnostizieren nicht, empfehlen keine Medikamente und geben keine Behandlungsempfehlungen für Einzelfälle.</li><li><b>Sensible Sprache:</b> Wir sprechen von Menschen mit Borderline-Persönlichkeitsstörung, nicht von „Borderlinern“, und vermeiden Zuschreibungen, die Betroffene herabsetzen.</li><li><b>Keine Methodendetails:</b> Zu Selbstverletzung und Suizid nennen wir keine Methoden und keine Einzelheiten. Auf jeder Seite stehen Krisenhinweise.</li><li><b>Keine Werbung:</b> Es gibt keine bezahlten Beiträge und keine Pharma-Partner.</li><li><b>Aktualität:</b> Jeder Artikel zeigt das Datum der letzten Aktualisierung.</li></ul>
<h2>Welche Quellen wir nutzen</h2><p>Wir stützen uns vor allem auf die S3-Leitlinie Borderline-Persönlichkeitsstörung der AWMF, auf Patienteninformationen von Krankenkassen (AOK, Techniker Krankenkasse), von Fachgesellschaften (DGPPN-Portal neurologen-und-psychiater-im-netz.org), auf das Gesundheitsportal Österreich, das MSD Manual, die Kassenärztliche Bundesvereinigung und den Bundesverband der Angehörigen psychisch erkrankter Menschen (BApK). Die verwendeten Quellen stehen am Ende jedes Artikels.</p>
<div class="box box--warn"><b>Zum Stand der Leitlinie.</b> Die S3-Leitlinie (Version 2.0 vom 14.11.2022) war laut AWMF-Register bis 31.05.2026 gültig und wird derzeit überarbeitet. Wir nutzen sie weiter als wichtigste Fachquelle, kennzeichnen den Stand und aktualisieren die Artikel, sobald eine neue Fassung vorliegt.</div>
<h2>Fehler melden</h2><p>Wenn Dir ein Fehler auffällt oder eine Quelle nicht mehr stimmt, schreib an <a href="mailto:info@cogether.de?subject=Hinweis%20Borderline%20f%C3%BCr%20alle">info@cogether.de</a>. Wir prüfen und korrigieren.</p>
<h2>Wer steht dahinter?</h2><p>Herausgeber ist BA Entertainment, Haan (siehe <a href="/impressum/">Impressum</a>). Das Portal gehört zur <a href="/netzwerk/">CoGether-Welt</a>: Sven ist Gründer von CoGether, systemischer Coach und Mentor, Angie ist Wegbegleiterin und Mentorin. Beide sind keine Ärzte und keine Therapeuten. Ihre Angebote sind Coaching und Mentoring und ersetzen keine Behandlung.</p>
</div></section>` });
}

/* ---------- NETZWERK ---------- */
{
  const bc = [['/', 'Start'], ['/netzwerk/', 'Weiterführende Seiten']];
  layout({ p: '/netzwerk/', title: 'Weiterführende Seiten: CoGether, Podcast, Software | Borderline für alle', desc: 'Die Seiten rund um Borderline für alle: CoGether, der Podcast Border Allein, Software für Coaches, Angebote für Organisationen, ADHS Begleitung und Guidance Observatory.', schema: [bcSchema(bc)],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<h1>Weiterführende Seiten</h1><p class="lede">Borderline für alle gehört zur CoGether-Welt. Hier findest Du die Schwesterseiten.</p></div></section><section class="sec"><div class="wrap">${kbox}
<div class="net">
<a href="https://cogether.de/" rel="noopener"><b>CoGether</b><span>Coaching und Mentoring. Sven (Gründer, systemischer Coach und Mentor) und Angie (Wegbegleiterin und Mentorin).</span></a>
<a href="https://cogether.de/themen/borderline/" rel="noopener"><b>Borderline und emotionale Intensität bei CoGether</b><span>Das Themenangebot von CoGether: verstehen, einordnen, Hilfe finden.</span></a>
<a href="https://borderallein.de/podcast/" rel="noopener"><b>Border Allein, der Podcast</b><span>Svens Podcast zum Thema Borderline. Sven spricht dort aus eigener Erfahrung.</span></a>
<a href="https://gedankenkotze.de/" rel="noopener"><b>Gedankenkotze, der Podcast</b><span>Angies Podcast.</span></a>
<a href="https://business.cogether.de/" rel="noopener"><b>CoGether für Organisationen</b><span>Level You Up und Angebote für Teams und Organisationen.</span></a>
<a href="https://cogether-software.de/" rel="noopener"><b>CoGether Software</b><span>Die Software für Coaches und Coaching-Teams.</span></a>
<a href="https://adhsbegleitung.de/" rel="noopener"><b>ADHS Begleitung</b><span>ADHS-Wissensportal von Angie, quellenbasiert.</span></a>
<a href="https://guidanceobservatory.com/" rel="noopener"><b>Guidance Observatory</b><span>Fachportal rund um Beratung, Coaching und Orientierung.</span></a>
</div>
<p class="disc">Coaching und Mentoring sind keine Therapie. Sie ersetzen keine ärztliche oder psychotherapeutische Behandlung.</p></div></section>` });
}

/* ---------- KONTAKT / RECHT ---------- */
layout({ p: '/kontakt/', title: 'Kontakt und Fehler melden | Borderline für alle', desc: 'Kontakt zur Redaktion von Borderline für alle: Fehler melden, Fragen stellen, Hinweise geben.', schema: [bcSchema([['/', 'Start'], ['/kontakt/', 'Kontakt']])],
  body: `<section class="ph"><div class="wrap">${crumbs([['/', 'Start'], ['/kontakt/', 'Kontakt']])}<h1>Kontakt und Fehler melden</h1><p class="lede">Wir freuen uns über Hinweise. Fehler korrigieren wir zügig.</p></div></section><section class="sec"><div class="wrap">${kbox}<div class="grid g2"><div class="cat" style="cursor:default"><h3>Fehler melden oder Frage stellen</h3><p>Schreib uns an info@cogether.de. Nenne bitte die Seite und, wenn möglich, die Stelle.</p><p style="margin-top:1.2rem"><a class="btn" href="mailto:info@cogether.de?subject=Hinweis%20Borderline%20f%C3%BCr%20alle">E-Mail schreiben</a></p></div><div class="cat" style="cursor:default"><h3>Begleitung bei CoGether</h3><p>Coaching und Mentoring im Alltag, keine Therapie. Kontakt über CoGether.</p><p style="margin-top:1.2rem"><a class="btn btn--o" href="${COACH}" rel="noopener">Sven bei CoGether</a></p></div></div><p class="disc">Wir beantworten keine Anfragen zu persönlichen Diagnosen oder Behandlungen. Dafür sind Ärztinnen, Ärzte und Psychotherapeuten zuständig. In der Krise: <a href="/krise/">Hilfe in der Krise</a>.</p></div></section>` });
layout({ p: '/impressum/', title: 'Impressum | Borderline für alle', desc: 'Impressum und Anbieterkennzeichnung gemäß § 5 DDG.',
  body: `<section class="ph"><div class="wrap"><h1>Impressum</h1><p class="lede">Angaben gemäß § 5 DDG.</p></div></section><section class="sec"><div class="wrap--n prose" style="margin:0 auto"><h2 style="margin-top:0">Anbieter</h2><p>BA Entertainment<br>Alleestraße 15<br>42781 Haan<br>Deutschland</p><h2>Kontakt</h2><p>E-Mail: info@cogether.de<br>Website: borderlinefüralle.de</p><h2>Vertretungsberechtigte Person</h2><p>S. Ulrich</p><h2>Umsatzsteuer-ID</h2><p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE352483219</p><h2>Haftung für Inhalte</h2><p>Die Inhalte dienen der Information und ersetzen keine ärztliche oder psychotherapeutische Beratung und Behandlung. Trotz sorgfältiger Prüfung übernehmen wir keine Gewähr für Vollständigkeit und Aktualität.</p><h2>Haftung für Links</h2><p>Für Inhalte externer Seiten, auf die wir verweisen, sind ausschließlich deren Betreiber verantwortlich.</p></div></section>` });
layout({ p: '/datenschutz/', title: 'Datenschutz | Borderline für alle', desc: 'Datenschutzhinweise für borderlinefüralle.de.',
  body: `<section class="ph"><div class="wrap"><h1>Datenschutz</h1><p class="lede">Diese Seite setzt keine Tracking-Cookies und verwendet keine Analyse- oder Werbedienste.</p></div></section><section class="sec"><div class="wrap--n prose" style="margin:0 auto"><h2 style="margin-top:0">Verantwortliche Stelle</h2><p>BA Entertainment, Alleestraße 15, 42781 Haan, E-Mail: info@cogether.de</p><h2>Hosting und Server-Logdaten</h2><p>Die Seite wird als statische Website über GitHub Pages ausgeliefert. Beim Aufruf verarbeitet der Hoster technisch notwendige Daten (zum Beispiel IP-Adresse, Zeitpunkt, aufgerufene Seite), um die Seite auszuliefern und die Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p><h2>Schriftarten</h2><p>Die Schriftarten (Manrope, Source Sans 3) werden von unserem eigenen Server ausgeliefert. Es findet keine Verbindung zu Google Fonts statt.</p><h2>Suche</h2><p>Die Suche läuft vollständig in Deinem Browser. Eingaben werden nicht übertragen oder gespeichert.</p><h2>Kontakt</h2><p>Wenn Du uns per E-Mail schreibst, verarbeiten wir Deine Angaben zur Bearbeitung Deiner Anfrage. Beim Besuch verlinkter Seiten (zum Beispiel cogether.de) gelten deren Datenschutzhinweise.</p><h2>Deine Rechte</h2><p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde. Schreib dazu an info@cogether.de.</p></div></section>` });

/* ---------- Technik ---------- */
wr('search-index.json', JSON.stringify(A.map((a) => ({ t: a.title, d: a.desc, c: catBy[a.cat].name, u: `/artikel/${a.slug}/`, k: a.sections.map((s) => s[1]).join(' ') + ' ' + a.faq.map((f) => f[0]).join(' ') }))));
const FIXED = [['/', DATE, '1.0', 'weekly'], ['/test/', DATE, '0.8', 'monthly'], ['/team/', DATE, '0.5', 'yearly'], ['/team/sven/', DATE, '0.5', 'yearly'], ['/team/angie/', DATE, '0.5', 'yearly'], ['/krise/', DATE, '0.7', 'monthly'], ['/glossar/', DATE, '0.5', 'monthly'], ['/redaktion/', DATE, '0.4', 'yearly'], ['/netzwerk/', DATE, '0.4', 'yearly'], ['/kontakt/', DATE, '0.3', 'yearly'], ['/impressum/', DATE, '0.1', 'yearly'], ['/datenschutz/', DATE, '0.1', 'yearly']];
const newest = (list) => list.map((a) => a.updated || PUB(a)).sort().pop() || DATE;
const urlRows = [...FIXED, ...CATS.filter((c) => artsOf(c.slug).length).map((c) => ['/thema/' + c.slug + '/', newest(artsOf(c.slug)), '0.7', 'weekly']), ...A.map((a) => ['/artikel/' + a.slug + '/', a.updated || PUB(a), '0.9', 'monthly'])];
const urls = urlRows.map((r) => r[0]);
wr('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urlRows.map(([u, m, pr, cf]) => '  <url><loc>' + B + u + '</loc><lastmod>' + m + '</lastmod><changefreq>' + cf + '</changefreq><priority>' + pr + '</priority></url>').join('\n') + '\n</urlset>\n');
const AIBOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'DuckAssistBot', 'MistralAI-User', 'cohere-ai'];
wr('robots.txt', 'User-agent: *\nAllow: /\n\n' + AIBOTS.map((b) => 'User-agent: ' + b + '\nAllow: /\n').join('\n') + '\nSitemap: ' + B + '/sitemap.xml\n');
const xesc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
wr('feed.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>' + BRAND + '</title><link>' + B + '/</link><description>Quellenbasierte Informationen zur Borderline-Persönlichkeitsstörung</description><language>de-DE</language><atom:link href="' + B + '/feed.xml" rel="self" type="application/rss+xml"/>' + A.slice().reverse().slice(0, 30).map((a) => '<item><title>' + xesc(a.title) + '</title><link>' + B + '/artikel/' + a.slug + '/</link><guid isPermaLink="true">' + B + '/artikel/' + a.slug + '/</guid><pubDate>' + new Date(PUB(a) + 'T07:00:00Z').toUTCString() + '</pubDate><category>' + xesc(catBy[a.cat].name) + '</category><description>' + xesc(a.desc) + '</description></item>').join('') + '</channel></rss>\n');
wr('llms-full.txt', '# ' + BRAND + ' (Volltext)\n\n> Alle Artikel im Volltext für Suchmaschinen und KI-Systeme. Quellenbasiert, keine Diagnosen, keine Heilversprechen. Herausgeber: BA Entertainment, Haan. Krise: Telefonseelsorge 116 123 (kostenfrei), Notruf 112, ärztlicher Bereitschaftsdienst 116 117.\n\n' + A.map((a) => '## ' + a.title + '\n\nURL: ' + B + '/artikel/' + a.slug + '/\nKategorie: ' + catBy[a.cat].name + '\nVeröffentlicht: ' + PUB(a) + '\n\nKurz gesagt: ' + a.short + '\n\n' + a.sections.map(([id, h, html]) => '### ' + h + '\n' + plain(html)).join('\n\n') + '\n\n### Häufige Fragen\n' + a.faq.map(([q, an]) => 'F: ' + q + '\nA: ' + an).join('\n') + '\n\n### Quellen\n' + a.sources.map((x) => '- ' + x.t + ': ' + x.u).join('\n')).join('\n\n---\n\n') + '\n');
const INDEXNOW = '3f6a9d1c8b2e4f7a9c0d5e1b7a2c4d68';
wr(INDEXNOW + '.txt', INDEXNOW);
wr('indexnow-urls.json', JSON.stringify({ host: 'xn--borderlinefralle-tzb.de', key: INDEXNOW, keyLocation: B + '/' + INDEXNOW + '.txt', urlList: urls.map((u) => B + u) }));
wr('search-index.json', JSON.stringify(A.map((a) => ({ t: a.title, d: a.desc, c: catBy[a.cat].name, u: '/artikel/' + a.slug + '/', k: a.sections.map((x) => x[1]).join(' ') + ' ' + a.faq.map((f) => f[0]).join(' ') }))));
wr('llms.txt', `# ${BRAND}\n\n> Quellenbasierte Informationen zur Borderline-Persönlichkeitsstörung (emotional instabile Persönlichkeitsstörung) für Betroffene, Angehörige und Fachinteressierte: erkennen, Diagnose, Ursachen, Behandlung, Alltag und Krisen, Beziehungen, Arbeit und Recht, Hilfe finden. Keine Diagnosen, keine Heilversprechen. Herausgeber: BA Entertainment, Alleestraße 15, 42781 Haan. Kontakt: info@cogether.de. Stand: 09.11.2026.\n\n## Artikel\n\n${A.map((a) => `- [${a.title}](${B}/artikel/${a.slug}/): ${a.desc}`).join('\n')}\n\n## Weitere Seiten\n\n- [Borderline-Selbsttest (keine Diagnose)](${B}/test/)\n- [Volltext aller Artikel für KI-Systeme](${B}/llms-full.txt)\n- [RSS-Feed](${B}/feed.xml)\n- [Hilfe in der Krise](${B}/krise/)\n- [Glossar](${B}/glossar/)\n- [Redaktion und Quellen](${B}/redaktion/)\n- [Weiterführende Seiten](${B}/netzwerk/)\n\n## Verbundene Seiten (CoGether-Welt)\n\n- [CoGether, Coaching und Mentoring](https://cogether.de/)\n- [CoGether Software für Coaches](https://cogether-software.de/)\n- [CoGether für Organisationen](https://business.cogether.de/)\n- [ADHS Begleitung, Wissensportal von Angie](https://adhsbegleitung.de/)\n- [Guidance Observatory, Fachportal](https://guidanceobservatory.com/)\n- [Podcast Border Allein, Svens Podcast](https://borderallein.de/podcast/)\n- [Podcast Gedankenkotze, Angies Podcast](https://gedankenkotze.de/)\n`);
wr('favicon.svg', fs.readFileSync(root + 'assets/logo.svg', 'utf8'));
wr('CNAME', 'xn--borderlinefralle-tzb.de\n');
wr('404.html', `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Seite nicht gefunden | ${BRAND}</title><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/site.css"></head><body><div class="crisis"><div class="wrap"><span class="crisis__l">Hilfe in der Krise</span><span>Telefonseelsorge <b>116 123</b> (kostenfrei)</span><span>Notruf <b>112</b></span><span>Ärztlicher Bereitschaftsdienst <b>116 117</b></span></div></div><main class="wrap" style="padding:5rem 0"><span class="eyebrow">404</span><h1>Diese Seite gibt es nicht.</h1><p class="lede" style="margin:1rem 0 2rem">Vielleicht hilft die Suche auf der Startseite.</p><a class="btn" href="/">Zur Startseite</a></main></body></html>`);
console.log('Artikel:', A.length, 'URLs:', urls.length);
