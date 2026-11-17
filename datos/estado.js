// Generado por vigia_servidor.py. No editar a mano: se reescribe en cada corrida.
window.VIGIA = {
 "ejemplo": false,
 "version": 1,
 "actualizado": "2026-11-17T12:05",
 "referencia": "San Fernando",
 "nivel": "normal",
 "ocurriendo": false,
 "umbrales": {
  "compuesto": 2.4,
  "aviso": 2.5,
  "alerta": 2.9
 },
 "ultima_real": {
  "hora": "2026-11-17T11:45",
  "altura": 0.53,
  "fresco": true
 },
 "fuentes": {
  "Pronóstico SHN": true,
  "Avisos SHN": true,
  "Alturas SHN": true,
  "Modelo SHN": true,
  "Ríos INA": true
 },
 "rio": {
  "estacion": "Rosario",
  "nivel": 4.81,
  "tendencia": 0.073,
  "ajuste": 0.0,
  "umbral": 5.0,
  "eta_dias": 2.6078431372549082
 },
 "escalera": null,
 "sube_al_final": false,
 "dias": [
  {
   "fecha": "2026-11-17",
   "hora": "23:00",
   "pico": 1.07,
   "eff": 1.07,
   "fuente": "modelo",
   "plazo_h": 10.9,
   "margen": 0.24,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": false,
   "prob": {
    "2.40": 0,
    "2.50": 0,
    "2.90": 0
   },
   "rango": [
    0.76,
    1.38
   ]
  },
  {
   "fecha": "2026-11-18",
   "hora": "02:00",
   "pico": 1.4,
   "eff": 1.4,
   "fuente": "SHN",
   "plazo_h": 13.9,
   "margen": 0.27,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": false,
   "prob": {
    "2.40": 0,
    "2.50": 0,
    "2.90": 0
   },
   "rango": [
    1.05,
    1.75
   ]
  },
  {
   "fecha": "2026-11-19",
   "hora": "23:00",
   "pico": 1.59,
   "eff": 1.59,
   "fuente": "modelo",
   "plazo_h": 58.9,
   "margen": 0.4,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": false,
   "prob": {
    "2.40": 2,
    "2.50": 1,
    "2.90": 0
   },
   "rango": [
    1.08,
    2.1
   ]
  },
  {
   "fecha": "2026-11-20",
   "hora": "02:00",
   "pico": 1.89,
   "eff": 1.89,
   "fuente": "modelo",
   "plazo_h": 61.9,
   "margen": 0.4,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": false,
   "prob": {
    "2.40": 10,
    "2.50": 6,
    "2.90": 1
   },
   "rango": [
    1.38,
    2.4
   ]
  },
  {
   "fecha": "2026-11-21",
   "hora": "01:00",
   "pico": 1.37,
   "eff": 1.37,
   "fuente": "modelo",
   "plazo_h": 84.9,
   "margen": 0.42,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": true,
   "prob": {
    "2.40": 1,
    "2.50": 0,
    "2.90": 0
   },
   "rango": [
    0.83,
    1.91
   ]
  }
 ],
 "resultados": [
  {
   "fecha": "2026-11-03",
   "previsto": 1.82,
   "real": 1.91
  },
  {
   "fecha": "2026-11-04",
   "previsto": 1.99,
   "real": 1.97
  },
  {
   "fecha": "2026-11-05",
   "previsto": 1.16,
   "real": 1.44
  },
  {
   "fecha": "2026-11-06",
   "previsto": 1.56,
   "real": 2.07
  },
  {
   "fecha": "2026-11-07",
   "previsto": 2.25,
   "real": 2.58
  },
  {
   "fecha": "2026-11-08",
   "previsto": 1.79,
   "real": 1.59
  },
  {
   "fecha": "2026-11-09",
   "previsto": 1.19,
   "real": 1.43
  },
  {
   "fecha": "2026-11-10",
   "previsto": 0.92,
   "real": 1.26
  },
  {
   "fecha": "2026-11-11",
   "previsto": 1.0,
   "real": 1.53
  },
  {
   "fecha": "2026-11-12",
   "previsto": 1.34,
   "real": 1.83
  },
  {
   "fecha": "2026-11-13",
   "previsto": 1.45,
   "real": 1.67
  },
  {
   "fecha": "2026-11-14",
   "previsto": 1.18,
   "real": 1.37
  },
  {
   "fecha": "2026-11-15",
   "previsto": 1.59,
   "real": 1.73
  },
  {
   "fecha": "2026-11-16",
   "previsto": 1.58,
   "real": 1.68
  }
 ],
 "experiencia": {
  "franjas": [
   {
    "desde": null,
    "hasta": 1.0,
    "casos": 43,
    "picos": 17,
    "sesgo": 0.46,
    "pocos": false
   },
   {
    "desde": 1.0,
    "hasta": 1.5,
    "casos": 51,
    "picos": 24,
    "sesgo": 0.24,
    "pocos": false
   },
   {
    "desde": 1.5,
    "hasta": 2.0,
    "casos": 20,
    "picos": 7,
    "sesgo": 0.07,
    "pocos": false
   },
   {
    "desde": 2.0,
    "hasta": 2.5,
    "casos": 4,
    "picos": 2,
    "sesgo": 0.16,
    "pocos": true
   },
   {
    "desde": 2.5,
    "hasta": null,
    "casos": 0,
    "picos": 0,
    "sesgo": null,
    "pocos": true
   }
  ],
  "total_picos": 37,
  "pocos_picos": 5
 }
};
