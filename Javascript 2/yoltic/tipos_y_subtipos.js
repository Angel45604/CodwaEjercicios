//Terminal 3 
let tipos = require('./clase7.js')['tipos']

let subtipos = require('./clase7.js')['subtipos']

let motivos = require('./clase7.js')['motivos']
let newTipos = {}

tipos.forEach(e =>{
  subtipos.forEach(k=>{
    if(e.id==k.tipo_id){
      e['subtipos'] = e['subtipos']||[]
      e['subtipos'].push(k)
      motivos.forEach(l => {
        if(k.id == l.sub_tipo_id){
          k['motivo'] = k['motivo']||[]
          k['motivo'].push(l)
        }
      })
    }
  })
})
console.log(tipos)

//No necesitas crear una na
//Solo necesitas agarrar el objeto k y meterlo dentro de la propiedad subtipos de e en caso de que coincidan los ids
//Y esta parte está mal
//No comparas el id del tipo con el id del subtipo
//Comparas el id del tipo con el tipo_id del subtipo

{
  "id": 1,
  "tipo": "Tramites",
  "created_at": "2020-04-29T05:56:44.000000Z",
  "updated_at": null,
  "subtipos": [
    {
      "id": 1,
      "sub_tipo": "ALTAS DOCENTE",
      "tipo_id": 1,
      "created_at": "2020-04-29T05:56:44.000000Z",
      "updated_at": null
      "motivos": [
        {
          "id": 1,
          "motivo": "09 (L)",
          "sub_tipo_id": 1,
          "created_at": "2020-04-29T00:57:01.000000Z",
          "updated_at": null
        }
      ]
    }
  ]
}



