// Generado por vigia_servidor.py. No editar a mano: se reescribe en cada corrida.
window.VIGIA = {
 "ejemplo": false,
 "version": 1,
 "actualizado": "2026-11-19T22:00",
 "referencia": "San Fernando",
 "nivel": "normal",
 "ocurriendo": false,
 "umbrales": {
  "compuesto": 2.4,
  "aviso": 2.5,
  "alerta": 2.9
 },
 "ultima_real": {
  "hora": "2026-11-19T21:45",
  "altura": 0.67,
  "fresco": true
 },
 "fuentes": {
  "Pronóstico SHN": true,
  "Avisos SHN": true,
  "Alturas SHN": true,
  "Modelo SHN": true,
  "Ríos INA": true
 },
 "modelo": {
  "inicializado": "2026-11-19T15:00",
  "horas": 7.0,
  "usado": true,
  "atrasado": false,
  "vigente": true
 },
 "rio": {
  "estacion": "Rosario",
  "nivel": 4.89,
  "tendencia": 0.06,
  "ajuste": 0.0,
  "umbral": 5.0,
  "eta_dias": 1.833333333333339
 },
 "escalera": null,
 "sube_al_final": false,
 "dias": [
  {
   "fecha": "2026-11-19",
   "hora": "23:00",
   "pico": 1.13,
   "eff": 1.13,
   "fuente": "modelo",
   "plazo_h": 1.0,
   "margen": 0.22,
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
    0.85,
    1.41
   ]
  },
  {
   "fecha": "2026-11-20",
   "hora": "04:00",
   "pico": 1.65,
   "eff": 1.65,
   "fuente": "SHN",
   "plazo_h": 6.0,
   "margen": 0.2,
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
    1.39,
    1.91
   ]
  },
  {
   "fecha": "2026-11-21",
   "hora": "03:00",
   "pico": 1.42,
   "eff": 1.42,
   "fuente": "modelo",
   "plazo_h": 29.0,
   "margen": 0.37,
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
    0.94,
    1.9
   ]
  },
  {
   "fecha": "2026-11-22",
   "hora": "02:00",
   "pico": 1.43,
   "eff": 1.43,
   "fuente": "modelo",
   "plazo_h": 52.0,
   "margen": 0.39,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": false,
   "prob": {
    "2.40": 1,
    "2.50": 0,
    "2.90": 0
   },
   "rango": [
    0.93,
    1.93
   ]
  },
  {
   "fecha": "2026-11-23",
   "hora": "03:00",
   "pico": 1.86,
   "eff": 1.86,
   "fuente": "modelo",
   "plazo_h": 77.0,
   "margen": 0.42,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": true,
   "prob": {
    "2.40": 10,
    "2.50": 6,
    "2.90": 1
   },
   "rango": [
    1.33,
    2.39
   ]
  }
 ],
 "resultados": [
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
  },
  {
   "fecha": "2026-11-17",
   "previsto": 1.26,
   "real": 1.54
  },
  {
   "fecha": "2026-11-18",
   "previsto": 1.37,
   "real": 1.74
  }
 ],
 "resultados_plazo": {
  "1": [
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
   },
   {
    "fecha": "2026-11-17",
    "previsto": 1.26,
    "real": 1.54
   },
   {
    "fecha": "2026-11-18",
    "previsto": 1.37,
    "real": 1.74
   }
  ],
  "2": [
   {
    "fecha": "2026-11-06",
    "previsto": 1.57,
    "real": 2.07
   },
   {
    "fecha": "2026-11-07",
    "previsto": 2.18,
    "real": 2.58
   },
   {
    "fecha": "2026-11-08",
    "previsto": 1.85,
    "real": 1.59
   },
   {
    "fecha": "2026-11-09",
    "previsto": 1.2,
    "real": 1.43
   },
   {
    "fecha": "2026-11-10",
    "previsto": 1.0,
    "real": 1.26
   },
   {
    "fecha": "2026-11-11",
    "previsto": 0.94,
    "real": 1.53
   },
   {
    "fecha": "2026-11-12",
    "previsto": 1.22,
    "real": 1.83
   },
   {
    "fecha": "2026-11-13",
    "previsto": 1.56,
    "real": 1.67
   },
   {
    "fecha": "2026-11-14",
    "previsto": 1.12,
    "real": 1.37
   },
   {
    "fecha": "2026-11-15",
    "previsto": 1.45,
    "real": 1.73
   },
   {
    "fecha": "2026-11-16",
    "previsto": 1.41,
    "real": 1.68
   },
   {
    "fecha": "2026-11-17",
    "previsto": 1.23,
    "real": 1.54
   },
   {
    "fecha": "2026-11-18",
    "previsto": 1.39,
    "real": 1.74
   }
  ],
  "3": [
   {
    "fecha": "2026-11-05",
    "previsto": 1.22,
    "real": 1.44
   },
   {
    "fecha": "2026-11-06",
    "previsto": 1.51,
    "real": 1.74
   },
   {
    "fecha": "2026-11-07",
    "previsto": 2.42,
    "real": 2.58
   },
   {
    "fecha": "2026-11-08",
    "previsto": 1.93,
    "real": 1.59
   },
   {
    "fecha": "2026-11-09",
    "previsto": 1.23,
    "real": 1.43
   },
   {
    "fecha": "2026-11-10",
    "previsto": 1.17,
    "real": 1.26
   },
   {
    "fecha": "2026-11-11",
    "previsto": 1.08,
    "real": 1.51
   },
   {
    "fecha": "2026-11-12",
    "previsto": 1.21,
    "real": 1.83
   },
   {
    "fecha": "2026-11-13",
    "previsto": 1.66,
    "real": 1.67
   },
   {
    "fecha": "2026-11-14",
    "previsto": 1.01,
    "real": 1.37
   },
   {
    "fecha": "2026-11-15",
    "previsto": 1.51,
    "real": 1.73
   },
   {
    "fecha": "2026-11-16",
    "previsto": 1.39,
    "real": 1.68
   },
   {
    "fecha": "2026-11-17",
    "previsto": 1.13,
    "real": 1.54
   },
   {
    "fecha": "2026-11-18",
    "previsto": 1.31,
    "real": 1.74
   }
  ],
  "4": [
   {
    "fecha": "2026-11-06",
    "previsto": 1.53,
    "real": 1.35
   },
   {
    "fecha": "2026-11-10",
    "previsto": 1.02,
    "real": 0.77
   },
   {
    "fecha": "2026-11-11",
    "previsto": 0.68,
    "real": 1.06
   },
   {
    "fecha": "2026-11-12",
    "previsto": 1.31,
    "real": 1.21
   },
   {
    "fecha": "2026-11-13",
    "previsto": 0.96,
    "real": 1.67
   },
   {
    "fecha": "2026-11-14",
    "previsto": 1.24,
    "real": 1.37
   },
   {
    "fecha": "2026-11-15",
    "previsto": 1.15,
    "real": 1.49
   },
   {
    "fecha": "2026-11-16",
    "previsto": 1.46,
    "real": 1.68
   },
   {
    "fecha": "2026-11-17",
    "previsto": 0.99,
    "real": 1.54
   }
  ]
 },
 "experiencia": {
  "franjas": [
   {
    "desde": null,
    "hasta": 1.0,
    "casos": 44,
    "picos": 18,
    "sesgo": 0.45,
    "pocos": false
   },
   {
    "desde": 1.0,
    "hasta": 1.5,
    "casos": 59,
    "picos": 27,
    "sesgo": 0.25,
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
  "total_picos": 41,
  "pocos_picos": 5
 }
};
