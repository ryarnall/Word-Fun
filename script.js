$("#pigLatinSubmit").click(toPigLatin);
$("#brailleSubmit").click(toBraille);

//click handler for "Run!" button
function toPigLatin() {

	//changes the user input from object to string
	var $words = $("#pigLatinInput").val().toString();
	//splits the string into a "list" of words (splitting at spaces)
	var wordList = $words.split(" ");

	//empty string that the translated words will end up in
	var pigLatin = "";

	//interates over every word in the list
	for (var i = 0; i < wordList.length; i++) {
		const word = wordList[i];
		//only acts if there is content at the index (solves problem of excess spaces in user input)
		// if word is empty, go to next word
		if (!word) {
			continue;
		}

		var vowels = ["a", "e", "i", "o", "u"];
		const firstLetterLower = word[0].toLowerCase();

		//if the word starts with a vowel, just "way" is added to the end of it
		if (vowels.includes(firstLetterLower)) {
			pigLatin += word + "way ";
		} else {
			//translates the word to Pig Latin and adds it to the translated string
			pigLatin += word.slice(1) + firstLetterLower + "ay ";
		}
	}
	//displays the translated string in the paragraph div
	$("#pigLatinResult").text(pigLatin);
}


//click handler for "Braille It!" button
function toBraille() {
	$("#brailleResult").empty();
	//separates the user input into a "list" of individual characters
	var letters = $("#brailleInput").val().toString().split("");
	var braille = "";

	for (var i = 0; i < letters.length; i++) {
		var letterLower = letters[i].toLowerCase(); 

		if (letterLower == " ") {
			braille += ("<img src='https://dummyimage.com/30x42/fff/fff.gif'>");
		} else if (letterLower == ".") {
			braille += (`<img src='http://braillebug.afb.org/Braille_Letters/period.gif'>`)
		} else if (letterLower == ",") {
			braille += (`<img src='http://braillebug.afb.org/Braille_Letters/comma.gif'>`)
		} else if (letterLower == "?") {
			braille += (`<img src='http://braillebug.afb.org/Braille_Letters/question_mark.gif'>`)
		} else if (letterLower == "'") {
			braille += (`<img src='http://braillebug.afb.org/Braille_Letters/apostrophe.gif'>`)
		} else if (letterLower == "#") {
			braille += (`<img src='http://braillebug.afb.org/Braille_Letters/no.gif'>`)
		}	else {
			braille += (`<img src='http://braillebug.afb.org/Braille_Letters/${letterLower}.gif'>`);
		}
	}
	$("#brailleResult").append(braille);
}

