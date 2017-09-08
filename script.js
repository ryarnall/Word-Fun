$("#pigLatinSubmit").click(changeWord);

function changeWord() {
	var $word = ($("#pigLatinInput").val()).toString();
	var firstLetter = $word.slice(0,1);
	var newWord = $word.slice(1) + firstLetter;

	newWord += "ay";
	$("#pigLatinResult").text(newWord);
}