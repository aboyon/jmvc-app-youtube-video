steal('funcunit').then(function(){

module("Youtube.Video.Search", { 
	setup: function(){
		S.open("//youtube/video/search/search.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Youtube.Video.Search Demo","demo text");
});


});