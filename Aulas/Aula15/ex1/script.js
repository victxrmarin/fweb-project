
fetch('./dados.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (let curso in data) {
            const dado_cursos = document.createElement('div');
            dado_cursos.innerHTML = `<ul>Alunos matriculados em ${curso}:</ul>`;
            data[curso].forEach(aluno => {
                dado_cursos.innerHTML += `<li>${aluno}</li>`;
            });
            document.getElementById('list').appendChild(dado_cursos);
        }
    })