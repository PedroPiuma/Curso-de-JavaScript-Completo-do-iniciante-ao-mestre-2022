window.onload = () => {
    alunos.forEach(aluno => {
        aluno.media = {}
        for (let materia in aluno.notas) { aluno.media[materia] = avarege(...aluno.notas[materia]) }
    });

    const htmlHeader = document.createElement('tr')
    htmlHeader.innerHTML = '<td>Nome</td>'
    const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => `<td>${materia}</td>`).join('')
    htmlHeader.innerHTML += htmlHeaderMaterias

    document.querySelector('[data-table-aluno] thead').appendChild(htmlHeader)

    // Percorrer cada aluno e gerar html para incluir no tbody

    const render = () => {
        document.querySelector('[data-table-aluno] tbody').innerHTML = ''
        alunos.forEach(aluno => {
            const htmlBody = document.createElement('tr')
            let htmlMedias = `<td>${aluno.nome}</td>`
            Object.keys(aluno.notas).forEach(materia => { htmlMedias += `<td>${aluno.media[materia]}</td>` })
            htmlBody.innerHTML = htmlMedias
            document.querySelector('[data-table-aluno] tbody').appendChild(htmlBody)
        })
    }
    render()

    // Adicionar alunos
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault()
        const nome = document.getElementById('first_name').value
        const newAluno = {
            _id: 0,
            nome,
            notas: {
                portugues: [1, 2, 3, 4],
                matematica: [1, 2, 3, 4],
                historia: [1, 2, 3, 4],
                ciencias: [1, 2, 3, 4],
            }
        }
        newAluno.media = {}
        for (let materia in newAluno.notas) { newAluno.media[materia] = avarege(...newAluno.notas[materia]) }
        alunos.push(newAluno)
        render()
    })


}