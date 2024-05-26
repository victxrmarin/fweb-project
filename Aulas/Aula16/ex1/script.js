// async function get() {
//     const response = await fetch("dados.json")
    
//     if(response.status == 200) {
//         const data = await response.json();
//         return data;
//     }
// }

// get().then()

fetch("dados.json")
    .then(res => res.json())
    .then(data => {
        data.usuarios.forEach(user => {
            const corpo_tabela = $("tbody")
            const tr = $("<tr><\tr>") 
            
            tr.html(
                "<td>" + user.nome + "</td>" +
                "<td>" + user.telefone + "</td>" +
                "<td>" + user.idade + "</td>" +
                "<td>" + user.cpf + "</td>"
                
                
            )
            
            $("table").css("text-align", "center")
            $("tbody td").css("padding", " 3px 15px")
            
            corpo_tabela.append(tr)
        });
    })
