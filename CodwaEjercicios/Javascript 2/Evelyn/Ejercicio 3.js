//Terminal 2
let tipos = require('./clase7.js')['tipos']

let subtipos = require('./clase7.js')['subtipos']

let motivos = require('./clase7.js')['motivos']

tipos.forEach(function(t){
  t.subtipos=t.subtipos || []
  subtipos.forEach(function(s){
    if(t.id == s.tipo_id) {
      t.subtipos.push(s)
      s.motivos=s.motivos || []
      motivos.forEach(function(m){
       if(s.id == m.sub_tipo_id){
          s.motivos.push(m)
       }
      })
    }
  })    
})    

console.log(tipos)

