// Vierter Artikelblock: Abgrenzung und Sucht (Quelle: S3-Leitlinie Langfassung u. a.).
const { S } = require('./articles.cjs');
const pick = (...k) => k.map((x) => S[x]);
const A4 = [];

A4.push({
  slug: 'borderline-abgrenzung-adhs-bipolar-ptbs', cat: 'diagnose', publishedAt: '2026-11-16', title: 'Borderline, ADHS, bipolar oder PTBS? So grenzen Fachleute ab', readMin: 8,
  desc: 'Borderline oder ADHS, bipolare Störung, PTBS, Depression? Was die S3-Leitlinie zur Differenzialdiagnose sagt, warum sich Beschwerden überschneiden und weshalb Diagnostik Fachleuten gehört.',
  short: 'Beschwerden wie Impulsivität, Stimmungsschwankungen und Anspannung kommen bei mehreren Erkrankungen vor. Die S3-Leitlinie führt ADHS, bipolare Störungen, PTBS und komplexe PTBS, Depression und weitere Diagnosen als Differenzialdiagnosen auf. Typisch für Borderline: Impulsivität und Wut sind meist mit emotionalem Stress verbunden, Stimmungen sind reaktiv und kurzlebig.',
  sections: [
    ['warum', 'Warum die Abgrenzung schwerfällt', `<p>Menschen mit Borderline-Persönlichkeitsstörung haben laut Leitlinie häufig weitere psychische Erkrankungen: Depressive Störungen und Angststörungen liegen über die Lebenszeit bei über 80 Prozent, häufig sind außerdem PTBS, ADHS, Substanzabhängigkeit, bipolare Störungen, dissoziative Störungen und Essstörungen. Die Leitlinie unterscheidet also zwei Fragen: Welche Diagnose erklärt die Beschwerden (Differenzialdiagnose), und welche kommt zusätzlich vor (Komorbidität)? Beides klären Fachleute in der Diagnostik (<a href="/artikel/borderline-diagnose-ablauf/">Diagnoseablauf</a>).</p>`],
    ['adhs', 'Borderline und ADHS', `<p>Laut Leitlinie ist bei der Borderline-Persönlichkeitsstörung impulsives oder aggressives Verhalten meist mit emotionalem Stress verbunden. Bei ADHS fehlen die zwischenmenschlichen Schwierigkeiten, die für Borderline typisch sind, dafür stehen kognitive Impulsivität, motorische Hyperaktivität und beschleunigtes Sprechen im Vordergrund. ADHS gehört zugleich zu den häufigen Begleiterkrankungen der BPS. Konkrete Zahlen zur Häufigkeit des gemeinsamen Auftretens nennt die Leitlinie nicht. Hintergrund zu ADHS bei Erwachsenen: <a href="https://adhsbegleitung.de/" rel="noopener">ADHS Begleitung</a>.</p>`],
    ['bipolar', 'Borderline und bipolare Störung', `<p>Die Leitlinie hält fest, dass die Stimmungsschwankungen bei BPS weniger nachhaltig und stärker reaktiv sind als bei bipolaren Störungen. Passend dazu beschreibt das Diagnosekriterium bei Borderline Verstimmungen, die gewöhnlich einige Stunden und nur selten mehr als einige Tage dauern (<a href="/artikel/borderline-symptome/">die neun Kriterien</a>). Eine besondere Abgrenzung nennt die Leitlinie zur Bipolar-II-Störung. Weil beide Erkrankungen unterschiedlich behandelt werden, ist die fachliche Klärung wichtig.</p>`],
    ['ptbs', 'Borderline und PTBS, komplexe PTBS', `<p>Auch PTBS und komplexe PTBS führt die Leitlinie als Differenzialdiagnosen auf und zugleich als häufige Begleiterkrankungen. Liegt neben der BPS eine PTBS vor, soll nach der Leitlinie eine integrierte oder traumaspezifisch angepasste Behandlung erfolgen, zum Beispiel eine DBT mit traumaspezifischer Erweiterung. Mehr zu frühen Belastungen als Risikofaktor: <a href="/artikel/borderline-ursachen/">Ursachen</a>.</p>`],
    ['weitere', 'Weitere Abgrenzungen', `<p>Die Leitlinie nennt außerdem depressive Erkrankungen, Angststörungen, antisoziale und andere Persönlichkeitsstörungen, Autismus-Spektrum-Störungen, dissoziative Störungen, psychotische Störungen und die Frage der Geschlechtsdysphorie. Selbstverletzendes Verhalten gilt dabei als Symptom, nicht als eigene Diagnose. Nach dem Gesundheitsportal Österreich gehört zur Diagnostik zudem der Ausschluss organischer Ursachen und von Drogeneinfluss.</p>`],
    ['fazit', 'Was das für Dich heißt', `<div class="box"><b>Selbst abgrenzen geht nicht.</b> Wer sich in mehreren Beschreibungen wiederfindet, hat nicht automatisch mehrere Erkrankungen. Mehrere Diagnosen können nebeneinander bestehen, und manche Beschwerden gehören zu einer anderen Erkrankung. Eine psychotherapeutische Sprechstunde klärt das (<a href="/artikel/therapieplatz-finden/">so kommst Du zu einem Termin</a>). Unser <a href="/test/">Selbsttest</a> kann dabei höchstens eine Orientierung geben.</div>`],
  ],
  faq: [
    ['Wie unterscheide ich Borderline und bipolare Störung?', 'Nach der Leitlinie sind die Stimmungsschwankungen bei Borderline weniger nachhaltig und stärker reaktiv. Die Abgrenzung gehört in fachliche Diagnostik.'],
    ['Kann man Borderline und ADHS gleichzeitig haben?', 'Ja. Die Leitlinie nennt ADHS als häufige Begleiterkrankung der Borderline-Persönlichkeitsstörung. Konkrete Zahlen nennt sie nicht.'],
    ['Was ist der Unterschied zwischen Borderline und PTBS?', 'Beide haben Überschneidungen, und beide können gleichzeitig vorliegen. Die Leitlinie empfiehlt dann eine integrierte, traumaspezifisch angepasste Behandlung.'],
  ],
  sources: pick('awmfpdf', 'gesundv', 'msd', 'npim'),
  related: ['borderline-diagnose-ablauf', 'borderline-symptome', 'borderline-ursachen'],
});

