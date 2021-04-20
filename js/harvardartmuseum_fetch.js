// JS logic for searching the Harvard Art Museum Collection

// returns matching art objects from keyword search
function searchHaM() {
  const query = $(".search-input-HaM").val().trim();

  fetch("https://api.harvardartmuseums.org/image?&keyword=" + query + "&size=100&apikey=6d7f1051-0487-41d5-9cb5-78bc24855d1d")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayArtHarvard(data);
    });
}

// formats searchHaM() results via DOM manipulation
function displayArtHarvard(data) {
  for(let i = 0; i < data.records.length; i++) {
    const art = document.querySelector(".art-div");

    const artImage = document.createElement("img");

    artImage.classList.add("flex-item");
    art.classList.add("flex-item-image");
    artImage.classList.add("flex-item-image");
    artImage.src = data.records[i].baseimageurl;
    artImage.alt = data.records[i].alttext;
    art.appendChild(artImage);
  }
}