window.onload = () => {
    const alunos = [
        { nome: "Daniel", notas: [10, 3, 7.5, 3] },
        { nome: "Maria", notas: [10, 9, 3, 9.5] },
        { nome: "João", notas: [10, 4.5, 1, 3.5] },
        { nome: "Joana", notas: [1, 3, 9, 1.5] },
        { nome: "José", notas: [10, 4.5, 7, 3] },
        { nome: "Arnaldo", notas: [10, 4.5, 7, 3] },
        { nome: "Lucas", notas: [4.5, 9, 8, 3] },
        { nome: "Luana", notas: [3, 7, 9, 3] },
        { nome: "Beatriz", notas: [10, 4, 7, 9] },
        { nome: "Sergio", notas: [4.5, 9.5, 10, 2] }
    ]

    const average = values => (values.reduce((acc, el) => acc + el) / values.length).toFixed(2)

    const tbody = document.querySelector('tbody')

    alunos.forEach((el, indice) => {
        const { nome, notas } = el

        tbody.innerHTML += `<tr id=tr${indice}><td>${nome}</td></tr>`

        const tr = document.querySelector(`#tr${indice}`)

        for (let i = 0; i <= notas.length; i++) {
            if (i !== notas.length) tr.innerHTML += `<td>${notas[i]}</td>`
            else tr.innerHTML += `<td>${average(notas)}</td>`
        }
    })
}


