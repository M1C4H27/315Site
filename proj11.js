// For this I chose the dog API
// I will use the dog API to get a random dog image and display it on the page

const url = `https://api.thedogapi.com/v1/images/search?limit=8`;
const api_key = "live_IJ4gS1mry9lLpOFrjJL84ejokp0BBzgXayiRZRWsDLW1wEQPAPbXDqhIuj1T5mMF";

// Fetching the dog images using fetch.
// The dog API is a fun API that provides random dog images.
// The difference between the two methods is that fetch is a modern way of making HTTP requests and is promise-based, while XMLHttpRequest is an older way of making HTTP requests and uses callbacks.
// Fetch is more readable and easier to work with, especially with async/await syntax.
// However, XMLHttpRequest is still widely used and supported in all browsers.
 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    
    });
})
.catch(function(error) {
   console.log(error);
   console.log("Error fetching dog images. Please try again later.");
   // Add error message if the API call fails
    let errorMessage = document.createElement('p');
    errorMessage.innerText = "Error fetching dog images. Please try again later.";
    document.getElementById('grid').appendChild(errorMessage);
    document.getElementById('grid').style.display = "block";
    document.getElementById('grid').style.textAlign = "center";
    document.getElementById('grid').style.fontSize = "20px";
    document.getElementById('grid').style.fontWeight = "bold";


});

// Doing the same thing with XMLHttpRequest for a different grid
const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.setRequestHeader("x-api-key", api_key);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    let imagesData = data;
    imagesData.map(function(imageData) {
    
      let image = document.createElement('img');
      //use the url from the image object
      image.src = `${imageData.url}`;
        
      let gridCell = document.createElement('div');
      gridCell.classList.add('col');
      gridCell.classList.add('col-lg');
      gridCell.appendChild(image)
      document.getElementById('grid2').appendChild(gridCell);
    
    });
  }
};
xhr.onerror = function() {
  console.log("Error fetching dog images. Please try again later.");
  // Add error message if the API call fails
  let errorMessage = document.createElement('p');
  errorMessage.innerText = "Error fetching dog images. Please try again later.";
  document.getElementById('grid').appendChild(errorMessage);
  document.getElementById('grid').style.display = "block";
  document.getElementById('grid').style.textAlign = "center";
  document.getElementById('grid').style.fontSize = "20px";
  document.getElementById('grid').style.fontWeight = "bold";
};
xhr.send();