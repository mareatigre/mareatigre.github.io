// Generado por vigia_servidor.py. No editar a mano: se reescribe en cada corrida.
window.VIGIA = {
 "ejemplo": false,
 "version": 1,
 "actualizado": "2026-11-22T01:00",
 "referencia": "San Fernando",
 "nivel": "posible",
 "ocurriendo": false,
 "umbrales": {
  "compuesto": 2.4,
  "aviso": 2.5,
  "alerta": 2.9
 },
 "ultima_real": {
  "hora": "2026-11-22T00:45",
  "altura": 0.37,
  "fresco": true
 },
 "fuentes": {
  "Pronóstico SHN": true,
  "Avisos SHN": true,
  "Alturas SHN": true,
  "Modelo SHN": true,
  "Ríos INA": true
 },
 "ultima_lectura": {
  "Pronóstico SHN": "2026-11-22T01:00",
  "Avisos SHN": "2026-11-22T01:00",
  "Alturas SHN": "2026-11-22T01:00",
  "Modelo SHN": "2026-11-22T01:00",
  "Ríos INA": "2026-11-22T01:00"
 },
 "modelo": {
  "inicializado": "2026-11-21T15:00",
  "horas": 10.0,
  "usado": true,
  "atrasado": false,
  "vigente": true
 },
 "rio": {
  "estacion": "Rosario",
  "nivel": 4.9,
  "tendencia": 0.053,
  "ajuste": 0.0,
  "umbral": 5.0,
  "eta_dias": 1.8918918918918846
 },
 "escalera": null,
 "sube_al_final": false,
 "dias": [
  {
   "fecha": "2026-11-22",
   "hora": "06:00",
   "pico": 1.5,
   "eff": 1.5,
   "fuente": "SHN",
   "plazo_h": 5.0,
   "margen": 0.19,
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
    1.25,
    1.75
   ]
  },
  {
   "fecha": "2026-11-23",
   "hora": "04:00",
   "pico": 1.49,
   "eff": 1.49,
   "fuente": "modelo",
   "plazo_h": 27.0,
   "margen": 0.36,
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
    1.02,
    1.96
   ]
  },
  {
   "fecha": "2026-11-24",
   "hora": "04:00",
   "pico": 1.21,
   "eff": 1.21,
   "fuente": "modelo",
   "plazo_h": 51.0,
   "margen": 0.38,
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
    0.72,
    1.7
   ]
  },
  {
   "fecha": "2026-11-25",
   "hora": "05:00",
   "pico": 2.85,
   "eff": 2.85,
   "fuente": "modelo",
   "plazo_h": 76.0,
   "margen": 0.41,
   "etiqueta": "posible",
   "evento": "posible comp.",
   "compuesto": true,
   "parcial": true,
   "prob": {
    "2.40": 86,
    "2.50": 80,
    "2.90": 45
   },
   "rango": [
    2.32,
    3.38
   ]
  }
 ],
 "resultados": [
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
  },
  {
   "fecha": "2026-11-19",
   "previsto": 1.59,
   "real": 1.29
  },
  {
   "fecha": "2026-11-20",
   "previsto": 1.89,
   "real": 1.68
  },
  {
   "fecha": "2026-11-21",
   "previsto": 1.42,
   "real": 1.47
  }
 ],
 "resultados_plazo": {
  "1": [
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
   },
   {
    "fecha": "2026-11-19",
    "previsto": 1.59,
    "real": 1.29
   },
   {
    "fecha": "2026-11-20",
    "previsto": 1.89,
    "real": 1.68
   },
   {
    "fecha": "2026-11-21",
    "previsto": 1.42,
    "real": 1.47
   }
  ],
  "2": [
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
   },
   {
    "fecha": "2026-11-19",
    "previsto": 1.59,
    "real": 1.46
   },
   {
    "fecha": "2026-11-20",
    "previsto": 1.89,
    "real": 1.68
   },
   {
    "fecha": "2026-11-21",
    "previsto": 1.37,
    "real": 1.37
   }
  ],
  "3": [
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
   },
   {
    "fecha": "2026-11-19",
    "previsto": 1.41,
    "real": 1.46
   },
   {
    "fecha": "2026-11-20",
    "previsto": 1.73,
    "real": 1.68
   },
   {
    "fecha": "2026-11-21",
    "previsto": 1.37,
    "real": 1.37
   }
  ],
  "4": [
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
   },
   {
    "fecha": "2026-11-19",
    "previsto": 1.42,
    "real": 1.46
   },
   {
    "fecha": "2026-11-21",
    "previsto": 1.37,
    "real": 1.37
   }
  ]
 },
 "experiencia": {
  "franjas": [
   {
    "desde": null,
    "hasta": 1.0,
    "casos": 45,
    "picos": 19,
    "sesgo": 0.44,
    "pocos": false
   },
   {
    "desde": 1.0,
    "hasta": 1.5,
    "casos": 61,
    "picos": 28,
    "sesgo": 0.24,
    "pocos": false
   },
   {
    "desde": 1.5,
    "hasta": 2.0,
    "casos": 23,
    "picos": 8,
    "sesgo": 0.06,
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
  "total_picos": 44,
  "pocos_picos": 5
 }
};
