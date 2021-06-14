  let hamburger = document.querySelector('.icon-hamburger')
  let nav = document.querySelector('.topo nav')

  hamburger.addEventListener('click', function() {
    nav.classList.toggle('show-menu')
  });
///////////////////////////////////////////////////////////////////
getTisane()
function getTisane() {
  fetch(`https://api.tisane.ai/transform`, {
    method: "POST",
    body: JSON.stringify({
      "from": "*",
      "to":"en",
      "content": "Ana assiste todos os finais de semana",
      "settings": {"entity":"person"}
    }),
    headers: {
      "Content-type": "application/json",
      "Ocp-Apim-Subscription-Key":"1710b814983a4e81b5ade4040bfde98e"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
}




/** 
 * fetch(`https://api.tisane.ai/transform`, {
    method: "POST",
    body: JSON.stringify({"from": "*", "to":"en", "content": "Ana assiste todos os finais de semana", "settings": {"entity":"person"}}),
    headers: {"Content-type": "application/json", "Ocp-Apim-Subscription-Key":"1710b814983a4e81b5ade4040bfde98e"}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
 * 
    POST https://api.tisane.ai/parse HTTP/1.1
  Host: api.tisane.ai
  Content-Type: application/json
  Ocp-Apim-Subscription-Key: 1710b814983a4e81b5ade4040bfde98e

  {"language":"en", "content":"Babylonians should not be allowed at managerial positions.", "settings":{"parses":false}}
  getTisane();
  async function getTisane() {
  let resposta = await fetch(`https://api.tisane.ai/parse`);
  resposta = await resposta.json();
  console.log(resposta);
  }
*/