// Zweiter Artikelblock: Alltag, Beziehungen, Arbeit und Recht, Hilfe finden. Quellen kommen aus articles.cjs (S).
const { S } = require('./articles.cjs');
const pick = (...k) => k.map((x) => S[x]);
const A2 = [];

A2.push({
  slug: 'krisenplan-borderline', cat: 'alltag', title: 'Krisenplan bei Borderline: Was dazugehört und wo es akut Hilfe gibt', readMin: 6,
  desc: 'Was ein Krisenplan ist, warum Fachleute ihn empfehlen, wer einbezogen wird und welche Anlaufstellen es in akuten Krisen gibt: 116 123, 112 und 116 117. Ohne Methodendetails.',
  short: 'Die S3-Leitlinie empfiehlt, Angehörige und Bezugspersonen in die Erstellung von Krisenplänen einzubinden. Ein Krisenplan wird gemeinsam mit Therapeutin oder Therapeut erarbeitet. In akuter Gefahr gilt: Notruf 112. Telefonseelsorge 116 123 ist kostenfrei erreichbar.',
  sections: [
    ['sofort', 'Wenn es jetzt akut ist', `<div class="box box--warn"><b>Akute Gefahr:</b> Ruf den <b>Notruf 112</b> oder geh in die nächste Notaufnahme. Zum Reden kannst Du die <b>Telefonseelsorge</b> anrufen: <b>116 123</b> oder 0800 111 0 111 / 0800 111 0 222, kostenfrei. Außerhalb der Praxiszeiten erreichst Du den ärztlichen Bereitschaftsdienst unter <b>116 117</b>. Mehr auf der Seite <a href="/krise/">Hilfe in der Krise</a>.</div>`],
    ['was', 'Was ist ein Krisenplan?', `<p>Ein Krisenplan hält schriftlich fest, was in einer Krise helfen soll und an wen Du Dich wenden kannst. Die Inhalte erarbeitest Du gemeinsam mit Deiner Therapeutin oder Deinem Therapeuten. Typische Bestandteile sind Telefonnummern und Anlaufstellen, Ansprechpersonen im Umfeld und Absprachen darüber, wer wann informiert wird. Was konkret hineingehört, ist individuell und wird in der Therapie besprochen. Auf dieser Seite nennen wir bewusst keine Methodendetails zu Selbstverletzung oder Suizid.</p>`],
    ['leitlinie', 'Was Leitlinie und Fachgesellschaft sagen', `<ul><li>Die Leitlinie sieht vor, dass Familienangehörige oder weitere Bezugspersonen in die Erstellung von Krisenplänen <b>eingebunden</b> und über einen hilfreichen Umgang <b>beraten</b> werden sollen, sofern die betroffene Person zustimmt.</li><li>In der DBT werden zwischen Patient und Therapeut klare Therapievereinbarungen getroffen, zum Beispiel zum Umgang mit Krisen. Die DBT sieht auch Krisenintervention vor, unter anderem als telefonische Beratung (DGPPN-Portal).</li><li>Das MSD Manual beschreibt beim Programm STEPPS ein selbst zusammengestelltes Unterstützungsteam aus Freunden, Familie und Fachkräften, das in Krisen beisteht.</li></ul>`],
    ['beratung', 'Beratung ist keine Krisenintervention', `<p>Das SeeleFon des Bundesverbands der Angehörigen psychisch erkrankter Menschen (BApK) bietet anonyme Telefon- und Mailberatung für Betroffene und Angehörige, ist aber ausdrücklich keine akute Krisenintervention. Für Notfälle nennt der BApK 110, 112 und den ärztlichen Bereitschaftsdienst 116 117.</p>`],
    ['umfeld', 'Für Angehörige', `<p>Die TK rät Angehörigen, Suizidäußerungen immer ernst zu nehmen. Sprich Sorgen offen an und hol Dir Unterstützung, bei Gefahr über den Notruf 112. Weitere Hinweise im Artikel <a href="/artikel/borderline-angehoerige/">Borderline: Rat für Angehörige</a>.</p>`],
  ],
  faq: [
    ['Wer erstellt einen Krisenplan?', 'Du erarbeitest ihn gemeinsam mit Deiner Therapeutin oder Deinem Therapeuten. Angehörige können mit Deiner Zustimmung einbezogen werden.'],
    ['Ist die Telefonseelsorge auch für Menschen mit Borderline da?', 'Ja, die TelefonSeelsorge ist unter 116 123 und unter 0800 111 0 111 sowie 0800 111 0 222 kostenfrei erreichbar und steht Menschen in belastenden Situationen offen.'],
    ['Was tun, wenn ich akut in Gefahr bin?', 'Ruf den Notruf 112 oder geh in die nächste Notaufnahme.'],
  ],
  sources: pick('awmfpdf', 'npimtherapie', 'msd', 'seelefon', 'ts', 'tk'),
  related: ['borderline-alltag-fertigkeiten', 'borderline-angehoerige', 'selbsthilfe-beratung-angehoerige'],
});

