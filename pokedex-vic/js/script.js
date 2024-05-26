
const select = (selector) => document.querySelector(selector);
let currentPokemon = 1;

const fetchPokemon = async (pokemon) => {
  try {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status === 200) {
      const data = await APIResponse.json();
      return data;
    } else {
      throw new Error("Pokemon not found");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchRegion = async (pokemon) => {
  try {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/region/${pokemon}`);
    if (APIResponse.status === 200) {
      const region = await APIResponse.json();
      return region;
    } else {
      throw new Error("Region not found");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const searchRegion = (id) => {
  if (id > 151 && id < 251) return 2;
  if (id > 251 && id < 386) return 3;
  if (id > 386 && id < 493) return 4;
  if (id > 493 && id < 649) return 5;
  if (id > 649 && id < 721) return 6;
  if (id > 721 && id < 808) return 7;
  if (id > 808 && id < 903) return 8;
  return id > 903 && id < 1006 ? 9 : 1;
};

const renderPokemon = async (pokemon) => {
  try {
    const pokemonName = select(".pokemon_name");
    const pokemonNumber = select(".pokemon_number");
    const data = await fetchPokemon(pokemon);
    
    if (data) {
      const region = await fetchRegion(searchRegion(data.id));
      const type = data.types.map((type) => type.type.name);
      
      select(".pokemon_image").style.display = "block";
      pokemonName.innerHTML = data.name;
      pokemonNumber.innerHTML = data.id;
      select(".pokemon_image").src = data.sprites.other.showdown.front_default;
      select(".input_search").value = "";
      currentPokemon = data.id;
      select("#myAudio").src = data.cries.legacy;

      select(".modal_id").innerHTML = data.id;
      select(".modal_name").innerHTML = data.name;
      select(".weight").innerHTML = `Weight: ${data.weight}lbs`;
      select(".height").innerHTML = `Height: ${data.height} feet`;
      select(".modal_image").src = data.sprites.front_default;
      select(".xp").innerHTML = `Base Exp: ${data.base_experience}XP`;
      select(".gen").innerHTML = `Region: ${region.name.toUpperCase()}`;

      if (type.length == 2) {
        select(".modal_type").innerHTML = `Type: ${type[0].toUpperCase()} | ${type[1].toUpperCase()}`;
      } else {
        select(".modal_type").innerHTML = `Type: ${type[0].toUpperCase()}`;
      }
    } else {
      pokemonName.innerHTML = "Not found";
      pokemonNumber.innerHTML = "???";
      select(".pokemon_image").style.display = "none";
      select(".input_search").value = "";
    }
  } catch (error) {
    console.error(error);
  }
};

const form = select(".form");
const input = select(".input_search");
const buttonNext = select(".btn-next");
const buttonPrev = select(".btn-prev");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonNext.addEventListener("click", () => {
  currentPokemon += 1;
  renderPokemon(currentPokemon);
});

buttonPrev.addEventListener("click", () => {
  currentPokemon -= 1;
  if (currentPokemon < 1) {
    currentPokemon = 1;
  }
  renderPokemon(currentPokemon);
});

const openModalButton = select(".information");
const closeModalButton = select("#close-modal");
const modal = select("#modal");
const fade = select("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
  renderPokemon(currentPokemon);
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});



renderPokemon(currentPokemon);
