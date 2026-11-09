// Artikel (Stand 09.11.2026). Fakten nur aus den unter "sources" genannten Quellen; Zahlen sind als solche ausgewiesen.
// Optionales Feld publishedAt (YYYY-MM-DD): Artikel erscheint erst ab diesem Datum (Build-Zeit).
const S = {
  awmf: { t: 'AWMF: S3-Leitlinie Borderline-Persönlichkeitsstörung (Reg.-Nr. 038-015, Version 2.0 vom 14.11.2022; Gültigkeit abgelaufen, in Überarbeitung)', u: 'https://register.awmf.org/de/leitlinien/detail/038-015' },
  awmfpdf: { t: 'AWMF: S3-Leitlinie Borderline-Persönlichkeitsstörung, Langfassung (PDF)', u: 'https://register.awmf.org/assets/guidelines/038-015l_S3_Borderline-Persoenlichkeitsst%C3%B6rungen_2022-11-abgelaufen.pdf' },
  awmficd: { t: 'AWMF aktuell: Borderline-Persönlichkeitsstörung (17.06.2026)', u: 'https://www.awmf.org/aktuelles/awmf-aktuell/borderline-persoenlichkeitsstoerung-1' },
  aerzteblatt: { t: 'Deutsches Ärzteblatt: S3-Leitlinie zur Borderline-Persönlichkeitsstörung erschienen (07.12.2022)', u: 'https://www.aerzteblatt.de/news/s3-leitlinie-zur-borderline-persoenlichkeitsstoerung-erschienen-8107f89e-8ad9-418b-abfc-c0ccbdea2d6b' },
  aok: { t: 'AOK: Was ist Borderline? Symptome und Behandlung (23.09.2022)', u: 'https://www.aok.de/pk/magazin/koerper-psyche/psychologie/was-ist-borderline-symptome-und-behandlung/' },
  tk: { t: 'Techniker Krankenkasse: Ohne Halt – leben mit der Borderline-Persönlichkeitsstörung (Stand 01.09.2023)', u: 'https://www.tk.de/techniker/krankheit-und-behandlungen/erkrankungen/behandlungen-und-medizin/psychische-gesundheit/weitere-psychische-erkrankungen/leben-mit-der-borderline-persoenlichkeitsstoerung-2016414' },
  gesundv: { t: 'Gesundheitsportal Österreich: Emotional instabile Persönlichkeitsstörung (Stand 18.10.2022)', u: 'https://www.gesundheit.gv.at/krankheiten/psyche/borderline.html' },
  msd: { t: 'MSD Manual, Ausgabe für Patienten: Borderline-Persönlichkeitsstörung (Stand Jan. 2026)', u: 'https://www.msdmanuals.com/de/heim/psychische-gesundheitsst%C3%B6rungen/pers%C3%B6nlichkeitsst%C3%B6rungen/borderline-pers%C3%B6nlichkeitsst%C3%B6rung-bpd' },
  npim: { t: 'neurologen-und-psychiater-im-netz.org (DGPPN): Borderline-Störung', u: 'https://www.neurologen-und-psychiater-im-netz.org/psychiatrie-psychosomatik-psychotherapie/stoerungen-erkrankungen/borderline-stoerung/' },
  npimtherapie: { t: 'neurologen-und-psychiater-im-netz.org (DGPPN): Borderline-Störung, Therapie', u: 'https://www.neurologen-und-psychiater-im-netz.org/psychiatrie-psychosomatik-psychotherapie/stoerungen-erkrankungen/borderline-stoerung/therapie/' },
  bfarm: { t: 'BfArM: ICD-11 in Deutsch (Testversion der deutschen Übersetzung)', u: 'https://www.bfarm.de/DE/Kodiersysteme/Klassifikationen/ICD/ICD-11/uebersetzung/_node.html' },
  kbv: { t: 'Kassenärztliche Bundesvereinigung, 116117.de: Psychotherapie', u: 'https://www.116117.de/de/psychotherapie.php' },
  bapk: { t: 'BApK (Bundesverband der Angehörigen psychisch erkrankter Menschen): Borderline', u: 'https://www.bapk.de/themen/borderline.html' },
  seelefon: { t: 'BApK: SeeleFon, Telefon- und Mailberatung', u: 'https://www.bapk.de/angebote/seelefon.html' },
  ts: { t: 'TelefonSeelsorge Deutschland', u: 'https://www.telefonseelsorge.de/' },
  vmg: { t: 'Versorgungsmedizinische Grundsätze, Nr. 3.7: GdB bei Persönlichkeitsstörungen (Anlage zu § 2 VersMedV)', u: 'https://versorgungsmedizinische-grundsaetze.de/Neurosen%20Pers%C3%B6nlichkeitsst%C3%B6rungen.html' },
  versmedv: { t: 'Gesetze im Internet: Versorgungsmedizin-Verordnung (VersMedV)', u: 'https://www.gesetze-im-internet.de/versmedv/BJNR241200008.html' },
  betanet: { t: 'betanet (beta Institut): Behinderung, GdB und Nachteilsausgleiche', u: 'https://www.betanet.de/depressionen-behinderung.html' },
  aokwieder: { t: 'AOK: Stufenweise Wiedereingliederung in den Beruf nach Krankheit (27.06.2022)', u: 'https://www.aok.de/pk/magazin/wohlbefinden/gesund-im-job/stufenweise-wiedereingliederung-in-den-beruf-nach-krankheit/' },
};
const pick = (...k) => k.map((x) => S[x]);

const CATS = [
  { slug: 'erkennen', name: 'Borderline erkennen', icon: '01', desc: 'Was die Borderline-Persönlichkeitsstörung ist, welche Anzeichen Fachleute beschreiben und wer betroffen ist.' },
  { slug: 'diagnose', name: 'Diagnose', icon: '02', desc: 'Wie eine Diagnose gestellt wird, was Screening und Diagnostik unterscheidet und was die Begriffe bedeuten.' },
  { slug: 'ursachen', name: 'Ursachen und Verlauf', icon: '03', desc: 'Wie Borderline entstehen kann und was Studien über den Verlauf und die Aussichten sagen.' },
  { slug: 'behandlung', name: 'Behandlung', icon: '04', desc: 'Psychotherapie nach Leitlinie: DBT, Schematherapie, MBT, TFP und die Rolle von Medikamenten.' },
  { slug: 'alltag', name: 'Alltag und Krisen', icon: '05', desc: 'Krisenpläne, Fertigkeiten und Unterstützung im Alltag, ohne Methodendetails zu Selbstverletzung.' },
  { slug: 'beziehungen', name: 'Beziehungen und Angehörige', icon: '06', desc: 'Für Partner, Eltern, Freunde und Betroffene: verstehen, Grenzen wahren, Hilfe annehmen.' },
  { slug: 'arbeit-recht', name: 'Arbeit und Recht', icon: '07', desc: 'Grad der Behinderung, Schwerbehindertenausweis, Wiedereingliederung und Rechte im Arbeitsleben.' },
  { slug: 'hilfe', name: 'Hilfe finden', icon: '08', desc: 'Therapieplatz finden, Terminservice 116117, Selbsthilfe, Beratung und Anlaufstellen.' },
];

