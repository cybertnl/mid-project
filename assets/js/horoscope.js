
var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "c071413d18msh42d99eeccdc1f39p113ce7jsnc5182ccdae44");
myHeaders.append("x-rapidapi-host", "sameer-kumar-aztro-v1.p.rapidapi.com");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

function getSignData(signNode) {
    fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" + signNode.id + "&day=today", requestOptions)
        .then(response => response.json())
        .then(result => {
            signNode.innerHTML = "<p>" + result.description + "</p><div class='card-content-compatibilty'><p> Compatibility: " + result.compatibility + "</p></div>"
            console.log(result)
        })
        .catch(error => console.log('error', error));
}

var signs = document.getElementsByClassName("card-content")
console.log(signs[0].id)

for (let i = 0; i < signs.length; i++){
    getSignData(signs[i]);
}