A4.push({
  slug: 'borderline-und-sucht', cat: 'behandlung', publishedAt: '2026-11-18', title: 'Borderline und Sucht: Wie häufig, was die Leitlinie empfiehlt', readMin: 6,
  desc: 'Alkohol, Cannabis, Medikamente: Etwa die Hälfte bis zwei Drittel der Menschen mit Borderline hat aktuell oder früher eine Abhängigkeit. Was die S3-Leitlinie zur Behandlung und zu Medikamenten mit Abhängigkeitspotenzial sagt.',
  short: 'Nach der S3-Leitlinie weist etwa die Hälfte bis zwei Drittel der Menschen mit Borderline-Persönlichkeitsstörung aktuell oder früher eine Abhängigkeitserkrankung auf. Schwere Suchtstörungen, die die Psychotherapie gefährden, sollen zuerst behandelt werden. Borderline-spezifische Verfahren wie DBT zeigen positive Effekte auch auf Suchtsymptome.',
  sections: [
    ['haeufigkeit', 'Wie häufig ist Sucht bei Borderline?', `<p>Die Leitlinie nennt für die Gruppe der Menschen mit BPS, dass etwa die Hälfte bis zwei Drittel aktuell oder in der Vergangenheit eine Abhängigkeitserkrankung hat. Häufig genannt werden Alkohol, Cannabis, Opiate, Beruhigungsmittel, Kokain und Halluzinogene. Substanzkonsum kann dabei auch eine Form sein, mit Anspannung umzugehen (<a href="/artikel/borderline-symptome/">Impulsivität als Kriterium</a>).</p>`],
    ['diagnostik', 'Warum Substanzen die Diagnostik erschweren', `<p>Zur Diagnostik gehört der Ausschluss von Drogeneinnahme als Auslöser der Beschwerden (Gesundheitsportal Österreich). Unter Alkohol und Drogen können Stimmung, Impulsivität und Wahrnehmung stark verändert sein. Deshalb fragt auch unser <a href="/test/">Selbsttest</a>, ob Erfahrungen auch ohne Konsum bestehen.</p>`],
    ['behandlung', 'Was die Leitlinie zur Behandlung sagt', `<ul><li>Liegen <b>schwere substanzbezogene Störungen</b> vor, die die Psychotherapie der BPS gefährden, soll deren Behandlung <b>vorgezogen</b> werden.</li><li><b>Borderline-spezifische Behandlungen</b> wie die DBT zeigen positive Effekte auf Borderline- und Suchtsymptome.</li><li>Auf <b>Medikamente mit Abhängigkeitspotenzial</b>, insbesondere Benzodiazepine, Pregabalin und Z-Substanzen, soll in der Dauertherapie verzichtet werden.</li></ul><p>Mehr zur medikamentösen Seite: <a href="/artikel/borderline-medikamente/">Borderline und Medikamente</a>.</p>`],
    ['hilfe', 'Hilfe finden', `<p>Der Weg führt über die psychotherapeutische Sprechstunde oder die Hausärztin, den Hausarzt (<a href="/artikel/therapieplatz-finden/">Therapieplatz finden</a>). Suchtberatungsstellen vor Ort sind eine weitere Anlaufstelle. In akuter Gefahr: Notruf <b>112</b>; zum Reden Telefonseelsorge <b>116 123</b> (kostenfrei).</p><div class="box box--warn"><b>Nicht allein absetzen.</b> Wer regelmäßig Beruhigungsmittel oder andere Medikamente nimmt, sollte sie nur nach ärztlicher Rücksprache verändern.</div>`],
  ],
  faq: [
    ['Wie häufig ist Sucht bei Borderline?', 'Laut Leitlinie hat etwa die Hälfte bis zwei Drittel aktuell oder früher eine Abhängigkeitserkrankung.'],
    ['Was wird zuerst behandelt, Sucht oder Borderline?', 'Schwere Suchterkrankungen, die die Psychotherapie gefährden, sollen laut Leitlinie vorgezogen werden. Sonst sind borderline-spezifische Verfahren wie DBT möglich.'],
    ['Warum sollen Beruhigungsmittel vermieden werden?', 'Die Leitlinie empfiehlt, auf Medikamente mit Abhängigkeitspotenzial wie Benzodiazepine, Pregabalin und Z-Substanzen in der Dauertherapie zu verzichten.'],
  ],
  sources: pick('awmfpdf', 'gesundv'),
  related: ['borderline-medikamente', 'borderline-therapie-ueberblick', 'borderline-abgrenzung-adhs-bipolar-ptbs'],
});

module.exports = { A4 };
