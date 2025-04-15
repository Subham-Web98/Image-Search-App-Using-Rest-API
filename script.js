const searchInput = document.getElementById("search-input");
const imageContainer = document.querySelector(".image-container");
const searchForm = document.getElementById("search-form");
const accessKey = `INL99XmnLAyiiEVob4OlndQzuyQgrk2XfGKvufk8RLo`;
const baseURL = `https://api.unsplash.com/search/photos?query=mountain&per_page=10&client_id=YOUR_ACCESS_KEY
`;

const getImages = async (query) => {
  imageContainer.innerHTML = "";
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${accessKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.results.length === 0) {
      imageContainer.innerHTML = `<h1 class="text-center my-5">No results found...</h1>`;
    }
    data.results.forEach((item) => {
      const imageElem = document.createElement("div");
      imageElem.innerHTML = `<img src="${item.urls.regular}" alt="${item.alt_description}">`;
      imageContainer.appendChild(imageElem);
    });
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = searchInput.value.trim();
  if (inputText == "") {
    imageContainer.innerHTML = `<h1 class="text-center my-5">Please enter a search term...</h1>`;
    return;
  } else {
    getImages(inputText);
  }
});
