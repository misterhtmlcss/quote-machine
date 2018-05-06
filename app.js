const http = new XMLHttpRequest();
http.open("GET", "https://api.myjson.com/bins/13cby5", true);
http.send();
http.onreadystatechange = function() {
	if (this.readyState === 4 && this.status == 200) {
		const response = JSON.parse(http.responseText);
		const quotes = response.quotes;
		const quoteLength = quotes.length;
        const buttonClick = getClick("block")
		console.log(buttonClick)
        buttonClick.addEventListener("click", sendValue)

		function sendValue() {
            const randomNumber = getRandomQuote(quoteLength);
			function buildQuote() {
				let output = "";
                output +=
                `<p class="card-text text-color">
                ${quotes[randomNumber].content}
                </p><p class="quoteAuthor text-color">
                ${quotes[randomNumber].author}</p>`;
                return (document.getElementById("quotes").innerHTML = output);
			}
			buildQuote(randomNumber);
			/* function copyQuote() { // Need integrate this one day so that I can just click to copy
				var copyText = document.getElementById("myInput");
				copyText.select();
				document.execCommand("Copy");
				alert("Copied the text: " + copyText.value);
			  } */
		}
	}
}
/*
http.open("GET", "https://api.myjson.com/bins/13cby5", true); //
http.send();
 */
const getRandomQuote = max => {
    return Math.floor(Math.random() * Math.floor(max));
}
function getClick(id) {
    return document.getElementById(id);
}