const A = [];

A.push({
  slug: 'was-ist-borderline', cat: 'erkennen', title: 'Was ist die Borderline-Persönlichkeitsstörung?', readMin: 6,
  desc: 'Borderline-Persönlichkeitsstörung einfach erklärt: Definition, Begriff, Häufigkeit und warum die Erkrankung gut behandelbar ist. Mit Quellen aus Leitlinie und Fachgesellschaften.',
  short: 'Die Borderline-Persönlichkeitsstörung (BPS) ist laut S3-Leitlinie eine schwerwiegende Störung der Affektregulation, begleitet von tiefgreifenden Störungen des Selbstbildes und des zwischenmenschlichen Verhaltens. Fachlich heißt sie auch emotional instabile Persönlichkeitsstörung. Sie ist eine Erkrankung, kein Charakterfehler, und sie ist behandelbar.',
  sections: [
    ['definition', 'Eine Erkrankung des Fühlens, des Selbstbildes und der Beziehungen', `<p>Die S3-Leitlinie der AWMF beschreibt die Borderline-Persönlichkeitsstörung als eine schwerwiegende Störung der Affektregulation, begleitet von tiefgreifenden Störungen des Selbstbildes und des zwischenmenschlichen Verhaltens. Einfacher gesagt: Gefühle sind sehr stark und schwanken schnell, das Bild von sich selbst ist unsicher, und Beziehungen sind intensiv, aber oft instabil.</p><p>Persönlichkeitsstörungen sind laut AOK psychische Erkrankungen mit eher langfristigem Verlauf, bei denen sich ein tiefgreifendes Muster von Wahrnehmung, Bewertung und Zusammenspiel mit anderen zeigt. Die Borderline-Persönlichkeitsstörung ist eine Erwachsenendiagnose, bei Jugendlichen kann sie nach fachgerechter Diagnostik ab 12 Jahren gestellt werden (AWMF).</p>`],
    ['name', 'Woher kommt der Name?', `<p>„Borderline“ ist englisch und bedeutet „Grenzbereich“. Der Begriff geht darauf zurück, dass die Fachwelt früher nicht genau wusste, wo sie die Störung einordnen sollte, etwa zwischen Erkrankungen des Gefühlslebens und der Wahrnehmung (Gesundheitsportal Österreich). Heute sprechen Fachleute auch von der <a href="/artikel/icd-borderline-bezeichnungen/">emotional instabilen Persönlichkeitsstörung</a>.</p>`],
    ['haeufigkeit', 'Wie häufig ist Borderline?', `<p>Die Angaben unterscheiden sich je nach Studie und Definition. Die AWMF-Leitlinie nennt für Deutschland eine Fünf-bis-Zehn-Jahres-Prävalenz von 0,8 Prozent in der Allgemeinbevölkerung. Bei Jugendlichen liegen bevölkerungsrepräsentative Studien bei 1 bis 3 Prozent, ab 55 Jahren sinkt der Wert auf 0,4 Prozent. In ambulanter Behandlung haben etwa 10 Prozent der Patientinnen und Patienten eine BPS, in stationärer Behandlung etwa 20 Prozent.</p><p>Andere Quellen nennen höhere Werte: Das Deutsche Ärzteblatt berichtet bei der Vorstellung der Leitlinie von etwa zwei von 100 Personen, neurologen-und-psychiater-im-netz.org von etwa 3 Prozent der Bevölkerung. Die Unterschiede entstehen unter anderem durch verschiedene Erhebungsmethoden.</p>`],
    ['beginn', 'Wann beginnt sie?', `<p>Erste Anzeichen treten meist schon im Jugendalter auf (neurologen-und-psychiater-im-netz.org). Nach Angaben der AOK entwickelt sich die Störung meist im Jugend- und jungen Erwachsenenalter, etwa zwischen 18 und 25 Jahren.</p>`],
    ['stigma', 'Warum Sprache hier wichtig ist', `<div class="box"><b>Keine Charakterschwäche.</b> Die Leitlinie hält fest, dass die lange verbreitete Annahme, BPS sei chronisch und kaum zu bessern, zur Stigmatisierung Betroffener beigetragen hat. Die TK betont für Angehörige, dass die Ursache des schwierigen Verhaltens die Erkrankung ist, nicht die Persönlichkeit. Auf diesem Portal sprechen wir deshalb von Menschen mit Borderline-Persönlichkeitsstörung und nicht von „Borderlinern“.</div><p>Die gute Nachricht: Die AOK beschreibt die Erkrankung als gut behandelbar, mit langfristig guten Erfolgsaussichten. Mehr dazu im Artikel <a href="/artikel/borderline-verlauf-heilbar/">Ist Borderline heilbar?</a></p>`],
  ],
  faq: [
    ['Ist Borderline eine Krankheit oder eine Charakterschwäche?', 'Es ist eine psychische Erkrankung. Die Leitlinie legt Wert darauf, Betroffene von Schuld- und Schamgefühlen zu entlasten. Charakterschwäche ist keine fachliche Beschreibung.'],
    ['Wie häufig ist Borderline in Deutschland?', 'Die AWMF-Leitlinie nennt 0,8 Prozent in der Allgemeinbevölkerung. Andere Quellen nennen etwa 2 bis 3 Prozent. Die Werte hängen von der Erhebung ab.'],
    ['Kann ich selbst erkennen, ob ich Borderline habe?', 'Nein. Eine Diagnose stellen nur Fachleute nach sorgfältiger Diagnostik. Mehr dazu im Artikel zum Diagnoseablauf.'],
  ],
  sources: pick('awmf', 'awmfpdf', 'aok', 'gesundv', 'npim', 'aerzteblatt', 'tk'),
  related: ['borderline-symptome', 'borderline-diagnose-ablauf', 'borderline-therapie-ueberblick'],
});

