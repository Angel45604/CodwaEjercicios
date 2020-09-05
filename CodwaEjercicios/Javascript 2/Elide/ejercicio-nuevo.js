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

//let newCourses = {}

// categorias.forEach(e => {
//     newCourses[e[0]] = newCourses[e[0]] || []
//     let keySeparado = e.split(' ')
//     newCourses[e[0]].push(mayusculizar(keySeparado[0]) + ' ' + mayusculizar(keySeparado[1]))
// })
//console.log(newCourses)

for(let key in categorias) {
    //llaves
    let keySeparada =key.split('_')
    let keyFormateada = ''
    keySeparada.forEach(k => {
        keyFormateada += mayusculizar(k) + ' '
    })
    console.log(keyFormateada)
}
function mayusculizar(key) {
    return key[0].toUpperCase() + key.slice(1).toLowerCase()
}
    //valores
    //let codigos = categorias[key].split(',')
    //console.log(codigos)
    


// let newCourses = {
// 	"Conceptos Basicos": [
// 		{
			
// 	        "title": "Terminal y Linea de Comandos",
// 	        "subject": "Conceptos Básicos",
// 	        "content": [
// 	            "¿Qué es y cómo funciona la terminal?",
// 	            "Sistema de archivos",
// 	            "Administración y comunicación entre procesos",
// 	            "Usuarios, Grupos y Permisos",
// 	            "Compresión y combinación de archivos",
// 	            "Búsqueda de archivos",
// 	            "CURL y peticiones HTTP",
// 	            "Acceso remoto",
// 	            "Variables de entorno",
// 	            "Scheduler",
// 	            "Bash Scripts",
// 	            "Programación en Bash"
//             ]
//         },
//         {
//         	"title": "Introducción a la computación",
//             "subject": "Conceptos Básicos",
//             "content": [
//                 "¿Cómo funciona una computadora?",
//                 "Bits/Bytes",
//                 "Procesamiento general",
//                 "Procesamiento de propósito específico",
//                 "Memoria RAM y almacenamiento",
//                 "Entrada de información",
//                 "Principios de sistemas operativos"
//             ]
//         }
//         //...
// 	],
// 	"Control De Versiones": [
// 		{
// 			"title": "Git y Github",
//             "subject": "Control de Versiones",
//             "content": [
//                 "¿Qué es git?",
//                 "¿Por qué usar un control de versiones?",
//                 "¿Qué es github?",
//                 "Staging, repositorios y ciclo básico de trabajo",
//                 "Branches , Merge y Checkout",
//                 "Repositorios remotos",
//                 "Fusión de ramas y solución de conflictos",
//                 "Llaves públicas y privadas",
//                 "Conexión a GitHub con SSH",
//                 "Tags y Versiones",
//                 "Colaboradores",
//                 "Flujos de trabajo profesionales",
//                 "Pull request, Fork y deployment",
//                 "README y .gitignore",
//                 "GitHub Pages",
//                 "Git Rebase",
//                 "Git Stash",
//                 "Git Clean",
//                 "Git cherry-Pick",
//                 "Reconstrucción de commits",
//                 "Git Reset y Reflog",
//                 "Git Grep y log"
//             ]
// 		}
// 	],
// 	"Inteligencia Artificial": [
// 		{
// 			"title": "Redes Neuronales",
//             "subject": "Inteligencia Artificial",
//             "content": [
//                 "La Neurona",
//                 "La Red",
//                 "Backpropagation",
//                 "Overfitting y Underfitting",
//                 "Clasificadores",
//                 "Reconocimiento de imágenes con redes neuronales"
//             ],
// 		}
// 	]
// }