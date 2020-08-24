
(function (window) {
	var helloSpeaker = {};
	helloSpeaker.name = "";
	var speakWord = "Hello ";
	helloSpeaker.say = function (name) {
		helloSpeaker.name =  name;
		console.log(speakWord + helloSpeaker.name);
	}

	window.helloSpeaker = helloSpeaker;
})(window);






