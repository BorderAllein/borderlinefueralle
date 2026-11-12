// Fünfter Artikelblock: Klinik/Tagesklinik, Jugendliche, Dissoziation. Quellen: S3-Leitlinie Langfassung, AOK, MSD, Gesundheitsportal Österreich, DGPPN-Portal, TK, BApK.
require('./articles3.cjs');
const { S } = require('./articles.cjs');
const pick = (...k) => k.map((x) => S[x]);
const A5 = [];

A5.push({
  slug: 'klinik-tagesklinik-borderline', cat: 'behandlung', publishedAt: '2026-11-20', title: 'Klinik oder Tagesklinik bei Borderline: Wann stationär, wie lange?', readMin: 7,
  desc: 'Stationäre und teilstationäre Behandlung bei Borderline: Wann sie nach S3-Leitlinie sinnvoll ist, wie lange sie dauert (AOK: etwa zehn Wochen), worauf es bei der Klinik ankommt und warum lange unspezifische Aufenthalte vermieden werden sollen.',
  short: 'Nach der S3-Leitlinie soll die Behandlung im Allgemeinen ambulant erfolgen. Stationär oder teilstationär ist sie sinnvoll zur kurzzeitigen Krisenintervention oder in zeitlich definierten, störungsspezifischen Programmen. Lange, unspezifische Aufenthalte sollen vermieden werden. Die AOK nennt für tages- und vollstationäre Programme etwa zehn Wochen.',
  sections: [
    ['grundsatz', 'Ambulant zuerst', `<p>Die Leitlinie empfiehlt, die Behandlung der Borderline-Persönlichkeitsstörung im Allgemeinen ambulant durchzuführen. Stationäre und teilstationäre Angebote ergänzen sie in bestimmten Situationen (<a href="/artikel/borderline-therapie-ueberblick/">Behandlung im Überblick</a>).</p>`],
    ['wann', 'Wann ist stationär oder teilstationär sinnvoll?', `<ul><li><b>Krisenintervention:</b> kurzzeitige Aufenthalte, wenn eine Krise ambulant nicht zu tragen ist, etwa bei akuter Gefährdung. Ziel ist die Krisenbewältigung.</li><li><b>Elektive Programme:</b> länger dauernde, aber zeitlich klar definierte, störungsspezifische Behandlungsprogramme, die ambulante Psychotherapie einleiten oder unterstützen und Verhaltens- und Selbstmanagement trainieren.</li></ul><div class="box box--warn"><b>Akute Gefahr:</b> Notruf <b>112</b> oder nächste Notaufnahme. Telefonseelsorge <b>116 123</b> (kostenfrei). Mehr: <a href="/krise/">Hilfe in der Krise</a>.</div>`],
    ['formen', 'Tagesklinik und vollstationär', `<p>Die AOK beschreibt zwei Formen: die tagesstationäre Behandlung, montags bis freitags von morgens bis nachmittags, und die vollstationäre Behandlung, bei der Patientinnen und Patienten im Krankenhaus bleiben. Für beide nennt die AOK eine Dauer von etwa zehn Wochen. Dabei ist von Programmen die Rede, die zeitlich begrenzt sind.</p>`],
    ['vermeiden', 'Was die Leitlinie vermeiden will', `<p>Längere, unspezifische stationäre Aufenthalte ohne strukturierte, borderline-spezifische Angebote sollen vermieden werden. Als Grund nennt die Leitlinie das Risiko der Hospitalisierung, gemeint ist die Gewöhnung an den stationären Rahmen (Erläuterung von uns).</p>`],
    ['achten', 'Worauf Du bei der Klinik achten kannst', `<ul><li>Gibt es ein <b>störungsspezifisches Konzept</b> für Borderline, nicht nur allgemeine Psychiatrie?</li><li>Sind die Behandelnden in der Methode <b>fortgebildet</b> und erhalten Supervision? Das fordert die Leitlinie ausdrücklich, ebenso Ressourcen dafür in den Einrichtungen.</li><li>Wie ist die <b>Anbindung nach dem Aufenthalt</b> an ambulante Therapie geregelt?</li></ul><p>Diese Fragen sind unsere Anregung, abgeleitet aus den Leitlinien-Empfehlungen. Eine Klinikempfehlung können wir nicht geben.</p>`],
    ['weg', 'Wie komme ich hin?', `<p>Der Weg führt über Fachärztin oder Facharzt, die Hausarztpraxis oder die psychotherapeutische Sprechstunde, in akuter Krise über die Notaufnahme (<a href="/artikel/therapieplatz-finden/">Therapieplatz finden</a>). Für die Zeit danach, wenn es um Alltag und Beruf geht, kann eine <a href="/artikel/reha-borderline-antrag/">Reha</a> ein weiterer Baustein sein.</p>`],
  ],
  faq: [
    ['Muss man bei Borderline in die Klinik?', 'Nein. Die Leitlinie sieht die Behandlung im Allgemeinen ambulant vor. Stationär oder teilstationär kommt zur Krisenintervention oder für zeitlich definierte, störungsspezifische Programme infrage.'],
    ['Wie lange dauert ein Klinikaufenthalt?', 'Die AOK nennt für tages- und vollstationäre Behandlung etwa zehn Wochen. Die Leitlinie will längere, unspezifische Aufenthalte vermeiden.'],
    ['Was ist der Unterschied zwischen Tagesklinik und Klinik?', 'In der Tagesklinik wird montags bis freitags tagsüber behandelt, vollstationär bleibt man im Krankenhaus (AOK).'],
  ],
  sources: pick('awmfpdf', 'aok', 'awmf'),
  related: ['borderline-therapie-ueberblick', 'reha-borderline-antrag', 'krisenplan-borderline'],
});

