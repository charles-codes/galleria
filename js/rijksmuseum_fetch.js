// JS logic for searching the Rijksmuseum Collection

// returns matching art objects from keyword search
function searchArtRijks() {
  const query = $(".search-input-rijks").val().trim();

  fetch("https://www.rijksmuseum.nl/api/nl/collection?key=I0BcbCZL&imgonly=True&ps=100&q=" + query)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayArtRijks(data);
    });
}

// formats searchArt() results via DOM manipulation
function displayArtRijks(data) {
  for (let i = 0; i < data.artObjects.length; i++) {
    const art = document.querySelector(".art-div");
    const artImage = document.createElement("img");
    artImage.classList.add("flex-item");
    artImage.src = data.artObjects[i].webImage.url;
    artImage.alt = data.artObjects[i].longTitle;
    art.appendChild(artImage);
  }
}