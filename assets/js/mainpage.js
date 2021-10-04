
// nasa api

const url = 'https://api.nasa.gov/planetary/apod?';
const apiKey = 'api_key=S7ZuI8REtnvDQNKwQFpNcnZM3djWURASMZ18f9EQ';


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(url + apiKey, requestOptions)
  .then(response => response.json())
  .then(handleData)
  .catch(error => console.log('error', error));

function handleData(data) {

// if else statement to determine if the daily APOD is a picture or video
    if (data.media_type === "video") {
    
        handleVideo(data);
    
    } else {

        handleImg(data)

    }
};

// function to display img
function handleImg(imgData) {
  //console.log(imgData);
  const imgContainer = document.getElementById("response-imgContainer");
  const img = document.createElement('img');
  img.height=315;
  img.width=420;
  img.src=imgData.url

  imgContainer.appendChild(img);
}

// function to display video
function handleVideo(videoData) {
  const videoContainer = document.getElementById("response-videoContainer");
  const ytFrame = document.createElement("iframe");
  ytFrame.height=315;
  ytFrame.width=420;
  ytFrame.src=videoData.url;

  videoContainer.appendChild(ytFrame);
}

// local storage

var nameInput = document.querySelector('#userName');
var submitButton = document.querySelector('#btn');

submitButton.addEventListener('click', function(event) {

  var userName = document.querySelector('#userName').value;

  localStorage.setItem('userName', userName);

});