A5.push({
  slug: 'borderline-jugendliche-eltern', cat: 'erkennen', publishedAt: '2026-11-23', title: 'Borderline bei Jugendlichen: Diagnose, Behandlung und Rolle der Eltern', readMin: 7,
  desc: 'Borderline im Jugendalter: Ab 12 Jahren möglich zu diagnostizieren, wie die S3-Leitlinie Diagnostik, Therapie und Einbezug der Eltern empfiehlt, und wo Eltern Beratung finden.',
  short: 'Nach der S3-Leitlinie kann die Diagnose nach fachgerechter Diagnostik schon ab 12 Jahren gestellt werden. Jugendliche von 14 bis 18 sollen eine strukturierte, borderline-spezifische Psychotherapie erhalten, Eltern und Bezugspersonen sollen einbezogen werden. Selbstbericht-Fragebögen reichen bei Jugendlichen nicht, es braucht ein klinisches Interview.',
  sections: [
    ['haeufigkeit', 'Wie häufig ist Borderline im Jugendalter?', `<p>Bevölkerungsrepräsentative Studien finden bei Jugendlichen eine Häufigkeit von 1 bis 3 Prozent. In klinischen Behandlungskontexten liegt der Anteil höher; die Leitlinie nennt bei Jugendlichen bis zu 35,6 Prozent.</p>`],
    ['diagnose', 'Diagnose ab 12 Jahren, nur mit Diagnostik', `<p>Die Leitlinie empfiehlt, die Diagnose nach fachgerechter Diagnostik auch bei Jugendlichen ab 12 Jahren zu stellen, wenn die Kriterien erfüllt sind, damit frühzeitig passende Hilfe möglich wird. Eine Abklärung soll erwogen werden bei wiederholtem selbstschädigendem Verhalten, erheblicher emotionaler Instabilität, mehreren gleichzeitigen psychischen Störungen, ausbleibendem Therapieerfolg oder stark beeinträchtigtem Alltag. Bei Jugendlichen ist stets ein klinisches Interview nötig, weil Selbstbericht-Fragebögen sehr empfindlich sind und zu vielen falsch-positiven Ergebnissen führen können. Unser <a href="/test/">Selbsttest</a> ist deshalb ausdrücklich nur eine Orientierung für Erwachsene und keine Diagnose.</p>`],
    ['behandlung', 'Behandlung nach Altersgruppe', `<table><tr><th>Alter</th><th>Empfehlung der Leitlinie</th></tr>
<tr><td>14 bis 18 Jahre</td><td>Strukturierte, borderline-spezifische Psychotherapie, ausgerichtet auf die Altersgruppe.</td></tr>
<tr><td>unter 14 Jahre</td><td>Psychotherapeutische Unterstützung und Begleitung; altersangepasste, borderline-spezifische Methoden können eingesetzt werden. Angehörige sollen einbezogen werden.</td></tr></table><p>Auch bei Jugendlichen gilt: Die Behandlung findet primär ambulant statt. Therapeutische Wohngruppen können in der Adoleszenz und bei jungen Erwachsenen einen stabilen Rahmen bieten. Das Gesundheitsportal Österreich nennt für das Jugendalter zusätzlich die psychoanalytisch-interaktionelle Methode (PIM).</p>`],
    ['eltern', 'Die Rolle der Eltern', `<p>Angehörige und Bezugspersonen sollen laut Leitlinie bei Betroffenen unter 14 Jahren einbezogen werden und bei der Behandlungsplanung für Betroffene unter 18 Jahren kontinuierlich. Das heißt nicht, dass Eltern alles erfahren: Bei Minderjährigen wird das Geheimhaltungsinteresse des Kindes gegen den Anspruch der Eltern auf Mitwissen abgewogen (<a href="/artikel/schweigepflicht-angehoerige-borderline/">Schweigepflicht</a>). Die Leitlinie empfiehlt außerdem, beim Besprechen von Belastungen Schuldzuweisungen möglichst zu vermeiden (<a href="/artikel/borderline-ursachen/">Ursachen</a>).</p>`],
    ['hilfe', 'Wo Eltern Unterstützung finden', `<p>Eltern, die bei ihrem Kind eine Borderline-Persönlichkeitsstörung oder eine andere psychische Erkrankung vermuten, finden laut TK Unterstützung über die Beratungsstellensuche der Bundeskonferenz für Erziehungsberatung (bke). Weitere Anlaufstellen: <a href="/artikel/borderline-angehoerige/">Rat für Angehörige</a> und <a href="/artikel/selbsthilfe-beratung-angehoerige/">Selbsthilfe und Beratung</a>. In akuter Gefahr: Notruf <b>112</b>, Telefonseelsorge <b>116 123</b> (kostenfrei, siehe <a href="/krise/">Hilfe in der Krise</a>).</p>`],
  ],
  faq: [
    ['Ab welchem Alter kann Borderline diagnostiziert werden?', 'Nach fachgerechter Diagnostik laut S3-Leitlinie ab 12 Jahren, wenn die Kriterien erfüllt sind.'],
    ['Reicht ein Online-Test bei Jugendlichen?', 'Nein. Bei Jugendlichen ist ein klinisches Interview nötig, Selbstbericht-Verfahren führen zu vielen falsch-positiven Ergebnissen.'],
    ['Werden Eltern in die Therapie einbezogen?', 'Ja, nach der Leitlinie bei unter 14-Jährigen und kontinuierlich bei der Behandlungsplanung für unter 18-Jährige. Die Schweigepflicht des Jugendlichen bleibt zu beachten.'],
    ['Wo bekomme ich als Elternteil Beratung?', 'Zum Beispiel über die Beratungsstellensuche der Bundeskonferenz für Erziehungsberatung (bke) und über Angehörigen-Angebote wie das SeeleFon des BApK.'],
  ],
  sources: pick('awmfpdf', 'gesundv', 'tk', 'seelefon'),
  related: ['borderline-diagnose-ablauf', 'borderline-angehoerige', 'schweigepflicht-angehoerige-borderline'],
});