A2.push({
  slug: 'borderline-alltag-fertigkeiten', cat: 'alltag', title: 'Starke Gefühle im Alltag: Fertigkeitentraining und Unterstützung', readMin: 6,
  desc: 'Was in der DBT als Fertigkeitentraining gelernt wird, welche Unterstützung es im Alltag gibt und wo Betroffene Austausch finden. Ohne Methodendetails zu Selbstverletzung.',
  short: 'Das Fertigkeitentraining der DBT umfasst laut DGPPN-Portal Stresstoleranz, Gefühlskontrolle, zwischenmenschliche Fertigkeiten, Selbstwertsteigerung und Körperwahrnehmung. Gelernt wird es in der Therapie. Unterstützung im Alltag bieten Selbsthilfe, Peer-Beratung und ein verlässliches Umfeld.',
  sections: [
    ['skills', 'Was sind „Skills“?', `<p>In der DBT bezeichnet man Fertigkeiten, die man in einem Training lernt, oft als „Skills“. Nach neurologen-und-psychiater-im-netz.org umfasst das Fertigkeitentraining diese Bereiche:</p><ul><li>Stresstoleranz</li><li>Gefühlskontrolle (Umgang mit Emotionen)</li><li>zwischenmenschliche Fertigkeiten</li><li>Selbstwertsteigerung</li><li>Körperwahrnehmung</li></ul><p>Die konkreten Übungen werden von Therapeutinnen und Therapeuten angeleitet und auf Deine Situation abgestimmt. Wir geben hier bewusst keine Anleitungen für Krisensituationen, weil diese in die Therapie gehören.</p>`],
    ['peer', 'Austausch mit Menschen, die es kennen', `<p>Der BApK verweist auf mehrere Angebote: die Peer-Beratung Peer4u, in der Menschen mit eigener Erfahrung abends zu festen Zeiten erreichbar sind, das SelbsthilfeNetz als Datenbank für Selbsthilfegruppen und eine Informationsseite zu Borderline mit Erfahrungsberichten, darunter ein Video von Paulina zu Borderline-Skills. Die TK nennt zudem die Portale Borderline-Plattform (Borderline ps e. V.) und Borderline-Netzwerk e. V. mit Forum und Chat. Aktuelle Zeiten und Adressen findest Du auf den jeweiligen Seiten, siehe <a href="/artikel/selbsthilfe-beratung-angehoerige/">Selbsthilfe und Beratung</a>.</p>`],
    ['umfeld', 'Das Umfeld einbeziehen', `<p>Das MSD Manual beschreibt, sich ein Unterstützungsteam aus Freundinnen, Freunden, Familie und Fachleuten zusammenzustellen. Die Leitlinie sieht den Einbezug von Angehörigen vor, wenn Du zustimmst. Wer Dir nahesteht, kann sich über den Umgang beraten lassen (<a href="/artikel/borderline-angehoerige/">Rat für Angehörige</a>).</p>`],
    ['therapie', 'Fertigkeiten und Therapie gehören zusammen', `<div class="box"><b>Hinweis.</b> Dieser Artikel ersetzt kein Training und keine Therapie. Wenn Du mit starken Gefühlen und Anspannung kämpfst, ist eine borderline-spezifische Psychotherapie der empfohlene Weg (<a href="/artikel/borderline-therapie-ueberblick/">Behandlung im Überblick</a>). In akuten Krisen: <a href="/krise/">Hilfe in der Krise</a>.</div>`],
  ],
  faq: [
    ['Kann ich DBT-Skills selbst lernen?', 'Die Skills werden in der Therapie angeleitet. Selbsthilfeangebote und Erfahrungsberichte können ergänzen, ersetzen die Therapie aber nicht.'],
    ['Wo finde ich Austausch mit anderen Betroffenen?', 'Zum Beispiel über Peer4u und das SelbsthilfeNetz des BApK sowie über die von der TK genannten Portale Borderline-Plattform und Borderline-Netzwerk.'],
    ['Hilft Coaching bei starken Gefühlen?', 'Coaching ist keine Therapie und ersetzt keine Behandlung. Es kann bei Alltagsthemen begleiten, wenn die medizinische Seite abgeklärt und versorgt ist.'],
  ],
  sources: pick('npimtherapie', 'bapk', 'tk', 'msd', 'awmfpdf'),
  related: ['krisenplan-borderline', 'therapieformen-dbt-schematherapie-mbt-tfp', 'selbsthilfe-beratung-angehoerige'],
});

