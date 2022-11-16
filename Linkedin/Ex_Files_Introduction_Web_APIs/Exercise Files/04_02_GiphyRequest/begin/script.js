var request = new XMLHttpRequest();
var giphyKey = 'mQZ2D7eEycJ5SjBrt6W3zk1HgE3e52WB';
var tag = 'lotr';

request.open('GET','https://api.giphy.com/v1/gifs/random?api_key=' + giphyKey + "&tag=" + tag);

request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

    var originalUrl = parsedData.data.images.original.url;
    console.log(originalUrl);

	var gif = document.createElement('img');
	gif.setAttribute('src', originalUrl);
	document.body.appendChild(gif);
}

request.send();
