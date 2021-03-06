var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function (names) {
	for (name in names) {
		var firstLetter = names[name].charAt(0);
		var firstLetterLower = firstLetter.toLowerCase();
		
		if (firstLetterLower == "j") {
			byeSpeaker.speak(names[name]);
		} else {
	    	helloSpeaker.speak(names[name]);
	    }
	}

})(names);