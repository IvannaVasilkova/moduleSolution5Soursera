
(function () {

	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for(var i = 0; i < names.length; i++) {

		if(names[i][0].toLowerCase() === "j") {
			byeSpeaker.say(names[i]);
		}
		
		else {
			helloSpeaker.say(names[i]);
		}
	}
})();


