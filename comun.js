// Funciones que usan las tres páginas. Sin librerías externas: el sitio anda sin depender de nadie.
// Si hay escenarios de ejemplo y la dirección trae ?ej=..., se muestra ese escenario en vez de los datos.
const EJ = new URLSearchParams(location.search).get("ej");
const V = (window.EJEMPLOS && EJ && window.EJEMPLOS[EJ]) || window.VIGIA;
// Enlace a otra página conservando el escenario elegido.
const enl = p => p + (EJ ? "?ej=" + encodeURIComponent(EJ) : "");
const DIAS_SEM = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const NIVELES = {
  normal:  {ico: "✅", titulo: "No se esperan mareas altas", color: "--ok"},
  posible: {ico: "👀", titulo: "Atención: podría subir",     color: "--pos"},
  aviso:   {ico: "⚠️", titulo: "Aviso de marea alta",         color: "--avi"},
  alerta:  {ico: "🚨", titulo: "Alerta de marea alta",        color: "--ale"},
  sin_datos: {ico: "❔", titulo: "Sin datos: no sabemos",      color: "--mut"}
};
// Horas sin actualizar a partir de las cuales se avisa que los datos están viejos (pedido de Fernando, 17/11).
// Es el mismo criterio que usa vigia_marea.py para dar por "viejo" un dato de alturas horarias (6 h).
// Contra: 6 h es media marea; por eso la hora de actualización se muestra siempre arriba.
const HORAS_VIEJO = 6;

const m2 = x => x.toFixed(2).replace(".", ",") + " m";
const fecha = s => new Date(s + "T12:00");
const nomDia = s => { const d = fecha(s), hoy = new Date(V.actualizado.slice(0, 10) + "T12:00");
  const dif = Math.round((d - hoy) / 864e5);
  return dif === 0 ? "Hoy" : dif === 1 ? "Mañana" : DIAS_SEM[d.getDay()][0].toUpperCase() + DIAS_SEM[d.getDay()].slice(1); };
// "el martes" pero "hoy" / "mañana" sin artículo.
const elDia = s => { const n = nomDia(s); return n === "Hoy" || n === "Mañana" ? n.toLowerCase() : "el " + n.toLowerCase(); };
// "hoy 10:05", "ayer 23:05" o "15/11 10:05", según el reloj del que mira la página.
const cuando = s => { const d = new Date(s.slice(0, 10) + "T12:00"), h = new Date(); h.setHours(12, 0, 0, 0);
  const dif = Math.round((h - d) / 864e5);
  return (dif === 0 ? "hoy" : dif === 1 ? "ayer" : ddmm(s)) + " " + hhmm(s) + " h"; };
const ddmm = s => s.slice(8, 10) + "/" + s.slice(5, 7);
const hhmm = s => s.slice(11, 16);
const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

// Columnas de probabilidad: las fijas, o las de la escalera si el pico llega a 2,90 m (las arma el programa).
if (!V.dias) V.dias = [];
if (!V.resultados) V.resultados = [];
const COLS = V.escalera ? V.escalera.cols : [V.umbrales.compuesto, V.umbrales.aviso, V.umbrales.alerta];
const prob = (d, u) => d.prob[u.toFixed(2)];
const rango = d => d.rango[0].toFixed(2).replace(".", ",") + " a " + d.rango[1].toFixed(2).replace(".", ",") + " m";
// Hora aproximada en Tigre: +60 min (criterio del autor, sin calibrar; con crecida puede ser antes).
const horaTigre = h => { const [a, b] = h.split(":").map(Number); return String((a + 1) % 24).padStart(2, "0") + ":" + String(b).padStart(2, "0"); };

// Experiencia del modelo en la franja de una altura prevista (null si no hay tabla).
function franjaDe(alt) {
  if (!V.experiencia) return null;
  return V.experiencia.franjas.find(f => (f.desde == null || alt >= f.desde) && (f.hasta == null || alt < f.hasta)) || null;
}
const nomFranja = f => f.desde == null ? `hasta ${m2(f.hasta)}` : f.hasta == null ? `más de ${m2(f.desde)}` : `${m2(f.desde).replace(" m", "")} a ${m2(f.hasta)}`;

// Color de un día según la etiqueta que YA calcula el programa (no inventamos umbrales nuevos).
function nivelDia(d) { return d.etiqueta || "normal"; }

// Qué quiere decir cada color. El amarillo es "posible" aunque la altura sea alta: el programa nunca da
// aviso ni alerta solo con el modelo (decisión del autor), hace falta el pronóstico oficial del SHN.
function leyenda() {
  const L = [["normal", "Sin riesgo"], ["posible", "Posible: lo marca el modelo o el río, el SHN todavía no lo confirma"],
             ["aviso", "Aviso: el SHN pronostica 2,50 m o más (o 2,40 con alguna señal de crecida en los ríos)"],
             ["alerta", "Alerta: el SHN pronostica 2,90 m o más (o 2,40 con crecida fuerte de los ríos)"]];
  return `<ul class="leyenda">${L.map(([k, t]) => `<li><span class="pto" style="background:var(${NIVELES[k].color})"></span>${t}</li>`).join("")}</ul>`;
}

