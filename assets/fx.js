(function(){
var d=document,de=d.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
de.classList.add('js');
function ready(f){if(d.readyState==='loading'){d.addEventListener('DOMContentLoaded',f);}else{f();}}
ready(function(){
  // Reveal
  var sel='.cat,.art,.sec__h,.qlist li,.net a,.cta-test,.band,.box,.short,.author,.faq details,.gloss div,.phones div,.stats__g div,.netw li';
  var els=[].slice.call(d.querySelectorAll(sel)).filter(function(e){return !e.closest('.sos,.hero,.tst');});
  if('IntersectionObserver' in window&&!rm){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(e,i){e.classList.add('rv');var sib=e.parentElement?[].indexOf.call(e.parentElement.children,e):0;e.style.setProperty('--d',(Math.min(sib,6)*0.07)+'s');io.observe(e);});
  }
  // Zahlen hochzählen
  var cs=d.querySelectorAll('[data-count]');
  function count(el){var t=parseInt(el.getAttribute('data-count'),10),n=0,s=null;if(rm){el.textContent=t;return;}function step(ts){if(!s)s=ts;var p=Math.min((ts-s)/1200,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step);}requestAnimationFrame(step);}
  if(cs.length){if('IntersectionObserver' in window){var co=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){count(x.target);co.unobserve(x.target);}});},{threshold:.5});cs.forEach(function(c){co.observe(c);});}else{cs.forEach(function(c){c.textContent=c.getAttribute('data-count');});}}
  // Header, Fortschritt, Nach-oben
  var hd=d.querySelector('.hd'),rp=d.querySelector('.rp i'),art=d.querySelector('article.prose'),up=d.createElement('button');
  up.className='totop';up.type='button';up.setAttribute('aria-label','Nach oben');up.textContent='↑';d.body.appendChild(up);
  up.addEventListener('click',function(){window.scrollTo({top:0,behavior:rm?'auto':'smooth'});});
  var tocA=[].slice.call(d.querySelectorAll('.toc a')),heads=tocA.map(function(a){return d.getElementById((a.getAttribute('href')||'').slice(1));});
  var tick=false;
  function onScroll(){
    var y=window.scrollY||de.scrollTop;
    if(hd)hd.classList.toggle('hd--s',y>40);
    up.classList.toggle('on',y>700);
    if(rp&&art){var r=art.getBoundingClientRect(),h=r.height-window.innerHeight*.5,p=Math.max(0,Math.min(1,(-r.top+window.innerHeight*.3)/h));rp.style.width=(p*100)+'%';}
    if(tocA.length){var cur=-1;heads.forEach(function(h,i){if(h&&h.getBoundingClientRect().top<140)cur=i;});tocA.forEach(function(a,i){a.classList.toggle('on',i===cur);});}
    tick=false;
  }
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onScroll);}},{passive:true});onScroll();
});
})();
