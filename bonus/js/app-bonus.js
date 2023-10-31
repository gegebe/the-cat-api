let buttonNewCat = document.querySelector("#get-cat");
let imgNewCat = document.querySelector("#cat-image");
let widthNewCat = document.querySelector("#width span");
let heightNewCat = document.querySelector("#height span");
let userSelect = document.querySelector("select option");

async function obtainURL(){
  let urlDogAPI = "https://api.thedogapi.com/v1/images/search";
  let urlCatAPI = "https://api.thecatapi.com/v1/images/search";
  
  url = (userSelect.value === "gato")? urlCatAPI : urlDogAPI;
  console.log(url);

  return url;
}


async function obtainRandomAnimal(url){

  let obtainCat = await fetch(url);
  //console.log(obtainCat);

  let processedData = await obtainCat.json();
  //console.log(processedData[0]);

  let newCat = processedData[0];

  imgNewCat.src = newCat.url;
  widthNewCat.textContent = newCat.width;
  heightNewCat.textContent = newCat.height;

}

buttonNewCat.addEventListener("click", obtainRandomAnimal);