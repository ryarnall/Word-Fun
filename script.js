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



function toBraille() {
	$("#brailleResult").empty();
	var letters = $("#brailleInput").val().toString().split("");
	var braille = "";

	for (var i = 0; i < letters.length; i++) {
		var letterLower = letters[i].toLowerCase(); 

		if (letterLower == "a") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/a.gif'>");
		} else if (letterLower == "b") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/b.gif'>");
		} else if (letterLower == "c") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/c.gif'>");
		} else if (letterLower == "d") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/d.gif'>");
		} else if (letterLower == "e") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/e.gif'>");
		} else if (letterLower == "f") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/f.gif'>");
		} else if (letterLower == "g") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/g.gif'>");
		} else if (letterLower == "h") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/h.gif'>");
		} else if (letterLower == "i") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/i.gif'>");
		} else if (letterLower == "j") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/j.gif'>");
		} else if (letterLower == "k") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/k.gif'>");
		} else if (letterLower == "l") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/l.gif'>");
		} else if (letterLower == "m") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/m.gif'>");
		} else if (letterLower == "n") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/n.gif'>");
		} else if (letterLower == "o") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/o.gif'>");
		} else if (letterLower == "p") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/p.gif'>");
		} else if (letterLower == "q") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/q.gif'>");
		} else if (letterLower == "r") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/r.gif'>");
		} else if (letterLower == "s") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/s.gif'>");
		} else if (letterLower == "t") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/t.gif'>");
		} else if (letterLower == "u") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/u.gif'>");
		} else if (letterLower == "v") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/v.gif'>");
		} else if (letterLower == "w") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/w.gif'>");
		} else if (letterLower == "x") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/x.gif'>");
		} else if (letterLower == "y") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/y.gif'>");
		} else if (letterLower == "z") {
			braille += ("<img src='http://braillebug.afb.org/Braille_Letters/z.gif'>");
		} else {
			braille += ("<img src='https://dummyimage.com/30x42/fff/fff.gif'>");
		}
	}

	$("#brailleResult").append(braille);
}

