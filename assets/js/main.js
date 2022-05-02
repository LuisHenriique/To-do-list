const inputList = document.querySelector('.inputList');
const list = document.querySelector('.list');
const btnList = document.querySelector('.btnList');

//Selecionando elementos HTML

function createLi() {
    let li = document.createElement('li')
    li.classList.add('liEdit')
    return li
}

// Cria um elemento <LI> e add class 


function createButtonClear(li) {
    let button = document.createElement('button');
    button.classList.add('delete')
    button.textContent = 'DELETE'
    li.appendChild(button)
}

// Cria um botão de apagar, add uma class e insere no <LI>

function createList(text) {
    const li = createLi();
    li.innerText = text
    list.appendChild(li)
    createButtonClear(li)
    clearInput()
}

// cria tarefa, add o <li> e o botão na list e zera o input.



function clearInput() {
    inputList.value = '';
    inputList.focus()
}
// zera o input e dá um focus 

btnList.addEventListener('click', (e) => {
    const listValue = inputList.value;
    if (!listValue) return
    createList(listValue)

});
// evento de click no botão 

inputList.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        const listValue = inputList.value;
        if (!listValue) return
        createList(listValue)
    }
});

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('delete')) {
        el.parentElement.remove()
    }
});

// evento de clique 