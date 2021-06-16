const form = document.querySelector('form');
const numeroDeSessoes = document.querySelector('#numeroSessoes');
const suasSessoes = document.querySelector('#suasSessoes');
  var objeto =  [{}];

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  getData(numeroDeSessoes.value);
});

async function getData(numeroDeSessoes) {
  let responta = await fetch(`https://api.artic.edu/api/v1/exhibitions?fields=id,title,image_id,alt_image_ids&page=1&limit=${numeroDeSessoes}`);
  let pacote = await responta.json();
  let dados = await pacote.data;
  // console.log(dados);

  for(i=0;i<numeroDeSessoes;i++){
    objeto[i] = dados[i]
    suasSessoes.innerHTML +=  `Título: \t ${dados[i].title} \n ID PARA IMAGEM: \t ${dados[i].image_id} \n\n`;
    console.log('Este aqui é um novo objeto:\n',dados[i]);
    // console.log(dados[i].id);
    // console.log(dados[i].title);
    // console.log(dados[i].image_id);//Aqui é o código para a imagem
  }
}
