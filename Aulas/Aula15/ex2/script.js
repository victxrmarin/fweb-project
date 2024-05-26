fetch('./dados.json')
        .then(response => response.json())
        .then(data => {
            const listaUsuarios = document.getElementById('list');

            data.usuarios.forEach(usuario => {
                const itemLista = document.createElement('li');
                itemLista.innerHTML = `Nome: ${usuario.nome} - Idade: ${usuario.idade} - CPF: ${usuario.cpf} - Telefone: ${usuario.telefone}`;
                listaUsuarios.appendChild(itemLista);
            });
        })
        .catch(error => console.error('Erro ao carregar dados:', error));