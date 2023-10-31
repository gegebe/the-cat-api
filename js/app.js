let buttonNewCat = document.querySelector("#get-cat");
let imgNewCat = document.querySelector("#cat-image");
let widthNewCat = document.querySelector("#width span");
let heightNewCat = document.querySelector("#height span");

async function obtainRandomCat(){

  let obtainCat = await fetch("https://api.thecatapi.com/v1/images/search");
  console.log(obtainCat);

  let processedData = await obtainCat.json();
  console.log(processedData[0]);

  let newCat = processedData[0];

  imgNewCat.src = newCat.url;
  widthNewCat.textContent = `${newCat.width}px`;
  heightNewCat.textContent = `${newCat.height}px`;

}

buttonNewCat.addEventListener("click", obtainRandomCat);