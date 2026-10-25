"use strict";
/* ===== Vista de Prepara PAU ===== depende de: prepara_PAU.js =====
   (25-10-2026, queja del profesor: «no tienes ni idea de cómo navegarla»). Antes: 23 chips sueltos y la primera guía
   abierta. Ahora, al entrar, un índice de 6 grupos plegables en el orden del examen; cada guía es un enlace
   #prepara_PAU/<clave> (pasa por el enrutado de app.js, así funcionan «atrás», el buscador y el itinerario), con
   miga, vuelta al índice y anterior/siguiente. Propuesta y decisiones: 1_vivo\_bandeja\2026-10-25\prepara_pau\.
   Los textos de interfaz de aquí se traducen con web_i18n/ui/<lang>.json (cada uno, una cadena entera). */

let pauKey = null;   // guía abierta (null = índice); la leen itinerario.js y resume.js

// Los 6 grupos y su orden de uso. Una clave que no esté aquí sale en un grupo final («Otras guías»).
const PAU_GRUPOS = [
  { t: "Get to know the exam", d: "What the exam is like, what is marked and what has come up.", g: [
    ["estructura", "To start"], ["guia-valora", "How it is marked"], ["guia-modelos-nivel5", "How it is marked"],
    ["modelos", "Official exam"], ["guia-examenes", "Official exam"], ["que-cae-mas", "Statistics"]] },
  { t: "Exercise 1 · Text comprehension", d: "4 marks: summary (1.1) and comparison or explanation (1.2).", g: [
    ["ejercicio1", "What is asked"], ["guia-resumen", "Method"], ["guia-comparacion", "Method"], ["guia-explicacion", "Method"],
    ["guia-modelos-ej1", "Worked"]], mas: ["comentario", "worked examples for each author"] },
  { t: "Exercise 2 · Essay", d: "3 marks: for, against and your opinion.", g: [
    ["guia-disertacion", "Method"], ["guia-modelos-dis", "Worked"]], mas: ["disertaciones", "one guide per author and the dilemmas"] },
  { t: "Exercise 3 · Rethinking the History of Philosophy", d: "3 marks: set out a question from the History of Philosophy.", g: [
    ["ejercicio3", "What is asked"], ["guia-tema", "Method"], ["comparativas-temas", "Review by topic"], ["guia-modelos-ej3", "Worked"]] },
  { t: "The five readings", d: "Which fragments are included and where the quotations come from.", g: [
    ["guia-fragmentos", "Fragments"], ["guia-bibliografia", "Sources"]], mas: ["lecturas", "the complete texts with their guide"] },
  { t: "Practise: mock exams", d: "Complete exams in the 2026 format.", g: [
    ["simulacros-intro", "How to use them"], ["simulacro1", "Mock exam"], ["simulacro2", "Mock exam"], ["simulacro3", "Mock exam"], ["simulacro4", "Mock exam"]] }
];

function pauEsc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]); }
function pauNav(id){ const b = document.querySelector('#tabs button[data-view="' + id + '"]'); return b ? b.textContent.replace(/\s+/g, " ").trim() : ""; }
// Grupos con las guías que existen en esta web (cada build lleva las suyas). Ninguna se oculta: las que tratan lo mismo
// que Comentario, Disertaciones o Lecturas tienen otro texto (medido el 25-10), y el grupo enlaza esa sección («Ver también»).
function pauGrupos(){
  const puestas = new Set(), out = [];
  PAU_GRUPOS.forEach(gr => {
    const g = gr.g.filter(([k]) => PAU[k]); g.forEach(([k]) => puestas.add(k));
    if (g.length) out.push(Object.assign({}, gr, { g }));
  });
  const resto = Object.keys(PAU).filter(k => !puestas.has(k)).map(k => [k, ""]);
  if (resto.length) out.push({ t: "Other guides", d: "", g: resto });
  return out;
}
function pauLista(){ return pauGrupos().flatMap((gr, gi) => gr.g.map(([k]) => ({ k, gi }))); }

