const numeroDeSessoes = document.querySelector('#numeroSessoes');
// console.log(numeroDeSessoes.value)



getArt();
async function getArt() {
  let responta = await fetch(`https://api.artic.edu/api/v1/exhibitions?fields=id,title,image_id,alt_image_ids&page=2&limit=5`);
  let pacote = await responta.json();
  let dados = await pacote.data;
  for(i=0;i<5;i++){
    // console.log(dados[i]);
    // console.log(dados[i].id);
    // console.log(dados[i].title);
    // console.log(dados[i].image_id);//Aqui é o código para a imagem
    // console.log(dados[i].alt_image_ids);
  }
}
// getImg();
// function getImg() {
// }


//https://www.artic.edu/iiif/2/328eb7d6-bddb-d5c1-3fc8-9d8db8aa26fe/full/843,/0/default.jpg