A2.push({
  slug: 'borderline-angehoerige', cat: 'beziehungen', title: 'Borderline: Rat für Angehörige, Partner und Eltern', readMin: 7,
  desc: 'Was Angehörige von Menschen mit Borderline tun können: informieren, nicht persönlich nehmen, eigene Grenzen wahren, Hilfe annehmen. Mit Angeboten von BApK, TK und Leitlinie.',
  short: 'Nach TK und Leitlinie helfen Angehörigen vor allem diese Schritte: sich informieren, das schwierige Verhalten als Teil der Erkrankung verstehen, die eigenen Grenzen im Blick behalten und selbst Unterstützung annehmen, etwa durch Selbsthilfe, Angehörigenseminare oder BPS-Familienprogramme.',
  sections: [
    ['informieren', 'Zuerst: sich informieren', `<p>Die TK rät engen Bezugspersonen, sich zuallererst gut über die Erkrankung zu informieren, um Verhaltensmuster besser einordnen zu können. Dazu gehört, das schwierige Verhalten nicht persönlich zu nehmen: Die Ursache ist die Erkrankung, nicht die Persönlichkeit. Hintergrund: <a href="/artikel/was-ist-borderline/">Was ist Borderline?</a></p>`],
    ['unterstuetzen', 'Wie Du unterstützen kannst', `<ul><li>Zeig, dass Du für die Person da bist.</li><li>Unterstütze dabei, professionelle Hilfe zu suchen, und begleite die Therapie verständnisvoll (TK).</li><li>Wenn die Betroffene zustimmt, kannst Du in Krisenpläne einbezogen und beraten werden (<a href="/artikel/krisenplan-borderline/">Krisenplan</a>).</li></ul><div class="box box--warn"><b>Suizidäußerungen ernst nehmen.</b> Die TK betont, dass Angehörige Äußerungen zu Suizid immer ernst nehmen sollen. Hol Dir Hilfe: bei akuter Gefahr Notruf <b>112</b>, zum Sprechen Telefonseelsorge <b>116 123</b> (kostenfrei).</div>`],
    ['selbst', 'Auch Du brauchst Halt', `<p>Die TK empfiehlt, das eigene seelische Wohl und die eigenen Grenzen stets im Blick zu behalten und den Austausch mit anderen Angehörigen zu suchen, in Selbsthilfegruppen oder Angehörigenseminaren, die häufig psychiatrische Einrichtungen anbieten. Die Leitlinie empfiehlt, dass Angehörige professionelle Hilfsangebote erhalten sollen, zum Beispiel:</p><ul><li>spezifische BPS-Familienprogramme</li><li>Selbsthilfeangebote und Borderline-Trialog</li><li>Unterstützung der Familien- und Jugendhilfe</li><li>Erziehungs- und Familienberatung</li></ul>`],
    ['eltern', 'Für Eltern', `<p>Eltern, die bei ihrem Kind eine Borderline-Persönlichkeitsstörung oder eine andere psychische Erkrankung vermuten, finden laut TK Unterstützung über die Beratungsstellensuche der Bundeskonferenz für Erziehungsberatung (bke). Die Leitlinie empfiehlt, Schuldzuweisungen beim Besprechen von Risikofaktoren möglichst zu vermeiden (<a href="/artikel/borderline-ursachen/">Ursachen</a>).</p>`],
    ['angebote', 'Konkrete Anlaufstellen', `<p>Der BApK bietet mit dem SeeleFon anonyme Telefon- und Mailberatung (0228 71002424) für Angehörige und Betroffene, außerdem einen Borderline-Flyer zum Download und eine Literaturliste. Mehr im Artikel <a href="/artikel/selbsthilfe-beratung-angehoerige/">Selbsthilfe und Beratung</a>.</p>`],
  ],
  faq: [
    ['Wie gehe ich mit Wutausbrüchen oder Rückzug um?', 'Die TK rät, schwieriges Verhalten nicht persönlich zu nehmen und die eigenen Grenzen zu wahren. Wie Du das im Einzelfall tust, kannst Du in Angehörigenseminaren, Selbsthilfegruppen oder über Beratung lernen.'],
    ['Darf ich mit der Therapeutin meiner Angehörigen sprechen?', 'Mit Zustimmung der betroffenen Person sieht die Leitlinie den Einbezug von Angehörigen vor, etwa bei Krisenplänen und der Beratung zum Umgang.'],
    ['Wo bekomme ich als Angehörige selbst Hilfe?', 'Beim SeeleFon des BApK, in Selbsthilfegruppen (SelbsthilfeNetz), in Angehörigenseminaren und bei Erziehungsberatungsstellen (bke).'],
  ],
  sources: pick('tk', 'awmfpdf', 'bapk', 'seelefon'),
  related: ['borderline-beziehungen', 'krisenplan-borderline', 'selbsthilfe-beratung-angehoerige'],
});

