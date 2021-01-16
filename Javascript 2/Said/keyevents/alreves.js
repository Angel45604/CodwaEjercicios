const input = document.querySelector("#txt_input")

input.addEventListener("keypress", e => {
    input.value = e.key + input.value
    e.preventDefault()
})