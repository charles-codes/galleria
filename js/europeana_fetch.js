// JS logic for searching Europeana

// returns matching art objects from keyword search
function searchEuropeana() {
  const query = $(".search-input-europeana").val().trim();

  fetch("https://api.europeana.eu/record/v2/search.json?wskey=anduumbit&MEDIA=true&query=" + query)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayArtEuropeana(data);
    });
}

// formats searchArt() results via DOM manipulation
function displayArtEuropeana(data) {
  for (let i = 0; i < data.items.length; i++) {
    const art = document.querySelector(".art-div");

    const artLink = document.createElement("a");
    const artImage = document.createElement("img");

    artLink.appendChild(artImage);
    artLink.href = data.items[i].guid;
    artLink.setAttribute("target", "_blank");
    artLink.classList.add("flex-item");
    
    artImage.src = data.items[i].edmIsShownBy[0];
    artImage.alt = data.items[i].title;
    art.appendChild(artLink);
  }
}