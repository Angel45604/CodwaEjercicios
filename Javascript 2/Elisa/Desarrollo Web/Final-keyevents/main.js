const texto = document.querySelector('#palabra')

texto.addEventListener('input', e=>{
    let txt = texto.value
    let ar =""
    for (let i=txt.length-1;i>=0;i--){
        let letra=txt[i]
        ar += letra
    }
    txt=ar
    console.log(txt)
})