A.push({
  slug: 'borderline-symptome', cat: 'erkennen', title: 'Borderline-Symptome: Die neun Kriterien in Alltagssprache', readMin: 7,
  desc: 'Welche Anzeichen Fachleute bei Borderline beschreiben: die neun Diagnosekriterien in Alltagssprache erklärt, mit Hinweis auf Begleiterkrankungen. Kein Selbsttest.',
  short: 'Nach dem Klassifikationssystem DSM-5 erfordert die Diagnose mindestens fünf von neun Merkmalen, etwa Angst vor dem Verlassenwerden, instabile Beziehungen, ein unsicheres Selbstbild, Impulsivität, starke Stimmungsschwankungen und chronische innere Leere. Ob jemand die Kriterien erfüllt, klären ausschließlich Fachleute.',
  sections: [
    ['hinweis', 'Wichtig vorab', `<div class="box box--warn"><b>Kein Selbsttest.</b> Die folgende Liste erklärt Fachbegriffe. Sie dient dem Verständnis und nicht der Diagnose. Wer sich in mehreren Punkten wiederfindet und darunter leidet, kann in einer psychotherapeutischen Sprechstunde nachfragen (<a href="/artikel/therapieplatz-finden/">so geht es</a>).</div>`],
    ['kriterien', 'Die neun Kriterien', `<p>Die S3-Leitlinie führt die Kriterien des DSM-5 auf. Nach MSD Manual müssen mindestens fünf davon zutreffen. Hier in Alltagssprache:</p>
<table><tr><th>Kriterium (Fachsprache)</th><th>Was damit gemeint ist</th></tr>
<tr><td><b>1. Verlassenwerden vermeiden</b></td><td>Verzweifelte Bemühungen, ein tatsächliches oder vermutetes Verlassenwerden zu verhindern.</td></tr>
<tr><td><b>2. Instabile, intensive Beziehungen</b></td><td>Beziehungen wechseln zwischen den Extremen von Idealisierung und Entwertung.</td></tr>
<tr><td><b>3. Unsicheres Selbstbild</b></td><td>Ausgeprägte und andauernde Instabilität des Selbstbildes oder der Selbstwahrnehmung (Identitätsstörung).</td></tr>
<tr><td><b>4. Impulsivität</b></td><td>Impulsives Handeln in mindestens zwei Bereichen, in denen man sich schaden kann, etwa Geldausgaben, Sexualität, Substanzkonsum, rücksichtsloses Fahren oder Essanfälle.</td></tr>
<tr><td><b>5. Selbstschädigendes Verhalten</b></td><td>Wiederholte selbstverletzende oder suizidbezogene Handlungen, Andeutungen oder Drohungen. Das ist immer ein Anlass, Hilfe zu suchen.</td></tr>
<tr><td><b>6. Stimmungsschwankungen</b></td><td>Ausgeprägte Reaktivität der Stimmung: Phasen von Niedergeschlagenheit, Reizbarkeit oder Angst, die meist einige Stunden und selten mehr als einige Tage dauern.</td></tr>
<tr><td><b>7. Chronische Leere</b></td><td>Anhaltende Gefühle von innerer Leere.</td></tr>
<tr><td><b>8. Heftige Wut</b></td><td>Unangemessen starke Wut oder Schwierigkeiten, Wut zu kontrollieren.</td></tr>
<tr><td><b>9. Belastungsabhängige Wahrnehmungsveränderung</b></td><td>Vorübergehende, durch Belastung ausgelöste paranoide Vorstellungen oder schwere dissoziative Symptome (das Gefühl, nicht da oder sich selbst fremd zu sein).</td></tr></table>`],
    ['anspannung', 'Innere Anspannung', `<p>Die AOK beschreibt große innere Anspannung als typisches Erleben. Manche Betroffene greifen auf selbstschädigende Verhaltensweisen zurück, um diese Anspannung zu verringern. Das ist kein Zeichen von Schwäche, sondern ein Hinweis, dass Unterstützung nötig ist. Wenn es Dir so geht, findest Du Hilfe auf der Seite <a href="/krise/">Hilfe in der Krise</a>.</p>`],
    ['begleit', 'Begleiterkrankungen', `<p>Nach der Leitlinie haben Menschen mit BPS häufig weitere psychische Erkrankungen. Depressive Störungen und Angststörungen liegen über die Lebenszeit bei über 80 Prozent. Weitere häufige Begleiterkrankungen sind posttraumatische Belastungsstörung, ADHS, Substanzabhängigkeit, bipolare Störungen, dissoziative Störungen, Essstörungen und andere Persönlichkeitsstörungen. Deshalb ist eine sorgfältige Diagnostik wichtig. Mehr zu ADHS finden Betroffene bei der Schwesterseite <a href="https://adhsbegleitung.de/" rel="noopener">ADHS Begleitung</a>.</p>`],
  ],
  faq: [
    ['Reichen drei oder vier Merkmale für eine Diagnose?', 'Nach MSD Manual müssen mindestens fünf der neun Kriterien erfüllt sein. Ob das der Fall ist, beurteilen Fachleute im Gespräch und mit strukturierten Verfahren.'],
    ['Sind starke Gefühle automatisch Borderline?', 'Nein. Starke Gefühle gehören zum Menschsein. Für die Diagnose zählen Dauer, Ausmaß, Leiden und die Beeinträchtigung in verschiedenen Lebensbereichen, die Fachleute einordnen.'],
    ['Was kann ich tun, wenn ich mich wiedererkenne?', 'Du kannst eine psychotherapeutische Sprechstunde nutzen. Dort wird ohne Verpflichtung abgeklärt, ob und welche Behandlung sinnvoll ist.'],
  ],
  sources: pick('awmfpdf', 'msd', 'aok', 'gesundv', 'npim'),
  related: ['was-ist-borderline', 'borderline-diagnose-ablauf', 'borderline-ursachen'],
});

