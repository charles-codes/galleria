// JS logic for searching the Metropolitan Museum of Art Collection

// accesses MET_ARRAY method and returns a random art objectID
function searchMET() {
  const randomObjectID = MET_ARRAY[Math.floor(Math.random() * MET_ARRAY.length)];
  fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + randomObjectID)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayArtMet(data);
    })
}

// formats searchMET() results via DOM manipulation
function displayArtMet(data) {
  const art = document.querySelector(".art-div");
  const artImage = document.createElement("img");
  artImage.classList.add("flex-item");

  if (data.primaryImage === "") {
    artImage.style.display = "none";
  } else {
    artImage.src = data.primaryImage;
    artImage.alt = data.objectName;
    art.appendChild(artImage);
  };
}