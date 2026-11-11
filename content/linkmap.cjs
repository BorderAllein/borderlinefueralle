// Link-Map "Im Netzwerk weiterlesen": nur geprüfte (HTTP 200) und thematisch passende Ziele. Stand 11.11.2026.
// Hinweis: Forschungsüberblicke (Observatory) und Beiträge anderer Portale sind allgemeiner Natur und nicht borderline-spezifisch, wenn so beschriftet.
const W = 'https://cogether.de/wissen/';
const L = {
  verstehen: [W + 'borderline-verstehen-anzeichen-hintergruende-und-behandlung/', 'Borderline verstehen: Anzeichen, Hintergründe und Behandlung', 'CoGether Wissen'],
  beziehungen: [W + 'borderline-und-beziehungen-naehe-verlustangst-und-was-hilft/', 'Borderline und Beziehungen: Nähe, Verlustangst und was hilft', 'CoGether Wissen'],
  test: [W + 'borderline-test-habe-ich-borderline-selbsttest-anzeichen-und-wie-es-weitergeht/', 'Borderline-Test: Anzeichen und wie es weitergeht', 'CoGether Wissen'],
  familie: [W + 'borderline-in-der-familie-und-partnerschaft-umgang-fuer-angehoerige-und-partner/', 'Borderline in Familie und Partnerschaft: Umgang für Angehörige', 'CoGether Wissen'],
  verlustangst: [W + 'verlustangst-in-der-beziehung-woher-sie-kommt-und-was-hilft/', 'Verlustangst in der Beziehung: Woher sie kommt und was hilft', 'CoGether Wissen (allgemein)'],
  intensitaet: [W + 'emotionale-intensitaet-selbstfuehrung-alltag/', 'Emotionale Intensität und Selbstführung im Alltag', 'CoGether Wissen (allgemein)'],
  grenzen: [W + 'angehoerige-und-eigene-grenzen-wenn-helfen-zur-dauerlast-wird/', 'Angehörige und eigene Grenzen: Wenn Helfen zur Dauerlast wird', 'CoGether Wissen (allgemein)'],
  emoreg: ['https://guidanceobservatory.com/analyses/emotionsregulation-welche-strategien-wirken/', 'Emotionsregulation: Welche Strategien wirken', 'Guidance Observatory, Forschungsüberblick (allgemein, nicht borderline-spezifisch)'],
  stigma: ['https://guidanceobservatory.com/analyses/stigma-und-hilfesuche-was-144-studien-zeigen/', 'Stigma und Hilfesuche: Was 144 Studien zeigen', 'Guidance Observatory, Forschungsüberblick (allgemein)'],
  luecke: ['https://guidanceobservatory.com/analyses/behandlungsluecke-bei-psychischen-stoerungen-was-deutsche-erhebungen-zeigen/', 'Behandlungslücke bei psychischen Störungen: Was deutsche Erhebungen zeigen', 'Guidance Observatory, Forschungsüberblick (allgemein)'],
  podcast: ['https://borderallein.de/podcast/', 'Podcast Border Allein', 'Svens Podcast zum Thema Borderline'],
  adhs: ['https://adhsbegleitung.de/artikel/adhs-bei-erwachsenen/', 'ADHS bei Erwachsenen: Symptome, Ursachen, Diagnose und Hilfe', 'ADHS Begleitung (anderes Krankheitsbild)'],
};
const MAP = {
  'was-ist-borderline': ['verstehen', 'podcast'],
  'borderline-symptome': ['verstehen', 'test'],
  'borderline-maenner-frauen': ['verstehen', 'podcast'],
  'borderline-diagnose-ablauf': ['test', 'verstehen'],
  'icd-borderline-bezeichnungen': ['verstehen'],
  'borderline-abgrenzung-adhs-bipolar-ptbs': ['adhs', 'verstehen'],
  'borderline-ursachen': ['verstehen', 'podcast'],
  'borderline-verlauf-heilbar': ['verstehen', 'stigma', 'podcast'],
  'borderline-therapie-ueberblick': ['verstehen', 'luecke', 'podcast'],
  'therapieformen-dbt-schematherapie-mbt-tfp': ['verstehen'],
  'borderline-medikamente': ['verstehen'],
  'borderline-und-sucht': ['verstehen'],
  'krisenplan-borderline': ['intensitaet', 'podcast'],
  'borderline-alltag-fertigkeiten': ['intensitaet', 'emoreg', 'podcast'],
  'borderline-angehoerige': ['familie', 'grenzen', 'podcast'],
  'borderline-beziehungen': ['beziehungen', 'verlustangst', 'podcast'],
  'schweigepflicht-angehoerige-borderline': ['familie', 'grenzen'],
  'gdb-schwerbehindertenausweis-borderline': ['stigma'],
  'wiedereingliederung-arbeit-borderline': ['verstehen'],
  'erwerbsminderungsrente-borderline': ['verstehen'],
  'reha-borderline-antrag': ['verstehen', 'luecke'],
  'therapieplatz-finden': ['luecke', 'stigma', 'verstehen'],
  'wartezeit-therapieplatz-ueberbruecken': ['luecke', 'intensitaet'],
  'selbsthilfe-beratung-angehoerige': ['familie', 'stigma', 'podcast'],
};
module.exports = { L, MAP, netLinks: (slug) => (MAP[slug] || ['verstehen']).map((k) => L[k]).slice(0, 4) };