// Fecha y hora de la última versión del Modelo de Altura Total que publicó el SHN ("17/11 03:00 h"), o "".
// Viene en estado.js (vigia_servidor.py v4). Con un estado.js viejo, sin ese dato, no se muestra nada.
const versionModelo = () => V.modelo && V.modelo.inicializado ? `${ddmm(V.modelo.inicializado)} ${hhmm(V.modelo.inicializado)} h` : "";

function avisosArriba() {
  let h = "";
  if (V.prueba) h += `<div class="aviso-ejemplo">🧪 <b>MODO PRUEBA.</b> Datos reales de la corrida del ${ddmm(V.actualizado)} a las
    ${hhmm(V.actualizado)} h, <b>congelados: esta página no se actualiza</b>. No la uses para decidir: mirá el SHN y el INA.</div>`;
  if (V.ejemplo) {
    h += `<div class="aviso-ejemplo">🧪 Datos de EJEMPLO (${V.descripcion || "ficticio"}). No es un pronóstico real.`;
    if (window.EJEMPLOS) h += `<div class="ejs">${Object.keys(window.EJEMPLOS).map(k =>
      `<a href="?ej=${k}" class="${k === V.escenario ? "on" : ""}">${k}</a>`).join("")}</div>`;
    h += "</div>";
  }
  const horas = (Date.now() - new Date(V.actualizado)) / 36e5;
  if (!V.ejemplo && !V.prueba && horas > HORAS_VIEJO)
    h += `<div class="viejo">⏸️ Los datos tienen ${Math.floor(horas)} horas. El sistema puede estar sin conexión: consultá directamente al SHN.</div>`;
  // Solo las fuentes que NO se pudieron leer. Un modelo viejo porque el SHN no lo actualizó no es una caída
  // (el programa lo marca como leído) y se informa aparte, en gris, debajo de la hora de actualización.
  const caidas = Object.entries(V.fuentes).filter(([, ok]) => !ok).map(([n]) => n);
  if (caidas.length) h += `<div class="viejo">Sin leer en la última corrida: ${caidas.join(", ")}.</div>`;
  return h;
}

function pie() {
  const f = new Date(V.actualizado);
  return `<footer>
    <p><b>Última actualización:</b> ${ddmm(V.actualizado)} ${hhmm(V.actualizado)} h. Alturas en la escala de ${V.referencia}
       (no hay estación oficial en Tigre; allá la marea llega aprox. 1 hora después).</p>
    <p><b>Es una ayuda para decidir, no un sistema de alerta oficial.</b> No reemplaza al
       <a href="https://www.hidro.gob.ar/">Servicio de Hidrografía Naval</a>, al
       <a href="https://www.ina.gob.ar/">INA</a> ni a Defensa Civil.</p>
    <p>Datos del SHN y del INA, procesados por mareatigre.</p>
    <details><summary>¿De dónde salen los datos?</summary>
      <p>Servicio de Hidrografía Naval (SHN):</p>
      <ul>
        <li><a href="https://www.hidro.gob.ar/Oceanografia/Pronostico.asp">Pronóstico mareológico</a> (pleamares y bajamares oficiales)</li>
        <li><a href="https://www.hidro.gov.ar/oceanografia/alturashorarias.asp">Alturas horarias</a> (lo que se mide en San Fernando)</li>
        <li><a href="https://api.shn.gob.ar/imagenes-modelo/curvas_altura-total/Alturatotal_San_Fernando.svg">Modelo de Altura Total, San Fernando</a> (curva de ~4 días${versionModelo() ? `; última versión publicada por el SHN: ${versionModelo()}` : ""})</li>
        <li><a href="https://www.hidro.gov.ar/oceanografia/AACRIOPLA.asp">Avisos de crecida del Río de la Plata</a></li>
      </ul>
      <p>Instituto Nacional del Agua (INA): <a href="https://alerta.ina.gob.ar/a5/diario/reporte_diario">reporte diario de los ríos</a> (Paraná en Rosario y Frente del Delta).</p>
      <p>Historia (para el efecto del río): Copernicus Argentina y Kovacevic (2026),
        <a href="https://doi.org/10.5281/zenodo.23452318">doi:10.5281/zenodo.23452318</a>, CC BY 4.0;
        lecturas de Prefectura Naval publicadas por el INA.</p>
    </details>
  </footer>`;
}

function cabecera(activa) {
  const L = [["index.html", "Hoy"], ["probabilidades.html", "Probabilidades"], ["resultados.html", "Historial"]];
  // Modelo del SHN sin actualizar: nota chica y gris (no es una falla nuestra ni un riesgo, pero cambia lo que se ve).
  // Con estado.js de vigia_servidor v4 (sin `usado`/`atrasado`), vigente=false quería decir "viejo y no usado".
  const mo = V.modelo, atras = mo && (mo.atrasado ?? mo.vigente === false), usado = mo && (mo.usado ?? mo.vigente);
  const notaModelo = !atras ? "" : `<p class="actualizado chico mut" style="margin-top:-8px">Última versión del modelo de Hidrografía: ${versionModelo()}</p>`;
  return `<header class="top"><a class="marca" href="${enl('index.html')}">🌊 Vigía de Marea · Tigre</a>
    <nav>${L.filter(l => l[0] !== activa).map(l => `<a href="${enl(l[0])}">${l[1]}</a>`).join("")}</nav></header>
    <p class="actualizado">Última actualización: <b>${cuando(V.actualizado)}</b></p>${notaModelo}`;
}
