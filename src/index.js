let infos = {};

//rodar a API para gerar os dados buscados
async function api(){
  const cepSelected = document.querySelector("input").value;
  const endpoint = `https://viacep.com.br/ws/${cepSelected}/json/`
  const response = await fetch(endpoint).then(blob => blob.json()).then(data => infos = data )
  console.log(response)
  const result = document.querySelector('.result');
  result.innerHTML = buscaCep();
}

//modifica o HTML com os dados gerados na consulta da API
function buscaCep(cepSelected){

  if(cepSelected !== ''){
    return `
    <li class="address">Endereço: ${infos.logradouro} ${infos.complemento}</li>
    <li class="district">Bairro: ${infos.bairro}</li>
    <li class="city">Cidade: ${infos.localidade}</li>
    <li class="cep">CEP: ${infos.cep}</li>
    `;
  }else{
    return `
    <li class="address">Endereço:</li>
    <li class="district">Bairro:</li>
    <li class="city">Cidade:</li>
    <li class="cep">CEP:</li>
    `;
  }
}
const cepTyped = document.querySelector("input").value;
const buscar = document.getElementById("buscar");
buscar.addEventListener("click",api);
