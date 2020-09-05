//Terminal 1
let tipos = require('./clase7.js')['tipos']

let subtipos = require('./clase7.js')['subtipos']

let motivos = require('./clase7.js')['motivos']

tipos.forEach(idtipo =>{
    subtipos.forEach(idsubtipo =>{
        if (idsubtipo.tipo_id == idtipo.id){
            idtipo.subtipos = idtipo.subtipos || []
            idtipo.subtipos.push(idsubtipo)
            motivos.forEach(idmotivo =>{
                if (idmotivo.sub_tipo_id == idsubtipo.id){
                    idsubtipo.motivos = idsubtipo.motivos || []
                    idsubtipo.motivos.push(idmotivo)
                }
            })
        }
    })
})
console.log(tipos)
//tipo
// {
//   "id": 1,
//   "tipo": "Tramites",
//   "created_at": "2020-04-29T05:56:44.000000Z",
//   "updated_at": null,
//   "subtipos": [
//     {
//         "id": 1,
//         "sub_tipo": "ALTAS DOCENTE",
//         "tipo_id": 1,
//         "created_at": "2020-04-29T05:56:44.000000Z",
//         "updated_at": null,
//         "motivos": [
//             {
//                 "id": 1,
//                 "motivo": "09 (L)",
//                 "sub_tipo_id": 1,
//                 "created_at": "2020-04-29T00:57:01.000000Z",
//                 "updated_at": null
//               },
//         ]
//       },
//   ]
// },



//subtipo
