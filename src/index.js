let infos = {};

//rodar a API para gerar os dados buscados
async function api(){
  const cepSelected = document.querySelector("input").value;
  const endpoint = `https://viacep.com.br/ws/${cepSelected}/json/`;
  const result = document.querySelector('.result');

  if(cepSelected.length !== 8) return result.innerHTML = buscaCep(cepSelected)

  const response = await fetch(endpoint)
  .then(blob => blob.json())
  .then(data => infos = data );

  console.log(response)
  result.innerHTML = buscaCep(cepSelected);
  
}

//modifica o HTML com os dados gerados na consulta da API
function buscaCep(cepSelected){
  console.log(cepSelected)
  if(cepSelected.length === 8 && infos.erro !== "true"){
    return `
    <ul>
      <li class="cep">CEP: ${infos.cep}</li>
      <li class="address">Endereço: ${infos.logradouro} ${infos.complemento}</li>
      <li class="district">Bairro: ${infos.bairro}</li>
      <li class="city">Cidade: ${infos.localidade}</li>
    </ul>`;
  }else{
    return '<ul></ul>';
  }
}

const buscar = document.getElementById("buscar");
buscar.addEventListener("click",api);