A.push({
  slug: 'borderline-maenner-frauen', cat: 'erkennen', title: 'Borderline bei Frauen und Männern: Was die Quellen sagen', readMin: 5,
  desc: 'Sind Frauen häufiger von Borderline betroffen als Männer? Was AOK, MSD Manual und DGPPN-Portal sagen, wo sich die Quellen unterscheiden und was für Jugendliche gilt.',
  short: 'AOK und MSD Manual beschreiben, dass Frauen häufiger betroffen sind beziehungsweise häufiger diagnostiziert werden. Das Portal neurologen-und-psychiater-im-netz.org der Fachgesellschaft DGPPN hält dagegen, dass wohl etwa gleich viele Männer wie Frauen betroffen sind und deutlich mehr Frauen eine Therapie beginnen.',
  sections: [
    ['quellen', 'Drei Quellen, zwei Aussagen', `<table><tr><th>Quelle</th><th>Aussage</th></tr>
<tr><td>AOK</td><td>Frauen sind häufiger betroffen.</td></tr>
<tr><td>MSD Manual (Patientenausgabe)</td><td>Die Störung wird häufiger bei Frauen als bei Männern diagnostiziert.</td></tr>
<tr><td>neurologen-und-psychiater-im-netz.org (DGPPN)</td><td>Es scheinen etwa gleich viele Männer wie Frauen betroffen zu sein, aber deutlich mehr Frauen begeben sich in eine Therapie.</td></tr></table>
<p>Die Formulierungen sind nicht widersprüchlich, wenn man genau liest: „Häufiger diagnostiziert“ und „häufiger in Therapie“ sagen etwas über die Versorgung aus, nicht zwingend über die tatsächliche Verteilung.</p>`],
    ['maenner', 'Was das für Männer heißt', `<p>Wenn Männer seltener Hilfe suchen, bleibt eine Borderline-Persönlichkeitsstörung eher unerkannt. Das ist eine Deutung der oben genannten Angaben, keine eigene Studienaussage. Wichtig für alle Geschlechter: Die Diagnose richtet sich nach den gleichen Kriterien (<a href="/artikel/borderline-symptome/">die neun Kriterien</a>), und die Behandlung nach der gleichen Leitlinie (<a href="/artikel/borderline-therapie-ueberblick/">Behandlung im Überblick</a>).</p>`],
    ['jugend', 'Und bei Jugendlichen?', `<p>Die Leitlinie empfiehlt, die Diagnose nach fachgerechter Diagnostik bereits ab 12 Jahren zu stellen, wenn die Kriterien erfüllt sind, damit Betroffene früh passende Behandlung erhalten. Bevölkerungsrepräsentative Studien finden bei Jugendlichen eine Häufigkeit von 1 bis 3 Prozent. Für Jugendliche empfiehlt die Leitlinie eine auf die Altersgruppe ausgerichtete, strukturierte Psychotherapie.</p>`],
  ],
  faq: [
    ['Sind Frauen wirklich häufiger von Borderline betroffen?', 'Die Quellen sind sich nicht einig. Sicher ist: Frauen werden häufiger diagnostiziert und beginnen häufiger eine Therapie.'],
    ['Gibt es Borderline bei Männern?', 'Ja. Männer können dieselben Kriterien erfüllen und haben denselben Anspruch auf Diagnostik und Behandlung.'],
    ['Ab welchem Alter kann Borderline diagnostiziert werden?', 'Nach der S3-Leitlinie bei fachgerechter Diagnostik ab 12 Jahren.'],
  ],
  sources: pick('aok', 'msd', 'npim', 'awmfpdf'),
  related: ['was-ist-borderline', 'borderline-diagnose-ablauf'],
});

A.push({
  slug: 'borderline-diagnose-ablauf', cat: 'diagnose', title: 'Borderline-Diagnose: So läuft die Diagnostik ab', readMin: 7,
  desc: 'Wie wird Borderline diagnostiziert? Ablauf, strukturierte Interviews, Unterschied zwischen Screening und Diagnose und Empfehlungen der S3-Leitlinie. Mit Quellen.',
  short: 'Nach der S3-Leitlinie soll die Diagnose durch eine sorgfältige klinische Diagnostik gestellt werden, unterstützt durch ein validiertes, halbstrukturiertes Interview. Screening-Fragebögen können helfen, ersetzen die Diagnostik aber nicht. Die Diagnose soll Betroffenen mitgeteilt und erklärt werden.',
  sections: [
    ['wann', 'Wann sollte abgeklärt werden?', `<p>Die Leitlinie empfiehlt eine fachgerechte Abklärung, wenn Merkmale wie wiederholtes selbstschädigendes Verhalten, erhebliche emotionale Instabilität, mehrere gleichzeitige psychische Störungen, ausbleibender Erfolg bisheriger Therapien oder ein stark beeinträchtigtes Funktionsniveau vorliegen.</p>`],
    ['ablauf', 'Was passiert in der Diagnostik?', `<ul><li><b>Gespräch über die Vorgeschichte:</b> Lebensgeschichte, frühere Erkrankungen, seelische Krisen, Beziehungen und der Umgang mit Gefühlen (Gesundheitsportal Österreich).</li><li><b>Strukturiertes Interview:</b> Die Leitlinie empfiehlt ein validiertes, halbstrukturiertes Interview. Die AOK nennt als klinischen Standard den SCID-5: Auf Fragen mit „Ja“ oder „Nein“ folgt bei Erreichen einer bestimmten Punktzahl ein strukturiertes Gespräch mit einer Therapeutin oder einem Therapeuten.</li><li><b>Ausschluss anderer Ursachen:</b> Organische Ursachen oder Drogeneinnahme sollen als Auslöser der Beschwerden ausgeschlossen werden (Gesundheitsportal Österreich).</li><li><b>Blick auf Begleiterkrankungen:</b> Weil viele Menschen mit BPS weitere Diagnosen haben, etwa Depression oder PTBS, gehört deren Abklärung dazu.</li></ul>`],
    ['screening', 'Screening ist keine Diagnose', `<p>Die Leitlinie sagt, dass validierte Screeningverfahren eingesetzt werden können. Das sind kurze Fragebögen, die einen Hinweis geben. Für die Diagnose selbst soll eine sorgfältige klinische Diagnostik stattfinden. Online-Tests ohne fachliche Auswertung können deshalb höchstens eine Anregung sein, mit Fachleuten zu sprechen.</p>`],
    ['mitteilung', 'Die Diagnose wird erklärt', `<p>Steht die Diagnose fest, soll sie nach der Leitlinie mitgeteilt und erklärt werden, und zwar so, dass die Aufklärung entstigmatisierend wirkt und von Schuld- und Schamgefühlen entlastet. Angehörige oder Bezugspersonen sollen die Diagnose nur dann erläutert bekommen, wenn die betroffene Person zustimmt.</p>`],
    ['weg', 'Wie komme ich zur Diagnostik?', `<p>Der übliche Weg führt über die psychotherapeutische Sprechstunde. Sie dient laut KBV dem Kennenlernen und dem Abklären, unter anderem der Diagnose. Wie Du einen Termin bekommst, steht im Artikel <a href="/artikel/therapieplatz-finden/">Therapieplatz finden</a>.</p>`],
  ],
  faq: [
    ['Kann ich einen Online-Test statt der Diagnostik nutzen?', 'Nein. Nach der Leitlinie sind Screeningverfahren nur ein Hinweis. Die Diagnose erfordert eine sorgfältige klinische Diagnostik.'],
    ['Erfahren meine Angehörigen von der Diagnose?', 'Nur wenn Du zustimmst. Die Leitlinie sieht vor, die Diagnose Angehörigen zu erläutern, sofern die betroffene Person einverstanden ist.'],
    ['Ab welchem Alter wird diagnostiziert?', 'Nach fachgerechter Diagnostik kann die Diagnose laut Leitlinie bereits ab 12 Jahren gestellt werden.'],
  ],
  sources: pick('awmfpdf', 'aok', 'gesundv', 'kbv'),
  related: ['borderline-symptome', 'icd-borderline-bezeichnungen', 'therapieplatz-finden'],
});