A2.push({
  slug: 'borderline-beziehungen', cat: 'beziehungen', title: 'Borderline und Beziehungen: Warum Nähe so schwer sein kann', readMin: 6,
  desc: 'Warum Beziehungen bei Borderline oft intensiv und instabil sind: Angst vor dem Verlassenwerden, Idealisierung und Entwertung. Verstehen statt verurteilen, mit Quellen und Hilfsangeboten.',
  short: 'Zwei der neun Diagnosekriterien betreffen Beziehungen: die verzweifelte Angst vor dem Verlassenwerden und ein Muster instabiler, intensiver Beziehungen mit Wechseln zwischen Idealisierung und Entwertung. Das ist Teil der Erkrankung und mit Therapie veränderbar, es ist kein Zeichen mangelnder Liebe.',
  sections: [
    ['muster', 'Was Fachleute beschreiben', `<p>Die AOK schildert große Angst, verlassen zu werden, häufig verbunden mit verzweifelten Bemühungen, das zu verhindern, sowie Partnerschaften und Freundschaften, die ausgesprochen intensiv, aber instabil und von Konflikten geprägt sein können. Das MSD Manual beschreibt den Wechsel zwischen Idealisierung und Herabsetzung der anderen Person. Beides gehört zu den neun Kriterien (<a href="/artikel/borderline-symptome/">Borderline-Symptome</a>).</p>`],
    ['erklaerung', 'Einordnung statt Schuld', `<p>Das Beziehungsmuster ist Ausdruck der Erkrankung. Die TK betont, dass schwieriges Verhalten nicht persönlich genommen werden sollte. Die Wurzeln liegen oft in frühen Beziehungserfahrungen, die Fachquellen als wichtigste Komponente nennen (<a href="/artikel/borderline-ursachen/">Ursachen</a>). Das erklärt das Verhalten, ohne es zu entschuldigen: Beide Seiten brauchen Grenzen und Unterstützung.</p>`],
    ['veraendern', 'Was sich verändern lässt', `<p>In der DBT gehören zwischenmenschliche Fertigkeiten zum Fertigkeitentraining. MBT zielt darauf, das eigene Erleben und das anderer besser zu verstehen und so das Beziehungsleben zu verbessern. Das MSD Manual weist ehrlich darauf hin, dass sich Symptome zwar mit der Zeit bessern, stabile Beziehungen aber nicht automatisch folgen und weiter Unterstützung nötig sein kann. Die Leitlinie nennt Angehörigenangebote wie Familienprogramme und den Borderline-Trialog.</p>`],
    ['partner', 'Für Partnerinnen und Partner', `<p>Als Partner oder Partnerin darfst Du Deine eigenen Grenzen wahren und Hilfe annehmen. Das nützt auch der Beziehung. Konkrete Anlaufstellen: <a href="/artikel/borderline-angehoerige/">Rat für Angehörige</a> und <a href="/artikel/selbsthilfe-beratung-angehoerige/">Selbsthilfe und Beratung</a>. Wer ein Beziehungsthema im Alltag vertiefen möchte, findet bei <a href="https://cogether.de/themen/beziehungen/" rel="noopener">CoGether</a> Begleitung als Coaching, das keine Therapie ersetzt.</p>`],
  ],
  faq: [
    ['Können Menschen mit Borderline stabile Beziehungen führen?', 'Die Quellen beschreiben Instabilität als Teil der Erkrankung, aber auch Besserung mit der Zeit und mit Behandlung. Das MSD Manual weist darauf hin, dass Stabilität nicht automatisch folgt und Unterstützung nötig sein kann.'],
    ['Ist die Angst vor dem Verlassenwerden Absicht?', 'Nein. Sie ist ein Merkmal der Erkrankung. Die TK rät Angehörigen, das Verhalten nicht persönlich zu nehmen.'],
    ['Soll ich eine Beziehung beenden?', 'Das kann niemand von außen entscheiden. Hol Dir Beratung, etwa über das SeeleFon des BApK, und achte auf Deine Grenzen und Deine Sicherheit.'],
  ],
  sources: pick('aok', 'msd', 'tk', 'npimtherapie', 'awmfpdf'),
  related: ['borderline-angehoerige', 'borderline-symptome', 'therapieformen-dbt-schematherapie-mbt-tfp'],
});

