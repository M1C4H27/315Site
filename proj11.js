// For this I chose the dog API
// I will use the dog API to get a random dog image and display it on the page

const url = `https://api.thedogapi.com/v1/images/search?limit=8`;
const api_key = "live_IJ4gS1mry9lLpOFrjJL84ejokp0BBzgXayiRZRWsDLW1wEQPAPbXDqhIuj1T5mMF"

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


// 