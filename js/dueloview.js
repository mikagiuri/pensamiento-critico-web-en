"use strict";
/* ===== «Duelo de razones» (11-10: de juego aparte a sección de la web) — vista sobre duelo.js =====
   Antes eran cinco copias autónomas (media/juego_duelo_de_razones*.html, una por lengua). Ahora: datos en duelo.js
   (traducidos por tm/<lang>.json) y textos de interfaz en DUE_TXT (traducidos por ui/<lang>.json). Mismas reglas y
   equilibrio que el original (docs/17_duelo_de_razones_juego_debate.md): 6 intervenciones, medidor de público, temple,
   señalar la falacia (A) o contraargumentar (B), comodines «¿Cómo lo sabes?» y «¿Qué gana?».
   Nivel según la web (eso | fil | hf; en la web local, todos con un filtro). «Modo proyector»: pantalla completa y letra grande.
   Enlaces profundos: #duelo/<nivel> y #duelo/<nivel>/<id del tema> (p. ej. desde Polémicas: #duelo/hf/pol-erasmo-lutero). */
const DUE_TXT = {
  eyebrow: "Debate game · one conversation, one topic",
  h1: "Argue and persuade",
  lede: "You debate a topic against the computer, and a meter shows which side the audience is coming round to. On each turn, faced with what it has just said, you choose your move.",
  rA: "<b>Call out the fallacy.</b> If its argument cheats, you name the trick and force it to defend it. When the trick is the heart of its position, this hurts it badly.",
  rB: "<b>Counterargue.</b> You let its move pass and answer with a reason of your own. If it is strong enough, it persuades more than wasting time correcting a minor trick… but if it is weak and its trick was a big one, it sinks you. Careful: its arguments have strength too; if your reason is weaker than its, the audience goes over to it.",
  rT: "<b>Composure.</b> When you are disrespected or someone hits a nerve (an insult, a threat, a personal attack) you lose composure, even if you catch the move: the blow hurts all the same. It does not recover by itself, so it builds up. At zero you lose your cool (all you can do is insult, give in or run away); then stop and breathe to regain some calm.",
  rC: "<b>Wildcards (one of each per game).</b> <b>How do you know?</b> dismantles the tricks that pretend to have support (a famous person, everybody, a few cases, a false cause, tradition) even if you don’t know the trick’s name; against a legitimate argument it costs you, because it gives you its reasons. <b>What’s in it for them?</b> brings to light the speaker’s hidden interest, if there is one; if there isn’t, it costs you: assuming bad faith without evidence is attacking the person.",
  elige: "Choose the topic for this game:",
  grupos: "Topics", gDia: "Everyday life", gSocrates: "Socrates", gAgustin: "Saint Augustine", gModerna: "Early Modern Age", gContemporanea: "From Kant to today",
  nivel: "Level", nEso: "2nd ESO", nFil: "Philosophy 1st Bach.", nHf: "History of Philosophy",
  proyector: "Projector mode", salirProy: "Exit projector mode",
  pie: "The winner isn’t always the one who spots the trick: sometimes it’s the one who hits hardest with reasons.",
  intervencion: "Turn", temple: "Composure", tu: "You", ordenador: "Computer", conviccion: "Audience conviction",
  estribos: "🥵 You’ve lost your cool — what do you come out with?",
  respira: "Stop and breathe", respiraSub: "you don’t answer in the heat of the moment; you regain your calm",
  respiraHead: "You stopped in time.", respiraBody: "You don’t gain ground this time, but you regain your calm. Sometimes the smartest thing is not to answer in the heat of the moment.",
  provoca: "💢 It’s provoking you — respond", turno: "Your turn — how do you respond?",
  aHot: "Point out that it’s a trick (not an argument)", aHotSub: "you tell it that this does not answer the topic",
  a: "Call out the fallacy and force it to defend it", aSub: "you name it; if it is the core of its position, you hurt it badly",
  b: "Counterargue with a reason of your own", bSub: "you let its move pass and hit back with your own point",
  queFal: "🎯 Which fallacy is it? Name it to dismantle it", volver: "‹ back",
  eligeContra: "⚔️ Choose your counterargument", fuerzaAp: "apparent strength",
  noArg: "That’s not an argument: it’s {e}. Answer me on the topic.",
  paras: "You stop it in its tracks.", parasBody: "You called out {e} instead of taking the bait. The audience notices and sides with you. Even so, you lose a point of composure: it hit a nerve.",
  notaFibra: "And since it is also disrespectful, you lose a point of composure even though you caught it.",
  esoEs: "That’s ‘{f}’.", esoEsDuda: "That’s ‘{f}’…", esoEsQ: "That’s ‘{f}’: {q}",
  noTrampa: "There was no trick there.", noTrampaBody: "It was a legitimate argument, and you accused it of ‘{f}’. Calling out fallacies where there are none looks like dodging the topic, and the audience cools towards you.",
  eje: "It was the core of its whole position: dismantling it was devastating.", menor: "It was a minor trick, but hey, it counts.",
  dos: "This card hides two tricks at once ({todas}): either one counts.", y: "and",
  cazada: "Caught, and by name!", cazadaBody: "It was <b>{f}</b> <span class='due-tec'>({tec})</span> and you force it to defend it.",
  faltaNoEsa: "You saw the disrespect, but it wasn’t that fallacy.", faltaNoEsaBody: "It was <b>{real}</b> <span class='due-tec'>({tec})</span>, not ‘{f}’.",
  noEsa: "You saw the trick, but it wasn’t that one.", noEsaBody: "There was a trick, yes, but not ‘{f}’: it was <b>{real}</b> <span class='due-tec'>({tec})</span>. Accusing it under the wrong name costs you: the audience sees that you don’t quite know what is wrong.",
  sabes: "★ How do you know?", sabesSub: "asks for evidence; works even if you don’t know the trick’s name",
  gana: "★ What’s in it for them?", ganaSub: "looks for a hidden interest; with no signs of one, it costs you", usado: "already used",
  sabesYo: "How do you know? What evidence do you have?",
  noAfirm: "That wasn’t a claim.", noAfirmBody: "It was provoking you; asking how it knows does not stop it in its tracks, and the provocation has hit a nerve.",
  siSabia: "It did know.", siSabiaBody: "It explains its reasons and the audience listens: it was a legitimate argument. Asking for evidence is fine, but here you have wasted the wildcard.",
  sinPruebas: "It had no evidence.", sinPruebasBody: "You ask how it knows and it has nothing to show: its ‘{f}’ is left without support. If you also name it, you score more.",
  noPruebas: "Its trick wasn’t about evidence.", noPruebasBody: "It was ‘{f}’: asking for evidence doesn’t fix that.",
  ganaYo: "And what do you gain if I believe it?",
  interes: "It had an interest!", interesBody: "You ask what the speaker gains and it comes to light: {i} That doesn’t prove they are lying, but the audience no longer trusts them in the same way.",
  sinIndicios: "You accuse it without signs.", sinIndiciosBody: "Nothing suggests it gains anything from this. Thinking about interests is part of critical thinking, but assuming bad faith without signs is attacking the person.",
  tramposo: "Your own blow was a trick.", tramposoBody: "You hit back with <b>{f}</b> <span class='due-tec'>({tec})</span>, and the computer catches you. The audience marks you down for it.",
  pesaba: "Its argument weighed more.", pesabaBody: "Your reason (strength {n}) was weaker than what it had said.",
  pesabaEst: "Ignoring its provocation is fine, but you needed a more solid answer.", pesabaArg: "There was no trick to call out: a stronger reason was called for.",
  buen: "Good counterargument.", tablas: "A draw this turn.", respondido: "You answered with a reason of strength {n}.",
  elegante: "And you rose above its provocation: elegant.", tocaba: "Its move had no trick; this was the time to argue.",
  masFuerte: "You hit harder than its trick.", masFuerteBody: "You let its <b>{f}</b> pass (a minor trick) and delivered a powerful counterargument. Sometimes it pays not to waste time correcting: the audience keeps your reason.",
  enPie: "Its trick was still standing.", enPieBody: "Its <b>{f}</b> was the core of its position and you let it pass; your counterargument wasn’t strong enough for that. Here it would have been better to <b>call it out</b>.",
  papeles: "You’ve lost it.", papelesBody: "Thrown off balance, all you could do was {r}. The audience goes over to the computer. That’s why the first thing is not to take the bait.",
  desmonta: "To dismantle it:", schop: "Schopenhauer recorded it as <b>{s}</b> in ‘The Art of Being Right’.",
  veredicto: "See the verdict", seguir: "Continue the debate",
  fin: "End of the debate", delPublico: "{n}% of the audience",
  gano: "You convinced the audience", perdio: "The audience went over to the computer", empate: "A close debate, with no clear winner",
  ganoMsg: "You knew when to call out a trick and when to hit hard with a reason, without losing your cool. That is arguing well.",
  perdioMsg: "Tricks slipped past you, or you spent turns on trifles while the big things went unanswered, or you were thrown off balance. Look at the meter and try a different line.",
  empateMsg: "It was evenly matched. Sharpen when to call out the fallacy and when to counterattack, and you will tip it in your favour.",
  otraVez: "Debate again (this topic)", otroTema: "Choose another topic",
  descargar: "⬇ Download the conversation", dTitulo: "Duel of Reasons · conversation", dFecha: "Date: {d}", dTema: "Topic: {t}",
  dJugada: "→ {h}", dMedidor: "Audience support after the move: {n}%", dResultado: "Result: {n}% of the audience", dSinNombre: "No name or personal data."
};
const dueT = (k, v) => String(DUE_TXT[k] == null ? k : DUE_TXT[k]).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const DUE_FIBRA = new Set(["persona"]);   // además de trampa, falta de respeto: cuesta temple aunque la caces
const DUE_SIN_PRUEBAS = new Set(["famoso", "todos", "pocos", "causa", "siempre"]);   // fingen tener apoyo: se caen al pedir pruebas
const DUE_MAXT = 6, DUE_NIVELES = ["eso", "fil", "hf"];
let DS = null, dueSeed = 1, dueNivel = null;
/* (12-10) selector por grupos para no mostrar todos los temas de golpe: cada tema de duelo.js trae su «grupo» */
const DUE_GRUPOS = [["dia", "gDia"], ["socrates", "gSocrates"], ["agustin", "gAgustin"], ["moderna", "gModerna"], ["contemporanea", "gContemporanea"]];
let dueGrupo = null;
function dueGruposVis(){ const ts = dueTemas(); return DUE_GRUPOS.filter(([g]) => ts.some(({ t }) => (t.grupo || "dia") === g)); }
/* #duelo/<nivel>/<tema> sin codificar la barra (setDeepHash la codificaría) */
function dueHash(){ const h = "#duelo" + [].slice.call(arguments).filter(Boolean).map(x => "/" + encodeURIComponent(x)).join(""); if (location.hash !== h){ try { history.replaceState(null, "", h); } catch (e){} } }
function dueRnd(){ dueSeed = (dueSeed * 1103515245 + 12345) & 0x7fffffff; return dueSeed / 0x7fffffff; }
function dueShuffle(a){ for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(dueRnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function dueBox(){ return document.getElementById("duelobox"); }
function dueClamp(v){ return Math.max(0, Math.min(100, v)); }
/* nivel de esta web: la ficha de materia que existe (#eso/#fil/#hf); en la web local (varias), el elegido en el filtro */
function dueNivelWeb(){
  const hay = ["ipc", "fil", "hf"].filter(id => document.getElementById(id) && typeof SUBJECTS !== "undefined" && SUBJECTS[id]);
  if (hay.length === 1) return hay[0] === "ipc" ? "eso" : hay[0];
  return null;
}
function dueTemas(){ const L = dueNivel || dueNivelWeb(); return DUELO_TEMAS.map((t, i) => ({ t, i })).filter(({ t }) => !L || (t.nivel || []).includes(L)); }

function dueFresh(ti){
  return { ti, meter: 50, temple: 3, turno: 0, thread: [], move: null, hand: null, fase: "turn",
    cola: dueShuffle(DUELO_TEMAS[ti].opp.map((_, i) => i)), comodines: { sabes: 1, gana: 1 } };
}
function dueRender(){ if (!DS) return dueIntro(); if (DS.fase === "end") return dueFin(); dueJuego(); }

function dueIntro(){
  const box = dueBox(); if (!box) return;
  const multi = !dueNivelWeb();
  box.innerHTML = '<div class="due-intro due-fade"><div class="due-center"><div class="due-eyebrow">' + dueT("eyebrow") + '</div><h2 class="due-h1">' + dueT("h1") + '</h2><p class="due-lede">' + dueT("lede") + '</p></div>' +
    '<div class="due-rules">' + [["A", "rA"], ["B", "rB"], ["♦", "rT"], ["★", "rC"]].map(([n, k]) => '<div class="due-rule"><span class="due-n">' + n + '</span><p>' + dueT(k) + '</p></div>').join("") + '</div>' +
    (multi ? '<div class="due-niveles" role="group" aria-label="' + dueT("nivel") + '">' + [["", "todos"]].concat([["eso", "nEso"], ["fil", "nFil"], ["hf", "nHf"]]).map(([v, k]) =>
      '<button type="button" class="fbtn" data-due-nivel="' + v + '" aria-pressed="' + ((dueNivel || "") === v) + '">' + (k === "todos" ? "—" : dueT(k)) + '</button>').join("") + '</div>' : '') +
    (function(){
      const gs = dueGruposVis(); if (!gs.some(([g]) => g === dueGrupo)) dueGrupo = gs.length ? gs[0][0] : null;
      return gs.length > 1 ? '<div class="fgroup due-grupos" role="group" aria-label="' + dueT("grupos") + '">' + gs.map(([g, k]) =>
        '<button type="button" class="fbtn" data-due-grupo="' + g + '" aria-pressed="' + (dueGrupo === g) + '">' + dueT(k) + ' <span class="due-ng">' + dueTemas().filter(({ t }) => (t.grupo || "dia") === g).length + '</span></button>').join("") + '</div>' : '';
    })() +
    '<div class="due-center due-elige">' + dueT("elige") + '</div><div class="due-pick">' +
    dueTemas().filter(({ t }) => !dueGrupo || (t.grupo || "dia") === dueGrupo).map(({ t, i }) => '<button type="button" class="due-btn" data-due-ti="' + i + '">' + t.claim + '<span class="due-sides">' + t.tuLado + '</span></button>').join("") + '</div>' +
    '<p class="due-pie">' + dueT("pie") + '</p></div>';
}
function dueEmpezar(ti){ dueSeed = (Date.now() & 0x7fffffff) || 1; DS = dueFresh(ti); dueTurno(true); }
function duePush(side, text){ DS.thread.push({ side, text }); }

function dueTurno(first){
  if (DS.turno >= DUE_MAXT){ DS.fase = "end"; return dueRender(); }
  const T = DUELO_TEMAS[DS.ti];
  if (!first && dueRnd() < 0.32){
    const pool = (T.estrat && T.estrat.length) ? T.estrat : Object.keys(DUELO_ESTRAT).map(k => DUELO_ESTRAT[k]);
    const e = pool[Math.floor(dueRnd() * pool.length)];
    DS.move = { kind: "estrat", e, t: e.t };
  } else {
    if (!DS.cola.length) DS.cola = dueShuffle(T.opp.map((_, i) => i));
    const m = T.opp[DS.cola.shift()];
    DS.move = { kind: "arg", t: m.t, f: m.f, fAlt: m.fAlt, peso: m.peso || 0, fuerza: m.fuerza, interes: m.interes };
  }
  duePush("cpu", DS.move.t);
  DS.fase = "turn"; dueRender();
}
function dueHud(){
  const T = DUELO_TEMAS[DS.ti], you = DS.meter, cpu = 100 - DS.meter, low = DS.temple <= 1;
  return '<div class="due-hud"><div class="due-turnlbl">' + dueT("intervencion") + ' <b>' + Math.min(DS.turno + 1, DUE_MAXT) + '</b> / ' + DUE_MAXT + '</div>' +
    '<div class="due-temple' + (low ? " low" : "") + '"><div class="due-who">' + dueT("temple") + '</div><div class="due-dots">' + "♦".repeat(DS.temple) + "♢".repeat(3 - DS.temple) + '</div></div></div>' +
    '<div class="due-meter-wrap"><div class="due-meter-top"><span class="due-you">' + dueT("tu") + ' ' + you + '%</span><span>' + dueT("conviccion") + '</span><span class="due-cpu">' + dueT("ordenador") + ' ' + cpu + '%</span></div>' +
    '<div class="due-meter"><div class="due-fill" style="width:' + you + '%"></div><div class="due-mid"></div></div></div>' +
    '<div class="due-topic"><b>' + T.claim + '</b> · <span class="due-you-side">' + T.tuLado + '</span></div>';
}
function dueHilo(){
  return '<div class="due-thread" id="duethread">' + DS.thread.map((m, i) => '<div class="due-bubble ' + m.side + (i === DS.thread.length - 1 && m.side === "cpu" ? " latest" : "") + '"><div class="due-nm">' +
    (m.side === "cpu" ? dueT("ordenador") : dueT("tu")) + '</div>' + m.text + '</div>').join("") + '</div>';
}
function dueScroll(){ const t = document.getElementById("duethread"); if (t) t.scrollTop = t.scrollHeight; }
function dueBtn(attr, cls, txt, sub, dis){ return '<button type="button" class="due-btn due-choice ' + (cls || "") + '" ' + attr + (dis ? " disabled" : "") + '>' + txt + (sub ? '<small>' + sub + '</small>' : '') + '</button>'; }

function dueJuego(){
  const box = dueBox(); if (!box) return;
  let h = dueHud() + dueHilo();
  if (DS.fase === "turn"){
    if (DS.temple <= 0){
      h += '<div class="due-phase hot">' + dueT("estribos") + '</div><div class="due-choices due-fade">' + dueBtn('data-due="respira"', "due-primary", dueT("respira"), dueT("respiraSub")) +
        DUELO_REACCIONES.map((r, i) => dueBtn('data-due-rx="' + i + '"', "due-a", r.lbl, r.t)).join("") + '</div>';
    } else {
      const hot = DS.move.kind === "estrat", c = DS.comodines;
      h += '<div class="due-phase' + (hot ? " hot" : "") + '">' + dueT(hot ? "provoca" : "turno") + '</div><div class="due-choices due-fade">' +
        dueBtn('data-due="a"', "due-a", dueT(hot ? "aHot" : "a"), dueT(hot ? "aHotSub" : "aSub")) + dueBtn('data-due="b"', "due-b", dueT("b"), dueT("bSub")) + '</div>' +
        '<div class="due-choices due-comodines due-fade">' + dueBtn('data-due-com="sabes"', "", dueT("sabes"), c.sabes ? dueT("sabesSub") : dueT("usado"), !c.sabes) +
        (DUELO_TEMAS[DS.ti].opp.some(o => o.interes) ? dueBtn('data-due-com="gana"', "", dueT("gana"), c.gana ? dueT("ganaSub") : dueT("usado"), !c.gana) : "") + '</div>';
    }
  } else if (DS.fase === "name"){
    h += '<div class="due-phase">' + dueT("queFal") + '</div><div class="due-choices due-grid-fal due-fade">' +
      DUELO_ORDEN_FAL.map(k => dueBtn('data-due-fal="' + k + '"', "", DUELO_FALACIAS[k].nombre, DUELO_FALACIAS[k].tec)).join("") + '</div><button type="button" class="due-back" data-due="back">' + dueT("volver") + '</button>';
  } else if (DS.fase === "counter"){
    h += '<div class="due-phase">' + dueT("eligeContra") + '</div><div class="due-choices due-fade">' + DS.hand.map((c, i) => {
      const n = c.f ? 1 : c.str;
      return dueBtn('data-due-c="' + i + '"', "", '<span class="due-carta">' + c.t + '</span>', '<span class="due-pips">' + "●".repeat(n) + "○".repeat(3 - n) + '</span> ' + dueT("fuerzaAp"));
    }).join("") + '</div><button type="button" class="due-back" data-due="back">' + dueT("volver") + '</button>';
  }
  box.innerHTML = h; dueScroll();
}

function dueA(){
  if (DS.move.kind === "estrat"){
    const e = DS.move.e; DS.temple = Math.max(0, DS.temple - 1);
    duePush("you", dueT("noArg", { e: e.nombre }));
    const d = 8; DS.meter = dueClamp(DS.meter + d);
    return dueFB("win", dueT("paras"), dueT("parasBody", { e: e.nombre }), { q: e.q, schop: e.schop }, d);
  }
  DS.fase = "name"; dueRender();
}
function dueNombrar(k){
  const m = DS.move, fa = DUELO_FALACIAS[k];
  const fibra = m.f && DUE_FIBRA.has(m.f); if (fibra) DS.temple = Math.max(0, DS.temple - 1);
  const nota = fibra ? " " + dueT("notaFibra") : "";
  if (m.f === null){
    duePush("you", dueT("esoEs", { f: fa.nombre }));
    const d = -10; DS.meter = dueClamp(DS.meter + d);
    return dueFB("lose", dueT("noTrampa"), dueT("noTrampaBody", { f: fa.nombre }), {}, d);
  }
  const real = DUELO_FALACIAS[m.f], alts = m.fAlt || [];
  if (k === m.f || alts.includes(k)){
    duePush("you", dueT("esoEsQ", { f: fa.nombre, q: fa.q }));
    const d = 6 + m.peso * 3; DS.meter = dueClamp(DS.meter + d);
    let extra = m.peso >= 3 ? " " + dueT("eje") : (m.peso === 1 ? " " + dueT("menor") : "");
    if (alts.length) extra = " " + dueT("dos", { todas: [m.f].concat(alts).map(x => DUELO_FALACIAS[x].nombre).join(" " + dueT("and") + " ") }) + extra;
    return dueFB("win", dueT("cazada"), dueT("cazadaBody", { f: fa.nombre, tec: fa.tec }) + extra + nota, { q: fa.q }, d);
  }
  duePush("you", dueT("esoEsDuda", { f: fa.nombre }));
  const d = -3; DS.meter = dueClamp(DS.meter + d);
  if (fibra) return dueFB("mid", dueT("faltaNoEsa"), dueT("faltaNoEsaBody", { real: real.nombre, tec: real.tec, f: fa.nombre }) + nota, { q: real.q }, d);
  dueFB("mid", dueT("noEsa"), dueT("noEsaBody", { f: fa.nombre, real: real.nombre, tec: real.tec }), { q: real.q }, d);
}
function dueComodin(k){
  const m = DS.move; DS.comodines[k] = 0;
  if (k === "sabes"){
    duePush("you", dueT("sabesYo"));
    if (m.kind === "estrat"){ DS.temple = Math.max(0, DS.temple - 1); return dueFB("mid", dueT("noAfirm"), dueT("noAfirmBody"), {}, 0); }
    if (m.f === null){ const d = -3; DS.meter = dueClamp(DS.meter + d); return dueFB("lose", dueT("siSabia"), dueT("siSabiaBody"), {}, d); }
    const fa = DUELO_FALACIAS[m.f];
    if (DUE_FIBRA.has(m.f)) DS.temple = Math.max(0, DS.temple - 1);
    if (DUE_SIN_PRUEBAS.has(m.f)){ const d = 8; DS.meter = dueClamp(DS.meter + d); return dueFB("win", dueT("sinPruebas"), dueT("sinPruebasBody", { f: fa.nombre }), { q: fa.q }, d); }
    return dueFB("mid", dueT("noPruebas"), dueT("noPruebasBody", { f: fa.nombre }), { q: fa.q }, 0);
  }
  duePush("you", dueT("ganaYo"));
  if (m.kind === "arg" && m.interes){ const d = 12; DS.meter = dueClamp(DS.meter + d); return dueFB("win", dueT("interes"), dueT("interesBody", { i: m.interes }), {}, d); }
  if (m.kind === "estrat") DS.temple = Math.max(0, DS.temple - 1);
  const d = -6; DS.meter = dueClamp(DS.meter + d); dueFB("lose", dueT("sinIndicios"), dueT("sinIndiciosBody"), {}, d);
}
function dueB(){
  const pool = dueShuffle(DUELO_TEMAS[DS.ti].counters.slice());
  const sol = pool.filter(c => !c.f), tra = pool.filter(c => c.f);
  let hand = dueShuffle([sol[0], sol[1] || sol[0], (dueRnd() < 0.6 && tra[0]) ? tra[0] : (sol[2] || sol[0])]).slice(0, 3);
  hand = [...new Set(hand)];
  let pi = 0; while (hand.length < 3 && pi < pool.length){ if (!hand.includes(pool[pi])) hand.push(pool[pi]); pi++; }
  DS.hand = hand; DS.fase = "counter"; dueRender();
}
function dueContra(i){
  const c = DS.hand[i], m = DS.move;
  if (m.kind === "estrat" || (m.f && DUE_FIBRA.has(m.f))) DS.temple = Math.max(0, DS.temple - 1);
  duePush("you", c.t);
  if (c.f){ const fa = DUELO_FALACIAS[c.f], d = -10; DS.meter = dueClamp(DS.meter + d); return dueFB("lose", dueT("tramposo"), dueT("tramposoBody", { f: fa.nombre, tec: fa.tec }), { q: fa.q }, d); }
  const sin = (m.kind === "arg" && m.f) ? m.peso : 0;
  const rival = m.kind === "arg" ? (m.fuerza || (m.f ? 1 : 2)) : 2;   // (08-10) el ordenador también tiene fuerza
  const d = (c.str - rival) * 5 - sin * 4;
  DS.meter = dueClamp(DS.meter + d);
  if (!sin){
    if (d < 0) return dueFB("lose", dueT("pesaba"), dueT("pesabaBody", { n: c.str }) + " " + dueT(m.kind === "estrat" ? "pesabaEst" : "pesabaArg"), {}, d);
    return dueFB(d > 0 ? "win" : "mid", dueT(d > 0 ? "buen" : "tablas"), dueT("respondido", { n: c.str }) + " " + dueT(m.kind === "estrat" ? "elegante" : "tocaba"), {}, d);
  }
  const fa = DUELO_FALACIAS[m.f];
  if (d > 0) return dueFB("win", dueT("masFuerte"), dueT("masFuerteBody", { f: fa.nombre }), {}, d);
  dueFB("lose", dueT("enPie"), dueT("enPieBody", { f: fa.nombre }), { q: fa.q }, d);
}
function dueReaccion(i){
  const r = DUELO_REACCIONES[i];
  duePush("you", r.t);
  const d = -12; DS.meter = dueClamp(DS.meter + d); DS.temple = 1;
  dueFB("lose", dueT("papeles"), dueT("papelesBody", { r: r.lbl.toLocaleLowerCase() }), {}, d);
}
function dueFB(cls, head, body, extra, delta, cont){
  extra = extra || {};
  const last = DS.turno + 1 >= DUE_MAXT;
  DS.cont = cont || null;
  DS.log = DS.log || []; DS.log.push({ i: DS.thread.length, head: head, body: body, meter: DS.meter });
  dueBox().innerHTML = dueHud() + dueHilo() + '<div class="due-fb ' + cls + ' due-fade"><div class="due-head">' + (cls === "win" ? "✓" : cls === "lose" ? "✕" : "◆") + ' ' + head + '</div>' +
    '<div class="due-body">' + body + '</div>' +
    (typeof delta === "number" && delta !== 0 ? '<div class="due-body">' + dueT("conviccion") + ': <span class="due-delta ' + (delta > 0 ? "pos" : "neg") + '">' + (delta > 0 ? "+" : "") + delta + '</span> → ' + DS.meter + '%</div>' : "") +
    (extra.q ? '<div class="due-desmonta">' + dueT("desmonta") + ' <b>' + extra.q + '</b></div>' : "") +
    (extra.schop ? '<div class="due-schop">' + dueT("schop", { s: extra.schop }) + '</div>' : "") +
    '</div><div class="due-choices due-sigue"><button type="button" class="due-btn due-primary" data-due="cont">' + dueT(last ? "veredicto" : "seguir") + '</button></div>' +
    '<button type="button" class="due-back due-descarga" data-due="descargar">' + dueT("descargar") + '</button>';
  dueScroll();
}
function dueFin(){
  const you = DS.meter, win = you > 55, lose = you < 45, cls = win ? "win" : lose ? "lose" : "tie";
  dueBox().innerHTML = dueHud() + '<div class="due-intro due-center due-fade"><div class="due-eyebrow">' + dueT("fin") + '</div><div class="due-verdict ' + cls + '">' + dueT("delPublico", { n: you }) + '</div>' +
    '<h2>' + dueT(win ? "gano" : lose ? "perdio" : "empate") + '</h2><p class="due-lede">' + dueT(win ? "ganoMsg" : lose ? "perdioMsg" : "empateMsg") + '</p>' +
    '<div class="due-pick due-fin"><button type="button" class="due-btn due-primary" data-due="again">' + dueT("otraVez") + '</button><button type="button" class="due-btn" data-due="home">' + dueT("otroTema") + '</button></div>' +
    '<button type="button" class="due-back due-descarga" data-due="descargar">' + dueT("descargar") + '</button></div>';
}

/* ---- «Descargar la conversación»: .txt con la partida entera (sin nombre ni datos personales) ---- */
function dueTexto(h){ const d = document.createElement("div"); d.innerHTML = String(h).replace(/<br\s*\/?>/g, "\n"); return (d.textContent || "").replace(/[ \t]+/g, " ").trim(); }
function dueDescargar(){
  if (!DS) return;
  const T = DUELO_TEMAS[DS.ti], hoy = new Date(), f = hoy.toISOString().slice(0, 10), out = [];
  out.push(dueT("dTitulo"), dueT("dFecha", { d: hoy.toLocaleString() }), dueT("dTema", { t: dueTexto(T.claim) }), dueTexto(T.cpuLado), dueTexto(T.tuLado), dueT("dSinNombre"), "");
  const log = DS.log || [];
  DS.thread.forEach((m, i) => {
    out.push((m.side === "cpu" ? dueT("ordenador") : dueT("tu")) + ": " + dueTexto(m.text));
    log.filter(x => x.i === i + 1).forEach(x => { out.push("   " + dueT("dJugada", { h: dueTexto(x.head) }) + " " + dueTexto(x.body), "   " + dueT("dMedidor", { n: x.meter })); });
  });
  out.push("", dueT("dResultado", { n: DS.meter }));
  if (DS.fase === "end") out.push(dueTexto(dueT(DS.meter > 55 ? "gano" : DS.meter < 45 ? "perdio" : "empate")));
  const blob = new Blob(["\ufeff" + out.join("\r\n") + "\r\n"], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "duelo-" + (T.id || "partida") + "-" + f + ".txt";
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

/* ---- modo proyector: pantalla completa y letra grande (la clase lo ve desde el fondo) ---- */
function dueProyector(){
  const sec = document.getElementById("duelo"); if (!sec) return;
  const on = !sec.classList.contains("due-proy");
  sec.classList.toggle("due-proy", on);
  try { if (on && sec.requestFullscreen) sec.requestFullscreen(); else if (!on && document.fullscreenElement) document.exitFullscreen(); } catch (e){}
  const b = document.getElementById("dueproy"); if (b) b.textContent = dueT(on ? "salirProy" : "proyector");
}
document.addEventListener("fullscreenchange", () => {
  const sec = document.getElementById("duelo");
  if (sec && !document.fullscreenElement && sec.classList.contains("due-proy")){ sec.classList.remove("due-proy"); const b = document.getElementById("dueproy"); if (b) b.textContent = dueT("proyector"); }
});

document.addEventListener("click", e => {
  const t = e.target; if (!t.closest || !t.closest("#duelo")) return;
  if (t.closest("#dueproy")) return dueProyector();
  const nv = t.closest("[data-due-nivel]"); if (nv){ dueNivel = nv.dataset.dueNivel || null; return dueIntro(); }
  const gr = t.closest("[data-due-grupo]"); if (gr){ dueGrupo = gr.dataset.dueGrupo; return dueIntro(); }
  const ti = t.closest("[data-due-ti]"); if (ti){ dueEmpezar(+ti.dataset.dueTi); dueHash(dueNivel || dueNivelWeb(), DUELO_TEMAS[+ti.dataset.dueTi].id); return; }
  const fal = t.closest("[data-due-fal]"); if (fal) return dueNombrar(fal.dataset.dueFal);
  const c = t.closest("[data-due-c]"); if (c) return dueContra(+c.dataset.dueC);
  const com = t.closest("[data-due-com]"); if (com && !com.disabled) return dueComodin(com.dataset.dueCom);
  const rx = t.closest("[data-due-rx]"); if (rx) return dueReaccion(+rx.dataset.dueRx);
  const a = t.closest("[data-due]"); if (!a) return;
  const k = a.dataset.due;
  if (k === "a") return dueA();
  if (k === "b") return dueB();
  if (k === "back"){ DS.fase = "turn"; return dueRender(); }
  if (k === "respira"){ DS.temple = 1; return dueFB("mid", dueT("respiraHead"), dueT("respiraBody"), {}, 0, () => { DS.turno++; dueTurno(false); }); }
  if (k === "cont"){ const f = DS.cont; DS.cont = null; if (f) return f(); DS.turno++; return dueTurno(false); }
  if (k === "descargar") return dueDescargar();
  if (k === "again"){ return dueEmpezar(DS.ti); }
  if (k === "home"){ dueGrupo = DUELO_TEMAS[DS.ti].grupo || dueGrupo; DS = null; dueHash(dueNivel); return dueIntro(); }
});

/* enlace profundo: #duelo/<nivel>[/<id del tema>] (los temas «pol-…» salen de Polémicas) */
function loadDuelo(arg){
  if (typeof DUELO_TEMAS === "undefined") return;
  const [nv, id] = String(arg || "").split("/");
  if (DUE_NIVELES.includes(nv) && !dueNivelWeb()) dueNivel = nv;
  const i = id ? DUELO_TEMAS.findIndex(t => t.id === id) : -1;
  if (i >= 0){ dueGrupo = DUELO_TEMAS[i].grupo || null; return dueEmpezar(i); }
  DS = null; dueIntro();
}
window.loadDuelo = loadDuelo;
if (dueBox() && typeof DUELO_TEMAS !== "undefined") dueIntro();