A.push({
  slug: 'icd-borderline-bezeichnungen', cat: 'diagnose', title: 'Emotional instabile Persönlichkeitsstörung, Borderline-Muster: Was heißt was?', readMin: 5,
  desc: 'ICD-10, ICD-11 und DSM-5: Die Begriffe rund um Borderline erklärt, von F60.3 über emotional instabile Persönlichkeitsstörung bis zum Borderline-Muster. Mit Stand der Leitlinie.',
  short: 'In der ICD-10 heißt die Diagnose emotional instabile Persönlichkeitsstörung (Code F60.3) mit den Typen impulsiv und Borderline. Das DSM-5 verwendet den Namen Borderline-Persönlichkeitsstörung. Die ICD-11 führt das Borderline-Muster ein, das den DSM-5-Kriterien entspricht.',
  sections: [
    ['icd10', 'ICD-10: emotional instabile Persönlichkeitsstörung', `<p>In Deutschland ist die ICD-10 das gebräuchliche Diagnosesystem. Dort wird die Störung als emotional instabile Persönlichkeitsstörung geführt, nach MSD Manual mit dem Code F60.3. Das Gesundheitsportal Österreich unterscheidet zwei Typen: den impulsiven Typ und den Borderline-Typ. Beim Borderline-Typ kommen zu den Merkmalen des impulsiven Typs unter anderem ein verunsichertes Selbstbild, ein Gefühl innerer Leere und Schwierigkeiten hinzu, Beziehungen zu halten.</p>`],
    ['dsm', 'DSM-5: Borderline-Persönlichkeitsstörung', `<p>Das amerikanische Klassifikationssystem DSM-5 spricht von der Borderline-Persönlichkeitsstörung (Code 301.83) und nennt neun Kriterien, von denen mindestens fünf erfüllt sein müssen. Die deutsche S3-Leitlinie bezieht sich in ihrer Definition auf das DSM-5. Die Kriterien stehen in <a href="/artikel/borderline-symptome/">Borderline-Symptome: Die neun Kriterien</a>.</p>`],
    ['icd11', 'ICD-11: das Borderline-Muster', `<p>Laut AWMF (Meldung vom 17.06.2026) löst die ICD-11 die bisherige ICD-10-Bezeichnung „emotional-instabile Störung, Borderline-Typus“ ab. Sie führt das sogenannte Borderline-Muster ein, das den DSM-5-Diagnosekriterien entspricht. Das BfArM stellt eine Testversion der deutschen Übersetzung der ICD-11 bereit, die fortlaufend weiterentwickelt wird.</p>`],
    ['leitlinie', 'Zum Stand der Leitlinie', `<div class="box"><b>Hinweis zur Aktualität.</b> Die S3-Leitlinie (Version 2.0 vom 14.11.2022) war laut AWMF-Register bis 31.05.2026 gültig und befindet sich in Überarbeitung. Wir nutzen sie weiter als wichtigste Fachquelle und kennzeichnen diesen Stand. Sobald eine neue Fassung erscheint, aktualisieren wir die Artikel.</div>`],
  ],
  faq: [
    ['Ist Borderline und emotional instabile Persönlichkeitsstörung dasselbe?', 'Im Kern ja: Der Borderline-Typ ist eine Form der emotional instabilen Persönlichkeitsstörung (ICD-10). Im DSM-5 heißt dieselbe Diagnose Borderline-Persönlichkeitsstörung.'],
    ['Was ändert sich mit der ICD-11?', 'Die ICD-11 führt das Borderline-Muster ein, das den DSM-5-Kriterien entspricht.'],
    ['Ist die Leitlinie noch gültig?', 'Laut AWMF-Register lief die Gültigkeit am 31.05.2026 ab, die Leitlinie wird überarbeitet. Sie bleibt eine wichtige Fachquelle.'],
  ],
  sources: pick('msd', 'gesundv', 'awmficd', 'awmf', 'bfarm'),
  related: ['was-ist-borderline', 'borderline-diagnose-ablauf'],
});

A.push({
  slug: 'borderline-ursachen', cat: 'ursachen', title: 'Borderline: Ursachen und Risikofaktoren', readMin: 6,
  desc: 'Wie entsteht eine Borderline-Persönlichkeitsstörung? Genetische Veranlagung, frühe Erfahrungen und Bindung im Überblick, ohne Schuldzuweisung. Mit Quellen von AOK, MSD und DGPPN-Portal.',
  short: 'Fachquellen beschreiben ein Zusammenspiel aus genetischer Veranlagung und Umweltfaktoren, vor allem belastenden Erfahrungen in der frühen Kindheit wie emotionaler Vernachlässigung oder Misshandlung. Eine einzelne Ursache gibt es nicht, und niemand ist „schuld“.',
  sections: [
    ['zusammenspiel', 'Anlage und Umwelt', `<p>Die AOK vermutet eine genetische Veranlagung und nennt als wichtigste Komponente traumatische Beziehungserfahrungen in der frühen Kindheit, vor allem emotionale Vernachlässigung sowie emotionale oder körperliche Misshandlung. Das MSD Manual beschreibt ebenfalls Gene und Umweltfaktoren: eine genetische Veranlagung, auf Stress schlecht zu reagieren, die tendenziell in Familien auftritt, sowie belastende Erfahrungen in der frühen Kindheit.</p>`],
    ['erfahrungen', 'Frühe Erfahrungen', `<p>Nach neurologen-und-psychiater-im-netz.org berichten über 60 Prozent der Betroffenen von emotionaler Vernachlässigung und über die Hälfte von schwerwiegendem Missbrauch. Das MSD Manual nennt außerdem Trennung von Bezugspersonen, den frühen Verlust eines Elternteils und unsichere Bindung. Daraus folgt auch: Nicht alle Betroffenen berichten solche Erfahrungen. Die Quellen beschreiben Risikofaktoren, keine feste Kette von Ursache und Wirkung.</p>`],
    ['schuld', 'Schuldzuweisungen vermeiden', `<div class="box"><b>Niemand ist „schuld“.</b> Die Leitlinie empfiehlt ausdrücklich, beim Besprechen von Traumata mit Angehörigen Schuldzuweisungen und Stigmatisierung möglichst gering zu halten. Für Eltern und Angehörige ist das entlastend: Die Erkenntnisse zu Risikofaktoren sind kein Urteil über Einzelne, sondern Grundlage für Hilfe.</div>`],
    ['gehirn', 'Und das Gehirn?', `<p>Die in der Fachwelt diskutierten neurobiologischen Besonderheiten sind in den hier ausgewerteten Patienteninformationen nicht ausführlich belegt. Wir verzichten deshalb auf Einzelaussagen dazu und verweisen auf die Leitlinie.</p>`],
  ],
  faq: [
    ['Ist Borderline erblich?', 'Die AOK vermutet eine genetische Veranlagung, das MSD Manual beschreibt eine Veranlagung, die in Familien auftritt. Sie wirkt im Zusammenspiel mit Erfahrungen.'],
    ['Haben alle Menschen mit Borderline Missbrauch erlebt?', 'Nein. Über die Hälfte berichtet laut DGPPN-Portal von schwerwiegendem Missbrauch, aber nicht alle. Auch Vernachlässigung und unsichere Bindung werden genannt.'],
    ['Sind Eltern schuld?', 'Nein. Die Leitlinie empfiehlt, Schuldzuweisungen zu vermeiden. Risikofaktoren erklären nicht, wer etwas falsch gemacht hat.'],
  ],
  sources: pick('aok', 'msd', 'npim', 'awmfpdf'),
  related: ['borderline-verlauf-heilbar', 'was-ist-borderline', 'borderline-angehoerige'],
});

