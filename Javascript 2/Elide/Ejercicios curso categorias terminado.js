//Terminal 1
let categorias = {
  "CONCEPTOS_BASICOS":"#C2185B,#AD1457,#880E4F",
  "CONTROL_DE_VERSIONES":"#00796B,#00695C,#004D40",
  "JAVA":"#F57C00,#EF6C00,#E65100",
  "PYTHON":"#E64A19,#D84315,#BF360C",
  "CSHARP":"#AFB42B,#9E9D24,#827717",
  "JAVASCRIPT":"#FFFF00,#FFEA00,#FFD600",
  "DESARROLLO_WEB":"#69F0AE,#00E676,#00C853",
  "DESARROLLO_MOVIL":"#388E3C,#2E7D32,#1B5E20",
  "DESARROLLO_MULTIPLATAFORMA":"#303F9F,#283593,#1A237E",
  "BASES_DE_DATOS":"#0288D1,#0277BD,#01579B",
  "INTELIGENCIA_ARTIFICIAL":"#7B1FA2,#6A1B9A,#4A148C",
  "CLOUD_COMPUTING_SERVICES":"#455A64,#37474F,#263238",
  "Otros": "#212124,#3B3D62,#202135",
}

let NewCourses = {}
let courses = require('./arreglo-clase6.js')

for(let key in categorias) {
  NewCourses[key] = []
  let codigo = categorias[key]
  let codigoSeparado =codigo.split(',')
  courses.forEach(course => {
    if(codigoSeparado.includes(course.category) && course.isReady) {
      let { title } = course
      let { subject } = course
      let { content } = course 
      NewCourses[key].push({title, subject, content})
    }
  })
  formatear(key)
}


function formatear(key) {
  let keySeparada =key.split('_')
    let keyFormateada = ' '
    keySeparada.forEach(k => {
      keyFormateada += mayusculizar(k) + ' '
    })
    NewCourses[keyFormateada] = NewCourses[key]
    delete NewCourses[key]
}

function mayusculizar(key) {
  return key[0].toUpperCase() + key.slice(1).toLowerCase()
}
