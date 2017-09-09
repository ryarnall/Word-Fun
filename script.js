$("#pigLatinSubmit").click(translate);

//click handler for "Run!" button
function translate() {

	//changes the user input from object to string
	var $words = $("#pigLatinInput").val().toString();
	//splits the string into words (splitting at spaces)
	var wordList = $words.split(" ");

	//empty string that the translated words will end up in
	var translated = "";

	//interates over every word in the list
	for (var i = 0; i < wordList.length; i++) {
		//only acts if there is content at the index (solves problem of excess spaces in user input)
		if (wordList[i]) {
			var vowels = ["a", "e", "i", "o", "u"];

			//if the word starts with a vowel, just "way" is added to the end of it
			if (vowels.indexOf(wordList[i][0].toLowerCase()) >= 0) {
				var newWord = wordList[i] + "way ";
				translated += newWord;
			} else {
				//grabs the first letter of each word
				var firstLetter = wordList[i].slice(0,1);
				//sticks the first letter on the end of word
				var newWord = wordList[i].slice(1) + firstLetter;
				newWord += "ay ";
				//adds new word to the translated string
				translated += newWord;
			}
		}
	}
	//displays the translated string in the paragraph div
	$("#pigLatinResult").text(translated);
}



