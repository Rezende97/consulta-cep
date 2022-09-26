function consulta(){

    let cep = document.getElementById('cep').value;   
    let desCep = document.getElementById('consultCep');
    console.log(cep)
    const url = "https://viacep.com.br/ws/" + cep + "/json/";    
    
    fetch(url)
    .then(Response => Response.json())
    .then(dados => {  
        desCep.classList.toggle('consultCep');
        desCep.innerHTML = 
        `Cep: <p>${dados.cep}</p>
        Bairro: <p>${dados.bairro}</p>
        Logradouro: <p>${dados.logradouro}</p>
        Localidade: <p>${dados.localidade} - ${dados.uf} </p>`;        
    })
    .catch(error => {
        if(cep > 8){
            alert('Máximo de caractere são 8')
        }else{
            alert('Obrigatório preencher o campo!')
        }
    })
}
