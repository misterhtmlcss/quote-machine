const http = new XMLHttpRequest();
http.onreadystatechange = function() {
	if (this.readyState === 4 && this.status == 200) {
		const response = JSON.parse(http.responseText);
		const quotes = response.quotes;
		const quoteLength = quotes.length;
		const getRandomQuote = max => {
			return Math.floor(Math.random() * Math.floor(max));
		};

		const buttonClick = getClick("block");
		buttonClick.addEventListener("click", sendValue);
		function sendValue() {
			const randomNumber = getRandomQuote(quoteLength);
			function buildQuote() {
				let output = "";
                output += 
                `
                <p class="card-text text-color">
                ${quotes[randomNumber].content}
                </p> 
                <p class="quoteAuthor text-color"> 
                ${quotes[randomNumber].author}
                </p>
                `;
                return 
                (document.getElementById("quotes").innerHTML = output)
			}
			buildQuote(randomNumber);
			function makeShare() {
				let output2 = "";
				output2 +=
                `
                <a class="btn btn-primary btn-sm" data-toggle="button" href="https://twitter.com/intent/tweet?hashtags=fcc&text=
                ${quotes[randomNumber].content} 
                By ${quotes[randomNumber].author}">tweet me!</a>
                `
                return 
                (document.getElementById("shareable").innerHTML = output2)
			}
			makeShare(randomNumber);
		}
	}
}

http.open("GET", "https://api.myjson.com/bins/13cby5", true);
http.send();

function getClick(id) {
	return document.getElementById(id);
}