A2.push({
  slug: 'gdb-schwerbehindertenausweis-borderline', cat: 'arbeit-recht', title: 'Grad der Behinderung bei Borderline: Wie der GdB bewertet wird', readMin: 6,
  desc: 'GdB bei Persönlichkeitsstörungen wie Borderline: Bewertungsrahmen nach den Versorgungsmedizinischen Grundsätzen, Antrag beim Versorgungsamt, Schwerbehinderung ab GdB 50 und Nachteilsausgleiche.',
  short: 'Der Grad der Behinderung (GdB) richtet sich nach den Folgen der Erkrankung für die Teilhabe, nicht nach der Diagnose allein. Für Persönlichkeitsstörungen gelten nach den Versorgungsmedizinischen Grundsätzen Rahmen von 0 bis 100. Schwerbehinderung liegt ab GdB 50 vor. Den Antrag stellst Du beim Versorgungsamt.',
  sections: [
    ['rahmen', 'Der Bewertungsrahmen', `<p>Die Versorgungsmedizinischen Grundsätze (Anlage zu § 2 der Versorgungsmedizin-Verordnung) geben unter Nr. 3.7 für Neurosen, Persönlichkeitsstörungen und Verhaltensstörungen folgenden Rahmen vor:</p>
<table><tr><th>Ausprägung</th><th>GdB</th></tr>
<tr><td>Leichtere psychovegetative oder psychische Störungen</td><td>0 bis 20</td></tr>
<tr><td>Stärker behindernde Störungen mit wesentlicher Einschränkung der Erlebnis- und Gestaltungsfähigkeit</td><td>30 bis 40</td></tr>
<tr><td>Schwere Störungen mit mittelgradigen sozialen Anpassungsschwierigkeiten</td><td>50 bis 70</td></tr>
<tr><td>Schwere Störungen mit schweren sozialen Anpassungsschwierigkeiten</td><td>80 bis 100</td></tr></table>
<p>Entscheidend sind also die tatsächlichen Auswirkungen im Alltag und Beruf. Bei mehreren Beeinträchtigungen bildet das Amt einen Gesamt-GdB, bei dem alle Funktionsbeeinträchtigungen zusammen bewertet werden (betanet).</p>`],
    ['antrag', 'Antrag und Zuständigkeit', `<p>Den Antrag stellst Du beim Versorgungsamt. Je nach Bundesland heißt die Behörde anders, zum Beispiel Amt für Soziale Angelegenheiten oder Amt für Soziales und Versorgung. Das Amt richtet sich nach den Versorgungsmedizinischen Grundsätzen.</p>`],
    ['schwellen', 'Wichtige Schwellen', `<ul><li><b>Ab GdB 50:</b> Schwerbehinderung und Anspruch auf den Schwerbehindertenausweis; Zusatzurlaub für Arbeitnehmende; Möglichkeiten eines früheren Rentenzugangs.</li><li><b>Ab GdB 30:</b> Möglichkeit der Gleichstellung mit Hilfen im Beruf, zum Beispiel besserer Kündigungsschutz.</li><li><b>Ab GdB 20:</b> Behinderten-Pauschbetrag als steuerlicher Freibetrag.</li></ul><p>Die Angaben stammen von betanet und gelten allgemein für das Schwerbehindertenrecht, nicht speziell für eine Diagnose.</p>`],
    ['hinweis', 'Grenzen dieses Artikels', `<div class="box box--warn"><b>Keine Rechtsberatung.</b> Wie Dein Fall bewertet wird, hängt von Befunden und Auswirkungen im Einzelfall ab. Unterstützung bieten zum Beispiel Sozialberatungen, Sozialverbände und Therapeutinnen oder Therapeuten, die Befundberichte erstellen. Lass Dich vor Antragstellung beraten.</div>`],
  ],
  faq: [
    ['Bekomme ich mit der Diagnose Borderline automatisch einen GdB?', 'Nein. Maßgeblich sind die Auswirkungen auf Teilhabe und Alltag, nicht allein die Diagnose.'],
    ['Wo beantrage ich den Schwerbehindertenausweis?', 'Beim Versorgungsamt Deines Bundeslandes. Es kann je nach Bundesland anders heißen.'],
    ['Ab welchem GdB gilt man als schwerbehindert?', 'Ab einem GdB von 50.'],
  ],
  sources: pick('vmg', 'versmedv', 'betanet'),
  related: ['wiedereingliederung-arbeit-borderline', 'therapieplatz-finden'],
});

