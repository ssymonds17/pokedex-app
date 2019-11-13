var pokemonRepository=function(){var e=[],t=document.querySelector("ul"),n=document.querySelector("#modal-container"),i="https://pokeapi.co/api/v2/pokemon/?limit=150";function o(t){e.push(t)}function a(e){pokemonRepository.loadDetails(e).then(function(){c(e)})}function c(e){n.innerHTML="";var t=document.createElement("div");t.classList.add("modal");var i=document.createElement("button");i.classList.add("modal-close"),i.innerText="Close",i.addEventListener("click",r);var o=document.createElement("h1");o.innerText=e.name.charAt(0).toUpperCase()+e.name.slice(1);var a=document.createElement("img");a.src=e.imageUrl,a.classList.add("modal-img");var c=document.createElement("p");c.innerText="Height: "+e.height+"m";var s=document.createElement("p");s.innerText="Type(s): "+e.types,t.appendChild(i),t.appendChild(o),t.appendChild(a),t.appendChild(c),t.appendChild(s),n.appendChild(t),n.classList.add("is-visible")}function r(){n.classList.remove("is-visible")}return window.addEventListener("keydown",e=>{"Escape"===e.key&&n.classList.contains("is-visible")&&r()}),n.addEventListener("click",e=>{e.target===n&&r()}),{add:o,catchAll:function(){return e},addListItem:function(e){var n=document.createElement("li"),i=document.createElement("button");i.innerText=e.name,i.classList.add("pokemon-name"),n.appendChild(i),t.appendChild(n),i.addEventListener("click",function(){a(e)})},search:function(t){e.filter(function(e){if(e.name===t)return e})},showDetails:a,loadList:function(){return fetch(i).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){o({name:e.name.charAt(0).toUpperCase()+e.name.slice(1),detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:function(e){var t=e.detailsUrl;return fetch(t).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,2==t.types.length?e.types=[t.types[0].type.name,t.types[1].type.name]:e.types=[t.types[0].type.name]}).catch(function(e){console.error(e)})},showModal:c,hideModal:r}}();pokemonRepository.loadList().then(function(){pokemonRepository.catchAll().forEach(function(e){pokemonRepository.addListItem(e)})});