(function(){
var d=document;
var SC=['Nie / trifft nicht zu','Selten','Manchmal','Oft','Sehr oft / trifft genau zu'];
var CR=[
{k:'Verlassenwerden vermeiden',t:'Angst vor Verlassenwerden',intro:'Es geht darum, wie Du reagierst, wenn Dir nahestehende Menschen sich entfernen oder Du das befürchtest.',q:[
'Wenn jemand, der mir wichtig ist, sich zurückzieht oder nicht antwortet, gerate ich in Panik, auch wenn es vermutlich harmlose Gründe gibt.',
'Ich unternehme viel, manchmal Verzweifeltes, um zu verhindern, dass jemand mich verlässt.',
'Schon die Vorstellung, allein gelassen zu werden, ist für mich kaum auszuhalten.',
'Kleine Anzeichen von Distanz (ein knapper Ton, eine abgesagte Verabredung) deute ich schnell als beginnende Ablehnung.'],
note:'Verzweifelte Bemühungen, ein tatsächliches oder vermutetes Verlassenwerden zu vermeiden.'},
{k:'Instabile, intensive Beziehungen',t:'Beziehungen',intro:'Hier geht es um Nähe, Enttäuschung und Brüche in wichtigen Beziehungen.',q:[
'Mein Bild von wichtigen Menschen schwankt zwischen „ganz wunderbar“ und „ganz furchtbar“, manchmal innerhalb weniger Tage.',
'Meine Beziehungen sind sehr intensiv, aber auch von heftigen Konflikten und Brüchen geprägt.',
'Ich habe schon mehrfach Beziehungen oder Freundschaften plötzlich beendet und später wieder aufgenommen.',
'Menschen, die ich zuerst idealisiert habe, enttäuschen mich oft so stark, dass ich sie abwerte.'],
note:'Muster instabiler, intensiver Beziehungen mit Wechsel zwischen Idealisierung und Entwertung.'},
{k:'Unsicheres Selbstbild',t:'Selbstbild und Identität',intro:'Hier geht es darum, wie klar und beständig Du Dich selbst erlebst.',q:[
'Ich weiß oft nicht, wer ich wirklich bin.',
'Meine Ziele, Werte oder Pläne (Beruf, Lebensweise, Überzeugungen) ändern sich stark und plötzlich.',
'Je nach Umgebung oder Person fühle ich mich wie ein völlig anderer Mensch.',
'Ich erlebe mich selbst oft als schlecht, wertlos oder „falsch“.'],
note:'Ausgeprägte und andauernde Instabilität des Selbstbildes oder der Selbstwahrnehmung.'},
{k:'Impulsivität',t:'Impulsivität',intro:'Hier geht es um Handlungen, die schnell und ohne Abwägen geschehen und Dir schaden können.',q:[
'Ich handle impulsiv und bereue es später, zum Beispiel bei Geldausgaben.',
'Ich neige zu riskantem Verhalten, das mir schaden kann (etwa im Straßenverkehr, in der Sexualität oder mit Substanzen), ohne an die Folgen zu denken.',
'Es gibt Phasen mit Essanfällen oder mit Konsum, den ich kaum kontrollieren kann.',
'Wenn die Anspannung steigt, tue ich spontan Dinge, die kurzfristig entlasten, langfristig aber schaden.'],
note:'Impulsivität in mindestens zwei potenziell selbstschädigenden Bereichen.'},
{k:'Selbstschädigendes Verhalten',t:'Selbstschädigung und Suizidgedanken',sens:true,intro:'Dieser Abschnitt ist sensibel. Beantworte nur, was für Dich in Ordnung ist. Wenn es Dir gerade schlecht geht: Telefonseelsorge 116 123 (kostenfrei), Notruf 112.',q:[
'In belastenden Zeiten habe ich Gedanken daran, mir selbst zu schaden.',
'Ich habe mir in der Vergangenheit absichtlich selbst geschadet, um Anspannung oder Gefühle zu bewältigen.',
'Ich hatte schon Gedanken, nicht mehr leben zu wollen.',
'Ich habe anderen gegenüber angedeutet, dass ich mir etwas antun könnte, zum Beispiel wenn sie mich verlassen wollten.'],
note:'Wiederholte suizidale Handlungen, Andeutungen oder Drohungen oder Selbstverletzungsverhalten.'},
{k:'Starke Stimmungsschwankungen',t:'Stimmungsschwankungen',intro:'Hier geht es um die Geschwindigkeit und Stärke, mit der sich Deine Stimmung ändert.',q:[
'Meine Stimmung kann innerhalb weniger Stunden kippen, oft durch Kleinigkeiten.',
'Ich erlebe Phasen starker Niedergeschlagenheit, Gereiztheit oder Angst, die nach Stunden oder wenigen Tagen wieder vergehen.',
'Gefühle überfluten mich so stark, dass ich kaum klar denken kann.',
'Nach einem Gefühlsausbruch brauche ich lange, um mich zu beruhigen.'],
note:'Affektive Instabilität durch ausgeprägte Reaktivität der Stimmung; Verstimmungen dauern meist Stunden, selten mehr als einige Tage.'},
{k:'Chronische Leere',t:'Innere Leere',intro:'Hier geht es um ein Gefühl der Leere, das Dich über längere Zeit begleitet.',q:[
'Ich fühle mich innerlich leer.',
'Es gibt lange Phasen, in denen ich kaum etwas spüre oder alles bedeutungslos erscheint.',
'Ich suche nach etwas, das die Leere füllt (Menschen, Aktivitäten, Konsum).',
'Die Leere bleibt auch dann, wenn es äußerlich gut läuft.'],
note:'Chronische Gefühle von Leere.'},
{k:'Heftige Wut',t:'Wut',intro:'Hier geht es um die Stärke Deiner Wut und darum, wie gut Du sie steuern kannst.',q:[
'Ich werde schneller und heftiger wütend, als es dem Anlass entspricht.',
'Es fällt mir schwer, meine Wut zu kontrollieren, und ich sage oder tue Dinge, die ich bereue.',
'Meine Wut hält lange an.',
'Wutausbrüche haben schon zu Streit, Brüchen oder Ärger bei der Arbeit geführt.'],
note:'Unangemessen heftige Wut oder Schwierigkeiten, Wut zu kontrollieren.'},
{k:'Stressbedingte Wahrnehmungsveränderung',t:'Misstrauen und Dissoziation unter Stress',intro:'Hier geht es um vorübergehende Veränderungen des Erlebens, wenn Du stark belastet bist.',q:[
'Unter starkem Stress fühle ich mich wie neben mir stehend oder abgetrennt von mir selbst oder von meiner Umgebung.',
'In Stresszeiten misstraue ich anderen stark, etwa weil ich glaube, sie wollten mir schaden, obwohl ich später merke, dass es nicht stimmte.',
'Unter Belastung verliere ich Zeit oder fühle mich wie in einem Nebel.',
'Die Welt oder mein Körper wirken unter Stress unwirklich oder fremd.'],
note:'Vorübergehende, durch Belastung ausgelöste paranoide Vorstellungen oder schwere dissoziative Symptome.'}
];
var CTX=['Diese Erfahrungen bestehen seit vielen Jahren, begannen also schon in der Jugend oder im frühen Erwachsenenalter.','Sie treten in verschiedenen Lebensbereichen auf (zum Beispiel Beziehungen, Beruf, Freizeit).','Sie belasten mich stark oder schränken mein Leben deutlich ein.','Sie bestehen auch dann, wenn ich keinen Alkohol und keine Drogen konsumiert habe.'];
var root=d.getElementById('tst');if(!root){return;}
var step=0,total=CR.length+1,ans={};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function group(prefix,items,start){
  return items.map(function(q,i){var id=prefix+i;var h='<fieldset class="q"><legend>'+esc(q)+'</legend><div class="scale">';
    SC.forEach(function(l,v){h+='<label><input type="radio" name="'+id+'" value="'+v+'"'+(ans[id]===v?' checked':'')+'><span>'+esc(l)+'</span></label>';});
    return h+'</div></fieldset>';}).join('');
}
function render(){
  var pct=Math.round(step/total*100);
  var head='<div class="prog" aria-label="Fortschritt"><div class="prog__bar" style="width:'+pct+'%"></div></div><p class="prog__t">Schritt '+(step+1)+' von '+total+'</p>';
  var body;
  if(step<CR.length){var c=CR[step];body='<h2>'+esc(c.t)+'</h2><p class="lede2">'+esc(c.intro)+'</p>'+(c.sens?'<div class="kbox"><p><b>Du musst nicht allein damit sein.</b> Telefonseelsorge <b>116 123</b> (kostenfrei) · Notruf <b>112</b> · <a href="/krise/">Alle Hilfen</a></p></div>':'')+group('c'+step+'_',c.q);}
  else{body='<h2>Zum Schluss: Einordnung</h2><p class="lede2">Diese Fragen werden nicht als Symptome gezählt. Sie helfen, die Ergebnisse einzuordnen.</p>'+group('x_',CTX);}
  root.innerHTML=head+'<div id="tmsg" class="tmsg" role="alert" hidden>Bitte beantworte alle Aussagen auf dieser Seite.</div>'+body+'<div class="tnav">'+(step>0?'<button type="button" class="btn btn--o" id="tback">Zurück</button>':'<span></span>')+'<button type="button" class="btn" id="tnext">'+(step===total-1?'Ergebnis anzeigen':'Weiter')+'</button></div>';
  root.querySelectorAll('input[type=radio]').forEach(function(r){r.addEventListener('change',function(){ans[r.name]=parseInt(r.value,10);});});
  d.getElementById('tnext').addEventListener('click',next);
  var b=d.getElementById('tback');if(b){b.addEventListener('click',function(){step--;render();top_();});}
}
function top_(){var s=d.getElementById('test-start');if(s){s.scrollIntoView({behavior:'smooth',block:'start'});}}
function need(){var n=step<CR.length?CR[step].q.length:CTX.length,p=step<CR.length?'c'+step+'_':'x_';for(var i=0;i<n;i++){if(ans[p+i]===undefined){return false;}}return true;}
function next(){if(!need()){d.getElementById('tmsg').hidden=false;d.getElementById('tmsg').scrollIntoView({block:'center'});return;}if(step<total-1){step++;render();top_();}else{result();top_();}}
function result(){
  var sc=[],all=0,n=0,strong=0;
  CR.forEach(function(c,i){var s=0;c.q.forEach(function(_,j){s+=ans['c'+i+'_'+j];});var m=s/c.q.length;all+=s;n+=c.q.length;var hit=m>=2.5;if(hit){strong++;}sc.push({c:c,m:m,p:Math.round(m/4*100),hit:hit});});
  var overall=Math.round(all/n/4*100);
  var ctx=CTX.map(function(_,i){return ans['x_'+i];});var ctxHigh=ctx.filter(function(v){return v>=3;}).length;
  var band,txt;
  if(strong>=5){band='high';txt='<b>Deutliche Hinweise.</b> In '+strong+' von 9 Bereichen sind Deine Angaben stark ausgeprägt. In der Fachwelt gelten mindestens fünf von neun Kriterien als Voraussetzung einer Diagnose. Das ist kein Befund, aber ein guter Grund, das Thema fachlich abklären zu lassen.';}
  else if(strong>=3||overall>=40){band='mid';txt='<b>Einzelne bis mehrere Hinweise.</b> In '+strong+' von 9 Bereichen sind Deine Angaben stark ausgeprägt. Das kann viele Ursachen haben, auch andere Belastungen oder Erkrankungen. Wenn Du darunter leidest, lohnt sich ein Gespräch in einer psychotherapeutischen Sprechstunde.';}
  else{band='low';txt='<b>Eher wenige Hinweise.</b> In '+strong+' von 9 Bereichen sind Deine Angaben stark ausgeprägt. Das schließt nichts aus. Wenn Du trotzdem leidest, sprich mit Fachleuten, denn ein Test ersetzt nie das Gespräch.';}
  var sens=[ans.c4_0,ans.c4_1,ans.c4_2,ans.c4_3].some(function(v){return v>=2;});
  var h='<div class="res res--'+band+'"><h2>Dein Ergebnis</h2><p class="res__t">'+txt+'</p><p class="res__n">Gesamtausprägung: <b>'+overall+' %</b> · stark ausgeprägte Bereiche: <b>'+strong+' von 9</b> · Einordnungsfragen mit „oft“ oder „sehr oft“: <b>'+ctxHigh+' von 4</b></p></div>';
  if(sens){h+='<div class="box box--warn"><b>Du hast Fragen zu Selbstschädigung oder Suizidgedanken mit „manchmal“ oder häufiger beantwortet.</b> Damit musst Du nicht allein bleiben. Telefonseelsorge <b>116 123</b> (kostenfrei), ärztlicher Bereitschaftsdienst <b>116 117</b>, bei akuter Gefahr Notruf <b>112</b>. <a href="/krise/">Alle Hilfen in der Krise</a></div>';}
  h+='<h3>Die neun Bereiche im Überblick</h3><table class="rt"><tr><th>Bereich</th><th>Ausprägung</th><th></th></tr>'+sc.map(function(s){return '<tr><td><b>'+esc(s.c.k)+'</b><br><small>'+esc(s.c.note)+'</small></td><td><div class="bar"><i style="width:0" data-w="'+s.p+'"></i></div></td><td>'+s.p+' %'+(s.hit?' <span class="tag">stark</span>':'')+'</td></tr>';}).join('')+'</table>';
  h+='<div class="box"><b>So liest Du das Ergebnis.</b> Ein Bereich gilt als „stark ausgeprägt“, wenn Du im Durchschnitt zwischen „manchmal“ und „oft“ oder höher geantwortet hast (ab 63 %). Diese Schwellen haben wir selbst gewählt, sie sind nicht wissenschaftlich validiert.</div>';
  h+='<h3>Wie es weitergehen kann</h3><ol class="steps"><li><b>Ergebnis mitnehmen.</b> Drucke es aus oder speichere es als PDF und bring es in die Sprechstunde mit.</li><li><b>Psychotherapeutische Sprechstunde nutzen.</b> Dort wird fachlich abgeklärt. So kommst Du zu einem Termin: <a href="/artikel/therapieplatz-finden/">Therapieplatz finden</a>.</li><li><b>Mehr verstehen.</b> <a href="/artikel/borderline-symptome/">Die neun Kriterien erklärt</a> · <a href="/artikel/borderline-diagnose-ablauf/">So läuft die Diagnostik ab</a> · <a href="/artikel/borderline-therapie-ueberblick/">Behandlung im Überblick</a></li></ol>';
  h+='<div class="box box--warn"><b>Wichtig:</b> Dieser Test ist keine Diagnose und kein validierter Fragebogen. Die Diagnose stellen nur Fachleute nach sorgfältiger Diagnostik. Viele Beschwerden dieser Art kommen auch bei anderen Erkrankungen vor, zum Beispiel bei Depression, posttraumatischer Belastungsstörung, ADHS oder bipolaren Störungen.</div>';
  h+='<div class="tnav"><button type="button" class="btn btn--o" id="tprint">Ergebnis drucken oder als PDF speichern</button><button type="button" class="btn" id="tre">Test neu starten</button></div>';
  root.innerHTML=h;
  setTimeout(function(){root.querySelectorAll('.bar i').forEach(function(i){i.style.width=i.getAttribute('data-w')+'%';});},120);
  d.getElementById('tprint').addEventListener('click',function(){window.print();});
  d.getElementById('tre').addEventListener('click',function(){ans={};step=0;render();top_();});
}
render();
})();