A5.push({
  slug: 'dissoziation-borderline', cat: 'erkennen', publishedAt: '2026-11-25', title: 'Dissoziation bei Borderline: Wenn man neben sich steht', readMin: 6,
  desc: 'Dissoziation bei Borderline verständlich erklärt: Was damit gemeint ist, wie sie unter Stress auftritt, wie sie von dissoziativen Störungen abgegrenzt wird und was die Leitlinie zur Behandlung sagt.',
  short: 'Zu den neun Borderline-Kriterien gehören vorübergehende, durch Belastung ausgelöste paranoide Vorstellungen oder schwere dissoziative Symptome, also das Gefühl, nicht da oder sich selbst fremd zu sein. Sie sind laut MSD Manual vorübergehend und in der Regel nicht schwerwiegend genug für eine eigene Störung. Dissoziative Störungen können zusätzlich vorliegen.',
  sections: [
    ['was', 'Was ist Dissoziation?', `<p>Das MSD Manual beschreibt Dissoziation als das Gefühl, nicht da oder sich selbst entfremdet zu sein. Bei Menschen mit Borderline-Persönlichkeitsstörung können unter starkem Stress kurze paranoide Schübe oder dissoziative Symptome auftreten. Diese Schübe sind vorübergehend und laut MSD in der Regel nicht schwerwiegend genug, um als eigene Störung zu gelten. Das Gesundheitsportal Österreich nennt als Beispiel Derealisation, das Gefühl, die Umgebung sei unwirklich. Das DGPPN-Portal beschreibt außerdem eine gestörte Körperwahrnehmung als mögliches Erleben.</p>`],
    ['kriterium', 'Dissoziation als Kriterium', `<p>Als neuntes DSM-5-Kriterium führt die Leitlinie „vorübergehende, durch Belastungen ausgelöste paranoide Vorstellungen oder schwere dissoziative Symptome“ auf. Das Kriterium allein macht keine Diagnose, es zählt zusammen mit mindestens vier weiteren (<a href="/artikel/borderline-symptome/">die neun Kriterien</a>).</p>`],
    ['abgrenzung', 'Dissoziative Störungen und Begleiterkrankungen', `<p>Dissoziative Störungen sind eine eigene Diagnosegruppe. Nach der Leitlinie gehören sie zu den häufigen Begleiterkrankungen der Borderline-Persönlichkeitsstörung und werden in der Differenzialdiagnostik berücksichtigt, ebenso PTBS (<a href="/artikel/borderline-abgrenzung-adhs-bipolar-ptbs/">Borderline, ADHS, bipolar oder PTBS?</a>). Ob dissoziative Erfahrungen Teil der Borderline-Symptomatik sind oder eine zusätzliche Störung vorliegt, klären Fachleute.</p>`],
    ['behandlung', 'Was bei Dissoziation hilft', `<ul><li><b>Psychotherapie:</b> Die Leitlinie empfiehlt eine strukturierte, borderline-spezifische Psychotherapie. In der DBT gehören laut DGPPN-Portal Stresstoleranz und Körperwahrnehmung zum Fertigkeitentraining (<a href="/artikel/borderline-alltag-fertigkeiten/">Fertigkeitentraining</a>).</li><li><b>Medikamente:</b> Sie sind nicht die primäre Therapie. Für ausgeprägte dissoziative und paranoide Symptome nennt die Leitlinie unter den medikamentösen Optionen Antipsychotika, zeitlich begrenzt und ergänzend. Das entscheiden Ärztinnen und Ärzte im Einzelfall (<a href="/artikel/borderline-medikamente/">Borderline und Medikamente</a>).</li><li><b>Krisenplan:</b> Gemeinsam mit der Therapeutin lässt sich festlegen, wer Dich in solchen Momenten unterstützt (<a href="/artikel/krisenplan-borderline/">Krisenplan</a>).</li></ul><div class="box"><b>Keine Anleitung.</b> Konkrete Übungen für akute Momente gehören in die Therapie. Wenn es Dir gerade schlecht geht: Telefonseelsorge <b>116 123</b> (kostenfrei), Notruf <b>112</b>.</div>`],
  ],
  faq: [
    ['Ist Dissoziation immer ein Zeichen von Borderline?', 'Nein. Dissoziative Symptome kommen auch bei anderen Erkrankungen vor, etwa bei PTBS oder dissoziativen Störungen. Die Einordnung gehört in fachliche Diagnostik.'],
    ['Wie lange dauert dissoziatives Erleben bei Borderline?', 'Nach dem MSD Manual sind die Schübe vorübergehend und werden durch Stress ausgelöst.'],
    ['Gibt es ein Medikament gegen Dissoziation?', 'Die Leitlinie nennt Antipsychotika als Option bei ausgeprägten Symptomen, zeitlich begrenzt und ergänzend. Standard ist die Psychotherapie.'],
  ],
  sources: pick('msd', 'awmfpdf', 'gesundv', 'npimtherapie'),
  related: ['borderline-symptome', 'borderline-abgrenzung-adhs-bipolar-ptbs', 'borderline-alltag-fertigkeiten'],
});

module.exports = { A5 };
