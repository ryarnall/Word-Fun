$("#pigLatinSubmit").click(changeWord);

function changeWord() {
	var $words = ($("#pigLatinInput").val()).toString();
	// var firstLetter = $words.slice(0,1);
	// var newWord = $words.slice(1) + firstLetter;

	// newWord += "ay";
	// $("#pigLatinResult").text(newWord);
	// }


	//creates an array of each space index in the user inputted string
	var indices = [];
	for (var i = 0; i < $words.length; i++) {
		if ($words[i] == " ") {
			indices.push(i);
		}
	}

	//separates the words using the space indices stored in the indices variable
	var wordList = [];
	for (var i = 0; i < indices.length; i++) {
		if (i == 0) {
			wordList.push($words.slice(0, indices[i]));
		} else {
			wordList.push($words.slice(indices[i-1] + 1, indices[i]));
		}
	}
	wordList.push($words.slice(indices[indices.length-1] + 1, $words.length));


	//changes each word in the wordList to Pig Latin and creates a new string with the changed words
	var newWords = "";
	for (var i = 0; i < wordList.length; i++) {
		var firstLetter = wordList[i].slice(0,1);
		var newWord = wordList[i].slice(1) + firstLetter;
		newWord += "ay ";
		newWords += newWord;
	}

	//applies the new string of Pig Latin to the text of the paragraph box
	$("#pigLatinResult").text(newWords);
}