A.push({
  slug: 'borderline-verlauf-heilbar', cat: 'ursachen', title: 'Ist Borderline heilbar? Verlauf und Aussichten', readMin: 6,
  desc: 'Was Leitlinie, AOK und MSD Manual zum Verlauf der Borderline-Persönlichkeitsstörung sagen: Symptome verändern sich, viele erreichen deutliche Besserung. Ehrlich und mit Quellen.',
  short: 'Die frühere Annahme eines chronischen Verlaufs gilt laut Leitlinie als überholt. Impulsive Symptome bessern sich über die Zeit deutlich, Gefühle von Leere und Verlustängste langsamer. Laut AOK können mehr als die Hälfte der Behandelten eine sehr deutliche Besserung erreichen. Ein Heilversprechen ist das nicht.',
  sections: [
    ['verlauf', 'Was Verlaufsstudien zeigen', `<p>Entgegen früherer Auffassungen zeigen Verlaufsstudien nach der S3-Leitlinie, dass sich die Symptome mit dem Alter verändern und teilweise abnehmen. Impulsive Handlungen verbessern sich über die Zeit deutlich, während affektive Symptome wie Gefühle von Leere und Depressivität sowie Ängste vor dem Verlassenwerden sich langsamer bessern. Die Leitlinie nennt außerdem, dass die aktuelle Studienlage von etwa 40 Prozent ausgeht, die sich nicht vollständig erholen.</p><p>Das MSD Manual formuliert: Bei den meisten Menschen schwinden die Symptome mit der Zeit. Das bedeutet aber nicht automatisch, dass stabile Beziehungen und ein festes Arbeitsverhältnis gelingen, hier kann weiter Unterstützung nötig sein.</p>`],
    ['behandlung', 'Mit Behandlung bessern sich die Aussichten', `<p>Die AOK beschreibt die Erkrankung als gut behandelbar: Mehr als die Hälfte der Patientinnen und Patienten könne eine sehr deutliche Besserung erreichen und sei dann zwar in manchen Situationen weiterhin emotional instabil, erfülle aber nicht mehr das Ausmaß einer psychischen Erkrankung. Die AOK weist auch darauf hin, dass dieser Prozess mehrere Jahre dauert. Ohne Behandlung bestehe ein erhöhtes Risiko für Begleiterkrankungen wie Depressionen, Essstörungen oder Suchterkrankungen.</p>`],
    ['risiko', 'Ein ehrlicher Satz zur Sicherheit', `<div class="box box--warn"><b>Das Suizidrisiko ist erhöht.</b> Die Leitlinie schätzt das Suizidrisiko bis zu einer langjährigen Remission als grundsätzlich erhöht ein. Wenn Du selbst betroffen bist oder Dir Sorgen um jemanden machst: Sprich es an und hol Dir Hilfe, zum Beispiel über die <b>Telefonseelsorge 116 123</b> (kostenfrei) oder in akuter Gefahr über den <b>Notruf 112</b>. Mehr auf der Seite <a href="/krise/">Hilfe in der Krise</a>.</div>`],
    ['heilung', 'Und das Wort „heilbar“?', `<p>Fachleute sprechen eher von Besserung und Remission (Rückgang der Symptome) als von Heilung. Wie weit die Besserung geht, ist individuell. Verlässliche Zusagen kann niemand geben. Sicher ist: Die Annahme, Borderline sei ein lebenslanges, unveränderliches Schicksal, ist nach dem Stand der Leitlinie überholt.</p>`],
  ],
  faq: [
    ['Verschwindet Borderline mit dem Alter?', 'Nach der Leitlinie verändern sich die Symptome mit dem Alter und nehmen teilweise ab. Ab 55 Jahren ist die Häufigkeit mit 0,4 Prozent niedriger. Das heißt nicht, dass Behandlung überflüssig wäre.'],
    ['Wie lange dauert es, bis es besser wird?', 'Die AOK beschreibt einen Prozess über mehrere Jahre. Eine DBT dauert laut DGPPN-Portal je nach Art und Schwere zwischen einem und etwa drei Jahren.'],
    ['Kann ich ohne Therapie gesund werden?', 'Das lässt sich nicht pauschal sagen. Die Leitlinie empfiehlt eine spezifische Psychotherapie, und die AOK nennt ohne Behandlung ein erhöhtes Risiko für Begleiterkrankungen.'],
  ],
  sources: pick('awmfpdf', 'aok', 'msd', 'npimtherapie'),
  related: ['borderline-therapie-ueberblick', 'borderline-ursachen', 'therapieformen-dbt-schematherapie-mbt-tfp'],
});

