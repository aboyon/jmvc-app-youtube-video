steal('funcunit').then(function(){

module("Youtube.Video.Play", { 
	setup: function(){
		S.open("//youtube/video/play/play.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Youtube.Video.Play Demo","demo text");
});


});