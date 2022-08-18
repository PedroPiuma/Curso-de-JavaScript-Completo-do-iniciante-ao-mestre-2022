window.onload = () => {
    const form = document.querySelector('#todo-add')
    const item = document.querySelector('#item-input')
    const list = document.querySelector('#todo-list')
    const li = document.querySelector('#todo-list .todo-item')
    const saveInLocalStorage = () => localStorage.setItem('todoListContainer', list.innerHTML)
    localStorage?.todoListContainer ? list.innerHTML = localStorage.todoListContainer : ''

    let btnChk = [...document.querySelectorAll('.button-check')]
    let btnEdit = [...document.querySelectorAll('.fa-edit')]
    let btnDelete = [...document.querySelectorAll('.fa-trash-alt')]

    const addItem = () => form.addEventListener('submit', event => {
        event.preventDefault()
        if (item.value.length <= 2) return alert('Mínimo 3 letras')
        const newLi = document.createElement('li')
        newLi.classList.add('todo-item')
        newLi.innerHTML = li.innerHTML
        newLi.querySelector('.task-name').innerHTML = item.value
        list.appendChild(newLi)
        item.value = ''
        btnChk = [...document.querySelectorAll('.button-check')]
        btnEdit = [...document.querySelectorAll('.fa-edit')]
        btnDelete = [...document.querySelectorAll('.fa-trash-alt')]
        addEventCheck()
        addEventEdit()
        saveInLocalStorage()
    })
    const addEventCheck = () => btnChk.forEach(el => el.addEventListener('click', element => {
        element.target.style.background = !element.target.style.background ? 'green' : ''
        saveInLocalStorage()
    }))
    const addEventEdit = () => btnEdit.forEach(el => el.addEventListener('click', element => {
        const parentElement = element.target.parentElement
        const editContainer = parentElement.querySelector('.editContainer')
        const cancelBtn = editContainer.querySelector('.cancelButton')
        const editButton = editContainer.querySelector('.editButton')
        cancelBtn.addEventListener('click', () => editContainer.style.display = 'none')
        editButton.addEventListener('click', () => {
            const editInput = editContainer.querySelector('.editInput')
            const li = parentElement.querySelector('.task-name')
            editInput.value.length <= 2 ? alert('Mínimo 3 letras') : li.innerHTML = editInput.value
            editContainer.style.display = 'none'
            saveInLocalStorage()
        })
        editContainer.style.display = 'flex'
    }))
    const addEventDelete = () => btnDelete.forEach(el => el.addEventListener('click', event => {
        event.target.parentElement.remove()
        saveInLocalStorage()
    }))

    addItem()
    addEventCheck()
    addEventEdit()
    addEventDelete()
}