A.push({
  slug: 'borderline-therapie-ueberblick', cat: 'behandlung', title: 'Borderline behandeln: Was die S3-Leitlinie empfiehlt', readMin: 8,
  desc: 'Behandlung der Borderline-Persönlichkeitsstörung nach S3-Leitlinie: spezifische Psychotherapie, ambulant oder stationär, Rolle von Medikamenten und Angehörigen. Mit Quellen.',
  short: 'Die Leitlinie empfiehlt eine strukturierte, borderline-spezifische Psychotherapie bei Fachleuten, die in der Methode fortgebildet sind. Sie soll im Allgemeinen ambulant stattfinden, möglichst mindestens einmal pro Woche. Medikamente sollen nicht die primäre Behandlung sein.',
  sections: [
    ['kern', 'Die zentrale Empfehlung', `<p>Patientinnen und Patienten mit BPS sollen eine strukturierte, borderline-spezifische Psychotherapie erhalten. Die Behandelnden sollen in der Methode fortgebildet sein und Supervision oder Intervision erhalten (Leitlinie, Empfehlung 8). Das Deutsche Ärzteblatt fasst zusammen: Empfohlen werden Programme, die auf klassischen Verfahren aufbauen, aber die Besonderheiten der Störung, vor allem in der Beziehungsgestaltung und beim selbstschädigenden Verhalten, gezielt aufgreifen.</p>`],
    ['welche', 'Welche Therapieform?', `<p>Steht die Verringerung schwerwiegenden selbstverletzenden Verhaltens im Vordergrund, sollen DBT oder MBT angeboten werden (Empfehlung 10). Für diese beiden Verfahren lägen laut Ärzteblatt gute Wirksamkeitsnachweise vor. Weitere Verfahren wie Schematherapie und TFP stellen wir im Artikel <a href="/artikel/therapieformen-dbt-schematherapie-mbt-tfp/">Therapieformen im Vergleich</a> vor.</p>`],
    ['setting', 'Ambulant, teilstationär, stationär', `<table><tr><th>Setting</th><th>Aussage der Quellen</th></tr>
<tr><td><b>Ambulant</b></td><td>Die Behandlung soll im Allgemeinen ambulant erfolgen. Die Therapie soll nach Möglichkeit eine Sitzung pro Woche nicht unterschreiten; Frequenz und Dauer richten sich nach Bedürfnissen und Lebensverhältnissen.</td></tr>
<tr><td><b>Teil- und vollstationär</b></td><td>Sollen kurzzeitigen Kriseninterventionen oder zeitlich definierten, störungsspezifischen Behandlungsprogrammen dienen. Die AOK nennt für die tages- und vollstationäre Behandlung eine Dauer von etwa zehn Wochen.</td></tr></table>`],
    ['medikamente', 'Medikamente', `<p>Medikamentöse Interventionen sollen nicht die primäre Therapie sein und nicht anstelle besser geeigneter Verfahren eingesetzt werden. Details im Artikel <a href="/artikel/borderline-medikamente/">Borderline und Medikamente</a>.</p>`],
    ['angehoerige', 'Angehörige einbeziehen', `<p>Die Leitlinie sieht vor, Familie oder Bezugspersonen mit Zustimmung der betroffenen Person einzubeziehen, etwa bei der Erstellung von Krisenplänen, und ihnen professionelle Hilfsangebote zu machen (<a href="/artikel/borderline-angehoerige/">für Angehörige</a>).</p>`],
    ['weg', 'Wie komme ich in Behandlung?', `<p>Schritt für Schritt erklärt der Artikel <a href="/artikel/therapieplatz-finden/">Therapieplatz finden: Sprechstunde, 116117 und Antrag</a>.</p>`],
  ],
  faq: [
    ['Welche Therapie ist die beste bei Borderline?', 'Die Leitlinie empfiehlt eine strukturierte, borderline-spezifische Psychotherapie. Bei im Vordergrund stehendem selbstverletzendem Verhalten sollen DBT oder MBT angeboten werden. Welche Methode passt, klärst Du mit Fachleuten.'],
    ['Wie oft findet die Therapie statt?', 'Nach Möglichkeit mindestens einmal pro Woche. Frequenz und Dauer richten sich nach individuellen Bedürfnissen.'],
    ['Muss ich in eine Klinik?', 'Nach der Leitlinie soll die Behandlung im Allgemeinen ambulant erfolgen. Klinikaufenthalte sind für Krisen oder zeitlich definierte Programme gedacht.'],
  ],
  sources: pick('awmf', 'awmfpdf', 'aerzteblatt', 'aok', 'npimtherapie'),
  related: ['therapieformen-dbt-schematherapie-mbt-tfp', 'borderline-medikamente', 'therapieplatz-finden'],
});

