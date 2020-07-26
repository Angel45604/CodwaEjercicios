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
  "Otros": "#212124,#3B3D62,#202135"
}

let courses = require('./arreglo-clase6.js')

function pminuscula(curso) {
  return curso.toLowerCase()
}

//console.log(pminuscula(a))
let newCourses = {}

for(let k in categorias) {
    let ky=k.split('_')
    let llave = '' 
    let categoria=categorias[k].split(',')
    //[#123, #456]

    if(ky.length == 1){
      llave= pminuscula(ky[0])
      newCourses[llave] = categoria
    }
    if (ky.length == 2){
       llave =pminuscula(ky[0]) + ' ' + pminuscula(ky[1])
       newCourses[llave] = categoria
    }
    if (ky.length == 3){
      llave=pminuscula(ky[0]) + ' ' + pminuscula(ky[1]) + ' ' + pminuscula(ky[2])
      newCourses[llave] = categoria
    }

  }
 // console.log(newCourses)
  // console.log(newCourses)

// courses.forEach(function(e){
//   if(e.isReady){
//     e.category==false
//     console.log(e)
//   }
// })

let coursesResultante = {}

  courses.forEach(function(e) {
    for(let k in newCourses){
      //CONCEPTOS_BASICOS
      if(newCourses[k].includes(e.category) && (e.isReady)) {
        coursesResultante[k] = coursesResultante[k] || []
        let { content } = e
        let { title } = e
        let { subject } = e
        coursesResultante[k].push({content, title, subject})

        //eliminando propiedades de e
        // delete e.category
        // delete e.isReady 
        // coursesResultante[k].push(e)
      }
    } 
  })  
  console.log(coursesResultante)