function pauPartes(){
  const sec = document.getElementById("prepara_PAU"); if (!sec) return {};
  // el contenedor de los chips pasa a ser el índice; sin la clase «chips», compacto.js no lo pliega en el móvil
  const idx = document.getElementById("pauchips");
  if (idx && idx.classList.contains("chips")) { idx.className = "pau-indice"; idx.removeAttribute("role"); idx.removeAttribute("aria-label"); }
  const lay = sec.querySelector(".theory-layout");
  // la miga va antes del bloque índice + guía (en el móvil, «En esta guía» se pliega encima del texto)
  let miga = document.getElementById("paumiga");
  if (!miga && lay) { miga = document.createElement("p"); miga.id = "paumiga"; miga.className = "pau-miga"; lay.parentNode.insertBefore(miga, lay); }
  return { sec, idx, lay, miga, body: document.getElementById("paubody"), toc: document.getElementById("pautoc") };
}

function pauIndice(){
  const { idx, lay, miga } = pauPartes(); if (!idx) return;
  pauKey = null;
  if (miga) miga.hidden = true;
  idx.innerHTML = '<p class="pau-pista">' + pauEsc("First time? Go in order, from 1 to 6.") + '</p>' +
    pauGrupos().map((gr, i) =>
      '<details class="pau-grupo"><summary><span class="pau-n">' + (i + 1) + '</span><span class="pau-gt"><b>' + pauEsc(gr.t) + '</b>' +
      (gr.d ? '<span>' + pauEsc(gr.d) + '</span>' : '') + '</span><span class="pau-cuenta">' + gr.g.length + '</span></summary><ol>' +
      gr.g.map(([k, tipo]) => '<li><a href="#prepara_PAU/' + pauEsc(k) + '">' + pauEsc(PAU[k].title) + '</a>' + (tipo ? ' <span class="pau-tipo">' + pauEsc(tipo) + '</span>' : '') + '</li>').join("") +
      '</ol>' + (gr.mas && document.getElementById(gr.mas[0]) ? '<p class="pau-mas">' + pauEsc("See also") + ' <a href="#' + gr.mas[0] + '">' + pauEsc(pauNav(gr.mas[0])) + '</a>: ' + pauEsc(gr.mas[1]) + '.</p>' : '') +
      '</details>').join("");
  idx.hidden = false; if (lay) lay.hidden = true;
}

function loadPau(k){
  if (!k || !PAU[k]) { pauIndice(); return; }
  const { idx, lay, miga, body, toc } = pauPartes(); if (!body) return;
  pauKey = k;
  const p = PAU[k], lista = pauLista(), i = lista.findIndex(x => x.k === k), grupos = pauGrupos();
  const gr = i >= 0 ? grupos[lista[i].gi] : null, ant = lista[i - 1], sig = lista[i + 1], nav = pauNav("prepara_PAU");
  if (miga) { miga.innerHTML = '<a href="#prepara_PAU">← ' + pauEsc(nav) + '</a>' + (gr ? ' <span>› ' + (lista[i].gi + 1) + '. ' + pauEsc(gr.t) + '</span>' : ''); miga.hidden = false; }
  body.innerHTML = '<div class="theory-head"><span class="kick" style="color:var(--' + p.subject + ')">' + p.kick + '</span><h1>' + p.title + '</h1></div>' + p.html +
    ((ant || sig) ? '<nav class="pau-pasos">' +
      (ant ? '<a href="#prepara_PAU/' + pauEsc(ant.k) + '"><small>← ' + pauEsc("Previous") + '</small>' + pauEsc(PAU[ant.k].title) + '</a>' : '<span></span>') +
      (sig ? '<a class="pau-sig" href="#prepara_PAU/' + pauEsc(sig.k) + '"><small>' + pauEsc("Next") + ' →</small>' + pauEsc(PAU[sig.k].title) + '</a>' : '') + '</nav>' : '');
  const hs = [...body.querySelectorAll("h2")];
  hs.forEach((h, j) => { h.id = "ph-" + j; });
  if (toc) toc.innerHTML = '<div class="toc-title">In this guide</div><ol>' +
    hs.map((h, j) => '<li><a href="#ph-' + j + '">' + h.textContent + '</a></li>').join("") + '</ol>';
  if (idx) idx.hidden = true; if (lay) lay.hidden = false;
}

// #prepara_PAU sin clave (menú, «← Prepara PAU», atrás del navegador) = el índice
window.addEventListener("hashchange", () => { if (location.hash === "#prepara_PAU") pauIndice(); });
pauIndice();