A2.push({
  slug: 'wiedereingliederung-arbeit-borderline', cat: 'arbeit-recht', title: 'Zurück in den Job: BEM und stufenweise Wiedereingliederung', readMin: 5,
  desc: 'Nach längerer Krankheit zurück in den Beruf: Betriebliches Eingliederungsmanagement (BEM) und stufenweise Wiedereingliederung erklärt, mit Voraussetzungen und Zahlung. Gilt auch bei psychischen Erkrankungen.',
  short: 'Sind Beschäftigte innerhalb eines Jahres sechs Wochen ununterbrochen oder wiederholt arbeitsunfähig, muss der Arbeitgeber ein Betriebliches Eingliederungsmanagement anbieten. Die Teilnahme ist freiwillig. Bei der stufenweisen Wiedereingliederung steigt die Arbeitszeit langsam, in dieser Zeit zahlt meist Krankengeld oder Übergangsgeld.',
  sections: [
    ['bem', 'Betriebliches Eingliederungsmanagement (BEM)', `<p>Das BEM dient laut AOK dazu, Beschäftigte nach Krankheit oder Unfall wieder in den Betrieb und das Arbeitsleben einzugliedern und weiteren Ausfällen vorzubeugen. Der Arbeitgeber muss es anbieten, wenn Mitarbeitende innerhalb eines Jahres sechs Wochen ununterbrochen oder wiederholt arbeitsunfähig sind. Für die Beschäftigten ist die Teilnahme freiwillig.</p>`],
    ['stufen', 'Stufenweise Wiedereingliederung', `<p>Beim sogenannten Hamburger Modell nimmst Du die Tätigkeit in mehreren Stufen wieder auf: Die Arbeitszeit wird langsam erhöht, und Du übernimmst Aufgaben, die zu Deinem Leistungsstand passen. Die Maßnahme dauert mehrere Wochen, in Ausnahmen mehrere Monate.</p><ul><li>Den Antrag stellt die behandelnde Ärztin oder der behandelnde Arzt.</li><li>Sie startet bei noch bestehender Arbeitsunfähigkeit, wenn Sozialversicherungsträger (Krankenkasse, Rentenversicherung oder Agentur für Arbeit) und Arbeitgeber zustimmen und absehbar ist, dass bald wieder gearbeitet werden kann.</li><li>In der Zeit zahlt Krankengeld der gesetzlichen Krankenkassen oder Übergangsgeld der Rentenversicherung.</li></ul>`],
    ['psyche', 'Und bei psychischen Erkrankungen?', `<p>Die genannten Regeln gelten allgemein für Krankheit. Sie stehen Menschen mit psychischen Erkrankungen genauso offen. Wie viel Du am Arbeitsplatz über Deine Erkrankung mitteilst, entscheidest Du selbst; hilfreich kann eine Beratung durch Sozialdienst, Betriebs- oder Personalrat oder Schwerbehindertenvertretung sein. Zur Frage eines GdB siehe <a href="/artikel/gdb-schwerbehindertenausweis-borderline/">Grad der Behinderung</a>.</p>`],
    ['hinweis', 'Hinweis', `<div class="box"><b>Keine Rechtsberatung.</b> Die Voraussetzungen im Einzelfall klären Krankenkasse, Rentenversicherung, Ärztin oder Arzt und gegebenenfalls eine Sozialberatung.</div>`],
  ],
  faq: [
    ['Muss ich am BEM teilnehmen?', 'Nein. Für Beschäftigte ist die Teilnahme freiwillig. Der Arbeitgeber muss es aber anbieten, wenn die Voraussetzungen erfüllt sind.'],
    ['Wer bezahlt mich bei der stufenweisen Wiedereingliederung?', 'In der Regel Krankengeld der gesetzlichen Krankenkasse oder Übergangsgeld der Rentenversicherung.'],
    ['Wer beantragt die stufenweise Wiedereingliederung?', 'Die behandelnde Ärztin oder der behandelnde Arzt. Krankenkasse oder Rentenversicherung und Arbeitgeber müssen zustimmen.'],
  ],
  sources: pick('aokwieder', 'betanet'),
  related: ['gdb-schwerbehindertenausweis-borderline', 'therapieplatz-finden'],
});

