// Generado por vigia_servidor.py. No editar a mano: se reescribe en cada corrida.
window.VIGIA = {
 "ejemplo": false,
 "version": 1,
 "actualizado": "2026-11-27T12:00",
 "referencia": "San Fernando",
 "nivel": "normal",
 "ocurriendo": false,
 "umbrales": {
  "compuesto": 2.4,
  "aviso": 2.5,
  "alerta": 2.9
 },
 "ultima_real": {
  "hora": "2026-11-27T11:45",
  "altura": 0.84,
  "fresco": true
 },
 "medido_hoy": {
  "hora": "2026-11-27T00:45",
  "altura": 1.47,
  "lecturas": 12
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
  "Pronóstico SHN": "2026-11-27T12:00",
  "Avisos SHN": "2026-11-27T12:00",
  "Alturas SHN": "2026-11-27T12:00",
  "Modelo SHN": "2026-11-27T12:00",
  "Ríos INA": "2026-11-27T12:00"
 },
 "modelo": {
  "inicializado": "2026-11-27T03:00",
  "horas": 9.0,
  "usado": true,
  "atrasado": false,
  "vigente": true
 },
 "rio": {
  "estacion": "Rosario",
  "nivel": 4.95,
  "tendencia": 0.007,
  "ajuste": 0.0,
  "umbral": 5.0,
  "eta_dias": 7.0
 },
 "escalera": null,
 "sube_al_final": false,
 "dias": [
  {
   "fecha": "2026-11-27",
   "hora": "22:00",
   "pico": 1.1,
   "eff": 1.1,
   "fuente": "SHN",
   "plazo_h": 10.0,
   "margen": 0.22,
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
    0.81,
    1.39
   ]
  },
  {
   "fecha": "2026-11-28",
   "hora": "22:00",
   "pico": 1.1,
   "eff": 1.1,
   "fuente": "modelo",
   "plazo_h": 34.0,
   "margen": 0.35,
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
    1.55
   ]
  },
  {
   "fecha": "2026-11-29",
   "hora": "21:00",
   "pico": 1.29,
   "eff": 1.29,
   "fuente": "modelo",
   "plazo_h": 57.0,
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
    0.8,
    1.78
   ]
  },
  {
   "fecha": "2026-11-30",
   "hora": "21:00",
   "pico": 1.65,
   "eff": 1.65,
   "fuente": "modelo",
   "plazo_h": 81.0,
   "margen": 0.45,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": false,
   "cola": false,
   "prob": {
    "2.40": 5,
    "2.50": 3,
    "2.90": 0
   },
   "rango": [
    1.07,
    2.23
   ]
  },
  {
   "fecha": "2026-12-01",
   "hora": "00:00",
   "pico": 1.27,
   "eff": 1.27,
   "fuente": "modelo",
   "plazo_h": 84.0,
   "margen": 0.46,
   "etiqueta": null,
   "evento": "-",
   "compuesto": false,
   "parcial": true,
   "cola": true,
   "prob": {
    "2.40": 1,
    "2.50": 0,
    "2.90": 0
   },
   "rango": [
    0.68,
    1.86
   ]
  }
 ],
 "resultados": [
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
  },
  {
   "fecha": "2026-11-26",
   "previsto": 2.35,
   "real": 2.49
  }
 ],
 "resultados_plazo": {
  "1": [
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
   },
   {
    "fecha": "2026-11-26",
    "previsto": 2.35,
    "real": 2.49
   }
  ],
  "2": [
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
   },
   {
    "fecha": "2026-11-26",
    "previsto": 2.31,
    "real": 2.49
   }
  ],
  "3": [
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
   },
   {
    "fecha": "2026-11-26",
    "previsto": 2.53,
    "real": 2.49
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
    "casos": 72,
    "picos": 33,
    "sesgo": 0.23,
    "pocos": false
   },
   {
    "desde": 1.5,
    "hasta": 2.0,
    "casos": 34,
    "picos": 13,
    "sesgo": 0.02,
    "pocos": false
   },
   {
    "desde": 2.0,
    "hasta": 2.5,
    "casos": 7,
    "picos": 4,
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
  "total_picos": 55,
  "pocos_picos": 5
 },
 "bajante": {
  "ref": 0.4,
  "ahora": {
   "hora": "2026-11-27T11:45",
   "altura": 0.84,
   "va": "bajando"
  },
  "medidas_hoy": [
   {
    "t": "2026-11-27T06:45",
    "altura": 0.81
   }
  ],
  "proximas": [
   {
    "t": "2026-11-27T17:30",
    "altura": 0.1,
    "fuente": "SHN",
    "corr_h": 0.0,
    "plazo": 0,
    "ancla": null,
    "chance": 99,
    "n": 71,
    "rango": [
     -0.06,
     0.33
    ],
    "mas_bajo": -0.31,
    "en_curso": false,
    "bajo_ref": true
   },
   {
    "t": "2026-11-28T07:00",
    "t_mod": "2026-11-28T04:00",
    "altura": 0.42,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 1,
    "ancla": null,
    "chance": 20,
    "n": 51,
    "rango": [
     0.33,
     0.7
    ],
    "mas_bajo": 0.23,
    "en_curso": false,
    "bajo_ref": true
   },
   {
    "t": "2026-11-28T18:00",
    "t_mod": "2026-11-28T15:00",
    "altura": 0.34,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 2,
    "ancla": null,
    "chance": 16,
    "n": 38,
    "rango": [
     0.36,
     0.62
    ],
    "mas_bajo": 0.19,
    "en_curso": false,
    "bajo_ref": true
   },
   {
    "t": "2026-11-29T07:00",
    "t_mod": "2026-11-29T04:00",
    "altura": 0.54,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 2,
    "ancla": null,
    "chance": 3,
    "n": 38,
    "rango": [
     0.56,
     0.82
    ],
    "mas_bajo": 0.39,
    "en_curso": false,
    "bajo_ref": true
   },
   {
    "t": "2026-11-29T18:00",
    "t_mod": "2026-11-29T15:00",
    "altura": 0.4,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 2,
    "ancla": null,
    "chance": 8,
    "n": 38,
    "rango": [
     0.42,
     0.68
    ],
    "mas_bajo": 0.25,
    "en_curso": false,
    "bajo_ref": true
   },
   {
    "t": "2026-11-30T07:00",
    "t_mod": "2026-11-30T04:00",
    "altura": 0.66,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 3,
    "ancla": null,
    "chance": 0,
    "n": 27,
    "rango": [
     0.66,
     1.01
    ],
    "mas_bajo": 0.57,
    "en_curso": false,
    "bajo_ref": false
   },
   {
    "t": "2026-11-30T18:00",
    "t_mod": "2026-11-30T15:00",
    "altura": 0.37,
    "fuente": "modelo",
    "corr_h": 3.0,
    "plazo": 4,
    "ancla": null,
    "chance": 38,
    "n": 8,
    "rango": [
     0.13,
     0.65
    ],
    "mas_bajo": 0.12,
    "en_curso": false,
    "bajo_ref": true
   }
  ],
  "experiencia": {
   "modelo": {
    "1": {
     "n": 51,
     "promedio": 0.11,
     "bajo_mas": 10,
     "peor": -0.19,
     "peor_fecha": "2026-11-24T02:45"
    },
    "2": {
     "n": 38,
     "promedio": 0.16,
     "bajo_mas": 3,
     "peor": -0.15,
     "peor_fecha": "2026-11-20T22:45"
    },
    "3": {
     "n": 27,
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
    "n": 71,
    "promedio": 0.03,
    "bajo_mas": 27,
    "peor": -0.41,
    "peor_fecha": "2026-11-18T20:00"
   },
   "hora": {
    "mediana": 2.8,
    "n": 116,
    "aplicada": 3.0,
    "mas_tarde": 103
   },
   "subida": {
    "mediana": 5.0,
    "n": 69,
    "aplicada": 5.0
   },
   "medidas": 71,
   "bajo_ref": 8,
   "mas_baja": {
    "hora": "2026-11-04T23:45",
    "altura": 0.19
   },
   "desde": "2026-10-17",
   "hasta": "2026-11-27",
   "rio_rosario": [
    3.75,
    4.99
   ],
   "casos_reales": 54
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
