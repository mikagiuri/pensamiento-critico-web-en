"use strict";
/* ===== Mapa de la web (11-10-2026) =====
   Petición del profesor: un mapa de la web dentro de la propia web. Se abre desde el pie («Mapa de la web», #mapa).
   Se construye al cargar a partir del menú (#tabs) tal como lo deja cada build, así que cada web publicada
   (Filosofía 1.º, HF, ESO, y sus traducciones) muestra solo sus secciones, en el orden del menú, con una línea
   de qué hay en cada una y, cuando se puede contar, cuántos elementos tiene. Debajo, los temas de cada materia
   con sus exploraciones (de Itinerario.temasDe) y, dentro de Ilustres, las fichas de época.
   Los textos van en MAPA_TXT y MAPA_DESC (se traducen con el diccionario de interfaz ui/<lang>.json). */
const MAPA_TXT = {
  secciones: "Sections", temas: "Topics in each subject", tema: "Topic {n}", exploraciones: "Explorations",
  epocas: "Period profiles", otras: "Other sections", elementos: "items"
};
const MAPA_SUBJ = { fil: "Philosophy, Year 1 of Bachillerato", hf: "History of Philosophy, Year 2 of Bachillerato", ipc: "Critical Thinking, 2nd ESO" };
const MAPA_DESC = {
  inicio: "The workshop’s home page, with the three subjects and the timetable.",
  fil: "The subject sheet: topics, resources and how to study.",
  hf: "The subject sheet: topics, resources and how to study.",
  ipc: "The subject sheet: units, resources and how to study.",
  sesiones: "What is done in each class session.",
  calendario: "Course dates, assessment periods and exams.",
  tiempo: "How the time for each topic is divided up.",
  teoria: "The notes for each topic, with explorations to go further.",
  clases: "The Critical Thinking course, session by session.",
  materiales: "Worksheets, activities and documents to download.",
  cuentos: "Stories to think with, with their questions.",
  tarjetas: "Revision cards: question on the front, answer on the back.",
  reto: "Questions against the clock to revise while you play.",
  parejas: "Memory game: match each concept with its pair.",
  glosario: "The concepts of each topic, with their definition and origin.",
  ilustres: "Biographies of the thinkers and period profiles.",
  citas: "Famous sayings of the philosophers, explained.",
  adagios: "Classical mottoes in Latin and Greek, with their history.",
  mundo: "If the class were the world: the planet’s data, in your classroom.",
  camino: "Stories in which you choose what to do and see the consequences.",
  eudaimonia: "A game about happiness according to Aristotle.",
  republica: "A game to organise Plato’s ideal city.",
  rayuela: "Find the contradiction in the philosophers’ texts.",
  nudos: "Problems that look easy but are not.",
  dilemas: "Hard cases to debate what is right.",
  logica: "Truth tables, syllogisms, the square of opposition and diagrams.",
  leibniz: "Leibniz and his inventions: the calculating machine, binary and calculus.",
  infografias: "Each topic summed up in one image.",
  galeria: "Works of art and illustrations for the topics.",
  mapas: "Concept maps of the topics.",
  cronogramas: "Timelines of authors and periods.",
  genealogias: "Who influenced whom: masters, disciples and rivals.",
  esquemas: "Outlines of the main ideas of each topic.",
  esqautor: "One outline per author, for the PAU.",
  diapositivas: "Presentations of the topics.",
  rescritura: "Learn to rewrite a text in your own words.",
  pistas: "Problems with hints that open up little by little.",
  cuestionarios: "Multiple-choice questions for each topic, with marking.",
  juegosucio: "The dirty tricks of arguing, so you can spot them.",
  unidad: "All the questions from a unit, together.",
  rubricas: "How assignments and exams are marked.",
  evidencias: "Evidence of learning from last year.",
  recursos: "External links and tools.",
  pau: "What the university entrance exam is like.",
  comentario: "How to write a text commentary, with worked examples.",
  disertaciones: "How to write an essay, with models.",
  lecturas: "The authors’ texts to read and comment on.",
  tutoria: "Tutorial materials.",
  signos: "Sign language course."
};
/* cuántos elementos tiene cada sección (si su colección está cargada en esta web) */
const MAPA_CUENTA = { tarjetas: "DECKS", cuestionarios: "QUIZZES", glosario: "GLOSARIO", ilustres: "ILUSTRES", citas: "CITAS", adagios: "ADAGIOS",
  infografias: "INFOGRAFIAS", mapas: "MAPS", esquemas: "ESQUEMAS", cronogramas: "CRONOGRAMAS", genealogias: "GENEALOGIAS", lecturas: "LECTURAS",
  galeria: "GALERIA", dilemas: "DILEMAS", disertaciones: "DISERTACIONES", nudos: "NUDOS", pistas: "PISTAS", materiales: "MATERIALS" };