A2.push({
  slug: 'therapieplatz-finden', cat: 'hilfe', title: 'Therapieplatz finden: Sprechstunde, 116117 und Antrag', readMin: 7,
  desc: 'So findest Du einen Therapieplatz: psychotherapeutische Sprechstunde, Terminservicestelle 116117, Akutbehandlung, Probesitzungen und Antrag bei der Krankenkasse. Mit Fristen der KBV.',
  short: 'Der Einstieg führt über die psychotherapeutische Sprechstunde. Die Terminservicestelle unter 116117 vermittelt einen Termin innerhalb einer Woche, der höchstens vier Wochen in der Zukunft liegen darf. Eine Akutbehandlung umfasst bis zu 12 Gespräche und braucht keinen Antrag.',
  sections: [
    ['sprechstunde', 'Schritt 1: Psychotherapeutische Sprechstunde', `<p>Nach Angaben der Kassenärztlichen Bundesvereinigung (KBV) steht vor jeder psychotherapeutischen Behandlung die Sprechstunde. Sie dient dem Kennenlernen und Abklären: Diagnose, Therapiemethode, alternative Angebote. Dort kannst Du auch fragen, ob die Praxis borderline-spezifische Verfahren anbietet (<a href="/artikel/therapieformen-dbt-schematherapie-mbt-tfp/">Therapieformen</a>).</p>`],
    ['termin', 'Schritt 2: Termin über 116117', `<ul><li>Die Praxissuche läuft online über psychotherapiesuche.116117.de, über die Arztsuche auf 116117.de oder telefonisch über den Terminservice <b>116117</b> (ohne Vorwahl).</li><li>Nach der KBV beträgt die Wartezeit maximal fünf Wochen, bei Akutbehandlung maximal drei Wochen.</li><li>Die 116117 muss innerhalb einer Woche einen Termin vermitteln, der höchstens vier Wochen in der Zukunft liegen darf, bei Akutbehandlung höchstens zwei Wochen.</li></ul><p>Die Fristen beziehen sich auf die Vermittlung einer Sprechstunde, nicht auf einen Platz für eine Langzeittherapie. Regional können die Abläufe der Kassenärztlichen Vereinigungen abweichen.</p>`],
    ['akut', 'Akutbehandlung', `<p>Eine Akutbehandlung umfasst bis zu 12 Gespräche zu je 50 Minuten (oder kürzer bei mehr Terminen). Sie benötigt keinen Antrag bei der Krankenkasse und kann direkt nach der Sprechstunde beginnen.</p>`],
    ['probatorik', 'Schritt 3: Probesitzungen und Antrag', `<p>In den probatorischen Sitzungen lernst Du die Therapeutin oder den Therapeuten kennen, und die Diagnostik wird vertieft. Für Kurz- und Langzeittherapie stellst Du einen Antrag bei der Krankenkasse; die Praxis hilft dabei. Die Kosten übernimmt die Krankenkasse, Akutbehandlung und gruppenpsychotherapeutische Grundversorgung ohne Genehmigung.</p>`],
    ['leitlinie', 'Worauf Du achten kannst', `<div class="box">Die Leitlinie empfiehlt, dass Behandelnde in der jeweiligen Methode fortgebildet sind und Supervision erhalten. Frag in der Sprechstunde danach. Wenn die Wartezeit lang ist und Du Dich in einer Krise befindest, nutze die Hilfen auf der Seite <a href="/krise/">Hilfe in der Krise</a>.</div>`],
  ],
  faq: [
    ['Wie lange muss ich auf eine Sprechstunde warten?', 'Nach der KBV maximal fünf Wochen über die Terminservicestelle. Die 116117 vermittelt innerhalb einer Woche einen Termin, der höchstens vier Wochen in der Zukunft liegt.'],
    ['Brauche ich eine Überweisung?', 'Die KBV-Seite beschreibt die Terminvereinbarung für die Sprechstunde über die Praxis, online oder über die 116117. Eine Überweisung nennt sie dort nicht als Voraussetzung. Im Zweifel fragst Du bei der Praxis oder Deiner Krankenkasse nach.'],
    ['Was kostet die Therapie?', 'Die Kosten übernimmt die Krankenkasse. Für Kurz- und Langzeittherapie ist ein Antrag nötig, den die Praxis begleitet.'],
  ],
  sources: pick('kbv', 'awmfpdf', 'aok'),
  related: ['borderline-diagnose-ablauf', 'borderline-therapie-ueberblick', 'selbsthilfe-beratung-angehoerige'],
});

