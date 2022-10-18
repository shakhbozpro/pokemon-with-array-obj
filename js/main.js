var elList = document.querySelector(".pokemon-list");

pokemons.splice(148, 151);

for (var pokemon of pokemons) {
   // Creating elements in the DOM
   var newPokemonItem = document.createElement("li");
   var newPokemonTitle = document.createElement("h3");
   var newPokemonNumBadge = document.createElement("span");
   var newPokemonImg = document.createElement("img");
   var newPokemonType = document.createElement("p");
   var newPokemonTime = document.createElement("span");

   // Styling created elements
   newPokemonItem.classList.add("pokemon_item");
   newPokemonTitle.classList.add("text-center");
   newPokemonTitle.classList.add("pokemon_title");
   newPokemonType.classList.add("pokemon_type");
   newPokemonNumBadge.classList.add("badge");
   newPokemonNumBadge.classList.add("bg-danger");
   newPokemonNumBadge.classList.add("pokemon_badge");
   newPokemonImg.width = 200;
   newPokemonImg.height = 200;
   newPokemonTime.classList.add("badge");
   newPokemonTime.classList.add("bg-success");
   newPokemonTime.classList.add("pokemon_time");

   // Bind data to elements
   newPokemonTitle.textContent = pokemon.name;
   newPokemonNumBadge.textContent = pokemon.num;
   newPokemonImg.src = pokemon.img;
   newPokemonType.textContent = pokemon.type.join(" ");
   newPokemonTime.textContent = pokemon.spawn_time;
   newPokemonTime.setAttribute("datetime", `2022-10-18 ${pokemon.spawn_time}`);

   // Placing elements into LI
   newPokemonItem.appendChild(newPokemonTitle);
   newPokemonItem.appendChild(newPokemonNumBadge);
   newPokemonItem.appendChild(newPokemonImg);
   newPokemonItem.appendChild(newPokemonType);
   newPokemonItem.appendChild(newPokemonTime);

   elList.appendChild(newPokemonItem);
}