console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const localServerUrl = "http://localhost:3000";
const dogImageContainer = document.querySelector("#dog-image-container");
const dogBreedList = document.querySelector("#dog-breeds");
const breedFilter = document.querySelector("#breed-dropdown");

getJSON(imgUrl).then((data) => {
  console.log(data.message);
  const images = data.message;
  images.forEach((imageURL) => {
    const img = document.createElement("img");
    img.src = imageURL;
    dogImageContainer.appendChild(img);
  });
});

getJSON(breedUrl).then((data) => {
  const breeds = data.message;
  for (const breedObj in breeds) {
    const li = document.createElement("li");
    li.textContent = breedObj;
    li.addEventListener("click", () => {
      li.style.color = "orange";
    });
    dogBreedList.appendChild(li);
    breedFilter.addEventListener("change", () => {
      const letter = breedFilter.value;
      while (dogBreedList.firstChild) {
        dogBreedList.removeChild(dogBreedList.firstChild);
      }
      for (const breed in breeds) {
        if (breed.startsWith(letter)) {
          const li = document.createElement("li");
          li.textContent = breed;
          li.addEventListener("click", () => {
            li.style.color = "orange";
          });
          dogBreedList.appendChild(li);
        }
      }
    });
  }
});