A2.push({
  slug: 'selbsthilfe-beratung-angehoerige', cat: 'hilfe', title: 'Selbsthilfe und Beratung bei Borderline: Anlaufstellen im Überblick', readMin: 5,
  desc: 'Wo Betroffene und Angehörige Austausch und Beratung finden: SeeleFon, Peer4u und SelbsthilfeNetz des BApK, Borderline-Plattform und Borderline-Netzwerk, bke-Beratungsstellen.',
  short: 'Der BApK bietet das SeeleFon (anonyme Telefon- und Mailberatung), Peer-Beratung und das SelbsthilfeNetz. Die TK nennt außerdem die Borderline-Plattform, das Borderline-Netzwerk und die Beratungsstellensuche der bke. Keines dieser Angebote ersetzt Therapie oder Krisenhilfe.',
  sections: [
    ['bapk', 'Angebote des BApK', `<table><tr><th>Angebot</th><th>Was es ist</th></tr>
<tr><td><b>SeeleFon</b></td><td>Anonyme Telefon- und Mailberatung für Betroffene und Angehörige, Telefon 0228 71002424, montags bis donnerstags 10 bis 12 und 14 bis 20 Uhr, freitags 10 bis 12 und 14 bis 18 Uhr. Es fallen die Kosten Deines Telefonvertrags für ein Festnetzgespräch an. Keine Psychotherapie und keine akute Krisenintervention.</td></tr>
<tr><td><b>Peer4u</b></td><td>Peer-Beratung zu festen Abendzeiten (peer-for-you.de).</td></tr>
<tr><td><b>SelbsthilfeNetz</b></td><td>Datenbank für die Suche nach Selbsthilfegruppen und Anlaufstellen.</td></tr>
<tr><td><b>Borderline-Flyer und Materialien</b></td><td>Flyer zum Download oder zur Bestellung, Literaturliste, Hilfe-im-Netz-Übersicht, Erfahrungsberichte.</td></tr></table>`],
    ['weitere', 'Weitere Anlaufstellen', `<ul><li><b>Borderline-Plattform</b> (Verein Borderline ps e. V.): Informationen zu Diagnostik und Therapie, Adressen lokaler Anlaufstellen und Selbsthilfegruppen, Erfahrungsberichte, Foren und Mailinglisten (TK).</li><li><b>Borderline-Netzwerk e. V.:</b> Portal von Betroffenen für Betroffene mit Informationen, Anlaufstellen, Forum und Chat (TK).</li><li><b>bke-Beratungsstellensuche</b> (Bundeskonferenz für Erziehungsberatung): Hilfe für Eltern (TK).</li><li><b>Angehörigenseminare</b> und Selbsthilfegruppen, die häufig psychiatrische Einrichtungen anbieten (TK).</li></ul><p>Die Leitlinie nennt außerdem den Borderline-Trialog, einen Austausch auf Augenhöhe zwischen Betroffenen, Angehörigen und Fachleuten.</p>`],
    ['krise', 'Bei akuter Krise', `<div class="box box--warn">Die genannten Beratungsangebote sind keine Krisenintervention. In akuter Gefahr: <b>Notruf 112</b>. Telefonseelsorge <b>116 123</b>, ärztlicher Bereitschaftsdienst <b>116 117</b>. Mehr auf <a href="/krise/">Hilfe in der Krise</a>.</div>`],
  ],
  faq: [
    ['Ist das SeeleFon kostenlos?', 'Es fallen die Gebühren an, die Dein Telefonvertrag für ein Gespräch ins deutsche Festnetz vorsieht.'],
    ['Wo finde ich eine Selbsthilfegruppe?', 'Zum Beispiel im SelbsthilfeNetz des BApK oder über die Borderline-Plattform und das Borderline-Netzwerk.'],
    ['Ersetzt Selbsthilfe die Therapie?', 'Nein. Selbsthilfe und Beratung ergänzen die Behandlung, die die Leitlinie als Grundlage empfiehlt.'],
  ],
  sources: pick('bapk', 'seelefon', 'tk', 'awmfpdf'),
  related: ['borderline-angehoerige', 'krisenplan-borderline', 'therapieplatz-finden'],
});

const GLOSS = [
  ['Affektregulation', 'Die Fähigkeit, Gefühle wahrzunehmen, einzuordnen und zu steuern. Bei der Borderline-Persönlichkeitsstörung ist sie nach der Leitlinie schwer gestört.'],
  ['BEM', 'Betriebliches Eingliederungsmanagement: Angebot des Arbeitgebers nach längerer Arbeitsunfähigkeit. Für Beschäftigte freiwillig.'],
  ['Borderline-Muster', 'Bezeichnung in der ICD-11, die den DSM-5-Kriterien der Borderline-Persönlichkeitsstörung entspricht.'],
  ['DBT', 'Dialektisch-behaviorale Therapie: borderline-spezifische Psychotherapie mit Einzel- und Gruppentherapie und Fertigkeitentraining.'],
  ['Dissoziation', 'Das Gefühl, nicht da oder sich selbst fremd zu sein. Kann unter starker Belastung vorübergehend auftreten.'],
  ['GdB', 'Grad der Behinderung. Ab 50 liegt eine Schwerbehinderung vor.'],
  ['Komorbidität', 'Gleichzeitiges Vorliegen weiterer Erkrankungen, bei BPS zum Beispiel Depression, Angststörung oder PTBS.'],
  ['MBT', 'Mentalisierungsbasierte Therapie: stärkt das Verständnis für das eigene Erleben und das anderer.'],
  ['Off-Label', 'Einsatz eines Medikaments außerhalb seiner Zulassung. Bei Borderline gibt es kein speziell zugelassenes Medikament.'],
  ['Peer-Beratung', 'Beratung durch Menschen mit eigener Erfahrung mit psychischer Erkrankung.'],
  ['Remission', 'Rückgang der Symptome, sodass die Diagnosekriterien nicht mehr erfüllt sind.'],
  ['Schematherapie', 'Psychotherapie, die früh entstandene, tief verankerte Muster (Schemata) bearbeitet.'],
  ['Skills', 'Umgangssprachlich für die im DBT-Fertigkeitentraining gelernten Fähigkeiten, etwa Stresstoleranz.'],
  ['Terminservicestelle', 'Vermittelt unter 116117 Termine für die psychotherapeutische Sprechstunde.'],
  ['TFP', 'Übertragungsfokussierte Psychotherapie: bearbeitet Beziehungsmuster in der therapeutischen Beziehung.'],
  ['Trialog', 'Austausch auf Augenhöhe zwischen Betroffenen, Angehörigen und Fachleuten.'],
];

module.exports = { A2, GLOSS };
