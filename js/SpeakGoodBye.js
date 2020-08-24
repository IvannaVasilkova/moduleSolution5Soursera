
(function (window) {
	var byeSpeaker = {};
	byeSpeaker.name = "";
	var speakWord = "Good Bye ";

	byeSpeaker.say = function (name)  {
		byeSpeaker.name = name;
		console.log(speakWord + byeSpeaker.name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);