A.push({
  slug: 'therapieformen-dbt-schematherapie-mbt-tfp', cat: 'behandlung', title: 'DBT, Schematherapie, MBT, TFP: Therapieformen im Vergleich', readMin: 7,
  desc: 'Die vier bekanntesten Therapieformen bei Borderline verständlich erklärt: DBT, Schematherapie, MBT und TFP. Aufbau, Dauer und was Leitlinie und Fachgesellschaft sagen.',
  short: 'DBT und MBT haben laut Ärzteblatt gute Wirksamkeitsnachweise, wenn selbstverletzendes Verhalten im Vordergrund steht. Die DBT kombiniert Einzel- und Gruppentherapie mit Fertigkeitentraining. Schematherapie und TFP sind weitere Verfahren. Welche passt, entscheidest Du mit Fachleuten.',
  sections: [
    ['uebersicht', 'Die Verfahren auf einen Blick', `<table><tr><th>Verfahren</th><th>Kerngedanke</th><th>Hinweise der Quellen</th></tr>
<tr><td><b>DBT</b><br>Dialektisch-behaviorale Therapie</td><td>Verbindet Verhaltenstherapie mit weiteren Methoden. Balance zwischen Akzeptanz und Veränderung, mit Fertigkeitentraining.</td><td>Einzel- und Gruppentherapie, Supervision; Dauer je nach Schwere etwa ein bis drei Jahre; Krisenintervention auch per Telefon. Laut AOK vor allem bei schwerer Erkrankung.</td></tr>
<tr><td><b>Schematherapie</b></td><td>Früh entstandene, tief verankerte Muster (Schemata) erkennen und verändern.</td><td>Laut AOK bei weniger schwer Erkrankten oder nach einer DBT.</td></tr>
<tr><td><b>MBT</b><br>Mentalisierungsbasierte Therapie</td><td>Eigenes Erleben und das Erleben anderer besser verstehen, um Gefühls- und Impulskontrolle sowie Beziehungen zu verbessern.</td><td>Gute Wirksamkeitsnachweise laut Ärzteblatt, wenn selbstverletzendes Verhalten im Vordergrund steht.</td></tr>
<tr><td><b>TFP</b><br>Übertragungsfokussierte Psychotherapie</td><td>Gestörte Beziehungsmuster, die oft aus der Kindheit stammen, in der therapeutischen Beziehung bearbeiten.</td><td>Beschreibung nach DGPPN-Portal; im Jugendalter nennt das Gesundheitsportal Österreich zusätzlich die psychoanalytisch-interaktionelle Methode.</td></tr></table>`],
    ['dbt', 'DBT genauer', `<p>Nach neurologen-und-psychiater-im-netz.org verläuft die DBT in drei Therapiephasen: Zuerst geht es um Störungen der Verhaltenskontrolle, einschließlich eines Fertigkeitentrainings zu Stresstoleranz, Gefühlskontrolle, zwischenmenschlichen Fertigkeiten, Selbstwert und Körperwahrnehmung. Danach um das emotionale Erleben, zuletzt um Probleme der Lebensführung. Vorrangig behandelt werden Suizidgedanken und Verhaltensweisen, die den Fortgang der Therapie gefährden. Zwischen Patient und Therapeut werden klare Therapievereinbarungen getroffen, zum Beispiel für den Umgang mit Krisen.</p>`],
    ['auswahl', 'Wie wähle ich aus?', `<p>Die Leitlinie legt nicht auf ein einziges Verfahren fest, sondern verlangt eine strukturierte, borderline-spezifische Therapie bei fortgebildeten Fachleuten. Ausnahme ist die Empfehlung für DBT oder MBT bei im Vordergrund stehendem selbstverletzendem Verhalten. In der psychotherapeutischen Sprechstunde kannst Du fragen, welche Verfahren die Praxis anbietet und ob eine Zusatzqualifikation vorliegt.</p>`],
    ['weitere', 'Weitere Programme', `<p>Das MSD Manual nennt neben den genannten Verfahren auch das Programm STEPPS (Systems Training for Emotional Predictability and Problem Solving) und unterstützende Psychotherapie. Dabei stellen Betroffene sich ein Team aus Freunden, Familie und Fachkräften zusammen, das in Krisen beisteht.</p>`],
  ],
  faq: [
    ['Wie lange dauert eine DBT?', 'Nach dem DGPPN-Portal je nach Art und Schwere zwischen mindestens einem und etwa drei Jahren, mit Zeitplan zu Beginn.'],
    ['Was ist der Unterschied zwischen DBT und Schematherapie?', 'Die DBT arbeitet stark mit Fertigkeitentraining und Krisenregeln. Die Schematherapie zielt auf früh entstandene Muster. Die AOK sieht die Schematherapie eher bei weniger schwer Erkrankten oder nach einer DBT.'],
    ['Zahlt die Krankenkasse diese Therapien?', 'Psychotherapie ist Leistung der gesetzlichen Krankenkassen. Welche Verfahren eine Praxis anbietet und wie der Antrag läuft, erklärt der Artikel zum Therapieplatz.'],
  ],
  sources: pick('npimtherapie', 'aok', 'aerzteblatt', 'awmfpdf', 'msd', 'gesundv'),
  related: ['borderline-therapie-ueberblick', 'borderline-medikamente', 'therapieplatz-finden'],
});

A.push({
  slug: 'borderline-medikamente', cat: 'behandlung', title: 'Borderline und Medikamente: Was die Leitlinie sagt', readMin: 5,
  desc: 'Gibt es ein Medikament gegen Borderline? Was die S3-Leitlinie, AOK und das Gesundheitsportal zu Psychopharmaka sagen: kein zugelassenes Mittel, nur zeitlich begrenzt und nicht allein.',
  short: 'Für die Borderline-Persönlichkeitsstörung ist kein Medikament speziell zugelassen. Die Leitlinie sagt: Medikamente sollen nicht die primäre Therapie sein, so wenige wie möglich eingesetzt werden und nur ergänzend, zeitlich begrenzt oder in akuten Krisen. Änderungen am Medikament gehören immer in ärztliche Hände.',
  sections: [
    ['zulassung', 'Kein zugelassenes Medikament', `<p>Die AOK schreibt, dass es keine Medikamente gibt, die speziell für diese Erkrankung zugelassen sind. Das Gesundheitsportal Österreich spricht von einem Einsatz „off label“ bei starken und anhaltenden Symptomen, zeitlich begrenzt. Das bedeutet: Ärztinnen und Ärzte setzen Mittel ein, die für andere Erkrankungen zugelassen sind.</p>`],
    ['leitlinie', 'Die Empfehlungen der Leitlinie', `<ul><li>Medikamente sollen <b>nicht die primäre Therapie</b> sein und nicht anstelle besser geeigneter Interventionen eingesetzt werden.</li><li>Es sollen <b>so wenige Präparate wie möglich</b> verwendet werden; Polypharmazie soll vermieden oder verringert werden.</li><li>Ergänzend zur Psychotherapie kann ein <b>zeitlich begrenzter</b> Einsatz erwogen werden, um umschriebene Symptome zu behandeln.</li><li>In <b>akuten Krisen</b> können Medikamente erwogen werden, wenn psychotherapeutische Maßnahmen nicht ausreichen, und sollen nach der Krise wieder abgesetzt werden.</li><li>Auf Medikamente mit Abhängigkeitspotenzial soll verzichtet werden; Mittel, die bei Überdosierung tödlich sein können, sollen sehr zurückhaltend verschrieben werden.</li><li>Psychotherapie soll nicht standardmäßig durch Medikamente ergänzt werden.</li></ul>`],
    ['komorbid', 'Begleiterkrankungen', `<p>Bei zusätzlicher Depression kommen laut AOK oft Antidepressiva zum Einsatz. Das DGPPN-Portal nennt Stimmungsstabilisierer, bestimmte Antipsychotika und SSRI bei zusätzlichen Angststörungen oder Depressionen und betont, dass Medikamente die Störung nicht allein heilen.</p>`],
    ['hinweis', 'Wichtig', `<div class="box box--warn"><b>Nicht auf eigene Faust ändern.</b> Dieser Artikel ist keine Medikamentenberatung. Beginn, Dosis und Absetzen von Medikamenten klärst Du mit Deiner Ärztin oder Deinem Arzt.</div>`],
  ],
  faq: [
    ['Gibt es eine Tablette gegen Borderline?', 'Nein. Es gibt kein speziell zugelassenes Medikament. Die Psychotherapie ist die empfohlene Grundlage der Behandlung.'],
    ['Wann sind Medikamente sinnvoll?', 'Nach der Leitlinie ergänzend, zeitlich begrenzt, bei umschriebenen Symptomen oder in akuten Krisen. Das entscheiden Ärztinnen und Ärzte im Einzelfall.'],
    ['Soll ich Medikamente absetzen, wenn ich Therapie mache?', 'Entscheide das nie allein. Sprich mit der verordnenden Ärztin oder dem Arzt.'],
  ],
  sources: pick('awmfpdf', 'aok', 'gesundv', 'npimtherapie', 'aerzteblatt'),
  related: ['borderline-therapie-ueberblick', 'therapieformen-dbt-schematherapie-mbt-tfp'],
});

module.exports = { S, CATS, A };
