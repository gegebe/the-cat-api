let buttonNewAnimal = document.querySelector("#get-cat");
let imgNewAnimal = document.querySelector("#cat-image");
let widthNewAnimal = document.querySelector("#width span");
let heightNewAnimal = document.querySelector("#height span");
let userSelect = document.querySelector("select");

async function obtainURL(){
  let urlDogAPI = "https://api.thedogapi.com/v1/images/search";
  let urlCatAPI = "https://api.thecatapi.com/v1/images/search";
  
  /*
  Ternario para discernir url, si el value es "gato" urlCatAPI, si no lo es urlDogAPI
  */
  let url = (userSelect.value === "gato")? urlCatAPI : urlDogAPI;
  console.log(url);

  //Devuelve la url escogida
  return url;
}

/*
Pasamos la url como parámetro a la función
*/
async function obtainRandomAnimal(url){

  //let url = await obtainURL();
  let obtainAnimal = await fetch(url);
  let processedData = await obtainAnimal.json();

  //Para entrar en el primer y único ítem de la Array
  let newAnimal = processedData[0];

  imgNewAnimal.src = newAnimal.url;
  widthNewAnimal.textContent = `${newAnimal.width}px`;
  heightNewAnimal.textContent = `${newAnimal.height}px`;

}

/*
Llamámos las funciones secuencialmente
*/
buttonNewAnimal.addEventListener("click", async ()=>{
  //Obtener url
  let url = await obtainURL();
  //Pasar url por el fetch()
  await obtainRandomAnimal(url);
} );