function mapaG(name){ try { return (0, eval)("typeof " + name + " !== 'undefined' ? " + name + " : undefined"); } catch (e){ return undefined; } }
function mapaEsc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function mapaStrip(s){ return String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(); }
function mapaCuenta(v){
  if (v === "teoria"){ const It = window.Itinerario; return It && It.temasDe ? ["fil", "hf", "ipc"].reduce((n, s) => n + It.temasDe(s, true).length, 0) : 0; }
  const c = MAPA_CUENTA[v] && mapaG(MAPA_CUENTA[v]);
  return c ? (Array.isArray(c) ? c.length : Object.keys(c).length) : 0;
}
function mapaItem(el){
  if (el.tagName === "A") return '<li><a class="mapa-a" href="' + mapaEsc(el.getAttribute("href")) + '" target="_blank" rel="noopener">' + mapaEsc(mapaStrip(el.innerHTML)) + '</a></li>';
  const v = el.dataset.view; if (!v || v === "mapa" || !document.getElementById(v)) return "";
  const n = mapaCuenta(v), extra = v === "ilustres" ? mapaEpocas() : "";
  return '<li><button type="button" class="mapa-a" data-igo="' + mapaEsc(v) + '" data-iarg="">' + mapaEsc(mapaStrip(el.textContent)) + '</button>' +
    (n ? ' <span class="mapa-n" title="' + n + " " + MAPA_TXT.elementos + '">' + n + '</span>' : '') +
    (MAPA_DESC[v] ? '<span class="mapa-d">' + mapaEsc(MAPA_DESC[v]) + '</span>' : '') + extra + '</li>';
}
function mapaEpocas(){
  const EF = mapaG("EPOCAS_FICHAS"); if (!EF || typeof iluNombreFicha !== "function") return "";
  return '<span class="mapa-sub"><b>' + MAPA_TXT.epocas + ':</b> ' + Object.keys(EF).map(k =>
    '<button type="button" class="mapa-a" data-igo="ilustres" data-iarg="epoca-' + k + '">' + mapaEsc(iluNombreFicha(k)) + '</button>').join(" · ") + '</span>';
}
function mapaTemas(){
  const It = window.Itinerario, T = mapaG("THEORY"); if (!It || !It.temasDe || !T) return "";
  const lab = k => { const o = T[k], n = It.temaOf("teoria", k, o); return (o.sigla ? o.sigla + " · " : typeof n === "number" ? MAPA_TXT.tema.replace("{n}", n) + " · " : "") + mapaStrip(o.title); };
  const lnk = k => '<button type="button" class="mapa-a" data-igo="teoria" data-iarg="' + mapaEsc(k) + '">' + mapaEsc(lab(k)) + '</button>';
  const exp = k => mapaStrip(T[k].title).replace(/^(Exploración|Esplorazioa|Exploration|Anexo|Eranskina|Annexe|Annex|Appendix|استكشاف)\s*[-–:]\s*/, "");
  return ["fil", "hf", "ipc"].map(s => {
    const ks = It.temasDe(s); if (!ks.length) return "";
    const todos = It.temasDe(s, true), anexos = todos.filter(k => It.esAnexo && It.esAnexo(T[k]));
    return '<div class="mapa-grupo"><h3>' + mapaEsc(MAPA_SUBJ[s]) + '</h3><ol class="mapa-temas">' + ks.map(k => {
      const n = It.temaOf("teoria", k, T[k]), ex = T[k].sigla ? [] : anexos.filter(a => T[a].temaN === n);
      return '<li>' + lnk(k) + (ex.length ? '<details class="mapa-exp"><summary>' + MAPA_TXT.exploraciones + ' (' + ex.length + ')</summary><ul>' +
        ex.map(a => '<li><button type="button" class="mapa-a" data-igo="teoria" data-iarg="' + mapaEsc(a) + '">' + mapaEsc(exp(a)) + '</button></li>').join("") + '</ul></details>' : '') + '</li>';
    }).join("") + '</ol></div>';
  }).join("");
}
function renderMapa(){
  const box = document.getElementById("mapabox"), tabs = document.getElementById("tabs"); if (!box || !tabs) return;
  const grupos = [], sueltos = [];
  [...tabs.children].forEach(el => {
    if (el.classList.contains("navsec")){
      const g = el.querySelector(".navgroup"), items = [...el.querySelectorAll(".navmenu > button, .navmenu > a")].map(mapaItem).join("");
      if (items) grupos.push('<div class="mapa-grupo"><h3>' + mapaEsc(mapaStrip(g ? g.textContent : "")) + '</h3><ul class="mapa-lista">' + items + '</ul></div>');
    } else if (el.matches("button[data-view], a")) sueltos.push(mapaItem(el));
  });
  const s = sueltos.join("");
  box.innerHTML = '<h2 class="sec">' + MAPA_TXT.secciones + '</h2><div class="mapa-cols">' +
    (s ? '<div class="mapa-grupo"><h3>' + MAPA_TXT.otras + '</h3><ul class="mapa-lista">' + s + '</ul></div>' : '') + grupos.join("") + '</div>' +
    (function(){ const t = mapaTemas(); return t ? '<h2 class="sec">' + MAPA_TXT.temas + '</h2><div class="mapa-cols">' + t + '</div>' : ""; })();
}
document.addEventListener("DOMContentLoaded", () => { try { renderMapa(); } catch (e){} });
