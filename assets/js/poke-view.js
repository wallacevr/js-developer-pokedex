
const pokeApi = {}
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
   

    function convertPokeApiDetailToPokemon(pokeDetail) {
        const pokemon = new Pokemon()
        pokemon.number = pokeDetail.id.toString().padStart(3,'0')
        console.log(pokeDetail)
        pokemon.name = pokeDetail.name
        pokemon.height=pokeDetail.height;
        pokemon.weight=pokeDetail.weight;        ;
        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
        const [type] = types
    
        pokemon.types = types
        pokemon.type = type
       
        pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
        const skills = pokeDetail.abilities.map((skillsSlot) => skillsSlot.ability.name)
        const [skill1, skill2 = 'not have 2nd skill'] = skills 
        pokemon.skill1 = skill1  
        pokemon.skill2 = skill2

        const statsValues = pokeDetail.stats.map((statsSlot) => statsSlot.base_stat) 
        const [statValueHp, statValueAtk, statValueDef, statValueSatk, statValueSdef, statValueSpd] = statsValues

        pokemon.statValueHp = statValueHp 
        pokemon.statValueAtk = statValueAtk
        pokemon.statValueDef = statValueDef
        pokemon.statValueSatk = statValueSatk
        pokemon.statValueSdef = statValueSdef
        pokemon.statValueSpd = statValueSpd
        return pokemon
    }
    
    pokeApi.getPokeDetail = (pokeurl) => {
        return fetch(pokeurl)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
    }
    
    pokeApi.getPokemons = (offset = 0, limit = 5) => {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
        return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
            .then((detailRequests) => Promise.all(detailRequests))
            .then((pokemonsDetails) => pokemonsDetails)
    }
    