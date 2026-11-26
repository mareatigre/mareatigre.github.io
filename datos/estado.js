// Generado por vigia_servidor.py. No editar a mano: se reescribe en cada corrida.
window.VIGIA = {
 "ejemplo": false,
 "version": 1,
 "actualizado": "2026-11-26T13:00",
 "referencia": "San Fernando",
 "nivel": "normal",
 "ocurriendo": false,
 "umbrales": {
  "compuesto": 2.4,
  "aviso": 2.5,
  "alerta": 2.9
 },
 "ultima_real": {
  "hora": "2026-11-26T12:45",
  "altura": 1.96,
  "fresco": true
 },
 "medido_hoy": {
  "hora": "2026-11-26T08:45",
  "altura": 2.49,
  "lecturas": 13
 },
 "senal_ina": "fuerte",
 "fuentes": {
  "Pronóstico SHN": true,
  "Avisos SHN": true,
  "Alturas SHN": true,
  "Modelo SHN": true,
  "Ríos INA": true
 },
 "ultima_lectura": {
  "Pronóstico SHN": "2026-11-26T13:00",
  "Avisos SHN": "2026-11-26T13:00",
  "Alturas SHN": "2026-11-26T13:00",
  "Modelo SHN": "2026-11-26T13:00",
  "Ríos INA": "2026-11-26T13:00"
 },
 "modelo": {
  "inicializado": "2026-11-26T03:00",
  "horas": 10.0,
  "usado": true,
  "atrasado": false,
  "vigente": true
 },
 "rio": {
  "estacion": "Rosario",
  "nivel": 4.95,
  "tendencia": 0.009,
  "ajuste": 0.0,
  "umbral": 5.0,
  "eta_dias": 5.833333333333264
 },
 "escalera": null,
 "sube_al_final": false,
 "dias": [
  {
   "fecha": "2026-11-26",
   "hora": "21:30",
   "pico": 2.39,
   "eff": 2.39,
   "fuente": "SHN",
   "plazo_h": 8.5,
   "margen": 0.21,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": false,
   "cola": false,
   "prob": {
    "2.40": 48,
    "2.50": 30,
    "2.90": 1
   },
   "rango": [
    2.12,
    2.66
   ]
  },
  {
   "fecha": "2026-11-27",
   "hora": "00:00",
   "pico": 1.33,
   "eff": 1.33,
   "fuente": "modelo",
   "plazo_h": 11.0,
   "margen": 0.31,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": false,
   "cola": true,
   "prob": {
    "2.40": 0,
    "2.50": 0,
    "2.90": 0
   },
   "rango": [
    0.93,
    1.73
   ]
  },
  {
   "fecha": "2026-11-28",
   "hora": "20:00",
   "pico": 1.08,
   "eff": 1.08,
   "fuente": "modelo",
   "plazo_h": 55.0,
   "margen": 0.38,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": false,
   "cola": false,
   "prob": {
    "2.40": 0,
    "2.50": 0,
    "2.90": 0
   },
   "rango": [
    0.59,
    1.57
   ]
  },
  {
   "fecha": "2026-11-29",
   "hora": "20:00",
   "pico": 1.22,
   "eff": 1.22,
   "fuente": "modelo",
   "plazo_h": 79.0,
   "margen": 0.44,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": false,
   "cola": false,
   "prob": {
    "2.40": 0,
    "2.50": 0,
    "2.90": 0
   },
   "rango": [
    0.65,
    1.79
   ]
  },
  {
   "fecha": "2026-11-30",
   "hora": "00:00",
   "pico": 0.84,
   "eff": 0.84,
   "fuente": "modelo",
   "plazo_h": 83.0,
   "margen": 0.45,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": true,
   "cola": true,
   "prob": {
    "2.40": 0,
    "2.50": 0,
    "2.90": 0
   },
   "rango": [
    0.26,
    1.42
   ]
  }
 ],
 "resultados": [
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
  },
  {
   "fecha": "2026-11-22",
   "previsto": 1.41,
   "real": 1.35
  },
  {
   "fecha": "2026-11-23",
   "previsto": 1.46,
   "real": 1.33
  },
  {
   "fecha": "2026-11-24",
   "previsto": 1.4,
   "real": 1.71
  },
  {
   "fecha": "2026-11-25",
   "previsto": 2.5,
   "real": 2.51
  }
 ],
 "resultados_plazo": {
  "1": [
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
   },
   {
    "fecha": "2026-11-22",
    "previsto": 1.41,
    "real": 1.35
   },
   {
    "fecha": "2026-11-23",
    "previsto": 1.46,
    "real": 1.33
   },
   {
    "fecha": "2026-11-24",
    "previsto": 1.4,
    "real": 1.71
   },
   {
    "fecha": "2026-11-25",
    "previsto": 2.5,
    "real": 2.51
   }
  ],
  "2": [
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
    "fecha": "2026-11-22",
    "previsto": 1.43,
    "real": 1.35
   },
   {
    "fecha": "2026-11-23",
    "previsto": 1.82,
    "real": 1.33
   },
   {
    "fecha": "2026-11-24",
    "previsto": 1.21,
    "real": 1.71
   },
   {
    "fecha": "2026-11-25",
    "previsto": 2.56,
    "real": 2.51
   }
  ],
  "3": [
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
    "previsto": 1.4,
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
    "fecha": "2026-11-23",
    "previsto": 1.86,
    "real": 1.33
   },
   {
    "fecha": "2026-11-24",
    "previsto": 1.29,
    "real": 1.71
   },
   {
    "fecha": "2026-11-25",
    "previsto": 2.85,
    "real": 2.51
   }
  ],
  "4": [
   {
    "fecha": "2026-11-15",
    "previsto": 1.54,
    "real": 1.73
   },
   {
    "fecha": "2026-11-17",
    "previsto": 1.36,
    "real": 1.54
   },
   {
    "fecha": "2026-11-24",
    "previsto": 1.22,
    "real": 1.57
   }
  ]
 },
 "experiencia": {
  "franjas": [
   {
    "desde": null,
    "hasta": 1.0,
    "casos": 48,
    "picos": 21,
    "sesgo": 0.43,
    "pocos": false
   },
   {
    "desde": 1.0,
    "hasta": 1.5,
    "casos": 70,
    "picos": 32,
    "sesgo": 0.24,
    "pocos": false
   },
   {
    "desde": 1.5,
    "hasta": 2.0,
    "casos": 29,
    "picos": 11,
    "sesgo": 0.03,
    "pocos": false
   },
   {
    "desde": 2.0,
    "hasta": 2.5,
    "casos": 6,
    "picos": 3,
    "sesgo": 0.12,
    "pocos": true
   },
   {
    "desde": 2.5,
    "hasta": null,
    "casos": 5,
    "picos": 2,
    "sesgo": -0.18,
    "pocos": true
   }
  ],
  "total_picos": 53,
  "pocos_picos": 5
 },
 "bajante": {
  "ref": 0.4,
  "ahora": {
   "hora": "2026-11-26T12:45",
   "altura": 1.96,
   "va": "bajando"
  },
  "medidas_hoy": [
   {
    "t": "2026-11-26T02:45",
    "altura": 1.05
   }
  ],
  "proximas": [
   {
    "t": "2026-11-26T15:30",
    "altura": 1.5,
    "fuente": "SHN",
    "corr_h": 0.0,
    "plazo": 0,
    "chance": 0,
    "n": 68,
    "rango": [
     1.34,
     1.73
    ],
    "mas_bajo": 1.09,
    "bajo_ref": false
   },
   {
    "t": "2026-11-27T06:00",
    "t_mod": "2026-11-27T03:00",
    "altura": 1.0,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 1,
    "chance": 0,
    "n": 49,
    "rango": [
     0.93,
     1.28
    ],
    "mas_bajo": 0.81,
    "bajo_ref": false
   },
   {
    "t": "2026-11-27T18:00",
    "t_mod": "2026-11-27T15:00",
    "altura": 0.28,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 2,
    "chance": 32,
    "n": 37,
    "rango": [
     0.3,
     0.56
    ],
    "mas_bajo": 0.13,
    "bajo_ref": true
   },
   {
    "t": "2026-11-28T06:00",
    "t_mod": "2026-11-28T03:00",
    "altura": 0.38,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 2,
    "chance": 11,
    "n": 37,
    "rango": [
     0.4,
     0.66
    ],
    "mas_bajo": 0.23,
    "bajo_ref": true
   },
   {
    "t": "2026-11-28T18:00",
    "t_mod": "2026-11-28T15:00",
    "altura": 0.35,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 2,
    "chance": 14,
    "n": 37,
    "rango": [
     0.37,
     0.63
    ],
    "mas_bajo": 0.2,
    "bajo_ref": true
   },
   {
    "t": "2026-11-29T06:00",
    "t_mod": "2026-11-29T03:00",
    "altura": 0.58,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 3,
    "chance": 0,
    "n": 26,
    "rango": [
     0.57,
     0.94
    ],
    "mas_bajo": 0.49,
    "bajo_ref": false
   },
   {
    "t": "2026-11-29T18:00",
    "t_mod": "2026-11-29T15:00",
    "altura": 0.41,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 4,
    "chance": 38,
    "n": 8,
    "rango": [
     0.17,
     0.68
    ],
    "mas_bajo": 0.16,
    "bajo_ref": true
   }
  ],
  "experiencia": {
   "modelo": {
    "1": {
     "n": 49,
     "promedio": 0.11,
     "bajo_mas": 9,
     "peor": -0.19,
     "peor_fecha": "2026-11-24T02:45"
    },
    "2": {
     "n": 37,
     "promedio": 0.16,
     "bajo_mas": 3,
     "peor": -0.15,
     "peor_fecha": "2026-11-20T22:45"
    },
    "3": {
     "n": 26,
     "promedio": 0.19,
     "bajo_mas": 3,
     "peor": -0.09,
     "peor_fecha": "2026-11-17T18:45"
    },
    "4": {
     "n": 8,
     "promedio": 0.06,
     "bajo_mas": 3,
     "peor": -0.25,
     "peor_fecha": "2026-11-23T14:45"
    }
   },
   "shn": {
    "n": 68,
    "promedio": 0.03,
    "bajo_mas": 26,
    "peor": -0.41,
    "peor_fecha": "2026-11-18T20:00"
   },
   "hora": {
    "mediana": 2.8,
    "n": 112,
    "aplicada": 3.0,
    "mas_tarde": 99
   },
   "medidas": 69,
   "bajo_ref": 8,
   "mas_baja": {
    "hora": "2026-11-04T23:45",
    "altura": 0.19
   },
   "desde": "2026-10-17",
   "hasta": "2026-11-26",
   "rio_rosario": [
    3.75,
    4.99
   ],
   "casos_reales": 52
  },
  "semana_antes": {
   "hora": 3.0,
   "prom_1d": 0.14,
   "peor_1d": -0.14,
   "n_1d": 38,
   "dias": 7
  },
  "se_movio": [],
  "min_casos": 8
 }
};
