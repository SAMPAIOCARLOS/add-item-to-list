const button = document.getElementById('adicionar')

button.addEventListener('click', ()=> {
    const input = document.getElementById('input')
    const valor = input.value

    const ul = document.getElementById('ul')
    const newli = document.createElement('li')
    newli.textContent = valor

    if(valor === "") {
        alert(`Escreva um item para que possa ser adicionado.`)
        return
    }

    ul.appendChild(newli)

    const newbutton = document.createElement('button')
    newbutton.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
    newbutton.setAttribute('id', 'remove')

    newli.appendChild(newbutton)

    newbutton.addEventListener('click', ()=> {
        let confirmacao = confirm(`Deseja remover esse item?`)

        if(confirmacao === true) {
            ul.removeChild(newli)
        }
    })

    
    input.value = ""
})