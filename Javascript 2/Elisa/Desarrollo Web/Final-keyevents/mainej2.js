const numeros = document.querySelector('#Numero')
const uhm = document.querySelector('#uhm')
let unidades = ['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve']
let decenas = ['diez', 'veinte','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa']
let diez = ['once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve']
let veinte = ['veintiuno','veintidós','veintitrés','veinticuatro','veinticinco','veintiséis','veintisiete','veintiocho','veintinueve']
let centenas = ['cien','doscientos','trescientos','cuatrocientos','quinientos','seiscientos','setecientos','ochocientos','novecientos']

numeros.addEventListener('input', e=>{
    let num = numeros.value
    let tn = num.length
    let split = num.split("")
    switch (tn){
        case 1: 
            val=unidades [num]
            uhm.innerHTML = val;
        break;
        case 2: 
            if (split[1]==0){
                dec=decenas[split[0]-1]
                uhm.innerHTML = dec
            }
            if (split[0]==1 && split[1]!=0){
                di=diez[split[1]-1]
                uhm.innerHTML = di
            }
            if (split[0]==2 && split[1]!=0){
                ve=veinte[split[1]-1]
                uhm.innerHTML = ve
            }
            if (split[1]!=0 && split[0]!=2 && split[0]!=1){
                un=unidades[split[1]]
                dec=decenas[split[0]-1]
                uhm.innerHTML = dec+" y "+un
            }
        break;
        case 3: 
            if (split[1]==0 && split[2]==0){
                cent=centenas[split[0]-1]
                uhm.innerHTML = cent
            }
            if(split[1]==0 && split[2]!=0){
                un=unidades[split[2]]
                cent=centenas[split[0]-1]
                if(split[0]==1){
                    uhm.innerHTML = cent+"to "+un
                }
                else
                uhm.innerHTML = cent+" "+un
            }
            if(split[1]!=0 && split[2]==0){
                cent=centenas[split[0]-1]
                dec=decenas[split[1]-1]
                uhm.innerHTML = cent+" "+dec
            }
            if(split[1]==1 && split[2]!=0){
                di=diez[split[2]-1]
                cent=centenas[split[0]-1]
                if(split[0]==1){
                    uhm.innerHTML = cent+"to "+di
                }
                else
                uhm.innerHTML = cent+" "+di
            }
            if(split[1]==2 && split[2]!=0){
                ve=veinte[split[2]-1]
                cent=centenas[split[0]-1]
                if(split[0]==1){
                    uhm.innerHTML = cent+"to "+ve
                }
                else
                uhm.innerHTML = cent+" "+ve
            }
            if(split[1]!=0 && split[2]!=0 && split[1]!=1 && split[1]!=2){
                un=unidades[split[2]]
                dec=decenas[split[1]-1]
                cent=centenas[split[0]-1]
                if(split[0]==1){
                    uhm.innerHTML = cent+"to "+dec+" y "+un
                }
                else
                uhm.innerHTML = cent+" "+dec+" y "+un
            };
        break;
        case 4:
            if (split[1]==0 && split[2]==0 && split[3]==0){
                un=unidades[split[0]]
                if(split[0]==1){
                    uhm.innerHTML = "mil"
                }
                else
                uhm.innerHTML = un+" mil"
            }
            if (split[1]==0 && split[2]==0 && split[3]!=0){
                un=unidades[split[0]]
                uni=unidades[split[3]]
                if(split[0]==1){
                    uhm.innerHTML = "mil " +uni
                }
                else
                uhm.innerHTML = un+" mil "+uni
            }
             if (split[1]==0 && split[2]==1 && split[3]!=0){
                un=unidades[split[0]]
                di=diez[split[3]-1]
                if(split[0]==1){
                    uhm.innerHTML = "mil " +di
                }
                else
                uhm.innerHTML = un+" mil "+di
            }
            if (split[1]==0 && split[2]==2 && split[3]!=0){
                un=unidades[split[0]]
                ve=veinte[split[3]-1]
                if(split[0]==1){
                    uhm.innerHTML = "mil " +ve
                }
                else
                uhm.innerHTML = un+" mil "+ve
            }
            if (split[1]==0 && split[2]!=0 && split[3]==0){
                un=unidades[split[0]]
                dec=decenas[split[2]-1]
                if(split[0]==1){
                    uhm.innerHTML = "mil " +dec
                }
                else
                uhm.innerHTML = un+" mil "+dec
            }
            if (split[1]==0 && split[2]!=0 && split[3]!=0 && split[2]!=1 && split[2]!=2){
                un=unidades[split[0]]
                dec=decenas[split[2]-1]
                unid=unidades[split[3]]
                if(split[0]==1){
                    uhm.innerHTML = "mil "+dec+" y "+unid
                }
                else
                uhm.innerHTML = un+" mil "+dec+" y "+unid
            }
            if (split[1]!=0 && split[2]!=0 && split[3]!=0 && split[2]!=1 && split[2]!=2){
                un=unidades[split[0]]
                dec=decenas[split[2]-1]
                unid=unidades[split[3]]
                cen=centenas[split[1]-1]
                if(split[0]==1){
                    if(split[1]==1){
                        uhm.innerHTML = "mil "+cen+"to "+dec+" y "+unid
                    }
                    else
                    uhm.innerHTML = "mil "+cen+" "+dec+" y "+unid
                }
                if(split[1]==1){
                    uhm.innerHTML = un+" mil "+cen+"to "+dec+" y "+unid
                }
                else
                uhm.innerHTML = un+" mil "+cen+" "+dec+" y "+unid
            }
            if (split[1]!=0 && split[2]==1 && split[3]!=0){
                un=unidades[split[0]]
                dec=diez[split[3]-1]
                cen=centenas[split[1]-1]
                if(split[0]==1){
                    if(split[1]==1){
                        uhm.innerHTML = "mil "+cen+"to "+dec
                    }
                    else
                    uhm.innerHTML = "mil "+cen+" "+dec
                }
                if(split[1]==1){
                    uhm.innerHTML = un+" mil "+cen+"to "+dec
                }
                else
                uhm.innerHTML = un+" mil "+cen+" "+dec
            }
            if (split[1]!=0 && split[2]==2 && split[3]!=0){
                un=unidades[split[0]]
                dec=veinte[split[3]-1]
                cen=centenas[split[1]-1]
                if(split[0]==1){
                    if(split[1]==1){
                        uhm.innerHTML = "mil "+cen+"to "+dec
                    }
                    else
                    uhm.innerHTML = "mil "+cen+" "+dec
                }
                if(split[1]==1){
                    uhm.innerHTML = un+" mil "+cen+"to "+dec
                }
                else
                uhm.innerHTML = un+" mil "+cen+" "+dec
            }
            if (split[1]!=0 && split[2]!=0 && split[3]==0){
                un=unidades[split[0]]
                dec=decenas[split[2]-1]
                cen=centenas[split[1]-1]
                if(split[0]==1){
                    if(split[1]==1){
                        uhm.innerHTML = "mil "+cen+"to "+dec
                    }
                    else
                    uhm.innerHTML = "mil "+cen+" "+dec
                }
                else
                uhm.innerHTML = un+" mil "+cen+" "+dec
            }
            if (split[1]!=0 && split[2]==0 && split[3]==0){
                un=unidades[split[0]]
                cen=centenas[split[1]-1]
                if(split[0]==1){
                    uhm.innerHTML =" mil "+cen
                }
                else
                uhm.innerHTML = un+" mil "+cen
            }
            if (split[1]!=0 && split[2]==0 && split[3]!=0){
                un=unidades[split[0]]
                unid=unidades[split[3]]
                cen=centenas[split[1]-1]
                if(split[0]==1){
                    if(split[1]==1){
                        uhm.innerHTML = " mil "+cen+"to "+unid
                    }
                    else
                    uhm.innerHTML = " mil "+cen+" "+unid
                }
                if(split[1]==1){
                    uhm.innerHTML = un+" mil "+cen+"to "+unid
                }
                else
                uhm.innerHTML = un+" mil "+cen+" "+unid
            };
        break;
        }
})
