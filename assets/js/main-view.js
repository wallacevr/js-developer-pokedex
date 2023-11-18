


const pokemonIdInput = getParameterByName('id');
const pokemonContainer = document.getElementById('principal')
const bodyElement = document.getElementById("body");

const conteudoElement = document.getElementById("conteudo");
function convertPokemonToLi(pokemon) {
    // Obtém a referência para o elemento com id "principal"
   
    var bodyElement = document.getElementById("body");

    // Altera a classe do body
    if (bodyElement) {
        bodyElement.className = "";
       // bodyElement.classList.add("row");
        bodyElement.classList.add(pokemon.type);
    }
    if (conteudoElement) {
        conteudoElement.className = "";
        conteudoElement.classList.add("row");
        conteudoElement.classList.add("w-100");
        conteudoElement.classList.add(pokemon.type);
    }
  
    return `
    
            <div class="row tittle-row">
                <div class="col-12 p-2">
                <a href="index.html"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACSElEQVR4nO2az04UQRDGfycXDxpMFLzJ0QOc8CbeDMREI0f+PAOB8BaABw0mhiuPIKzKGxDjWdg/J8E1EPAsQijTSZlslpmdmZ7umR7Cl3zJbHantr5UT3VV9cANri/uAdPAGlAH9oHfwJnSXO/pd+Y3r4FBAkENmAd2gAtAMtLc8xmYU1uF4zawDPy0cD6Oh8ASMFCUiBdA26GAXraAKZ8CTOjfeRTQy02NvFMMA98KFCHKr8CQKxEjGm4piU31IRceaBqVktkGHtqKGChpOUmfZWaVoj8E4Lz0cN0mxUqgnEwrwoSvEYDDEsNW2k1zOQBnJYGLaaJxGICjksCDpAd/PucfHAHjwEQBYmb7CdnJKWJU7TwpQMinfv3EhQMRo/rZt5Bz4G6UkGlLg8fAmNp4DPwqQIQoX0YJeVORSEgXV6OE1CsUCVF+jBLSrFAkRGkK2is4rVAkpMuXKzhLebNJrb7xNKUvf0IX8iyPENul1QltaTUq+LDv+Ui/nVDS75qFobIjs+KzROmUXaIMVqxo/BtXNBp8qVAZv00fzOU0fqQi0u4DeThzXVrdWyRgKQBHJYELSSL+RyWEManEsJll4jgVgMMSwUvgORnxPgDHpYdvsUBNB8cSCHfTPOBxuB/QscIwOTGSsQ12zQbwCEcYKmmZ7ephk5fD0MuCRGz4Pnuf9LzU9m1SrC1qOto/cCjgh+7YpbwBUdOpeF1nsVmdP9cqdiZPanUN0xu80jHmlvbTJ10v1Zjr79qermhTdMe5FzcgDPwDzOEXEz5EkHIAAAAASUVORK5CYII="></a>
                </div>
                <div class="col-12 p-5">
                        <h1 class="text-white text-uppercase p-5">bulbasaur</h1>
                    
                </div>
                <div class="col-12 p-5 text-end">
                        <h6 class="text-white text-uppercase text-end p-5">${pokemon.number}</h6>
                    
                </div>
            </div>
            <div class="container mx-3 my-0">

                <div class="valor">
                        <img src="${pokemon.photo}"
                        alt="${pokemon.name}" class="pokeimage">
                    
                </div>
                <div class="produto">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item">
                        <a class="nav-link active" id="pill-tab-0" data-bs-toggle="pill" href="#pill-tabpanel-0" role="tab" aria-controls="pill-tabpanel-0" aria-selected="true">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" id="pill-tab-1" data-bs-toggle="pill" href="#pill-tabpanel-1" role="tab" aria-controls="pill-tabpanel-1" aria-selected="false">Base Stats</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" id="pill-tab-2" data-bs-toggle="pill" href="#pill-tabpanel-2" role="tab" aria-controls="pill-tabpanel-2" aria-selected="false">Evolution</a>
                        </li>
                    </ul>
                    <div class="tab-content py-3 mt-2">
                        <div class="tab-pane active" id="pill-tabpanel-0" role="tabpanel" aria-labelledby="pill-tab-0">
                        About
                            <div class="row">
                                <div class="col-1 text-end">Height</div>
                                <div class="col-1 text-start">${pokemon.height}</div>
                            </div>
                            <div class="row">
                                <div class="col-1 text-end">Wheight</div>
                                <div class="col-1 text-start">${pokemon.weight}</div>
                            </div>
                            <div class="row">
                                <div class="col-1 text-end">Abilities</div>
                                <div class="col-3 text-start">${pokemon.skill1} ${pokemon.skill2}</div>
                            </div>
                            <h3 class="text-bold my-2">Breending</h3>
                        </div>
                        <div class="tab-pane" id="pill-tabpanel-1" role="tabpanel" aria-labelledby="pill-tab-1">Base</div>
                        <div class="tab-pane" id="pill-tabpanel-2" role="tabpanel" aria-labelledby="pill-tab-2">Evolution</div>
                    </div>
                </div>    
            </div>`
}
function displayPokemon(pokemon) {
    const html = convertPokemonToLi(pokemon);
    conteudoElement.innerHTML = html;
}

const pokeurl = `https://pokeapi.co/api/v2/pokemon/${pokemonIdInput}`;
    pokeApi.getPokeDetail(pokeurl)
        .then(displayPokemon)
        .catch(error => console.error('Erro ao carregar detalhes do Pokémon:', error));

