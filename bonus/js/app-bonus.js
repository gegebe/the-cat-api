let buttonNewAnimal = document.querySelector("#get-cat");
let imgNewAnimal = document.querySelector("#cat-image");
let widthNewAnimal = document.querySelector("#width span");
let heightNewAnimal = document.querySelector("#height span");
let userSelect = document.querySelector("select");

async function obtainURL(){
  let urlDogAPI = "https://api.thedogapi.com/v1/images/search";
  let urlCatAPI = "https://api.thecatapi.com/v1/images/search";
  
  let url = (userSelect.value === "gato")? urlCatAPI : urlDogAPI;
  console.log(url);

  return url;
}

async function obtainRandomAnimal(url){

  //let url = await obtainURL();
  let obtainAnimal = await fetch(url);
  let processedData = await obtainAnimal.json();

  let newAnimal = processedData[0];

  imgNewAnimal.src = newAnimal.url;
  widthNewAnimal.textContent = `${newAnimal.width}px`;
  heightNewAnimal.textContent = `${newAnimal.height}px`;

}

buttonNewAnimal.addEventListener("click", async ()=>{
  let url = await obtainURL();
  await obtainRandomAnimal(url);
} );