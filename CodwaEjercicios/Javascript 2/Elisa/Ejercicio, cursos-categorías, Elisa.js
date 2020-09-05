//Terminal 2
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
  "Otros": "#212124,#3B3D62,#202135"
}

let courses = require('./arreglo-clase6.js')

let newCourses = {}
courses.forEach(course => {
  let course1 = {'title': course.title, 'content':course.content}
  for (let k in categorias) {
    let a = categorias[k].split(',')
    if (a.includes(course.category) && course.isReady){
      newCourses[course.subject] = newCourses[course.subject] || []
      newCourses[course.subject].push(course1)
    }
  }
})
console.log (newCourses)
