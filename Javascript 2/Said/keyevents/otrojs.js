const input  = document.querySelector("#number_input")
let output = document.querySelector("#p1")
let units = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'seven eleven', 'ocho pinocho', 'nueve']
// Se guardan los valores para números del 10 al 19 que tienen nombres raros
let ten = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciseís', 'diecisiete', 'dieciocho', 'diecinueve']
// Se guardan los prefijos para todas las demás decenas
let tens = ['',ten,'veint', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']
let hundreds = ['','ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']
let thousands = ['','mil', 'dosmil', 'tresmil', 'cuatromil', 'cincomil', 'seismil', 'sietemil', 'ochomil' ,'nuevemil']
let suffix = [units, tens, hundreds, thousands]

function to_word(number){  
    let digits = number.split('')
    let len = number.length
    let n_word = ''
    let i = 0
    digits = digits.reverse()

    if(number == 0){
        return 'cero'
    }

    for(let digit of digits){
        n_word = suffix[i][digit] + ' ' + n_word

        if(i==0 && len>2 && (digits[1]!=1 || digits[1]!=2) && digits[0]!=0 && digits[1]!=0){
            n_word = 'y ' + n_word
        }

        if (i == 1 && digits[i] == 1){
            n_word = ten[digits[i-1]]
        } else if(i==1 && digits[i] == 2 && digits[0] == 0){
        n_word = tens[2] + 'e'
            
        } else if(i==1 && digits[i] == 2){
            n_word = tens[2] + 'i' + units[digits[i-1]]
        } else if(i==1 && digits[0]==0){
            n_word = suffix[i][digit]
        }

        if(i==2 && digits[i]==1 && digits[1]==0 && digits[0]==0){
            n_word = 'cien'
        }

        i += 1
    }
    
    return n_word
}

input.addEventListener("keypress", (event) => {
    if( !(event.keyCode >= 48 && event.keyCode <= 57) || !event.key == 'Backspace') {
        event.preventDefault()
    }
})

input.addEventListener("input", (event) => {
    let num = input.value
    output.innerHTML = to_word(num)
})